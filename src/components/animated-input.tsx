import { motion } from "framer-motion";

type Props = {
  value: string;
};

export default function AnimatedInput({ value }: Props) {
  return (
    <motion.input
      key={value}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      className='rounded-full w-full text-xl font-semibold pl-2 focus:outline-none bg-white text-zinc-950 disabled:opacity-100 overflow-x-scroll select-none'
      value={value + "    "}
      disabled
    />
  );
}
