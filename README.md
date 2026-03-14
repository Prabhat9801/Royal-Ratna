# Royal Ratna Premium Veg Restaurant - Website

This is a premium, modern, and high-converting single-page website built for **Royal Ratna Premium Veg Restaurant**. It features a minimal, elegant design focused on showcasing the restaurant's authentic vegetarian food, high ratings, and warm ambiance.

## 🚀 Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: Pure Modern CSS with CSS Variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: Playfair Display, Cinzel, and Poppins (Google Fonts)

---

## 💻 Local Setup Instructions

Follow these steps to run the website locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (Version 18+ recommended) installed on your system.

### 1. Install Dependencies
Navigate into the project folder and install the required npm packages:
```bash
npm install
```

### 2. Start the Development Server
Run the following command to start the Vite development server:
```bash
npm run dev
```

### 3. View the Website
Once the server starts, open your browser and navigate to:
```
http://localhost:5173
```

---

## 🌐 Deployment Instructions (Vercel)

Deploying to Vercel is the fastest and easiest way to host this Vite + React application. Since Vercel has native support for Vite, the configuration is almost zero-click.

### Option 1: Deploying via Vercel Dashboard (Recommended & Easiest)

1. **Push your code to GitHub**
   - Create a new repository on your GitHub account.
   - Run the following commands inside your project folder:
     ```bash
     git init
     git add .
     git commit -m "Initial commit - Royal Ratna Website"
     git branch -M main
     git remote add origin https://github.com/your-username/your-repo-name.git
     git push -u origin main
     ```

2. **Connect to Vercel**
   - Go to [Vercel.com](https://vercel.com/) and log in (or sign up with GitHub).
   - Click the **"Add New Project"** button.
   - In the "Import Git Repository" section, connect your GitHub account if you haven't already.
   - Find your newly created repository and click **Import**.

3. **Configure the Project**
   - **Project Name**: `royal-ratna-restaurant` (or whatever you prefer)
   - **Framework Preset**: Vercel should automatically detect **Vite**.
   - **Root Directory**: Leave it as `./`
   - **Build Command**: `npm run build` (Leave default)
   - **Output Directory**: `dist` (Leave default)
   - **Install Command**: `npm install` (Leave default)

4. **Deploy**
   - Click the **Deploy** button.
   - Wait for about 1-2 minutes. Vercel will install dependencies, build the project, and give you a live production URL!

### Option 2: Deploying via Vercel CLI

If you prefer using the terminal, you can deploy directly using Vercel CLI.

1. **Install Vercel CLI globally:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```
   *(Follow the prompts to authenticate via your browser)*

3. **Deploy the project:**
   Make sure you are in your project root directory (`C:\Users\prabh\Desktop\Royal_Ratan`) and run:
   ```bash
   vercel
   ```

4. **Follow the CLI Prompts:**
   - *Set up and deploy?* **Y**
   - *Which scope?* **[Your Name/Team]**
   - *Link to existing project?* **N**
   - *What's your project's name?* **royal-ratna**
   - *In which directory is your code located?* **./**
   - *Want to override the settings?* **N** (Vite settings are auto-detected)

5. **Deploy to Production**
   The first deployment is a preview. To create a production domain link, run:
   ```bash
   vercel --prod
   ```

---

## 📁 Project Structure

```text
Royal_Ratan/
├── public/                 # Static assets (Favicons, etc.)
│   └── images/             # All restaurant/food images shown on the website
├── src/
│   ├── components/         # Reusable sections (Hero, Menu, Footer, etc.)
│   ├── App.tsx             # Main layout incorporating all sections
│   ├── index.css           # Global premium styling and brand CSS variables
│   └── main.tsx            # React application entry point
├── package.json            # Dependencies and build scripts
└── vite.config.ts          # Vite configuration overriding
```

## ✨ Customizing Content
- To change brand colors, fonts, or global styles, open `src/index.css` and modify the `:root` variables at the top of the file.
- To modify the menu layout or prices, open `src/components/Menu.tsx` and edit the `menuData` array.
