import "./styles/globals.scss";
import localFont from "@next/font/local";

const montserrat = localFont({ src: "./font/Montserrat-Regular.woff2" });
const roboto = localFont({ src: "./font/roboto-regular.woff2" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className} ${roboto.className}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
