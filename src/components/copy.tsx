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

  return (
    <button
      className={classNames(
        "bg-zinc-100 p-3 rounded-xl hover:bg-zinc-200 transition-colors duration-300 ease-out font-semibold",
        {
          "bg-green-600 hover:bg-green-600 text-white":
            copyText === COPY_STATES.COPIED,
        }
      )}
      onClick={handleCopy}
    >
      {copyText}
    </button>
  );
}
