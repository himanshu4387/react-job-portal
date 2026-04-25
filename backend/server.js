import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // CLOUDINARY_CLIENT_NAME
  api_key: process.env.CLOUDINARY_API_KEY,       // CLOUDINARY_CLIENT_API
  api_secret: process.env.CLOUDINARY_API_SECRET, // CLOUDINARY_CLIENT_SECRET
});

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Attempting to use alternate port...`);
    const alternatePort = PORT + 1;
    const altServer = app.listen(alternatePort, () => {
      console.log(`Server running at port ${alternatePort} instead`);
    });
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
});
