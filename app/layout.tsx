"use client";
import Footer from "./_components/Footer";
import GeriaNavbar from "./_components/GeriaNavbar";
import { AuthProvider } from "./_context/AuthContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div id="_root" className="flex flex-col h-full">
            <GeriaNavbar />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
