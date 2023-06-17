const coursesImages = {
  react:
    "https://xucekozvkttuxbzxptrz.supabase.co/storage/v1/object/sign/logos/React.svg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9SZWFjdC5zdmcucG5nIiwiaWF0IjoxNjg2Nzg0MTUzLCJleHAiOjE3MTgzMjAxNTN9.17JxZchEqkRIqjXgyDJZnRy4NMWvpOmkFyfu-mb6R6Y&t=2023-06-14T23%3A09%3A13.832Z",
  kotlin:
    "https://xucekozvkttuxbzxptrz.supabase.co/storage/v1/object/sign/logos/Android_Studio_Icon_3.6.svg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9BbmRyb2lkX1N0dWRpb19JY29uXzMuNi5zdmcucG5nIiwiaWF0IjoxNjg2Nzg0MTYzLCJleHAiOjE3MTgzMjAxNjN9.3GHSn409eMBvQZtI4Q12_hhbkcoG8pkLGcV6uQcFQ68&t=2023-06-14T23%3A09%3A23.405Z",
  ui: "https://xucekozvkttuxbzxptrz.supabase.co/storage/v1/object/sign/logos/2721304.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy8yNzIxMzA0LnBuZyIsImlhdCI6MTY4Njc4NDM0NywiZXhwIjoxNzE4MzIwMzQ3fQ.XFCauqIizHRADl_ffgFd7RMr4W1OtCLev1LF6DZCt9k&t=2023-06-14T23%3A12%3A27.499Z",
  next: "https://xucekozvkttuxbzxptrz.supabase.co/storage/v1/object/sign/logos/Nextjs-logo.svg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9OZXh0anMtbG9nby5zdmcucG5nIiwiaWF0IjoxNjg2Nzg0MTc4LCJleHAiOjE3MTgzMjAxNzh9.xh6fhIUO5oG5UBiSVsHV8Z1lHxQRPeqDwthX06hKN8I&t=2023-06-14T23%3A09%3A38.403Z",
};

export const courses = [
  {
    title: "React JS",
    image: coursesImages.react,
    description:
      "React es una biblioteca de JavaScript de código abierto utilizada para construir interfaces de usuario interactivas y reactivas.",
    price: undefined,
  },
  {
    title: "Android Kotlin",
    image: coursesImages.kotlin,
    description:
      "Kotlin, fue desarrollado por JetBrains para mejorar la productividad de los desarrolladores y proporcionar una alternativa más segura a Java.",
    price: undefined,
  },
  {
    title: "UI/UX",
    image: coursesImages.ui,
    description:
      "UX/UI se refiere a la experiencia del usuario y al diseño de la interfaz, respectivamente, centrándose en crear productos digitales intuitivos, atractivos y funcionales.",
    price: undefined,
  },
  {
    title: "Next JS",
    image: coursesImages.next,
    description:
      "Next.js es un framework de React para construir aplicaciones web rápidas y escalables. Proporciona características como renderizado del lado del servidor, enrutamiento dinámico y pre-renderizado estático",
    price: undefined,
  },
];
