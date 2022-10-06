import React from 'react'
//import ContactList from './ContactList';
import contacts from '../image/contacts.png';

function Home() {
  return (
    <div className="home">
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-lg-7">
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src={contacts}
            alt=""
          />
        </div>
        <div className="col-lg-5">
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home