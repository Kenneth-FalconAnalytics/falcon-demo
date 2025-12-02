import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSLayout from "./AOSLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Falcon Insights",
  description: "Exploring Data with Falcon Insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AOSLayout>{children}</AOSLayout>
      </body>
    </html>
  );
}
