import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Link from "next/link";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SecondHand Books",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <nav className="p-4 shadow-md flex justify-between items-center bg-white">
            <Link href="/" className="text-xl font-bold text-blue-500">
              📚 SecondHand Books
            </Link>
            <div>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Sign In
                </Link>
              </SignedOut>
            </div>
          </nav>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
