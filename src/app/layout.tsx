import Header from "@/components/ui/site/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="tw-flex tw-min-h-[100vh] tw-w-full tw-flex-col tw-bg-[#ffffff]">
        <Header />
        {children}
      </body>
    </html>
  );
}
