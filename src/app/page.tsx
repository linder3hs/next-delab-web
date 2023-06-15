import { Hero, Carrousel, Title, Cards } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <Title
        title="Cursos populares"
        text="¿Quieres que alguien te instruya? No te preocupes, aquí te presentamos a nuestros cursos online de Delab para ayudarte y guiarte en tu Camino profesional."
      />
      <Cards />
      <Title
        title="Tecnoogías populares"
        text="Esta es una lista de las tecnologías más populares en el mundo de la programación."
      />
      <Carrousel />
    </>
  );
}
