import { GitIcon } from "@/components/icon";

export default function Header() {
  return (
    <div className='bg-zinc-950 text-left max-w-[300px] mx-auto pl-4 pr-2 py-2 rounded-full mb-12 flex items-center justify-between'>
      <p className='font-extrabold text-white text-md tracking-tight uppercase'>
        secret
      </p>
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
