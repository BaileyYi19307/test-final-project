import React, { useState,useEffect } from 'react';
import ListingForm from '../components/ListingForm';
import Listing from '../components/Listing';
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';

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
          <Container>
            <h2 className="text-center my-4">Available Listings</h2>
            <Row>
              {listings.map(listing => (
              <Col key={listing._id} xs={12} sm={6} lg={4} className="d-flex align-items-stretch">
                  <Listing 
                    title={listing.title} 
                    description={listing.description} 
                    price={listing.price} 
                    image={listing.image} 
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </main>
      </div>
    );
}

