import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
export default class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <link rel='stylesheet' href='https://unpkg.com/purecss@2.0.5/build/pure-min.css' integrity='sha384-LTIDeidl25h2dPxrB2Ekgc9c7sEC3CWGM6HeFmuDNUjX76Ert4Z4IY714dhZHPLd' crossOrigin='anonymous' />
          <link rel='stylesheet' href='https://unpkg.com/purecss@2.0.5/build/grids-responsive-min.css' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap' rel='stylesheet' />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
