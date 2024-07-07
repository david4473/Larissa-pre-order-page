import {
  Inter,
  Poppins,
  Ubuntu,
  Kanit,
  Nanum_Pen_Script,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

const nanum = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nanum",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kanit",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "𝓛𝓪𝓻𝓲𝓼𝓼𝓪 gym wear",
  description: "Pre-order Larissa gym wear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className={`${poppins.variable} ${ubuntu.variable} ${kanit.variable} ${nanum.variable} font-sans`}
      >
        <header>
          <Header />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
