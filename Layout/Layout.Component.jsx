import Head from 'next/head'
import { FC } from 'react'
import Container from '@mui/material/Container';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';

// interface Props {
//     children : any
// }

const Layout = ({children}) => {
    const router = useRouter();
    const { route } = router;

    const CurrentPage = () => {
        if(route === '/Admin') {
            return true;
        } else {
            return false;
        }
    }
  return (
    <>
    <Container>
        <Head>
            <title>HTIC CLUB</title>
            <meta name="description" content="Htic club website" />
            <link rel="icon" href='/favicon-32x32.png'/>
        </Head>

        <section className='Body'>
            {
                CurrentPage() ? (
                    <>
                        { children }
                    </>
                ) : (
                    <>
                        <NavBar />
                        <main>
                            { children }
                        </main>
                        <Footer />
                    </>
                )
            }
        </section>
    </Container>
    </>
  )
}

export default Layout;