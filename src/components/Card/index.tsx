import Image from "next/image";
import Button from "../Button";

interface Props {
  title: string;
  duration: string;
  price?: string;
}

export default function Card({ title, duration, price }: Props) {
  return (
    <div className="rounded-xl border shadow">
      <Image
        alt=""
        src="https://avatars.githubusercontent.com/u/20673011?v=4"
        width={289}
        height={210}
      />
      <div className="flex flex-col gap-5 p-3">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-gray-400 text-sm">Duration: {duration}</p>
        {price && <p className="text-gray-400 text-sm">Price: S/ {price}</p>}
        <Button text="Inscribete ya!" />
      </div>
    </div>
  );
}
