import { GitIcon } from "@/components/icon";

export default function Header() {
  return (
    <div className='bg-zinc-950 text-left max-w-[300px] mx-auto pl-4 pr-2 py-2 rounded-full mb-16 flex items-center justify-between'>
      <p className='font-black text-white text-xl tracking-tight uppercase'>
        Secret
      </p>
      <button className='bg-zinc-800 p-1 rounded-full'>
        <GitIcon fill='#fff' size={26} />
      </button>
    </div>
  );
}
