import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
  price?: string;
}

export default function Card({ image, title, price, description }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 shadow-lg flex flex-col">
      <div className="flex justify-center h-44 bg-gray-100 rounded-t-xl">
        <Image
          src={image}
          alt="React JS"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-5 p-3">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-gray-700 hover:transition-all ease-in-out delay-150 duration-300 hover:line-clamp-none line-clamp-4">
          {description}
        </p>
        <div className="flex justify-between items-center mt-10">
          {price && (
            <p className="text-primary text-lg font-bold">S/ {price}</p>
          )}
          <button className="bg-primary text-white py-2 px-4 rounded-md">
            Inscribete ya!
          </button>
        </div>
      </div>
    </div>
  );
}
