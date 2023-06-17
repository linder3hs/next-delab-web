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
          content="https://xucekozvkttuxbzxptrz.supabase.co/storage/v1/object/sign/logos/delab_logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9kZWxhYl9sb2dvLnBuZyIsImlhdCI6MTY4Njg2MjcyOCwiZXhwIjoxNzE4Mzk4NzI4fQ.l8-ecj8tXkQF6h0kwY5BqP4NN-EikF8rN2fMCDdUcho&t=2023-06-15T20%3A58%3A48.776Z"
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
          content="https://xucekozvkttuxbzxptrz.supabase.co/storage/v1/object/sign/logos/delab_logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9kZWxhYl9sb2dvLnBuZyIsImlhdCI6MTY4Njg2MjcyOCwiZXhwIjoxNzE4Mzk4NzI4fQ.l8-ecj8tXkQF6h0kwY5BqP4NN-EikF8rN2fMCDdUcho&t=2023-06-15T20%3A58%3A48.776Z"
        />
        <meta property="og:url" content="URL de la página actual" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Delab Cursos Online" />
        <meta name="robots" content="index" />
        <meta name="googlebot" content="index" />
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
