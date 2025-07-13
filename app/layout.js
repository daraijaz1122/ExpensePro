import {Outfit,Inter} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


const outfit = Outfit({
  subsets: ["latin"],
})
export const metadata = {
  title: "expense tracker",
  description: "create, track and manage your expenses easily",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
      </html>
      </ClerkProvider>
  );
}
