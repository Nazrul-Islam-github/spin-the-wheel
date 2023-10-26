import { Html, Head, Main, NextScript } from 'next/document'
import { useContext } from 'react';
import wheelContext from '@/context/wheelContext';
export default function Document() {
  const context = useContext(wheelContext);
  // const {nigthMode} = context
  return (
    <Html lang="en">
      <Head>


<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"/>


<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
