<h1 align="center">
  <img src="/path-to-your-logo.png" alt="LinkUp Logo" width="30" style="vertical-align: middle; margin-right: 10px;" />
  LinkUp – A Language Exchange Chat & Video Platform
</h1>



<p align="center">
  <img src="https://img.shields.io/badge/Fullstack-MERN-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/RealTime-Chat%20%26%20Calls-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Styled-With%20Tailwind%20%26%20DaisyUI-pink?style=for-the-badge" />
</p>

<p align="center">
  <img src="/frontend/public/screenshot-for-readme.png" alt="App Screenshot" width="80%" />
</p>

---

## ✨ Overview

**LinkUp** is a full-stack Language Exchange Platform where users from around the world can:

- 🌍 Connect based on language preferences  
- 💬 Chat in real-time with typing indicators & emoji reactions  
- 📹 Make 1-on-1 or group video calls (with screen sharing & recording)  
- 🎨 Choose from **28+ unique UI themes** to personalize the experience  
- 🔐 Securely log in and manage sessions via **JWT Authentication**

Whether you're learning a new language or helping others practice yours, **LinkUp** is your virtual space to connect, communicate, and grow — in any language.

---

## 🚀 Key Features

- 💬 **Real-Time Chat** – Typing indicators, message reactions, and instant updates via websockets
- 📹 **Video Calling** – Screen sharing, call recording, and group support
- 👥 **Friends System** – Add or remove language partners with ease
- 🔐 **JWT Auth** – Secure login/signup and protected routes
- 🎨 **28+ UI Themes** – Easily switch with DaisyUI + TailwindCSS theme engine
- 🌐 **Language Matching** – Connect with users who share your learning goals
- ⚙️ **Custom Hooks & Clean Codebase** – Built with maintainability in mind
- 🧠 **Global State via Zustand** – Lightweight & performant state management
- 🚨 **Robust Error Handling** – Frontend and backend level protection
- 📦 **Fully Deployable** – soon

---

## 🛠️ Tech Stack

| Layer         | Technologies Used                                                                 |
|---------------|-----------------------------------------------------------------------------------|
| **Frontend**  | React, TailwindCSS, DaisyUI, Zustand, TanStack Query (React Query), Stream SDK    |
| **Backend**   | Node.js, Express, MongoDB, WebSockets (Stream), JWT                               |
| **Deployment**| Vite, Render (or any Node-friendly platform), Vercel (for frontend)               |



## 📁 Project Structure

      LinkUp/
    ├── backend/ # Express backend (APIs, auth, DB)
    │ └── ...
    ├── frontend/ # React frontend (UI, Zustand, routes)
    │ └── ...
    ├── README.md
    └── ...
    
 

## 📦 Environment Variables

Create `.env` files in both `backend/` and `frontend/` directories:

### 🔧 Backend (`/backend/.env`)
```env
PORT=5001
MONGO_URI=your_mongo_uri
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
```

### 💻 Frontend (/frontend/.env)
      VITE_STREAM_API_KEY=your_stream_api_key

## 🧪 Getting Started (Local Setup)
  ### 1️⃣ Clone the Repository
        git clone https://github.com/yourusername/linkup.git
        cd linkup 

  ### 2️⃣ Install & Run Backend
        cd backend
        npm install
        npm run dev    

  ### 3️⃣ Install & Run Frontend
        cd frontend
        npm install
        npm run dev      

Now visit http://localhost:5173
 and enjoy 🚀


