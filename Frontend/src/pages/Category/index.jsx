import React, { useState, useEffect } from 'react';
import './style.css';
import { Header } from '../../layout';
import { LeftSideBar } from '../../components';

export function Category() {
    const [category, setCategory] = useState('');
    const [categoryID, setCategoryID] = useState('');
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      console.log('before if dashboard')
      if (!localStorage.getItem('token')) {
        console.log('inside first condition')
        window.location.replace('http://localhost:8080/login');
      } else {
        console.log('inside second condition')
        fetch('http://localhost:8000/categories/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`
          }
        })
          .then(res => {if(res.status === 200){
                          return res.json()
                        }else{
                          localStorage.clear()
                          window.location.replace('http://localhost:8080/login');
                        }
                      })
          .then(data => {
            setCategoryID(data.id);
            setCategory(data.name)
            setLoading(false);
          });
      }
    }, []);
  

    return(
        <main>
        <Header />
        {loading === false && (  
        <div className="content">
            <LeftSideBar />
            <h1>{category}</h1>
   
        </div>
        )}
    </main>
      
    )
}