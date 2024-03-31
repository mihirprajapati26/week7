const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getMessages,
  renderMessages,
  addMessage,
  deleteAllMessages,
  deleteMessage,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Set views directory for EJS templates
app.set("views", "views");
// Set EJS as the view engine
app.set("view engine", "ejs");
// Serve static files from the "public" directory
app.use(express.static("public"));

// Connect to MongoDB
connectDB();

// Routes

// Route to render index.html with messages using EJS
app.get("/", renderMessages);

// GET all Messages
app.get("/api/messages", getMessages);
// Add a new Message
app.post("/api/messages", addMessage);
// DELETE all Message
app.delete("/api/messages", deleteAllMessages);
// DELETE Message
app.delete("/api/messages/:id", deleteMessage)

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});