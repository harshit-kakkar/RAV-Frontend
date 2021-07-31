import React from 'react';
import SearchProfileCard from '../searchProfileCard/searchProfileCard';
import './searchMentorStyles.css'

function SearchMentor() {
    interface profileCardModel{
        id:number,
        name: string,
        domain: string
    }
    let searchResult: Array<profileCardModel> = [
        {
            "id": 1,
            "name": "Mohit Kakkar",
            "domain": "Backend"
        },
        {
            "id": 2,
            "name": "Mohit Kakkar",
            "domain": "Backend"
        },
        {
            "id": 3,
            "name": "Mohit Kakkar",
            "domain": "Backend"
        },
        {
            "id": 4,
            "name": "Mohit Kakkar",
            "domain": "Backend"
        },
        {
            "id": 5,
            "name": "Mohit Kakkar",
            "domain": "Backend"
        },
        {
            "id": 6,
            "name": "Mohit Kakkar",
            "domain": "Backend"
        },
        {
            "id": 7,
            "name": "Mohit Kakkar",
            "domain": "Backend"
        },
        {
            "id": 8,
            "name": "Mohit Kakkar",
            "domain": "Backend"
        }

    ]
  return (
    <div className="search-mentor-container">
      <div className="search-operation-container">
          <div className="search-domain-select-container">
          <p>Select a domain </p>
            <select className="search-mentor-domain-select">
                <option value="Backend">Backend</option>
                <option value="Backend">Backend</option>
                <option value="Full Stack">Full Stack</option>
                <option value="Mobile App Development">Mobile App Development</option>
            </select>
            </div>
            <button>Search</button>
      </div>


      <div className="search-mentor-profile-cards-container">
        {
            searchResult.length>0? 
                searchResult.map((profile) => <SearchProfileCard key={profile.id} {...profile}/>) 
                : 
                <></>
        }
      </div>
    </div>
  );
}

export default SearchMentor;