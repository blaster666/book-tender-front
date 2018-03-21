import Router from "next/router";
import React,{ Component } from 'react'
import fetch from'isomorphic-unfetch'
const About = (props) => {
  return (
    
    <div>
      back
      {props.allBooks.map((book) => {
        return (
          <h1 key={book.id}>
            {book.bookName}
            <img height="200" width="200" src={book.image}/>
          </h1>
        )
        })
      }
    </div>
  )
}

About.getInitialProps = async () => {
  const data = await fetch(`https://book-tender.herokuapp.com/api/books`)
  const books = await data.json()
  console.log('eiei')
  const allBooks = Object.keys(books).map(key => ({ id: key, ...books[key] }))
  return {
    allBooks
  }
}

export default About