import Image from "next/image";
import type { CardItem } from "@/types/core";

interface Props extends CardItem {}

export default function Teacher({ title, description, image }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={image}
        alt={title}
        title={title}
        width={200}
        height={200}
        className="rounded-full h-48 object-cover"
      />
      <h2 aria-label={title} className="my-3 font-bold text-xl">
        {title}
      </h2>
      <p aria-label={description}>{description}</p>
    </div>
  );
}
