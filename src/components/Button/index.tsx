interface Props {
  text: string;
  type?: string;
}

export default function Button({ text, type = "primary" }: Props) {
  const types: any = {
    dark: "bg-black",
    primary: "bg-primary",
  };

  return (
    <button aria-label={text} className={`${types[type]} text-white py-4 px-6 rounded-full`}>
      {text}
    </button>
  );
}
