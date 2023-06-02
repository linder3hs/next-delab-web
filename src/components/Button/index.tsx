interface Props {
  text: string;
  type?: string;
}

export default function Button({ text, type = "primary" }: Props) {
  const types: any = {
    dark: "bg-black",
    primary: "bg-red-500",
  };

  return (
    <button className={`${types[type]} text-white px-4 py-2 rounded-md`}>
      {text}
    </button>
  );
}
