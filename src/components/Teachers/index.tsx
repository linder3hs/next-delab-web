import { Section } from "@/layouts";
import Teacher from "../Teacher";
import type { CardItem } from "@/types/core";

interface Props {
  cardItems: CardItem[];
}

export default function Teachers({ cardItems }: Props) {
  return (
    <Section className="grid grid-cols-3 gap-20 items-center justify-center">
      {cardItems.map((cardItem: CardItem) => (
        <Teacher key={cardItem.title} {...cardItem} />
      ))}
    </Section>
  );
}
