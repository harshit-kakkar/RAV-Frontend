import React from 'react';
import { Link } from 'react-router-dom';
import './searchProfileCardStyles.css'

interface profileCardModel{
        id:number,
        name: string,
        domain: string
    
}

function SearchProfileCard(props:profileCardModel) {

    const {id, name, domain} = props
    let profileURL = "/user/" + id
  return (
    <Link to={{
        pathname:profileURL,
        state: { 
            isOwnProfile: false,
            id: id
          }
        }}>
    <div className="profile-card-container">
        <div className="profile-card-base-details-container">
            <div className="profile-card-picture">

            </div>
            <div className="profile-card-name">
                <p>{name}</p>
            </div>
        </div>
        <div className="profile-card-domain-container">
            <p>Domain :</p>
            <p className="profile-card-domain">{domain}</p>
        </div>
    </div>
    </Link>
  );
}

export default SearchProfileCard;