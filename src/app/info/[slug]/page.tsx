import { Section } from "@/layouts";
import Image from "next/image";
import { Rating, Tabs } from "@/components";
import { coursesImages } from "@/mockData/courses";
import { Agenda, Buy, Description, Ratings } from "./components";

export default function Page(params: { params: { slug: string } }) {
  const { slug } = params.params;

  const images: any = {
    "react-js": "react",
    "android-kotlin": "kotlin",
    "ui-ux": "ui",
    "next-js": "next",
  }

  return (
    <Section>
      <div className="flex gap-10 items-center">
        <div>
          <Image
            src={coursesImages[images[slug]]}
            alt={slug}
            title={slug}
            width={80}
            height={80}
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Curso de <span className="capitalize">{slug.replaceAll("-", " ")}</span>
          </h1>
          <Rating rating={5} className="mt-2" />
        </div>
      </div>
      <div className="mt-10">
        <Tabs
          titles={["Descripción", "Temario", "Valoraciones", "Comprar"]}
          content={[
            <Description key={1} />,
            <Agenda key={2} />,
            <Ratings key={3} />,
            <Buy key={4} />,
          ]}
        />
      </div>
    </Section>
  );
}
