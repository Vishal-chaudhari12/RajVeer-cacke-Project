const app = require('./app');
const connectDB = require('./db/mongodb')

const PORT = process.env.PORT || 3000;
connectDB()
    .then(function () {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    }).catch(function (e) {
        console.log(e)
    })
