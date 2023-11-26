import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
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
        <ToastContainer autoClose={2000} theme="colored" />
      </body>
    </html>
  );
}
