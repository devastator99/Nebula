# Nebula: Chat App

Nebula is a chat application designed to provide seamless real-time communication. Built using modern web technologies, Nebula ensures an intuitive and responsive user experience. The frontend is powered by React.js, while the backend is supported by Node.js, Express, and MongoDB.

## Features
- **Real-time Messaging:** Experience instant messaging with WebSocket technology.
- **Secure Authentication:** Passwords are securely encrypted using bcrypt.
- **Scalable Architecture:** Efficient backend structure with Node.js and Express.
- **Responsive UI:** User-friendly interface developed with React.
- **Data Management:** Robust data handling with MongoDB and Mongoose.

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Real-time Communication:** Socket.io
- **Security:** bcrypt

## Local Deployment Guide

Follow these steps to get Nebula up and running on your local machine.

### Step 1: Clone the Repository
First, clone the repository to your local machine:
```sh
git clone https://github.com/devastator99/Nebula.git
```


### Step 2: Setup Frontend
Navigate to the public directory and install the required dependencies:

```sh
cd public
npm install
```
Start the frontend:

```sh
npm start
```

### Step 3: Setup Backend
Navigate to the server directory and install the required dependencies:

```sh
cd server
npm install
```

Start the server:

```sh
npm start
```

### Additional Information
Password Encryption: User passwords are securely encrypted using bcrypt.
Data Storage: User data and messages are stored in MongoDB, managed via Mongoose.
Backend Framework: Express.js is used to create a scalable and efficient server architecture.
