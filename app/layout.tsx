import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SGC Servicios",
  description:
    "Especialistas en ejecución de proyectos de alta complejidad y trabajos en altura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}