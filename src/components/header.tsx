import { GitIcon, PasswordIcon } from "@/components/icon";
import Link from "next/link";

export default function Header() {
  return (
    <div className='bg-zinc-950 text-left max-w-[300px] mx-auto pl-3 pr-2 py-2 rounded-full mb-12 flex items-center justify-between'>
      <Link href='/'>
        <p className='font-extrabold text-white text-md tracking-tight uppercase flex justify-center items-center gap-1'>
          <PasswordIcon size={20} className='opacity-85' />
        </p>
      </Link>
      
      <a
        href='https://github.com/mustafa-turk/secret'
        target='_blank'
        rel='noreferrer'
      >
        <GitIcon fill='#fff' size={26} />
      </a>
    </div>
  );
}
