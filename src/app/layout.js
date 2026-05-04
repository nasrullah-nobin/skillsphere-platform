import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere | Learn Skills, Build Your Future 🚀",
  description:
    "SkillSphere is a modern online learning platform where you can explore courses, learn from expert mentors, and build real-world skills to grow your career.",
  
  keywords: [
    "SkillSphere",
    "online learning",
    "web development courses",
    "next.js courses",
    "programming tutorials",
    "learn coding",
    "skills development",
    "career growth"
  ],

  authors: [{ name: "Nobin" }],

  creator: "Nobin",

  openGraph: {
    title: "SkillSphere | Upgrade Your Skills Today 🚀",
    description:
      "Join SkillSphere to learn modern skills, explore courses, and build your future with expert guidance.",
    url: "https://your-domain.vercel.app",
    siteName: "SkillSphere",
    images: [
      {
        url: "https://github.com/nasrullah-nobin/skillsphere-platform/blob/main/screencapture-localhost-3000-2026-05-04-08_58_36.png",
        width: 1200,
        height: 630,
        alt: "SkillSphere Homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SkillSphere 🚀",
    description:
      "Learn skills, explore courses, and build your career with SkillSphere.",
    images: [
      "https://github.com/nasrullah-nobin/skillsphere-platform/blob/main/screencapture-localhost-3000-2026-05-04-08_58_36.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    > 
      <body className="min-h-full flex flex-col">
         
        <NavBar></NavBar>
        <main className="">{children}
           <ToastContainer />
        </main>
        <Footer></Footer>
        </body>
    </html>
  );
}
