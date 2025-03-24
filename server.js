require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 10000;

app.get("/services", async (req, res) => {
    try {
        const response = await axios.get("https://api.render.com/v1/services", {
            headers: {
                Authorization: `Bearer ${process.env.RENDER_API_KEY}`,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching services:", error.message);
        res.status(500).json({ error: "Failed to fetch services" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
