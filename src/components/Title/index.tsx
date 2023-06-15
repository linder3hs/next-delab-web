import { Section } from "@/layouts";

interface Props {
  id?: string;
  title?: string;
  text?: string;
}
export default function Title({ id, title, text }: Props) {
  return (
    <Section id={id}>
      {title && <h1 className="text-4xl font-semibold">{title}</h1>}
      {text && (
        <p className="my-4 text-xl font-medium text-gray-400 w-3/4">{text}</p>
      )}
    </Section>
  );
}
