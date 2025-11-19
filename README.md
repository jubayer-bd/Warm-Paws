
<div align="center">

  # 🐾 WarmPaws – Pet Care in Winter

  *A responsive React platform helping pet owners find top-rated services and winter care tips.*

  [![Live Site](https://img.shields.io/badge/Live_Site-FF5722?style=for-the-badge&logo=netlify&logoColor=white)](https://pets-care-paws.netlify.app/)
  [![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](https://github.com/yourusername/warmpaws/blob/main/LICENSE)

  ![Project Screenshot](https://via.placeholder.com/1000x500?text=WarmPaws+Project+Screenshot)

</div>

---

## 📖 Project Overview

*WarmPaws* is a modern web application designed to connect pet owners with essential care services. The platform allows users to explore health tips, find local pet services, and access specialized winter care advice.

Built with *React* and *Firebase*, it offers a secure and interactive experience, featuring dynamic sliders, smooth animations, and a fully responsive design optimized for all devices.

---

## ✨ Key Features

- 🔐 *Authentication:* Secure login via Email/Password and Google Sign-in (Firebase).
- 🏠 *Dynamic Home:* Interactive hero slider and featured top-rated services.
- 📱 *Responsive Design:* Seamless experience on Mobile, Tablet, and Desktop.
- 👤 *User Profile:* Navbar integration displaying user name and profile photo.
- 🎨 *Modern UI:* Styled with *TailwindCSS* and *DaisyUI* for a clean look.
- 🔔 *Notifications:* Real-time feedback using *React Hot Toast*.
- ⚡ *Animations:* Engaging scroll effects powered by *AOS* and *Animate.css*.
- 🛡 *Error Handling:* Custom 404 page for a polished user experience.

---

## 🛠 Tech Stack

| Category | Technologies |
| :--- | :--- |
| *Frontend* | ![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react) ![Vite](https://img.shields.io/badge/-Vite-black?style=flat-square&logo=vite) |
| *Styling* | ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-black?style=flat-square&logo=tailwindcss) ![DaisyUI](https://img.shields.io/badge/-DaisyUI-black?style=flat-square&logo=daisyui) |
| *Auth & Backend* | ![Firebase](https://img.shields.io/badge/-Firebase-black?style=flat-square&logo=firebase) |
| *Routing* | ![React Router](https://img.shields.io/badge/-React_Router-black?style=flat-square&logo=react-router) |
| *Animation* | AOS • Animate.css • React Spring |

---

## 📦 Dependencies Used

| Package | Purpose |
| :--- | :--- |
| react-router-dom | Handling SPA navigation and routes |
| firebase | Authentication and backend services |
| react-hot-toast | Displaying success/error notifications |
| swiper | Creating the interactive hero slider |
| aos | Animate On Scroll library |
| react-icons | Icon set (Feather, FontAwesome, etc.) |

---

## 💻 Installation & Setup

Follow these steps to run the project locally:


```bash
1. Clone the repository
git clone https://github.com/jubayer-bd/Warm-Paws.git

2. Navigate to the project directory
cd warmpaws

3. Install dependencies
npm install

4. Configure Firebase Keys
Create a .env.local file in the root folder and add your Firebase credentials:
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id

5. Start the server
npm run dev

📁 Folder Structure
src/
 ├── 📂 assets/          # Images, icons, and static assets
 ├── 📂 components/      # Reusable UI components
 │   ├── Navbar.jsx
 │   ├── Footer.jsx
 │   ├── HeroSlider.jsx
 │   ├── Card.jsx
 │   └── TopRatedServices.jsx
 ├── 📂 pages/           # Main page views
 │   ├── Home.jsx
 │   ├── Login.jsx
 │   ├── Register.jsx
 │   └── NotFound.jsx
 ├── 📂 provider/        # Context providers (Auth)
 ├── 📂 routes/          # Router configuration
 ├── 📂 firebase/        # Firebase config file
 ├── 📂 layouts/         # Main layout wrappers
 ├── App.jsx
 └── main.jsx

```


 🔗 Links
 * Live Website: [https://pets-care-paws.netlify.app/](https://pets-care-paws.netlify.app/)
 * GitHub Repo: [https://github.com/yourusername/warmpaws](https://github.com/jubayer-bd/Warm-Paws)
<div align="center">
Made with ❤ by Md. Jubayer Hossain
</div>
