import { Card } from "@/components";
import { Section } from "@/layouts";

export default function Cards() {
  return (
    <Section className="flex justify-between">
      <Card title="React JS" duration="32 horas" price="450"/>
      <Card title="Android - Kotlin" duration="40 horas" price="500" />
      <Card title="UI/UX" duration="20 horas" price="250" />
      <Card title="Node JS" duration="48 horas" price="500" />
    </Section>
  );
}
