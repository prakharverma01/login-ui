import React from 'react';
import '../App.css';
import { Typography, Link } from '@material-ui/core';
import ContactDetails from '../Models/ContactDetails'

interface IContactDetails {
  contactDetails: ContactDetails
}

const ContactUs = (props: IContactDetails) => {
  let fb = props.contactDetails.facebook
  let lin = props.contactDetails.linkedIn
    return (
      <div className="App">
        <Typography style={{position: "absolute", top: "101%", left: "2%", fontSize: 10}}>Let's get in touch ?</Typography>
        <Typography style={{position: "absolute", top: "101%", right: "2%", fontSize: 10}}>
            <Link href={lin}>LinkedIn</Link>    
        </Typography>
        <Typography style={{position: "absolute", top: "101%", right: "20%", fontSize: 10}}>
            <Link href={fb}>Facebook</Link>    
        </Typography>
      </div>
      );
}

export default ContactUs;
