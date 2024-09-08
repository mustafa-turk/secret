import Head from "next/head";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "@/styles/animation.css";

const inter = Inter({
  subsets: ["latin"],
});

const BackgroundCanvas = dynamic(() => import("@/components/canvas"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Secret - Generate Your Password</title>
        <meta
          property='og:title'
          content='Secret - Generate Your Password'
          key='title'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={inter.className}>
        <div className='canvas-wrapper'>
          <BackgroundCanvas />
        </div>
        <div className='max-w-screen-sm mx-auto'>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
