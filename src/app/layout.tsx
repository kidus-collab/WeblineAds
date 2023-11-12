import type { Metadata } from "next";

import { Providers } from "./providers";

import favicon from "./favicon.png";

export const metadata: Metadata = {
  title: {
    default: "Webline Ads",
    template: "%s | Webline Ads",
  },
  description:
    "Social Media Advertising Agency based in Addis Ababa | Ethiopia",
  icons: "/favicon",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className="">
          <main>{children}</main>
        </body>
      </Providers>
    </html>
  );
}

export default RootLayout;
