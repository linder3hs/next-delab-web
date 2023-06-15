interface Props {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className, id }: Props) {
  return <section id={id} className={`my-10 lg:my-20 lg:mx-32 ${className}`}>{children}</section>;
}
