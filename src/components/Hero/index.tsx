import Image from "next/image";
import { Button } from "@/components";
import hero from "@/../public/assets/hero.png";

export default function Hero() {
  return (
    <section className="flex items-center justify-around h-[30rem] lg:h-screen lg:px-40">
      <div className="w-full lg:w-3/6 md:m-auto">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black md:w-4/5 mb-10">
          Amplía tus conocimientos con los cursos en línea de Onlearning
        </h1>
        <Button text="Explorar cursos" type="primary" />
      </div>
      <div className="hidden md:block">
        <Image alt="delab" src={hero} />
      </div>
    </section>
  );
}
