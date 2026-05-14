# Hari Krishnan - Personal Portfolio

A modern, highly interactive personal portfolio built with React, Tailwind CSS, Framer Motion, and a Node/Express backend. This project showcases skills, projects, and experiences with a smooth, dynamic user interface.

## 🚀 Features

- **Dynamic Interactive UI:**
  - Custom animated cursor using `framer-motion`.
  - Scroll progress bar overlay.
  - Smooth reveal animations on scroll (`AOS` and `framer-motion`).
  - Welcome screen with animated entry.
- **Modern Styling:**
  - Built with Tailwind CSS for utility-first styling.
  - Custom UI elements, gradients, and animated noise/grain overlays.
- **Backend Integration:**
  - Express.js backend to handle contact form submissions.
  - Integration with email services (Nodemailer / Resend) to forward messages directly to your inbox.
- **Fully Responsive:** Adapts beautifully from mobile devices to large desktop monitors.

## 🛠️ Technologies Used

### Frontend
- **React.js (v18)**
- **React Router v6** (for routing and project detail pages)
- **Tailwind CSS** (for styling)
- **Framer Motion & AOS** (for complex animations)
- **Material UI & Lucide React & React Icons** (for vector icons)
- **SweetAlert2** (for beautiful alert dialogs)
- **DotLottie React** (for Lottie animations)

### Backend
- **Node.js & Express.js**
- **CORS** (cross-origin resource sharing)
- **Dotenv** (environment variable management)
- **Resend API / Nodemailer** (email delivery system)

## 📁 Project Structure

```text
/
├── server/                 # Express backend server
│   ├── server.js           # Main server file and email routing
│   ├── package.json        # Backend dependencies
│   └── .env                # Backend environment variables
├── src/                    # React frontend application
│   ├── components/         # Reusable UI components (Navbar, Skills, etc.)
│   ├── Pages/              # Page views (Home, About, Portfolio, Contact, etc.)
│   ├── App.jsx             # Main router and layout component
│   └── index.css           # Global Tailwind and custom styles
├── public/                 # Static assets (images, index.html)
└── package.json            # Frontend dependencies and scripts
```

## ⚙️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Installation

Clone the repository and install both frontend and backend dependencies.

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

### 2. Environment Variables

#### Backend (`server/.env`)
Create a `.env` file in the `server` directory. Depending on your configuration (Resend or Nodemailer), you will need:

**For Resend setup:**
```env
RESEND_API_KEY=your_resend_api_key_here
YOUR_EMAIL=your_personal_email_here
PORT=3001
```

**For Nodemailer (Gmail) setup:**
```env
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_app_password
PORT=3001
```

#### Frontend (`/.env`)
If you encounter a `SecurityError` with `localStorage` on newer versions of Node, ensure you run the app using the configured script in `package.json`, which passes the `--localstorage-file` argument.

### 3. Running the App locally

You'll need two terminals to run the full stack application.

**Terminal 1 (Backend):**
```bash
cd server
npm start
```
*The server will start on port 3001.*

**Terminal 2 (Frontend):**
```bash
npm start
```
*The React app will launch in development mode at http://localhost:3000.*

## 🎨 Customization

- **Colors & Theming:** To modify the primary theme colors, adjust the Tailwind utility classes in your components or modify `tailwind.config.js`.
- **Content:** Update the text and imagery in the respective files inside `src/Pages/`.
- **Projects:** Add or remove projects by modifying the portfolio data, often passed into the `Portofolio.jsx` and `ProjectDetail.jsx` components.

## 📄 License

© 2025 Hari Krishnan. All Rights Reserved.
