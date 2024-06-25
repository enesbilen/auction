import { Inter, Montserrat, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] }); 

export const metadata = {
  title: "Online Açık Arttırma",
  description: "İstediğiniz her şeyi açık arttırma ile sat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.className} ${openSans.className}`}>
          {children}
      </body>
    </html>
  );
}
