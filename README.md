# 🍽️ Full-Stack Food Delivery App (MERN + TailwindCSS + Stripe)

This is a complete full-stack food delivery application featuring user authentication, restaurant and menu management, cart & order handling, Stripe payment integration, and real-time order tracking — built using the **MERN** stack with **TailwindCSS** and **Stripe**.

---

## 🔧 BACKEND + DATABASE (Node.js + Express + MongoDB)

### ✅ Step 1: Project Initialization
- Create a `backend/` folder
- Initialize Node.js project:
```

npm init -y

```
- Install dependencies:
```

npm install express mongoose dotenv cors bcryptjs jsonwebtoken stripe

```

---

### ✅ Step 2: MongoDB Connection Setup
- Create a `.env` file
- Setup `config/db.js` to connect to MongoDB
- Call DB connection in `server.js`

---

### ✅ Step 3: Database Models
Create Mongoose models in `/models`:
- `User.js`
- `Restaurant.js`
- `MenuItem.js`
- `Order.js`
- `Review.js`

---

### ✅ Step 4: User Authentication
Create controller `authController.js`:
- `registerUser`
- `loginUser`
- JWT token generation

Create middleware:
- `authMiddleware.js` – to protect routes

Set up routes:
- `POST /api/auth/register`
- `POST /api/auth/login`

---

### ✅ Step 5: Restaurant APIs
In `restaurantController.js`:
- `addRestaurant`
- `getRestaurants`

Routes:
- `POST /api/restaurants`
- `GET /api/restaurants`

---

### ✅ Step 6: Menu APIs
In `menuController.js`:
- `addMenuItem`
- `getMenuByRestaurant`

Routes:
- `POST /api/menu`
- `GET /api/menu/:restaurantId`

---

### ✅ Step 7: Order APIs
In `orderController.js`:
- `placeOrder`
- `getUserOrders`
- `getOrderStatus` (for polling)

Routes:
- `POST /api/orders`
- `GET /api/orders/user`
- `GET /api/orders/:id/status`

---

### ✅ Step 8: Stripe Payment Integration
- Create `POST /api/create-payment-intent`
- Add Stripe webhook for payment updates
- Update `paymentStatus` on `Order` model

---

## 💻 FRONTEND (React + TailwindCSS)

### ✅ Step 9: Project Setup
- Initialize using Vite
- Install TailwindCSS and configure
- Setup folder structure: `components/`, `pages/`, `context/`, `api/`

---

### ✅ Step 10: Authentication Pages
- Build Login and Register pages
- Store JWT token in `localStorage`
- Create AuthContext or use Redux for auth state

---

### ✅ Step 11: Restaurant Pages
- **Homepage**: Fetch and display all restaurants
- On restaurant click → Navigate to menu page

---

### ✅ Step 12: Menu & Cart Flow
- Display all menu items
- Add to cart functionality
- Cart page to update quantities & show total price

---

### ✅ Step 13: Checkout Page
- Integrate Stripe payment UI
- Send payment + order info to backend

---

### ✅ Step 14: Order Tracking (Polling)
- On successful order → redirect to status page
- Poll `/api/orders/:id/status` every 5 seconds
- Show order progress:
```

PLACED → PREPARING → OUT\_FOR\_DELIVERY → DELIVERED

```

---

## 🚀 DEPLOYMENT

### ✅ Step 15: Backend
- Deploy backend on **Render** or **Railway**

### ✅ Step 16: Frontend
- Deploy frontend on **Vercel** or **Netlify**

### ✅ Step 17: MongoDB
- Connect to **MongoDB Atlas**

---

## 📌 Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Stripe
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt
- **Database:** MongoDB Atlas
- **Deployment:** Render, Vercel
- **Payment Gateway:** Stripe

---

## 🙌 Contributions
Pull requests and feature suggestions are welcome!

---

Completed till Step - 9 (Backend Done), start frontend
