# UC-Team-Excercise
home exercies 


Part I - Backend and Database
Prerequisite:
Create a linux based VM using VMWare and install mongoDB on it. Alternatively, install MongoDB locally on your PC.
Create a python project with a virtual environment of python 3.6.

Your exercise:
Implement a flask API to manage a users database using mongoDB.

Your API should include the following routes:
	(a) @app.route('/users', methods=['GET'])
	(b) @app.route('/users', methods=['POST'])
	(c) @app.route('/users/<user_id>', methods=['PUT'])
	(d) @app.route('/users/<user_id>', methods=['DELETE'])

(a) returns the entire collection of users in the DB.
(b) adds a user with the following (required) payload: user_id, user_name, user_age.
(c) modifies the user related to user_id with the given (optional) payload: user_name, user_age.
(d) deletes the user related to user_id.

Your project should include the following files:
	(i) main.py
	(ii) db.py

(i) includes the implementation of the flask API.
(ii) includes the read-write functions from the DB.


Part II - Frontend
Prerequisite:
Install Node.js and NPM on your VM/PC from Part I.
Use NPM to Install React.

Your exercise:
Create a React-based Web GUI for the backend you implemented in Part I.
Your components can be based on basic HTML+JS, you don’t have to use a library like Material UI, Chakra UI, Ant Design etc..

Your app should include the following React Components:
MainPage.jsx
UsersList.jsx
UserAddForm.jsx
UserUpdateForm.jsx
UserDeleteForm.jsx

(a) is the main page, shows (b), (c), (d), (e) on the screen.
(b) has a <button>. When clicked, show a <ul> of all the users. Each user is a <li>.
(c) is a <form> to add a new user to the DB, with the required <input> fields from Part I.
(d) is a <form> to update a user in the DB,with the optional <input> fields from Part I.
(e) is a <form> to delete a user from the DB, with an <input> for user_id.

Each component is a file.
(b) - (e) should use the API from Part I to use data in the DB.
Use fetch(...) requests to call the API.
