import "./config.mjs";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { Listing, User } from "./db.mjs";
import cors from "cors";
import bcrypt from 'bcryptjs';


mongoose.connect(process.env.DSN);
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

//post a listing
app.post("/listings", async (req, res) => {
  console.log("received data:", req.body);
  try {
    const listing = new Listing(req.body);
    const savedListing = await listing.save();
    console.log("saved listing:", savedListing);
    res.status(201).json(savedListing);
  } catch (error) {
    console.error("error saving listing:", error);
    res.status(500).json({ error: "failed to create listing" });
  }
});

//retrieve all listings from database
app.get("/listings", async (req, res) => {
  console.log("Getting all listings...");
  const listings = await Listing.find();
  console.log("Found these listings", listings);
  res.status(200).json(listings);
});

//get a specific listing by id
app.get("/listings/:postId", async (req, res) => {
  const postId = req.params.postId;
  const listing = await Listing.findById(postId);
  res.json(listing);
});

//handle basic registration
app.post("/register", async (req, res) => {
  console.log("user is attempting to register");
  console.log("received data:",req.body); //currently only has the username
  const {username,emailAddress,password}=req.body;
  //hash the password
  const hashedPassword=await bcrypt.hash(password,10);

  //store their credentials into the database  
  try{
    const user=new User({
      username:username,
      email:emailAddress,
      passwordHash:hashedPassword,
      createdAt:Date.now()
    });
    const savedUser = await user.save();
    console.log("saved User:", savedUser);
    res.status(201).json(savedUser);
  }
  catch(error){
    console.error("error saving user:", error);
    res.status(500).json({ error: "failed to save user" });
  }

});

//handle login
app.get("/login", async (req, res) => {
  console.log("user is attempting to log in");
  //retrieve their credentials from the database
});

//delete specific listing by id
app.delete("/listings/:id", async (req, res) => {
  const listingId = req.params.id;
  await Listing.findByIdAndDelete(listingId);
  res.status(200).json({ message: "Listing deleted successfully" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
