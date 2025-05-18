import Head from "next/head";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";

import { defaultFont } from "@/helpers/fonts";

import "@/styles/globals.css";
import "@/styles/animation.css";

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
        <meta
          property='og:description'
          content='Your secure passwords, only for your eyes.'
          key='description'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={defaultFont.className}>
        <div className='canvas-wrapper'>
          <BackgroundCanvas />
        </div>
        <div className='max-w-screen-sm mx-auto p-3 h-screen text-center'>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
