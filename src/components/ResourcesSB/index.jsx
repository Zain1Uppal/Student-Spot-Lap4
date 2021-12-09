import React, {useState, useEffect} from 'react';
import JSONDATA from '../../Resources_data.json';
import { ResourcesList } from '../index';
import './style.css';

export const ResourcesSB = () => {

    const [ searchTerm, setSearchTerm ] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="resources-search-cont">
            <div className="search-book">
                <form>
                    <input type="text" className="book-input" placeholder="Search a resource" onChange={handleChange}></input>
                </form>
            </div>
            {JSONDATA.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <ResourcesList 
                    key={key}
                    name={val.name}
                    author={val.author}
                    year={val.year}
                    subject={val.subject}
                    url={val.url}/>
                )
            })}
            
            
            
        </div>
    )

}

