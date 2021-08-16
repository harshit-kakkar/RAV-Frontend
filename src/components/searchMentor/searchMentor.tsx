import React, { useState } from 'react';
import SearchProfileCard from '../searchProfileCard/searchProfileCard';
import './searchMentorStyles.css'

import { RootState } from '../../reducers';
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

interface profileCardModel{
    id:number,
    name: string,
    domain: string
}

function SearchMentor() {
    const history = useHistory();

    const jwtToken = useSelector((state: RootState) => state.jwtToken)

    const [selectedDomain, setSelectedDomain] = useState('Backend');
    const [searchResult, setSearchResult] = useState([]);

    async function searchUsers() {
        let searchResponse = await fetch('https://rav-mentor.herokuapp.com/search?domain='+selectedDomain, {
            headers: {
                'Authorization': 'Bearer ' + jwtToken,
              }
        })
        if (searchResponse.status === 200){
            let searchResponseJson = await searchResponse.json();
            setSearchResult(searchResponseJson);
        }else if(searchResponse.status === 403){
            history.push("/login")
        }
    }

  return (
    <div className="search-mentor-container">
      <div className="search-operation-container">
          <div className="search-domain-select-container">
          <p>Select a domain </p>
            <select className="search-mentor-domain-select" value={selectedDomain} onChange={(e) => setSelectedDomain(e.target.value)}>
                <option value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
                <option value="Full Stack">Full Stack</option>
                <option value="Mobile App Development">Mobile App Development</option>
            </select>
            </div>
            <button onClick={() => searchUsers()}>Search</button>
      </div>


      <div className="search-mentor-profile-cards-container">
        {
            searchResult.length>0? 
                searchResult.map((profile) => <SearchProfileCard key={profile["id"]} {...profile}/>) 
                : 
                <></>
        }
      </div>
    </div>
  );
}

export default SearchMentor;