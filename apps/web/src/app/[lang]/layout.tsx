import "./globals.css";
import "@westeros/ui/styles.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Menu from "../../components/menu";
import Container from "../../components/container";
import { i18n, type Locale } from "../../lib/i18n-config";
import { getDictionary } from "../../lib/get-dictionary";

const inter = Inter({ subsets: ["latin"] });

export const fetchCache = 'default-no-store'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<{
  title: string;
  description: string;
}> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  };
}

export function generateStaticParams(): { lang: string }[] {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}): Promise<JSX.Element> {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body
        className={`flex min-h-screen justify-center bg-dark text-slate-50 ${inter.className}`}
      >
        <Container>
          <Menu.Root>
            <Menu.Item icon="text" link={{ href: "/blog", target: "_self" }}>
              {dictionary.menu.blog}
            </Menu.Item>
            <Menu.Item
              icon="file-text"
              link={{
                href: "https://drive.google.com/file/d/18VNj8VmHDra18t2XIfd9N1-4IkgSG33P/view",
                target: "_blank",
              }}
            >
              {dictionary.menu.about}
            </Menu.Item>
          </Menu.Root>
          <main className="p-4">{children}</main>
        </Container>
        <Analytics />
      </body>
    </html>
  );
}
