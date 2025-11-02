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
│   └── dbConfig.js                 # MongoDB connection setup
│
├── controllers/
│   ├── user.controller.js          # Auth logic
│   ├── movie.controller.js         # Movie CRUD logic
│   ├── theatre.controller.js       # Theatre CRUD logic
│   ├── shows.controller.js         # Show scheduling logic
│   └── booking.controller.js       # Ticket booking (in progress)
│
├── middleware/
│   ├── authMiddleware.js           # JWT authentication
│   └── roleMiddleware.js           # Role-based authorization
│
├── models/
│   ├── user.model.js
│   ├── movie.model.js
│   ├── theatre.model.js
│   ├── show.model.js
│   └── booking.model.js
│
├── routes/
│   ├── user.routes.js
│   ├── movie.routes.js
│   ├── theatre.routes.js
│   ├── shows.routes.js
│   └── booking.routes.js
│
├── .env
├── index.js                        # Entry point of the app
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
👤 User
| Method | Endpoint                 | Description                 |
| ------ | ------------------------ | --------------------------- |
| `POST` | `/api/v1/users/register` | Register a new user         |
| `POST` | `/api/v1/users/login`    | User login & JWT generation |

🎥 Movies
| Method   | Endpoint             | Description          | Access |
| -------- | -------------------- | -------------------- | ------ |
| `POST`   | `/api/v1/movies`     | Add a new movie      | Admin  |
| `GET`    | `/api/v1/movies`     | Get all movies       | Public |
| `GET`    | `/api/v1/movies/:id` | Get movie by ID      | Public |
| `PUT`    | `/api/v1/movies/:id` | Update movie details | Admin  |
| `DELETE` | `/api/v1/movies/:id` | Delete a movie       | Admin  |

🎭 Theatres
| Method   | Endpoint               | Description       | Access |
| -------- | ---------------------- | ----------------- | ------ |
| `POST`   | `/api/v1/theatres`     | Add a new theatre | Admin  |
| `GET`    | `/api/v1/theatres`     | Get all theatres  | Public |
| `GET`    | `/api/v1/theatres/:id` | Get theatre by ID | Public |
| `DELETE` | `/api/v1/theatres/:id` | Delete a theatre  | Admin  |

⏰ Shows
| Method   | Endpoint                           | Description          | Access |
| -------- | ---------------------------------- | -------------------- | ------ |
| `POST`   | `/api/v1/shows`                    | Add new show         | Admin  |
| `GET`    | `/api/v1/shows/:id`                | Get show by ID       | Public |
| `GET`    | `/api/v1/shows/theatre/:theatreId` | Get shows by theatre | Public |
| `DELETE` | `/api/v1/shows/:id`                | Delete a show        | Admin  |

🎟️ Booking (In Progress)
| Method | Endpoint                         | Description          | Access |
| ------ | -------------------------------- | -------------------- | ------ |
| `POST` | `/api/v1/bookings/createBooking` | Create a new booking | User   |





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
