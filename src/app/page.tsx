import { Hero, Carrousel, Title, Cards } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <Carrousel />
      <Title
        title="Popular courses"
        text="Want someone to instruct you? No worries, here we introduce our CourseMania’s online Tutors  to assist & guide you in your professional  Path"
      />
      <Cards />
    </>
  );
}
