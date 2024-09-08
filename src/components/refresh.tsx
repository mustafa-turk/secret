import { motion } from "framer-motion";
import { RefreshIcon } from "@/components/icon";

type Props = {
  onClick: () => void;
};

export default function Refresh({ onClick }: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      className='p-3 rounded-xl font-semibold'
      onClick={onClick}
    >
      <RefreshIcon size={24} />
    </motion.button>
  );
}
