//import React from 'react'
import React, { useState } from 'react';
import '../index.css';
import icon from '../image/icon.png';

function AddContact({onAddData}) {
  const[name, setName]=useState("");
  const[email, setEmail]=useState("");

  function handleSubmit(e){
  e.preventDefault();

  const itemData = {
    name: name,
    email: email,
  };
  console.log(itemData);
  fetch("http://localhost:5000/contacts", {
    method: "POST",
    //DataType: "text",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  })
  .then((r) => r.json())
    .then((newData) => onAddData(newData,));
    
  }
  const nameHandler = () => event =>{
    setName(event.target.value);
  };
  const emailHandler = () => event =>{
    setEmail(event.target.value);
  };
    return (
      <div className='container'>
        <form style={{display: "inline-block"}}>
          <div>
          <img className='ui avatar image' src={icon} alt='icon'/>
            <label>Name</label>
            <input type="text" name="name" placeholder="Name"  onChange={nameHandler()}/>
          </div>
          <div>
          <img className='ui avatar image' src={icon} alt='icon'/>
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" onChange={emailHandler()}/>
          </div>
          <button onClick={handleSubmit}>Add</button>
        </form>
      </div>
    );
  }

export default AddContact;