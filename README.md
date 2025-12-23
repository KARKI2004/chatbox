# Chat App

Full-stack real-time chat application with authentication and media messaging.

Features
- User sign up, login, and profile updates
- Real-time messaging
- Image attachments via Cloudinary
- Preferences for notifications, enter-to-send, and message previews

Tech stack
- Frontend: React, Vite, Tailwind CSS, DaisyUI, Zustand
- Backend: Node.js, Express, MongoDB, Socket.IO
- Media: Cloudinary

Requirements
- Node.js 18+
- MongoDB connection string
- Cloudinary credentials (optional for image uploads)

Environment variables
Create `backend/.env`:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

Install and run
```
cd backend
npm install
npm run dev
```

```
cd frontend
npm install
npm run dev
```

Notes
- The settings page stores preferences in local storage.
- Notification sounds play only while the tab is active.
