import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='antialiased h-screen overflow-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
