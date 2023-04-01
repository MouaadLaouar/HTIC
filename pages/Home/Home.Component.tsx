import React from 'react'
import Style from './Home.module.scss';
import Hero1 from '@/assets/Home/Hero1.png';
import Hero2 from '@/assets/Home/Hero2.png';
import Hero3_1 from '@/assets/Home/Hero3_1.png';
import Hero3_2 from '@/assets/Home/Hero3_2.png';
import Image from 'next/image';
import Link from 'next/link';
import { logoImg } from '../../lib/Home.Helper';


export default function Home() {


  return (
    <section className={ Style.Home }>
      <div className={ Style.Hero1 }>
        <div className={ Style.Content }>
          <h1>Empowering students to explore the wonders of science and technology.</h1>
          <p>We are a community of students who are passionate about science and technology. Our goal is to provide a platform for students to explore their interests in science and connect with like-minded individuals.</p>

          <Link href='/'>
            More
          </Link>
        </div>
        <Image
        src={ Hero1 }
        alt='picture Of the Top the Page'
         />
      </div>

      <div className={ Style.Sponsoring }>
        <div>
          { logoImg.map((e:any, index) => (
            <Image key={index} src={e} alt='/' />
          ))}
        </div>
      </div>

      <div className={ Style.Hero2 }>
        <Image src={ Hero2 }
        alt='/'/>
        <div className={ Style.Hero2Content}>
          <p>Are you interested in exploring the wonders of science and technology? Do you want to learn more about cutting-edge research and advancements in these fields? Then come join us at the Scientific Student Club !
            <br/>We are a community of students who share a passion for science and technology, and our goal is to provide a platform for students to deepen their understanding of these subjects, engage in hands-on learning, and connect with like-minded individuals. Whether you`re an aspiring scientist or simply curious about the world around you, our club has something for everyone.
            <br/>Through guest lectures, interactive workshops, and hands-on experiments, our club provides opportunities for students to gain hands-on experience and learn from experts in the field. We also offer opportunities for students to conduct their own research projects and present their findings to the group.
            <br/>Our club is dedicated to promoting science education and increasing public awareness about the latest advancements in science and technology. By joining the Scientific Student Club, you`ll be part of a supportive community of students who share your passion for these subjects and are committed to exploring them in a fun, engaging, and interactive manner.
            <br/>So what are you waiting for? Join us today and start exploring the exciting world of science and technology!</p>
          
          <Link href='/Join' className={ Style.link}>
          JOIN HTIC CLUB
          </Link>

          <p className={ Style.Keep }>Keep in mind that the club operates during the university academic year.</p>
        </div>
      </div>

      <div className={ Style.Hero3 }>
        <h1>HTIC regularly organizes events that allow students to engage in hands-on learning experiences and to explore their interests in science and technology. These events are designed to be interactive, educational, and fun, and they offer students the opportunity to learn from experts in the field and to connect with like-minded individuals.</h1>
        <div>
          <Image src={ Hero3_1 } alt='/' />
          <Image src={ Hero3_2 } alt='/' />
        </div>
      </div>
    </section>
  )
}

