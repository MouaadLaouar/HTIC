import Layout from '@/Layout/Layout.Component';
import '@/styles/globals.css'
// import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
