import React from 'react'
import { useState } from 'react'
export const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  var Myemail='geetanjali20204@gmail.com';
  function handleSubmit(){
    const mailtoLink = `mailto:${Myemail}?subject=Contact Form Submission&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailtoLink;
  }


  return (
    <div className='contact-mainPage'>
      <div className='contact-container'>
      <label for="fname">Email</label><br/>
      <input type="text" id="fname" name="fname" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
      <label for="fname">Phone</label><br/>
      <input type="text" id="fname" name="fname"/><br/>
      <label for="fname">Message</label><br/>
      <textarea name="message" rows="10" cols="30" value={message}
        onChange={(e) => setMessage(e.target.value)}/>
      <div className="wrap">
  <button className="contact-send" onClick={handleSubmit}>Send</button>
</div>
    </div>
    </div>
  )
}
