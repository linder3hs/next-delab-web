import { Main } from "@/layouts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Delab - cursos online</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Delab Cursos Online: Aprende a programar con nuestros cursos en línea. Desarrolla habilidades en programación y tecnología de la mano de expertos."
        />
        <meta
          name="keywords"
          content="programación, cursos online, aprender a programar, desarrollo de software, Delab Cursos Online"
        />
        <meta
          property="og:title"
          content="Delab Cursos Online - Aprende a Programar en Línea"
        />
        <meta
          property="og:description"
          content="Delab Cursos Online: Aprende a programar con nuestros cursos en línea. Desarrolla habilidades en programación y tecnología de la mano de expertos."
        />
        <meta
          property="og:image"
          content="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdelab_logo.87061e89.png&w=256&q=75"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Delab Cursos Online - Aprende a Programar en Línea"
        />
        <meta
          name="twitter:description"
          content="Delab Cursos Online: Aprende a programar con nuestros cursos en línea. Desarrolla habilidades en programación y tecnología de la mano de expertos."
        />
        <meta
          name="twitter:image"
          content="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdelab_logo.87061e89.png&w=256&q=75"
        />
        <meta property="og:url" content="URL de la página actual" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Delab Cursos Online" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main className="m-6">
          <Main>{children}</Main>
        </main>
      </body>
    </html>
  );
}
