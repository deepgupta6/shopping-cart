Full-Stack Shopping Cart Application
This is a complete full-stack web application for a simple e-commerce shopping cart, built with a Go backend and a React frontend. The application allows users to sign up, log in, view items, add them to a cart, and place an order.

Project Overview
The goal of this project is to create a basic yet functional e-commerce service. A user can create an account, browse items, manage their shopping cart, and convert that cart into an order. The backend is built with Go, using Gin for routing and GORM as the ORM for database interactions. The frontend is a responsive single-page application built with React.

Features
User Authentication: Secure user signup and login functionality.

Session Management: Token-based sessions to keep users logged in across requests.

Product Catalog: Users can view a list of all available items.

Shopping Cart: Logged-in users can add items to a personal shopping cart.

Order Placement: Users can convert their shopping cart into a confirmed order.

Order History: Users can view a list of their previously placed orders.

Tech Stack
Backend:

Go: Programming Language

Gin: Web Framework for routing and handling HTTP requests.

GORM: ORM for interacting with the PostgreSQL database.

PostgreSQL: Relational Database

Frontend:

React: JavaScript library for building the user interface.

Axios: For making API requests to the backend.

Tailwind CSS: For styling the application.

Folder Structure
The project is organized into two main parts: backend and frontend.

/shopping-cart
├── /backend
│   ├── /config
│   ├── /controllers
│   ├── /database
│   ├── /middlewares
│   ├── /models
│   ├── /routes
│   └── main.go
└── /frontend
    ├── /src
    │   ├── /components
    │   ├── /pages
    │   ├── /services
    │   ├── App.js
    │   └── index.js
    └── package.json

API Endpoints
The backend exposes the following RESTful API endpoints:

Method

Endpoint

Description

Authentication

POST

/users

Creates a new user (Signup).

Public

GET

/users

Lists all registered users.

Protected

POST

/users/login

Logs in an existing user and returns a token.

Public

POST

/items

Creates a new item.

Protected

GET

/items

Lists all available items.

Public

POST

/carts

Creates a cart and adds items to it for the user.

Protected

GET

/carts

Lists all carts (primarily for the logged-in user).

Protected

POST

/orders

Converts a user's cart into an order.

Protected

GET

/orders

Lists all orders for the logged-in user.

Protected

Setup and Installation
To run this project locally, you will need to have Go, Node.js, npm, and PostgreSQL installed.

1. Backend Setup
# Navigate to the backend directory
cd backend

# Install Go dependencies
go mod tidy

# Create a PostgreSQL database for the project.
# Update the database connection string in `database/database.go` if needed.
# The default is:
# dsn := "host=localhost user=postgres password=postgres dbname=shopping_cart port=5432 sslmode=disable"

# Run the backend server
go run main.go

The backend server will start on http://localhost:8080.

2. Frontend Setup
# Open a new terminal and navigate to the frontend directory
cd frontend

# Install Node.js dependencies
npm install

# Run the frontend development server
npm start

The React application will start on http://localhost:3000 (or another port if 3000 is busy) and will open in your default browser.

How to Use the Application
Sign Up: Open the application in your browser. You will be on the signup page. Create a new account.

Log In: After signing up, you will be redirected to the login page. Log in with your new credentials.

Browse Items: Upon successful login, you will see the main shopping page listing all available products.

Add to Cart: Click the "Add to Cart" button on any item to add it to your shopping cart.

View Cart: Click the "Cart" button in the header to see a list of items currently in your cart.

Checkout: When you are ready, click the "Checkout" button to place your order. Your cart will be cleared.

View Order History: Click the "Order History" button to see a list of all your past order IDs.

Log Out: Click the "Logout" button to end your session.