import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Header from "~/components/Header";

export const metadata = {
  title: "Social Network",
  description:
    "A Social network app, with friends, messages, posts, and likes!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
