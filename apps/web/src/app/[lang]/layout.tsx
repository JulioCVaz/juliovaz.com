import "./globals.css";
import "@westeros/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from "../../components/menu";
import Container from "../../components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julio Vaz",
  description: "Julio Vaz Website homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen justify-center bg-dark text-slate-50 ${inter.className}`}
      >
        <Container>
          <Menu.Root>
            <Menu.Item icon="text" link={{ href: "/blog", target: "_self" }}>
              Blog
            </Menu.Item>
            <Menu.Item
              icon="file-text"
              link={{
                href: "https://drive.google.com/file/d/18VNj8VmHDra18t2XIfd9N1-4IkgSG33P/view",
                target: "_blank",
              }}
            >
              Resume
            </Menu.Item>
          </Menu.Root>
          <main className="p-4">{children}</main>
        </Container>
      </body>
    </html>
  );
}
