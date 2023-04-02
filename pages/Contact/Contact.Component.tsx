import Image from 'next/image';
import Style from './Contact.module.scss';
import ContactHero from '@/assets/Contact/Contact.png';
import { TextField, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material';
//import { ContactFormStyle } from './lib/Contact.Style';
import ContactFormStyle  from '../../Helpers/Contact.Style';
import { useState } from 'react';
import { SendMessage } from '../../Helpers/Contact.Helper';

import { useRouter } from 'next/router';

export default function Contact() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Message, setMessage] = useState('');

  const router = useRouter()
  const { route } = router                              
  console.log(route)

  return (
    <section className={ Style.Contact }>
      <Image alt='Picture' src={ ContactHero } />
      
      <div className={ Style.ContactFrom }>
        <h1>
          Get in <span>Touch</span>
        </h1>
        <p>
          Have a question or want to get in touch with HTIC ? We`d love to hear from you! Fill out the form below or send us an email <span>contact@htic.club</span> and a member of our team will get back to you as soon as possible.
        </p>

        <section className={ Style.ContactForm }>
          <ThemeProvider theme={ ContactFormStyle }>
            <div>
              <TextField id='FirstName' label='First Name' variant="outlined" sx={{ marginRight: '15px'}} onChange={(event:any) => {setFirstName(event.target.value)}}/>
              <TextField id='LastName' label='Last Name' variant="outlined" onChange={(event:any) => {setLastName(event.target.value)}}/>
            </div>
            <TextField id='Email' label='Email' variant="outlined" onChange={(event:any) => {setEmail(event.target.value)}}/>
            <TextField id='Phone' label='Phone' variant="outlined" onChange={(event:any) => {setPhone(event.target.value)}}/>
            <TextField id='YourMessage' label='Your message' multiline rows={8} variant="outlined" onChange={(event:any) => {setMessage(event.target.value)}}/>

            <Button variant="contained" onClick={() => {
              SendMessage(FirstName, LastName, Email, Phone, Message)
            }}>Send</Button>
          </ThemeProvider>

          
        </section>
      </div>
    </section>
  )
}
