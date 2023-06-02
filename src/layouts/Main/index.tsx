import Image from "next/image";
import logo from "@/../public/assets/delab_logo.png";
import { LinkItem, Button } from "@/components";
import { links } from "./links";

interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <>
      <header>
        <nav className="flex justify-around items-center">
          <div>
            <Image src={logo} width={265} height={41} alt="Delab" />
          </div>
          <div>
            <ul className="flex gap-10 items-center justify-center">
              {links.map((link) => (
                <LinkItem key={link.text} href={link.href} text={link.text} />
              ))}
            </ul>
          </div>
          <div className="flex gap-5 items-center">
            <div>
              <button className="underline">Sign In</button>
            </div>
            <div>
              <Button text="Sign Up" type="dark" />
            </div>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
}
