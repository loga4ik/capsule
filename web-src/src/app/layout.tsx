import "./main.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>head</header>
        <div className="flex justify-center">{children}</div>
      </body>
    </html>
  );
}
