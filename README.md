# 🎬 Movie Booking Backend

A scalable and secure **backend API** for a Movie Booking platform, built using **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features
- 🔐 User registration & login with JWT authentication

- 🎭 Manage theatres and movies

- ⏰ Show management (currently in progress)

- 🎟️ Ticket booking (upcoming)

- 📊 Future monitoring with Prometheus + Grafana (planned)

- 🐳 Docker support for easy deployment (planned)

---

## 🛠️ Tech Stack
- Backend: Node.js, Express.js

- Database: MongoDB with Mongoose

- Authentication: JWT + bcrypt

- Middleware: Custom authentication middleware

- Containerization: Docker (planned)

- Monitoring: Prometheus, Grafana (planned)
---

## 📂 Project Structure
```
project-root/
│
├── config/
│   └── dbConfig.js               # Database connection setup
│
├── controllers/
│   ├── movie.controller.js       # Movie logic
│   ├── theatre.controller.js     # Theatre logic
│   └── user.controller.js        # User logic
│
├── middleware/
│   └── authMiddleware.js         # JWT authentication check
│
├── models/
│   ├── movie.model.js
│   ├── theatre.model.js
│   └── user.model.js
│
├── routes/
│   ├── movie.routes.js
│   ├── theatre.routes.js
│   └── user.routes.js
│
├── .env
├── index.js                      # Entry point of the app
├── package.json
└── README.md

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
| Method   | Endpoint                 | Description                         |
| -------- | ------------------------ | ----------------------------------- |
| `POST`   | `/api/v1/users/register` | Register a new user                 |
| `POST`   | `/api/v1/users/login`    | User login & JWT generation         |
| `POST`   | `/api/v1/movies`         | Add a new movie                     |
| `GET`    | `/api/v1/movies`         | Get all movies                      |
| `GET`    | `/api/v1/movies/:id`     | Get movie by ID                     |
| `PUT`    | `/api/v1/movies/:id`     | Update movie details                |
| `DELETE` | `/api/v1/movies/:id`     | Delete movie                        |
| `POST`   | `/api/v1/theatre`        | Add a new theatre *(requires auth)* |
| `GET`    | `/api/v1/theatre`        | Get all theatres                    |
| `GET`    | `/api/v1/theatre/:id`    | Get theatre by ID                   |
| `DELETE` | `/api/v1/theatre/:id`    | Delete theatre *(requires auth)*    |



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
