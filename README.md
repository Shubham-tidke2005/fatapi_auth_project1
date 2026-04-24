# 🔐 Full Stack Authentication System

A production-ready authentication system built using **FastAPI**, **React (Vite + Tailwind CSS)**, and **MongoDB**, implementing modern authentication practices including **JWT-based auth**, **password hashing**, and **protected routes**.

---

## 🚀 Features

* 🔑 User Registration & Login
* 🔐 Secure Password Hashing (bcrypt)
* 🎫 JWT Authentication
* 👤 User Profile Fetch & Update
* 🛡️ Protected Routes (Frontend + Backend)
* ⚡ FastAPI Backend (Async + High Performance)
* 🎨 Responsive UI with Tailwind CSS
* 🔄 Global State Management using React Context API

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* React Router
* Formik + Yup (Form Handling & Validation)
* Axios
* React Toastify

### Backend

* FastAPI
* MongoDB (Motor / Async)
* Pydantic (Schema Validation)
* JWT (Authentication)
* Bcrypt (Password Hashing)

---

## 📂 Project Structure

```
PROJECT1_AUTH_FARM
│
├── backend/
│   ├── src/
│   │   ├── config/         # Database connection
│   │   ├── models/         # Pydantic models
│   │   ├── routes/         # API routes (Auth + Public)
│   │   └── app.py          # FastAPI entry point
│   ├── .env                # Environment variables
│   └── req.txt             # Dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # Global state (Auth Context)
│   │   ├── layout/         # Protected Layout
│   │   ├── pages/          # Pages (Login, Register, Profile)
│   │   ├── utils/          # Axios config
│   │   ├── App.jsx         # Main app
│   │   └── main.jsx        # Entry point
│   └── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/auth-project.git
cd auth-project
```

---

### 2️⃣ Backend Setup

```bash
cd backend
python -m venv myenv
myenv\Scripts\activate   # Windows
pip install -r req.txt
```

Create `.env` file:

```env
MONGO_URI=mongodb://localhost
DB_NAME=auth_project
SECRET_KEY=your_secret_key
```

Run server:

```bash
uvicorn src.app:app --reload
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

### Auth Routes

| Method | Endpoint              | Description       |
| ------ | --------------------- | ----------------- |
| POST   | /api/v1/auth/register | Register new user |
| POST   | /api/v1/auth/login    | Login user        |
| GET    | /api/v1/auth/profile  | Get user profile  |
| PUT    | /api/v1/auth/profile  | Update profile    |

---

## 🔐 Authentication Flow

1. User registers → password hashed using bcrypt
2. User logs in → JWT token generated
3. Token stored in frontend
4. Protected routes verify JWT
5. Backend decodes token to identify user

---

## 💡 Key Learnings

* FastAPI async architecture
* MongoDB integration with Python
* Secure authentication using JWT
* Password hashing best practices
* React Context API for global state
* Form validation with Formik & Yup
* API handling with Axios

---

## 📸 Screenshots (Optional)

*Add your UI screenshots here*

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is open-source and available under the MIT License.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

## 👨‍💻 Author

**Shubham Tidke**

---
