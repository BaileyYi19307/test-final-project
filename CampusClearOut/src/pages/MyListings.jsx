import React from "react";
import ListingForm from "../components/ListingForm";

export function MyListings(){
    return(
        <div>
            <p>This is My Listings Page</p>
            <p>Create a new listing</p>
            <ListingForm/>
        </div>
    );
}