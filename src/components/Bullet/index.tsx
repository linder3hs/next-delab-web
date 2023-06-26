interface Props {
  text: string;
}

export default function Bullet({ text }: Props) {
  return (
    <li className="flex items-center">
      <span>
        <svg
          className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      {text}
    </li>
  );
}
