import os
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure
from dotenv import load_dotenv

load_dotenv()  

class Database:
    def __init__(self, uri=os.getenv("MONGODB_URI"), db_name="user_db"):
        self.client = MongoClient(uri)
        self.db = self.client[db_name]
        self.collection = self.db["users"]
        self.check_connection()  

    def check_connection(self):
        try:
            self.client.admin.command('ping')
            print("conected to db!")
        except ConnectionFailure:
            print("failed to conect to db.")

    def get_all_users(self):
        return list(self.collection.find({},{"_id":0}))

    def add_user(self, user):
        return self.collection.insert_one(user).inserted_id

    def update_user(self, user_id, update_fields):
        return self.collection.update_one({"user_id": user_id}, {"$set": update_fields})

    def delete_user(self, user_id):
        return self.collection.delete_one({"user_id": user_id})
    
    def find_user_by_id(self, user_id):
        return self.collection.find_one({"user_id": user_id})

if __name__ == "__main__":
    db = Database()
