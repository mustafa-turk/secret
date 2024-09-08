import { AnimatePresence, motion } from "framer-motion";
import { RefreshIcon, SpinnerIcon } from "@/components/icon";
import { useState } from "react";

type Props = {
  onClick: () => void;
};

export default function Refresh({ onClick }: Props) {
  const [loading, setLoading] = useState(false);

  function showLoading() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      disabled={loading}
      className='p-3 rounded-xl font-semibold'
      onClick={() => {
        showLoading();
        onClick();
      }}
    >
      <AnimatePresence>
        {loading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          >
            <SpinnerIcon size={24} className='text-zinc-400' />
          </motion.div>
        ) : (
          <motion.div>
            <RefreshIcon size={24} className='text-zinc-950' />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
