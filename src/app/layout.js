import "./globals.css";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import FixedVerticalNavigation from "../sections/FixedVerticalNavigation";

const neoSans = localFont({
  src: "../font/Neo-Sans-Std-Regular.otf",
});

export const metadata = {
  title: "Landing Page",
  description: "A landing page developed by M. Hammad Qurashi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={neoSans.className}>
        <Navbar />
        <FixedVerticalNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
