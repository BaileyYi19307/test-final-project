import React, { useState,useEffect } from 'react';
import ListingForm from '../components/ListingForm';
import Listing from '../components/Listing';
import { Link } from 'react-router-dom';

const API = import.meta.env.VITE_BACKEND_URL;


export function Listings(){
  const [listings,setListings] = useState([])

  //retrive all the listings
    useEffect(()=>{
      const response = fetch(`${API}/listings`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
      })
      .then(response=>response.json())
      .then(listingData =>{
        setListings(listingData);
        console.log("This is the listing data",listingData);
      })
      .catch(error => console.error("Error fetching listings:",error));
  },[]);


    return(
        <div>
          
        <main>
        <p> This is the main listings Page</p>
          {
          //render all the listings on the page
          //for each listing, make a Listing component
          listings.map(listing => {
            return (
              <Listing 
                key={listing._id} 
                title={listing.title} 
                description={listing.description} 
                price={listing.price} 
              />
            );
          })
        }
        </main>
      </div>
    );
}

