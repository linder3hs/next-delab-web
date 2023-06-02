import { Main } from "@/layouts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="m-6">
          <Main>{children}</Main>
        </main>
      </body>
    </html>
  );
}
