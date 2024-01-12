import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import StoreProvider from "@/lib/storeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
