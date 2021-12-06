import React, {useState, useEffect} from 'react';
import { ResourcesList } from '../index';
import './style.css';

export const ResourcesSB = () => {

    const educationList = [
        { "id": 1, "title":  "The Economics Book", "author": "Niall Kishtainy", "year": "2014", "link": "https://www.google.co.uk/books/edition/The_Economics_Book/vTq2BQAAQBAJ?hl=en", "subject": "Economics"},
        { "id": 2,"title":  "Panedmic Economics", "author": "Thomas R. Sadler", "year": "2021", "link": "https://www.google.co.uk/books/edition/Pandemic_Economics/F_QxEAAAQBAJ?hl=en&gbpv=1&dq=economics&printsec=frontcover", "subject": "Economics"},
        { "id": 3,"title":  "Maths Unwrapped", "author": "Mattias Ribbing", "year": "2020", "link": "https://www.google.co.uk/books/edition/Maths_Unwrapped/fOsZvAEACAAJ?hl=en", "subject": "Maths"},
    ]

    

    

    return (
        <div className="resources-search-cont">
            <div className="search-book">
                <form>
                    <input type="text" className="book-input" placeholder="Search a resource"></input>
                </form>
            </div>
            {educationList.map((book, key) => {
                return(
                    <ResourcesList 
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    year={book.year}
                    link={book.link}
                    subject={book.subject}/>
                   


                )
            })}
            
        </div>
    )

}