import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import './style.css';
import { Header } from '../../layout';
import { LeftSideBar } from '../../components';
import * as urls from '../../Urls'

export function Category() {
  const [category, setCategory] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const [loading, setLoading] = useState(true);
  let { cateId } = useParams()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.replace(`${urls.origin}/login`);
    } else {
      fetch(`${urls.api}/posts/categories/${cateId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => {
          if (res.status === 200) {
            return res.json()
          } else {
            localStorage.clear()
            window.location.replace(`${urls.origin}/login`);
          }
        })
        .then(data => {
          setCategoryID(data.data.id);
          setCategory(data.data.name)
          setLoading(false);
        });
    }
  }, []);


  return (
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