const express = require("express");
const cors = require("cors");
require("dotenv").config();
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.API_KEY });

app.post("/images", async (req, res) => {
  const image = await openai.images.generate({
    model: "dall-e-3",
    prompt: "A cute baby sea otter",
    n: 1,
  });
  res.status(200).json({ image });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});
