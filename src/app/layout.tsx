import type { Metadata } from "next";

import "../shared/styles/base/globals.scss";
import "../shared/styles/variables/vars.scss";
import "../shared/styles/variables/fonts.scss";
import BackgroundElement from "@/shared/ui/BackgroundElement/BackgroundElement";

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
        {children}
      </body>
    </html>
  );
}
