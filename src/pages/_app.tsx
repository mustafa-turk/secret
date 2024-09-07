import dynamic from "next/dynamic";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
const BackgroundCanvas = dynamic(() => import("@/components/canvas"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='canvas-wrapper'>
        <BackgroundCanvas />
      </div>
      <div className='max-w-screen-sm mx-auto'>
        <Component {...pageProps} />
      </div>
    </>
  );
}
