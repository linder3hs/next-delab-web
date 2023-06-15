import Link from "next/link";

interface Props {
  text: string;
  href: string;
}

export default function LinkItem({ text, href }: Props) {
  return (
    <li>
      <Link href={href} className="hover:text-primary">
        {text}
      </Link>
    </li>
  );
}
