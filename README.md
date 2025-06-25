
# ✅ Task Manager Web App

---

## 🚀 Features

- ✅ User authentication (Register / Login)
- ✅ Add, edit, delete tasks
- ✅ Mark tasks as completed
- ✅ Filter by status & priority
- ✅ Sort by priority or due date
- ✅ Responsive, modern UI using plain CSS (no libraries)
- ✅ RESTful API built with Express.js
- ✅ MongoDB for storing users and tasks securely

---

## 📁 Project Structure

```

task-manager/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json (root/backend/frontend)
└── README.md

````

---

## ⚙️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Auth**: JWT-based authentication

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
````

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Then run:

```bash
npm start
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```
---




## 📦 Deployment

You can deploy this on platforms like:

* **Frontend**: Vercel, Netlify
* **Backend**: Render, Railway
* **DB**: MongoDB Atlas

---


## 🧑‍💻 Author

**Ganesh Kumar**

* GitHub: [@yourusername](https://github.com/yourusername)
* Email: [ganesh@example.com](mailto:ganesh@example.com)


