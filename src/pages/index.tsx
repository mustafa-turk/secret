import Head from "next/head";
import { motion } from "framer-motion";

import Button from "@/components/button";
import Copy from "@/components/copy";
import Header from "@/components/header";
import Refresh from "@/components/refresh";

import useSecretGenerator from "@/hooks/use-secret-generator";

import { SECRET_LENGTH, SECRET_TYPES } from "@/constants";

export default function Home() {
  const [secret, secretLength, regenerateSecret, setSecretLength] =
    useSecretGenerator();

  return (
    <div className='p-3 h-screen'>
      <Head>
        <title>Secret - Generate Your Password</title>
        <meta
          property='og:title'
          content='Secret - Generate Your Password'
          key='title'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='text-center'>
        <Header />
        <span className='font-semibold bg-black bg-opacity-10 p-1 px-2 rounded-full text-xs inline-block mb-4 uppercase tracking-tight'>
          Open Source
        </span>
        <h1 className='text-4xl font-black tracking-tight text-zinc-950 mb-2'>
          Generate Your Password
        </h1>
        <p className='mb-10'>Your secure passwords, only for your eyes.</p>
        <div className='generator rounded-3xl bg-white p-3 flex flex-col gap-3 backdrop-blur-md bg-white/70 border border-zinc-200'>
          <div className='flex gap-3'>
            {Object.keys(SECRET_TYPES).map((type) => (
              <Button
                key={type}
                onClick={() =>
                  setSecretLength(
                    SECRET_LENGTH[type as keyof typeof SECRET_LENGTH]
                  )
                }
                selected={
                  SECRET_LENGTH[type as keyof typeof SECRET_LENGTH] ===
                  secretLength
                }
              >
                {SECRET_TYPES[type as keyof typeof SECRET_TYPES]}
              </Button>
            ))}
          </div>
          <div className='flex bg-white rounded-2xl p-1 border border-zinc-200 items-center'>
            <div className='w-full mr-2 relative'>
              <motion.input
                key={secret}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "backInOut",
                }}
                className='rounded-full w-full text-xl font-semibold pl-2 focus:outline-none bg-white text-zinc-950 disabled:opacity-100'
                value={secret}
                disabled
              />
              <div className='absolute right-0 h-full top-0 w-[40px] bg-gradient-to-r from-white/10 to-white' />
            </div>
            <Refresh onClick={regenerateSecret} />
            <Copy value={secret} />
          </div>
        </div>
      </div>
      <div className='text-zinc-500 text-center mt-10 text-sm'>
        Created by{" "}
        <a href='https://mustafaturk.com' target='_blank' rel='noreferrer'>
          Mustafa Türk
        </a>
      </div>
    </div>
  );
}
