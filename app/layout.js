import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Ebin Yesudas",
  description:
    "I'm a full-stack developer based in Kerala, India, with 2 years of project experience in front-end development, back-end development, and smart contract development. I specialize in building responsive web applications using modern technologies like React, Node.js, MongoDB, and Foundry. Explore my portfolio to see real-world projects across multiple sectors, showcasing clean code, performance optimization, and user-focused design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden
         dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
