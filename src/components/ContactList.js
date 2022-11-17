//import React from 'react'
import React, { useEffect, useState } from 'react';
import AddContact from './AddContact';
import '../index.css';

function ContactList() {
 const [contacts, setContacts] =useState([]);
 useEffect(() => {
  fetch(`https://projectapi01.herokuapp.com/contacts` )
    .then((r) => r.json())
 .then((contacts) => setContacts(contacts))
}, []);
 const displayContacts=contacts.map(contact=><ul key={contact.name}>
  {contact.name} {contact.email}
  <i  className='trash alternate outline icon right floated' 
                        style={{color:"black", fontSize:"15px", marginLeft:"10px"}} 
                        onClick={() => removeContact(contact)}
                       >
                    </i></ul>)
 function handleAdd(newData){
  console.log("In ContactList:", newData);
  setContacts([...contacts, newData]);
 }

 function removeContact (selectedContact) {
if (contacts.find((contact)=>contact===selectedContact)){
  setContacts(contacts.filter((contact)=>contact !==selectedContact))
  fetch(`http://localhost:5000/contacts/${selectedContact.id}`, {
        method: 'DELETE'
      });
}
}
 
 return (
<div >
<AddContact onAddData={handleAdd}
/>
<div className='rowC'>
  <div>{displayContacts}
  </div>

</div>
</div>
 )
}

export default ContactList