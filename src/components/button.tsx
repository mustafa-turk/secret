import classnames from "classnames";

type Props = {
  children: string;
  selected: boolean;
  onClick: () => void;
};

function Button({ children, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={classnames(
        "flex-1 py-3 rounded-full hover:bg-zinc-500/15 transition-colors",
        {
          "bg-zinc-950 text-white hover:bg-zinc-950 font-semibold": selected,
        }
      )}
    >
      {children}
    </button>
  );
}

export default Button;
