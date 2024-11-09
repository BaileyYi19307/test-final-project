import './config.mjs';
import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path'
import { fileURLToPath } from 'url';
import { Listing } from './db.mjs';
import cors from 'cors';


mongoose.connect(process.env.DSN);

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json());

//post a listing 
app.post('/listings', async (req, res) => {
    console.log('received data:', req.body);
    try {
      const listing = new Listing(req.body);
      const savedListing = await listing.save();
      console.log('saved listing:', savedListing); 
      res.status(201).json(savedListing);
    } catch (error) {
      console.error('error saving listing:', error);
      res.status(500).json({ error: 'failed to create listing' });
    }
  });

//retrieve all listings from database
app.get('/listings',async(req,res)=>{
    console.log("Getting all listings...")
    const listings = await Listing.find();
    console.log("Found these listings",listings);
    res.status(200).json(listings);
});
  
//get a specific listing by id
app.get('/listings/:postId',async(req,res)=>{
    const postId=req.params.postId;
    const listing = await Listing.findById(postId);
    res.json(listing);
});
  

//handle basic registration
app.get('/register',async(req,res)=>{
    console.log("user is attempting to register");
});

//handle login
app.get('/login',async(req,res)=>{
    console.log("user is attempting to log in")
});



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
