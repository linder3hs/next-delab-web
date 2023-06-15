import { courses, teachers } from "@/mockData";
import { Hero, Carrousel, Title, Cards, Teachers } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <Title
        id="courses"
        title="Cursos populares"
        text="¿Quiéres que alguien te instruya? No te preocupes, aquí te presentamos a nuestros cursos online de Delab para ayudarte y guiarte en tu Camino profesional."
      />
      <Cards cardItems={courses} />
      <Title
        id="teachers"
        title="Nustros profesores"
        text="Esta es una lista de las tecnologías más populares en el mundo de la programación."
      />
      <Teachers cardItems={teachers} />
      <Title
        title="Tecnologías populares"
        text="Esta es una lista de las tecnologías más populares en el mundo de la programación."
      />
      <Carrousel />
    </>
  );
}
