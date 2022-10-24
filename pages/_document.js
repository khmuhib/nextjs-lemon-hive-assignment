// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://rsms.me/" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <Script src="/sc.js" strategy="lazyOnload"/>
            </body>
        </Html>
    )
}