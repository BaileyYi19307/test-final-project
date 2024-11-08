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
      const response = fetch(`${API}/listings`)
      .then(response=>response.json())
      .then(listingData =>{
        setListings(listingData);
        console.log("This is the listing data",listingData);
      })
      .catch(error => console.error("error fetching listings:",error));
  },[]);


    return(
      <div>
      <main>
        <Container>
          <h2 className="text-center my-4">Available Listings</h2>
          <Row className="listing-grid">
            {listings.map(listing => (
              <Col key={listing._id} xs={12} sm={6} lg={4} className="d-flex align-items-stretch">
                <div className="listing-card" style={{ width: '100%', margin: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
                  <h3>{listing.title}</h3>
                  <p>{listing.description}</p>
                  <p><strong>Price:</strong> ${listing.price}</p>
                  
                  {/* link button to listings detail page */}
                  <Link to={`/listings/${listing._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </div>
    );
}

