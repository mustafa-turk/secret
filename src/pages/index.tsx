import AnimatedInput from "@/components/animated-input";
import Button from "@/components/button";
import Copy from "@/components/copy";
import Header from "@/components/header";
import Section from "@/components/section";
import Refresh from "@/components/refresh";

import useSecretGenerator from "@/hooks/use-secret-generator";

import { SECRET_LENGTH, SECRET_TYPES, SecretType } from "@/constants";

export default function Home() {
  const [secret, secretLength, regenerateSecret, setSecretLength] =
    useSecretGenerator();

  return (
    <>
      <Section>
        <Header />
        <span className='font-medium bg-black bg-opacity-10 p-1 px-2 rounded-full text-xs inline-block mb-4 uppercase tracking-tight text-zinc-500'>
          Open Source
        </span>
        <h1 className='text-4xl font-black tracking-tight text-zinc-950 mb-2'>
          Generate Your Password
        </h1>
        <p className='mb-10'>Your secure passwords, only for your eyes.</p>
      </Section>

      <Section>
        <div className='generator rounded-3xl bg-white p-3 flex flex-col gap-3 backdrop-blur-md bg-white/70 border border-zinc-200'>
          <div className='flex gap-3'>
            {Object.keys(SECRET_TYPES).map((type) => {
              const secretType = type as SecretType;
              return (
                <Button
                  key={type}
                  onClick={() => setSecretLength(SECRET_LENGTH[secretType])}
                  selected={SECRET_LENGTH[secretType] === secretLength}
                >
                  {SECRET_TYPES[secretType]}
                </Button>
              );
            })}
          </div>
          <div className='flex bg-white rounded-2xl p-1 border border-zinc-200 items-center'>
            <div className='w-full mr-2 relative'>
              <AnimatedInput value={secret} />
              <div className='absolute right-0 h-full top-0 w-[30px] bg-gradient-to-r from-transparent to-white' />
            </div>
            <Refresh onClick={regenerateSecret} />
            <Copy value={secret} />
          </div>
        </div>
      </Section>

      <Section>
        <div className='text-zinc-500 text-center mt-10 text-sm'>
          <a href='https://mustafaturk.com' target='_blank' rel='noreferrer'>
            Created by Mustafa Türk
          </a>
        </div>
      </Section>
    </>
  );
}
