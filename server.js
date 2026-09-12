const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Mini App
app.use(express.static(path.join(__dirname, "public")));

// Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    service: "CheeseRush Earn",
    status: "online",
    version: "1.0.0"
  });
});

// Basic API test
app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "CheeseRush Earn API is working"
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`CheeseRush Earn running on port ${PORT}`);
});
