# TheTechBlog

A modern tech blogging platform where users can share, read, and explore articles about AI, Machine Learning, Cybersecurity, Cloud Computing, Data Science, and more.

## Features
- 📝 Create, edit, and delete blog posts
- 🏷 Categories and tags for better organization
- 🖼 Image uploads via Multer
- 🔐 User authentication with JWT
- 📱 Responsive design for mobile and desktop
- 📊 View counts for each blog

## Tech Stack
- **Backend:** Node.js, Express
- **Frontend:** EJS, Bootstrap
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **File Uploads:** Multer

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/priyanshurathour4093/TheTechBlog.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=8000
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Usage
- Visit `http://localhost:8000` in your browser.
- Register or log in to create and manage your blogs.

## Deployment Notes (Render)
- When you push updates to your GitHub repository, Render will **automatically redeploy** your service if connected.
- **⚠ Important:** Images uploaded via Multer are stored locally, so they will be lost on redeploy.  
  **Solutions:**
  1. Use a persistent storage service (e.g., AWS S3, Cloudinary) for images.
  2. Or disable auto-deploy in Render to avoid losing files.

## License
This project is licensed under the MIT License.
