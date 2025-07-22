# 💰 SmartLoan - MERN Stack Loan Calculator App

SmartLoan is a full-stack web application that allows users to register, log in, and access a personalized dashboard to calculate loan EMIs. The app is built with the MERN stack (MongoDB, Express, React, Node.js) and styled using Tailwind CSS.

## 🚀 Features

- 🔐 User Signup and Login with JWT Authentication
- 🧮 Interactive Loan Calculator Dashboard
- 🧾 User Info Display with Protected Routes
- 📱 Responsive UI built with React and Tailwind CSS
- 🌐 RESTful API with secure endpoints
- 🔒 Token-based authentication and session persistence

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT, bcrypt
- **Deployment:** Render (Backend), Vercel (Frontend)

---

## 📂 Folder Structure

SmartLoan/
├── Backend/ # Backend root folder
│ ├── config/ # Configuration files
│ │ └── db.js # MongoDB connection logic
│
│ ├── controllers/ # Business logic handlers
│ │ └── authcontroller.js # Handles signup, login, logout, user info
│
│ ├── middlewares/ # Express middlewares
│ │ └── authmiddleware.js # JWT authentication middleware
│
│ ├── models/ # Mongoose models
│ │ └── usermodel.js # User schema/model
│
│ ├── routes/ # Express routes
│ │ └── useroutes.js # Auth-related routes
│
│ ├── .env # Environment variables
│ ├── package.json # Backend dependencies & scripts
│ └── server.js # Entry point for backend server
│
├── Frontend/ # Frontend root folder (Vite + React)
│ ├── public/ # Static assets
│ │ └── index.html
│
│ ├── src/
│ │ ├── assets/ # Images or design assets
│ │ ├── components/ # Reusable components (e.g., Navbar, ProtectedRoute)
│ │ ├── pages/ # Page components (e.g., Login, Signup, Dashboard)
│ │ ├── App.jsx # Root React component
│ │ ├── main.jsx # Entry point for Vite/React
│ │ └── index.css # Tailwind base styles
│
│ ├── tailwind.config.js # Tailwind CSS configuration
│ ├── postcss.config.js # PostCSS config for Tailwind
│ ├── vite.config.js # Vite configuration
│ ├── package.json # Frontend dependencies & scripts
│ └── .env # Frontend environment variables
│
├── README.md # Project overview and documentation
└── .gitignore # Git ignore rules
