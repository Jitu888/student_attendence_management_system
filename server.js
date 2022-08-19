const express = require('express');
const app = express();
const mongoose = require("mongoose");
const student_routes = require("./routes/student_routes")
const api_version = "api/v1";




//initialization
(() => {
    body_parser();
    db_config();
    routes_config();
    global_Error_Handler();


    //parser
    //db confiq
})();

function db_config() {
    //const uri = "mongodb+srv://jitu:1999@cluster0.0lsnx.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect("mongodb+srv://jitu:1999@cluster0.0lsnx.mongodb.net/student_attendence?retryWrites=true&w=majority", (err) => {
        if (!err) {
            console.log("database connected succcessfully");
        }
        else {
            console.log("err", err);
        }
    });

}


function body_parser() {
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json());
    
}

function routes_config() {
    app.use('/', student_routes);
   app.use('/uploads',express.static('uploads'))
}

function global_Error_Handler() {
    app.use((err, req, res, next) => {
        const errorStatus = req.status || 500;
        const error = err.message && [err.message] || err || "Internal Server Error";
        res.status(errorStatus).send({ error })
    })
}
module.exports = app;