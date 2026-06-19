# 📝 Notes Management System

A modern full-stack Notes Management System built using the MERN stack that helps users create, organize, search, pin, archive, restore, and manage notes efficiently through a clean and intuitive interface.

## 🚀 Features

### 🔐 Authentication & Security

* User Registration
* User Login & Logout
* JWT-based Authentication
* Secure Cookie Handling
* Protected Routes

### 📝 Note Management

* Create Notes
* Edit Existing Notes
* Delete Notes
* Permanent Delete from Trash
* View All Notes

### 📌 Organization Features

* Pin Important Notes
* Archive Notes
* Restore Archived Notes
* Move Notes to Trash
* Restore Deleted Notes

### 🔍 Search & Filtering

* Search Notes by Title
* Filter Notes by Tags
* Separate Views for:

  * Dashboard
  * Pinned Notes
  * Archived Notes
  * Trash Notes

### 🎨 Modern User Interface

* Responsive Design
* Professional Dashboard Layout
* Interactive Note Cards
* Modern Authentication Pages
* Clean Sidebar Navigation

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap 5
* React Context API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* Cookie Parser
* Bcrypt

---

## 📂 Project Structure

```text
NotesApp
│
├── notes-backend
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── connect.js
│   └── index.js
│
├── notes-frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── layouts
│   │   ├── services
│   │   └── context
│   │
│   └── public
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone <repository-url>
cd NotesApp
```

### Backend Setup

```bash
cd notes-backend
npm install
```

Create `.env`

```env
MONGO_URL=mongodb://127.0.0.1:27017/notes-app
PORT=2000
JWT_SECRET=your_secret_key
```

Run Backend

```bash
node index.js
```

### Frontend Setup

```bash
cd notes-frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:2000
```

---

## 📸 Application Modules

### Landing Page

Modern landing page with authentication access.

### Authentication

* Login Page
* Registration Page
* JWT Protected Access

### Dashboard

* Create Notes
* Search Notes
* View All Notes

### Pinned Notes

Store and access important notes quickly.

### Archived Notes

Keep notes without cluttering the dashboard.

### Trash

Recover deleted notes or permanently remove them.

---

## 🔮 Future Enhancements

* Rich Text Editor
* Dark Mode
* File Attachments
* Note Categories
* Reminder Notifications
* Share Notes with Other Users
* AI-Based Smart Note Suggestions

---

## 👨‍💻 Author

Bana Nithya Sree
Jinde Arun Kumar
P Vinay Kumar

Built as a Full Stack MERN Application to demonstrate modern web development practices, authentication, state management, and scalable note management functionality.
