# 🐾 WarmPaws – Pet Care in Winter

<p align="center">
  <img src="https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-4.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.0+-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/DaisyUI-Latest-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI" />
  <img src="https://img.shields.io/badge/Firebase-Auth-orange?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase" />
  <img src="https://img.shields.io/badge/React%20Router-6.0+-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/AOS-Scroll%20Animations-2E8B57?style=for-the-badge&logo=aos&logoColor=white" alt="AOS" />
  <img src="https://img.shields.io/badge/React%20Spring-Animation-6DB33F?style=for-the-badge&logo=reactspring&logoColor=white" alt="React Spring" />
  <img src="https://img.shields.io/badge/Animate.css-CSS%20Animations-ff4088?style=for-the-badge&logo=css3&logoColor=white" alt="Animate.css" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License: MIT" />
</p>

---

**WarmPaws** is a responsive React web application that helps pet owners find top-rated pet care services and winter care tips to keep their furry friends healthy and happy.  
Built with modern tools like **React, Firebase, TailwindCSS, and AOS**, it offers a smooth, interactive, and mobile-friendly experience.

---

## 🌐 Live Demo
🔗 **Live Site:** [https://pets-care-paws.netlify.app/](https://pets-care-paws.netlify.app/)

---

## 🎯 Purpose

The goal of **WarmPaws** is to provide a simple yet beautiful platform for pet lovers.  
Users can explore top-rated pet services, get winter care advice, and log in securely to access personalized features.

---

## ✨ Key Features

- 🔐 **Firebase Authentication** – Email/password & Google sign-in  
- 🏠 **Dynamic Home Page** – With hero slider and featured pet services  
- 📱 **Fully Responsive Design** – Optimized for mobile, tablet, and desktop  
- 🌟 **User Profile Section** – Displays user info (name & photo) in the navbar  
- ⚙️ **Error Page Handling** – Friendly fallback for broken routes  
- 💬 **Toasts for Feedback** – Smooth notifications using React Hot Toast  
- 🎨 **Modern UI** – TailwindCSS & DaisyUI styling  
- 💫 **Smooth Animations** – Powered by AOS, Animate.css, and React Spring  

---

## 🧩 Tech Stack

| Category | Tools |
|-----------|--------|
| **Frontend** | React.js + Vite |
| **Styling** | TailwindCSS + DaisyUI |
| **Routing** | React Router |
| **Auth** | Firebase Authentication |
| **Notifications** | React Hot Toast |
| **Animations** | AOS, Animate.css, React Spring |
| **Slider** | Swiper.js |

---

## 📦 NPM Packages Used

| Package | Purpose | License |
|----------|----------|----------|
| [`react`](https://www.npmjs.com/package/react) | Core React library | MIT |
| [`react-dom`](https://www.npmjs.com/package/react-dom) | DOM rendering | MIT |
| [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) | Routing and navigation | MIT |
| [`firebase`](https://www.npmjs.com/package/firebase) | Authentication & backend | Apache-2.0 |
| [`react-hot-toast`](https://www.npmjs.com/package/react-hot-toast) | Toast notifications | MIT |
| [`react-icons`](https://www.npmjs.com/package/react-icons) | Icon library | MIT |
| [`tailwindcss`](https://www.npmjs.com/package/tailwindcss) | Utility-first CSS | MIT |
| [`daisyui`](https://www.npmjs.com/package/daisyui) | UI component library | MIT |
| [`aos`](https://www.npmjs.com/package/aos) | Scroll animations | MIT |
| [`animate.css`](https://www.npmjs.com/package/animate.css) | CSS animations | MIT |
| [`@react-spring/web`](https://www.npmjs.com/package/@react-spring/web) | Motion/animation library | MIT |
| [`swiper`](https://www.npmjs.com/package/swiper) | Hero/image sliders | MIT |

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/warmpaws.git
cd warmpaws


---

📦 src/
├── 🖼️ assets/                     # Images, icons & static files
│
├── 🧱 components/                 # Reusable UI components
│   ├── 🧭 Navbar.jsx              # Responsive navigation bar
│   ├── 🦶 Footer.jsx              # Footer with contact & social links
│   ├── ⚠️ ErrorPage.jsx           # Error / 404 component
│   ├── 🎠 HeroSlider.jsx          # Hero slider (Swiper)
│   ├── 🐾 Card.jsx                # Reusable service card
│   └── ⭐ TopRatedServices.jsx     # Displays top-rated pet services
│
├── 🗺️ pages/                      # Page components
│   ├── 🏠 Home.jsx                # Homepage layout
│   ├── 🔐 Login.jsx               # Login with Firebase auth
│   ├── 🧍 Register.jsx            # Registration form
│   ├── 🔁 ForgetPassword.jsx      # Password reset functionality
│   └── 🚫 NotFound.jsx            # 404 fallback
│
├── ⚙️ provider/                   # Context providers
│   └── AuthProvider.jsx           # Global Firebase auth context
│
├── 🚏 routes/                     # Routing setup
│   └── routes.jsx                 # Defines all routes
│
├── 🔥 firebase/                   # Firebase setup
│   └── firebase.config.js         # Firebase SDK configuration
│
├── 🧩 layouts/                    # Layout wrappers
│   └── MainLayout.jsx             # Layout with Navbar + Outlet + Footer
│
├── 🪄 App.jsx                     # Root component
├── 🚀 main.jsx                    # Entry point rendering React app
└── 🎨 index.css                   # Global Tailwind & Animate.css styles



---

Would you like me to also include a **preview image section** (like a “🖼️ Screenshots” area) with placeholders you can update later when your live site screenshots are ready?
