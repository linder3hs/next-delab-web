import { Card } from "@/components";
import { Section } from "@/layouts";
import { CardItem } from "@/types/core";

interface Props {
  cardItems: CardItem[];
}

export default function Cards({ cardItems }: Props) {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between">
      {cardItems.map((cardItem: CardItem) => (
        <Card
          key={cardItem.title}
          price={cardItem.price ?? undefined}
          {...cardItem}
        />
      ))}
    </Section>
  );
}
