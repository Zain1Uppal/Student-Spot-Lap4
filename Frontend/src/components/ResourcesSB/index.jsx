import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ResourcesList } from '../index';
import './style.css';

export const ResourcesSB = () => {

    const [ items, setItems ] = useState([]);
    const [ searchItem, setSearchItem ] = useState('');

    useEffect(() => {
        const fetchItemsAPI = async () => {
            const result = await axios.get('https://flask-api-funfacts.herokuapp.com/fun_facts')
            console.log(result.data)
            setItems(result.data)
        }
        fetchItemsAPI();
    }, [])

    const handleChangeSB = (e) => {
        setSearchItem(e.target.value)
    }

    // const filteredBooks = items.filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase()))


    

    return (
        <div className="resources-search-cont">
            <div className="search-book">
                <form>
                    <input type="text" className="book-input" placeholder="Search a resource" onChange={handleChangeSB}></input>
                </form>
            </div>
            <ResourcesList />
            
            
            {/* {filteredBooks.map(book => {
                return(
                    <ResourcesList 
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    year={book.year}
                    subject={book.subject}
                    link={book.link}/>
                   


                )
            })} */}
            
        </div>
    )

}