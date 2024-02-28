import "./globals.css";
import "@westeros/ui/styles.css";
import { Inter } from "next/font/google";
import Menu from "../../components/menu";
import Container from "../../components/container";
import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}): JSX.Element {
  return (
    <html lang={params.lang}>
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
