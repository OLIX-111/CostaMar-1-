import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Residencial Costa Mar | L'Romana Real Estate",
  description:
    "Descubre el hogar perfecto en Residencial Costa Mar. Apartamentos de lujo en el corazón de La Romana, República Dominicana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
