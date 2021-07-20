import express from"express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
//below we are limiting the image size
app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors());
//below there's the URL to out mongodb atlas cluster
const CONNECTION_URL = 'mongosh "mongodb+srv://cluster0.itol8.mongodb.net/myFirstDatabase" --username YoussefBouzid'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, ()=> console.log(`server running on ${PORT}`)) )
    .catch((error) => console.log(error.message))

    mongoose.set('useFindAndModify', false);