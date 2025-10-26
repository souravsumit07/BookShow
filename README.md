# 🎬 Movie Booking Backend

A scalable and secure **backend API** for a Movie Booking platform, built using **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features
- 🔐 User registration & login with JWT authentication
- 🎞️ Manage movies, theatres, and showtimes (coming soon)
- 🎟️ Book movie tickets (coming soon)
- 📊 Future monitoring with Prometheus + Grafana
- 🐳 Docker support for easy deployment

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose  
- **Authentication:** JWT + bcrypt  
- **Containerization:** Docker (planned)  
- **Monitoring:** Prometheus, Grafana (planned)

---

## 📂 Project Structure
```
project-root/
│
├── controllers/ # Controller logic (e.g., user.controller.js)
├── models/ # Mongoose models (e.g., user.model.js)
├── routes/ # Express route files (e.g., user.routes.js)
├── config/ # DB config and environment setup
├── index.js # Entry point of the app
└── package.json
```

---

## ⚙️ Environment Variables
Create a `.env` file in the root directory and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🧪 API Endpoints
| Method | Endpoint | Description |
|--------|-----------|-------------|
| `POST` | `/api/users/register` | Register a new user |
| `POST` | `/api/users/login` | User login & JWT generation |

---

## ▶️ Run Locally
```
1. Clone the project:
   git clone https://github.com/souravsumit07/BookShow
   cd movie-booking-backend
Install dependencies:

npm install
Add .env file as shown above.

Start the server:
npm run dev


**Test routes in Postman**
- `POST /api/users/register`
- `POST /api/users/login`

```
---

## 🐳 Docker Setup (optional)
Coming soon...

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 👨‍💻 Author
**Sumit Das**  
💼 [GitHub](https://github.com/souravsumit07)  
📧 41sumitdas@example.com
