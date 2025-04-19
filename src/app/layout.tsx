import type { Metadata } from "next";

import "../shared/styles/base/globals.scss";
import "../shared/styles/variables/vars.scss";
import "../shared/styles/variables/fonts.scss";
import BackgroundElement from "@/shared/ui/BackgroundElement/BackgroundElement";
import Header from "@/layouts/Header/ui/Header";

export const metadata: Metadata = {
  title: "Thor Bank",
  description: "Empowering Your Financial Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackgroundElement />
        <Header />
        {children}
      </body>
    </html>
  );
}
