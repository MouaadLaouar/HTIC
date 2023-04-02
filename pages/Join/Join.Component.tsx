import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import Style from './Join.module.scss';
import { JoinStyle } from '../../Helpers/Join.Style';
import {ThemeProvider} from '@mui/material';
import { addMember } from '../../Helpers/Join.Helper';
import JoinImg from '@/assets/Join/Join.jpg';
import Image from 'next/image';

export default function Join() {
  // create member
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Education, setEducation] = useState('');

  // Social Media
  // const [Facebook, setFacebook] = useState('');
  // const [Instagrame, setInstagrame] = useState('');
  // const [Website, setWebsite] = useState('');
  // const [Twitter, setTwitter] = useState('');
  // const [LinkedIn, setLinkedIn] = useState('');


  return (
    <section className={ Style.Join }>
      <ThemeProvider theme={ JoinStyle }>
          <Image alt='/' src={ JoinImg } width={400} height={700}/>
          <section className={ Style.JoinContent }>
            <section>
              <Typography variant='h1'>
                JOIN OUR HTIC CLUB
              </Typography>
              <Typography variant='body1'>
                if you want to be a part of a community of students who share your passions and interests, we invite you to complete the membership form and join our Scientific Student Club today!
              </Typography>
            </section>
            <div>
              <TextField id='FirstName' label='First Name' variant="outlined" onChange={(event) => { setFirstName(event.target.value) }}/>
              <TextField id='LastName' label='Last Name' variant="outlined" onChange={(event) => { setLastName(event.target.value) }}/>
            </div>
            <TextField id='Email' label='Email' variant="outlined" onChange={(event) => { setEmail(event.target.value) }}/>
            <TextField id='Phone' label='Phone' variant="outlined" onChange={(event) => { setPhone(event.target.value) }}/>
            <TextField id='Degree' label='What degree are you studying?' variant="outlined" onChange={(event) => { setEducation(event.target.value) }}/>

            <Button variant="contained" onClick={() => { addMember(FirstName, LastName, Email, Phone, Education)}}>
              JOIN
            </Button>
          </section>
        
      </ThemeProvider>
    </section>
  )
}
