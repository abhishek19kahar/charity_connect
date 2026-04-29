# Charity Connect 🌍💚

Charity Connect is a full-stack MERN web application that connects donors, NGOs, and volunteers through a secure, transparent, and user-friendly charity platform.

Users can donate money, support NGOs by category/location, volunteer for causes, and track donation history.

---

## 🚀 Features

### 🔐 Authentication
- User Signup & Login
- JWT Secure Authentication
- Protected Routes
- Password Validation

### 💳 Donation System
- Online Donations with Stripe
- Payment Success / Cancel Flow
- Donation History
- NGO-wise Donation Tracking

### 🏢 NGO Support
- Search NGOs by Category
- Search NGOs by City / Area
- Donate to Selected NGO

### 🙋 Volunteer Module
- Volunteer Registration
- College ID Upload
- Required Field Validation

### 👤 User Dashboard
- User Profile
- Donation History
- Pickup History
- Secure Logout

### 🎨 UI / UX
- Responsive Design
- Tailwind CSS
- Smooth Navigation

---

## 🛠️ Tech Stack

### Frontend
- React.js
- TypeScript
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- JWT

### Payment Gateway
- Stripe

---

## 📂 Project Structure

```bash
Charity_Connect/
│── client/
│── server/
│── README.md


⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/yourusername/charity_connect.git
cd Charity_Connect

2️⃣ Install Frontend Dependencies
npm install

3️⃣ Install Backend Dependencies
cd server
npm install

4️⃣ Create Environment Variables
Create a .env file inside the server folder:
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

5️⃣ Run Backend Server
cd server
npm start

Backend runs on:
http://localhost:8080

6️⃣ Run Frontend
Open new terminal:
npm start

Frontend runs on:
http://localhost:3000

🔐 Protected Routes

Login required for:

Home
Dashboard
Donation Pages
Volunteer Pages
Payment Pages
🌟 Future Enhancements
Live NGO APIs
Admin Dashboard
OTP Verification
Analytics Dashboard
AI Recommendations

