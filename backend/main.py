from flask import Flask, request, jsonify
from backend.db import Database

app = Flask(__name__)
db = Database()

@app.route('/users', methods=['GET'])
def get_users():
    users = db.get_all_users()
    return jsonify(users)

@app.route('/users', methods=['POST'])
def add_user():
    data = request.json
    user = {
        "user_id": data["user_id"],
        "user_name": data["user_name"],
        "user_age": data["user_age"]
    }
    user_id = db.add_user(user)
    return jsonify({"user_id": str(user_id)}), 201

@app.route('/users/<user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.json
    update_fields = {}
    if "user_name" in data:
        update_fields["user_name"] = data["user_name"]
    if "user_age" in data:
        update_fields["user_age"] = data["user_age"]
    result = db.update_user(user_id, update_fields)
    if result.modified_count == 0:
        return jsonify({"error": "User not found"}), 404
    return jsonify({"message": "User updated successfully"})

@app.route('/users/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    result = db.delete_user(user_id)
    if result.deleted_count == 0:
        return jsonify({"error": "User not found"}), 404
    return jsonify({"message": "User deleted successfully"})

if __name__ == '__main__':
    app.run(debug=True)