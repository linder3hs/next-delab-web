import Image from "next/image";
import Link from "next/link";
import type { CardItem } from "@/types/core";

interface Props extends CardItem {}

export default function Card({ image, title, price, description }: Props) {
  return (
    <div
      className="rounded-xl border border-gray-200 shadow-lg flex flex-col"
    >
      <div className="flex justify-center h-44 bg-gray-100 rounded-t-xl">
        <Image
          src={image}
          alt={title}
          title={title}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-5 p-3">
        <h2 aria-label={title} className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700 hover:transition-all ease-in-out delay-150 duration-300 hover:line-clamp-none line-clamp-4">
          {description}
        </p>
        {price ? (
          <div className="flex justify-between items-center mt-10">
            <p className="text-primary text-lg font-bold">S/ {price}</p>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=51967617166&text=Hola%20quiero%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20Delab%20%F0%9F%98%80"
            >
              <button aria-label="Incribete ya!" className="bg-primary text-white py-2 px-4 text-sm rounded-md">
                Inscribete ya!
              </button>
            </Link>
          </div>
        ): (
          <div>
            <Link href={`/info/${title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-")}`}>
              <button aria-label="Ver más" className="bg-primary text-white py-2 px-4 text-sm rounded-md">
                Ver más
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
