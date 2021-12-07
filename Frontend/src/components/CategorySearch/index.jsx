import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './style.css'
import { CategoryList } from '../CategoryList';


export const CategorySearch = () => {

    const [ groups, setGroups ] = useState([]);
    const [ search, setSearch ] = useState('');

    useEffect(() => {
        async function fetchGroupAPI() {
            try {
                let options = { headers: {'Accept': 'application/json'} }
                //change API to correct one
                let { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false', options)
                setGroups(data)
            } catch (err) {
                console.warn(err);
                setGroups("Cannot fetch groups API")
            }
        } fetchGroupAPI();
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredGroups = groups.filter(group => group.name.toLowerCase().includes(search.toLowerCase())
    )

    return(
        <div className="category-search-div">
            <h1>Groups</h1>
            <div className="search-category">
                <form>
                    <input type="text" placeholder="Search a Group" className="group-input" onChange={handleChange}></input>
                </form>
            </div>
            <div className="cate-list-cont">
                {filteredGroups.map(group => {
                    return (
                        <CategoryList 
                        key={group.id}
                        icon={group.image}
                        groupname={group.name}/>
                    )
                })}
            </div>
            
        </div>
    )
}