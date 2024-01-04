import Header from "@/layout/Header";
import "./globals.css";
import Footer from "@/layout/Footer";
import { makeStore, AppStore } from "../lib/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
