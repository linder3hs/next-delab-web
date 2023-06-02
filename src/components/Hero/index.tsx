import Image from "next/image";
import { Button } from "@/components";
import hero from "@/../public/assets/hero.png";

export default function Hero() {
  return (
    <section className="flex items-center justify-around h-screen px-40">
      <div className="w-3/6 m-auto">
        <h1 className="text-5xl font-bold w-4/5">
          Explore what professionals like you are learning the most
        </h1>
        <p className="my-6 text-xl w-4/6 text-gray-400">
          Want someone to instruct you? No worries, here we introduce our
          CourseMania’s online Tutors to assist & guide you in your professional
          Path
        </p>
        <Button text="Visit Courses" type="dark" />
      </div>
      <div>
        <Image alt="Hero delab" src={hero} />
      </div>
    </section>
  );
}
