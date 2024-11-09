import React from "react";
import { useState,useEffect} from "react";
import { CreateListing } from "../components/CreateListing";
import { Link,useSearchParams} from "react-router-dom";
import { Container,Row,Col,Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';


const API = import.meta.env.VITE_BACKEND_URL;

export function MyListings(){
  const [myListings,setMyListings] = useState([])
  const [searchParams] = useSearchParams();
  const isCreated = searchParams.get('created') === 'true';

  //retrive all my listings
    useEffect(()=>{
      const response = fetch(`${API}/listings`)
      .then(response=>response.json())
      .then(listingData =>{
        setMyListings(listingData);
        console.log("This is the listing data",listingData);
      })
      .catch(error => console.error("error fetching listings:",error));
  },[]);
    return(
        <div>
        {isCreated && (
                <Alert variant="success">
                Listing created successfully!
                </Alert>
            )}
            <Link to="/dashboard/mylistings/create">
                <Button variant="primary" className="mb-4">Create New Listing</Button>
            </Link>
            <Container>
          <h2 className="text-center my-4">My Listings</h2>
          <Row className="listing-grid">
            {myListings.map(listing => (
              <Col key={listing._id} xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <div className="listing-card" style={{ width: '100%', margin: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
                  <h3>{listing.title}</h3>
                  <p>{listing.description}</p>
                  <p><strong>Price:</strong> ${listing.price}</p>
                  
                  {/* link button to listings detail page */}
                  <Link to={`/listings/${listing._id}`}>
                    <button className="btn btn-secondary">View Details</button>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        </div>
    );
}