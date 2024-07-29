Note:- I used NodeJS, ExpressJS, and MongoDB

Overview:
The Daily Expenses Sharing Application is a backend system designed to manage and share daily expenses among users. It allows users to add expenses and split them using three different methods: equal amounts, exact amounts, and percentages. The application also manages user details, validates inputs, and generates downloadable balance sheets.

daily-expenses-sharing-Application/
│
├── controllers/
│   ├── userController.js
│   ├── expenseController.js
│
├── models/
│   ├── User.js
│   ├── Expense.js
│
├── routes/
│   ├── userRoutes.js
│   ├── expenseRoutes.js
│
├── services/
│   ├── expenseService.js
│
├── app.js
├── config.js
├── package.json
├── README.md
└── .env

# Daily Expenses Sharing Application

## Setup and Installation

1. Clone the repository:
   git clone https://github.com/aryan9867bar/daily-expenses-sharing-application.git
   cd daily-expenses-sharing

2. Install dependencies:
    npm install

3. Set up your MongoDB database and configure the connection.

4. Create a ".env" file and add your MongoDB connection string and port:
    MONGODB_URI=your_mongodb_connection_string
    PORT=3000

5. Start the server:
    npm start or
    nodemon app.js  

6. The server will run on "http://localhost:3000".


This completes the setup of the backend service for the daily expenses sharing application.

Features

User Management:
    -Add and manage users with details such as email, name, and mobile number.

Expense Management:
    -Add expenses and split them among participants using the following methods:
        -Equal Split: Divides the expense equally among all participants.
        -Exact Split: Allows specifying the exact amount each participant owes.
        -Percentage Split: Splits the expense based on specified percentages for each participant.
    -Validate inputs to ensure accurate data entry.
    -Balance Sheet Generation:
        -Generate and download a balance sheet summarizing the total amount each user owes or is owed.

User Endpoints:
Create User: POST /api/users
    -Adds a new user to the system.
    -Request Body: json
    {
      "email": "john@example.com",
      "name": "John Doe",
      "mobile": "1234567890"
    }

Expense Endpoints
Add Expense: POST /api/expenses
    -Adds a new expense to the system.  
    -Request Body Example (Equal Split): json
    {
      "amount": 100,
      "description": "Dinner",
      "splitMethod": "equal",
      "participants": [
        { "user": "60d21b4667d0d8992e610c85", "amount": 50 },
        { "user": "60d21b4667d0d8992e610c86", "amount": 50 }
      ]
    }

Get User Expenses: GET /api/expenses/user/:userId
    -Retrieves all expenses associated with a specific user.
    -Example URL: http://localhost:3000/api/expenses/user/60d21b4667d0d8992e610c85

Get Overall Expenses: GET /api/expenses/overall
    -Retrieves all expenses recorded in the system.
    -Example URL: http://localhost:3000/api/expenses/overall

Download Balance Sheet: GET /api/expenses/balance-sheet
    -Generates and downloads the balance sheet summarizing the expenses for each user.
    -Example URL: http://localhost:3000/api/expenses/balance-sheet

Usage
Use Postman or any API client to interact with the endpoints. Ensure to follow the request body structures as shown in the examples.