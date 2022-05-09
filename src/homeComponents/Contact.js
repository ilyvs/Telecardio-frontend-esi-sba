import React from 'react';
import { send  } from 'emailjs-com';

let state = {
    sender_email: '',
    body_email: ''
}

const onSubmitContactForm = (event) =>{
    const email = {
        sender: event.target[0].value,
        body: event.target[1].value
    }
    console.log(email)
    event.preventDefault();

    send(
        'SERVICE ID',
        'TEMPLATE ID',
        email,
        'User ID'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
}


const Contact = () => {
    return (
        <div className="contact-form_homepage">
            <form onSubmit={onSubmitContactForm}>
                <input type="email" placeholder="your email" /><br/>
                <textarea placeholder="write your comment here ..." rows="4" cols="50" /><br/>
                <button type="submit" className="_homepage bg-dark">submit</button>
            </form>
        </div>
    );
};

export default Contact;