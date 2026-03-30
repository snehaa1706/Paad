const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ⚡ Fast route
app.get("/fast", (req, res) => {
  res.send("⚡ Fast response!");
});

// 🐢 Slow route (2 sec delay)
app.get("/slow", (req, res) => {
  setTimeout(() => {
    res.send("🐢 Slow response (2 seconds delay)");
  }, 2000);
});

// 🔥 CPU stress route
app.get("/stress", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) {
    sum += i;
  }
  res.send("🔥 CPU stress completed");
});

// 👥 Sample API route
app.get("/users", (req, res) => {
  res.json({
    users: ["Sneha", "Alex", "Sam"]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
