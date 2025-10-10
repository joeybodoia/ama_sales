import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import contactRouter from "./contactRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001; // ✅ Keep this

app.use(express.json());

// API
app.use(contactRouter);

// Serve React build (fixed path)
const distPath = path.resolve(__dirname, "../../dist");
app.use(express.static(distPath));

// SPA fallback
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
