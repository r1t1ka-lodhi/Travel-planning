# Travel-planning
this is a full backend of a travel planning application
🌍 Travel Planning Application

A full-stack MERN-based Travel Planning App that helps users plan, book, review, and share their trips. The platform allows seamless booking of flights and hotels, payment integration, trip management, reviews, and social sharing with notifications.

✨ Features

🔐 Authentication & Authorization (JWT-based login/signup)

🧳 Trip Management – Create, update, delete, and view trips

✈️ Bookings – Flight & Hotel booking management

💬 Reviews – Submit and view destination/trip reviews

💳 Payments – Integrated with Stripe/PayPal (demo setup)

📧 Notifications – Email confirmations using Nodemailer

📲 Social Sharing – Share trips to different platforms (Facebook, Twitter, etc.)

🛠 Tech Stack

Frontend: React.js (with Tailwind CSS for styling)

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ORM)

Authentication: JWT (JSON Web Tokens)

Payments: Stripe/PayPal API

Email Notifications: Nodemailer

📂 Project Structure
src/
 ├── controllers/        # Business logic (booking, trips, payments, reviews)
 ├── models/             # Mongoose schemas
 ├── routes/             # API endpoints
 ├── middleware/         # Auth middleware
 ├── utils/              # ApiResponse, ApiError, helpers
 ├── app.js              # Express app setup
 └── server.js           # Entry point

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/yourusername/travel-planner.git
cd travel-planner


Install dependencies

npm install


Setup environment variables (.env)

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
EMAIL_USER=your_email
EMAIL_PASS=your_password


Run the server

npm run dev

📌 API Endpoints
🔐 Auth

POST /api/auth/signup – Register user

POST /api/auth/login – Login user

🧳 Trips

POST /api/trips – Create a trip

GET /api/trips/:id – Get trip by ID

GET /api/trips – Get all user trips

✈️ Bookings

POST /api/bookings – Book a flight/hotel

DELETE /api/bookings/:id – Cancel booking

💬 Reviews

POST /api/reviews – Submit a review

💳 Payments

POST /api/payments – Process payment

📧 Notifications

Auto email confirmation after booking

🚀 Future Improvements

🌐 Frontend dashboard with React

📊 Data visualization of travel expenses

👥 Group trip planning and collaboration

🗺️ Map integration (Google Maps API)

📄 License

MIT License
