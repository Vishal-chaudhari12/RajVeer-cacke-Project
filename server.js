const app = require("./app");
const connectDB = require("./db/mongodb");

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Server startup error:", error);
    });