type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function Section({ children }: Props) {
  return <div>{children}</div>;
}
