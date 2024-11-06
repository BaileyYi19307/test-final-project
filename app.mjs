import './config.mjs';
import express from 'express'
import mongoose from 'mongoose';

import path from 'path'
import { fileURLToPath } from 'url';

mongoose.connect(process.env.DSN);

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.render("layout");
})


app.listen(process.env.PORT || 3000);
