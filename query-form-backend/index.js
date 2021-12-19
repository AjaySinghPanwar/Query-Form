const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// App configuration
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// DB configuration
mongoose.connect('mongodb://localhost:27017/queryFormDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("DB connected"))
const queryFormSchema = new mongoose.Schema({
    userName: String,
    userEmail: String,
    userMobile: Number,
    userCity: String,
    userQuery: String,
})
const formData = new mongoose.model("queryFormData", queryFormSchema);




//API routes
app.post("/submit", (req, res) => {
    let { userName, userEmail, userMobile, userCity, userQuery } = req.body;
    // console.log(req.body);
    userPhone = parseInt(userMobile);

    const formdata = new formData({
        userName,
        userEmail,
        userMobile,
        userCity,
        userQuery,
    });

    formdata.save(err => {
        if (err) {
            console.log(err)
        }
        formData.find({}, (err, formDataList) => {
            if (err) {
                console.log(err)
            }
            if (formDataList) {
                res.status(200).send(formDataList)
            }
        })
    })

})

app.listen(9000, () => console.log("Listening on Port 9000"))