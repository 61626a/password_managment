# Password Manager System

This project is a password manager system that securely stores and retrieves passwords for various websites using encryption. It utilizes Node.js for the backend, React for the frontend, CSS for styling, and MySQL for database management.

## Features

- **Encryption**: Uses AES-256-CTR algorithm to encrypt passwords before storing them in the database.
- **Secure Access**: Users authenticate themselves by entering a master password. Upon correct entry, they can access stored passwords for websites.
- **Database Management**: MySQL is employed to store encrypted passwords along with corresponding website names.
- **Responsive Interface**: React and CSS provide an intuitive and responsive user interface for managing passwords.

## How to Use

1. **Clone the Repository**: Clone the repository from GitHub:

2. **Install Dependencies**:
- Navigate to the frontend and backend directories separately and install dependencies using:
  ```
  npm install
  ```

3. **Set Up MySQL Database**:
- Create a MySQL database and adjust the configuration in the backend to connect to it.

4. **Run the Application**:
- Start the backend server:
  ```
  npm start
  ```
- Start the frontend development server:
  ```
  npm start
  ```
- The application should now be running. Access it in your browser at `http://localhost:3000`.

5. **Usage**:
- Enter your master password to unlock access to stored passwords.
- Add new passwords or update existing ones securely.

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js
- **Database**: MySQL
- **Encryption**: AES-256-CTR algorithm
