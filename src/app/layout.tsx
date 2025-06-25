import Header from "@/components/ui/site/Header";
import "./globals.css";
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="w-full antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
