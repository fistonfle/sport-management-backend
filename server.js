require("dotenv").config();
const express = require("express");
const cors = require("cors");  // Add this line

const app = express();

// CORS configuration to allow only localhost:3000 and https://sport-management-system.vercel.app/
const corsOptions = {
  origin: [
    "http://localhost:3000",  // Allow localhost during development
    "https://sport-management-system.vercel.app"  // Allow production app on Vercel
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],  // You can restrict methods as needed
  allowedHeaders: ["Content-Type", "Authorization"],  // Customize headers as necessary
};

app.use(cors(corsOptions));  // Use the CORS options

// Your existing routes and logic go here
// Example route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = process.env.PORT || 5000;

// Start the server and listen on the defined PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
