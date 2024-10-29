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
        self.check_connection()  # Проверка подключения при инициализации

    def check_connection(self):
        try:
            # Попытка выполнить команду для проверки подключения
            self.client.admin.command('ping')
            print("Подключение к базе данных успешно!")
        except ConnectionFailure:
            print("Ошибка подключения к базе данных.")

    def get_all_users(self):
        return list(self.collection.find())

    def add_user(self, user):
        return self.collection.insert_one(user).inserted_id

    def update_user(self, user_id, update_fields):
        return self.collection.update_one({"user_id": user_id}, {"$set": update_fields})

    def delete_user(self, user_id):
        return self.collection.delete_one({"user_id": user_id})

if __name__ == "__main__":
    db = Database()

    # Примеры использования методов
    # Добавление нового пользователя
    new_user = {
        "user_id": "123",
        "user_name": "John Doe",
        "user_age": 30
    }
    db.add_user(new_user)

    # Получение всех пользователей
    users = db.get_all_users()
    print(users)

    # Обновление пользователя
    db.update_user("123", {"user_age": 31})

    # Удаление пользователя
    # db.delete_user("123")