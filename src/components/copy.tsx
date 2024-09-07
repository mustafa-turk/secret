import classNames from "classnames";
import { useState } from "react";

const COPY_STATES = {
  COPY: "Copy",
  COPIED: "Copied!",
};

type Props = {
  value: string;
};

export default function Copy({ value }: Props) {
  const [copyText, setCopyText] = useState(COPY_STATES.COPY);

  function handleCopy() {
    setCopyText(COPY_STATES.COPIED);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setCopyText(COPY_STATES.COPY);
    }, 3000);
  }

  console.log(copyText === COPY_STATES.COPIED);

  return (
    <button
      className={classNames(
        "p-3 rounded-xl transition-colors duration-300 ease-out font-semibold",
        {
          "bg-green-600 hover:bg-green-600 text-white":
            copyText === COPY_STATES.COPIED,
          "bg-zinc-100 hover:bg-zinc-200 text-black":
            copyText === COPY_STATES.COPY,
        }
      )}
      onClick={handleCopy}
    >
      {copyText}
    </button>
  );
}
