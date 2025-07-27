import "./globals.css";
import Navigation from "@/components/Navigation";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Pet Posts",
  description: "A gallery of pets shared by users",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-200 text-gray-800">
          <Navigation />
          <main className="max-w-6x1 mx-auto">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
