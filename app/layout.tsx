import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tehan Ekanayake",
  description: "Portfolio website of Tehan Ekanayake",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
