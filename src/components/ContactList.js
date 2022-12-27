//import React from 'react'
import React, { useEffect, useState } from 'react';
import '../index.css';

function ContactList() {
 const [contacts, setContacts] =useState([]);
 useEffect(() => {
  fetch("http://localhost:5000/contacts" )
    .then((r) => r.json())
 .then((contacts) => setContacts(contacts))
}, []);
 const displayContacts=contacts.map(contact=><ul key={contact.id} className="myUL" >
  {contact.name} {contact.email} {contact.phone}
  <i  className='trash alternate outline icon right floated' 
                        style={{color:"red", fontSize:"15px", marginLeft:"10px"}} 
                        onClick={() => removeContact(contact)}
                       >
                    </i></ul>)
//  function handleAdd(newData){
//   console.log("In ContactList:", newData);
//   setContacts([...contacts, newData]);
//  }

 function removeContact (selectedContact) {
if (contacts.find((contact)=>contact===selectedContact)){
  setContacts(contacts.filter((contact)=>contact !==selectedContact))
  fetch(`http://localhost:5000/contacts/${selectedContact.id}`, {
        method: 'DELETE'
      });
}
}
 
 return (
<div className='rowC'>
  <div>{displayContacts}
  </div>

</div>

 )
}

export default ContactList