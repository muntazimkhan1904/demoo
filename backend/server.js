const express = require("express");
const app = express();
const PORT = 3000;

// Form data read karne ke liye
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Form submit route
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.json({
    success: true,
    message: "Form submitted successfully!"
  });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});