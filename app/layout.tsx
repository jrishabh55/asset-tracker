import '../styles/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Head</title>
      </head>
      <body className="bg-gray-100/30">{children}</body>
    </html>
  );
}
