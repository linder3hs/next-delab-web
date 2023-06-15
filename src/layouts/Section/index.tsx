interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: Props) {
  return <section className={`my-10 lg:my-20 lg:mx-32 ${className}`}>{children}</section>;
}
