const express= require("express")
const mongoose= require("mongoose")
require("dotenv").config();
const cors= require("cors")

const app =express();
const port = process.env.PORT || 5000;

app.use