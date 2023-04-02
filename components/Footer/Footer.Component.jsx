import Style from './Footer.module.scss';
import { SocialMediaData } from './Footer.Helper';
import Link from 'next/link';

export default function Footer() {

  return (
    <section className={ Style.Footer }>
      <div>
        <h1>HTIC CLUB</h1>
        <h2>university badji Mokhtar Annaba</h2>

        <p>© 2023 HTIC Club. All rights reserved.</p>
      </div>
      <div className={ Style.Contact }>
        <h1>Connect with Us</h1>
        <div>
          { SocialMediaData.map((e) => (
              <Link key={ e.Name } href={ e.link }>
                { e.icon }
              </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
