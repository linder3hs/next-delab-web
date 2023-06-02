interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: Props) {
  return <section className={`my-20 mx-32 ${className}`}>{children}</section>;
}
