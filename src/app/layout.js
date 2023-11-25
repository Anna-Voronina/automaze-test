import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ToDo App",
  description: "Application that helps you manage your tasks successfully",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div id="modal-portal"></div>
      </body>
    </html>
  );
}
