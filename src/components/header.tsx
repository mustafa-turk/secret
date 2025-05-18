import { GitIcon, ArrowRight } from "@/components/icon";
import { codeFont } from "@/helpers/fonts";

export default function Header() {
  return (
    <a
      href='https://github.com/mustafa-turk/secret'
      target='_blank'
      rel='noreferrer'
    >
      <div className='hover:bg-zinc-500/15 gap-1 transition-colors backdrop-blur-md bg-white/70 border border-zinc-200 max-w-[340px] mx-auto pl-3 pr-2 py-2 rounded-full mb-24 flex items-center justify-between'>
          <GitIcon fill='#000' className="opacity-70" size={21} />
          <span className={`text-sm ${codeFont.className} opacity-70`}>Checkout source code on GitHub</span>
          <ArrowRight fill='#000' size={21} className="opacity-70" />
      </div>
    </a>
  );
}
