const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        environment: process.env.ENV_NAME,
        version: "1.0.0",
        message: `hello world ${process.env.ENV_NAME}`
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
