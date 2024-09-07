import Button from "@/components/button";
import Copy from "@/components/copy";

import useSekretGenerator from "../hooks/use-sekret-generator";
import Header from "@/components/header";
import Head from "next/head";

const SEKRET_TYPES = {
  SHORT: "Short",
  MEDIUM: "Medium",
  LONG: "Long",
};

const SEKRET_LENGTH = {
  SHORT: 16,
  MEDIUM: 32,
  LONG: 64,
};

export default function Home() {
  const [sekret, sekretLength, setSekretLength] = useSekretGenerator();

  return (
    <main className='p-3 pt-10 h-screen'>
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
        <span className='bg-black bg-opacity-10 p-1 px-2 rounded-full text-xs inline-block mb-2 uppercase tracking-tight'>
          Open Source
        </span>
        <h1 className='text-4xl font-black tracking-tight text-zinc-950'>
          Generate Your Password
        </h1>
        <p className='mb-10'>
          It is for your eyes only, we do not save anything.
        </p>
        <div className='rounded-3xl bg-white p-3 flex flex-col gap-3 backdrop-blur-md bg-white/60 border border-zinc-200'>
          <div className='flex gap-3'>
            {Object.keys(SEKRET_TYPES).map((type) => (
              <Button
                key={type}
                onClick={() =>
                  setSekretLength(
                    SEKRET_LENGTH[type as keyof typeof SEKRET_LENGTH]
                  )
                }
                selected={
                  SEKRET_LENGTH[type as keyof typeof SEKRET_LENGTH] ===
                  sekretLength
                }
              >
                {SEKRET_TYPES[type as keyof typeof SEKRET_TYPES]}
              </Button>
            ))}
          </div>
          <div className='flex bg-white rounded-2xl p-1 border border-zinc-200 items-center'>
            <div className='w-full mr-2 relative'>
              <input
                className='rounded-full w-full text-xl font-bold pl-2 focus:outline-none bg-white text-zinc-950 disabled:opacity-100'
                value={sekret}
                disabled
              />
              <div className='absolute right-0 h-full top-0 w-[40px] bg-gradient-to-r from-white/10 to-white' />
            </div>
            <Copy value={sekret} />
          </div>
        </div>
      </div>
    </main>
  );
}
