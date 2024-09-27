import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kavuma Herbert",
  description:
    "Kavuma Herbert is the full stack  software Engineer with financial accounting background. He specialized in building, developing efficient and modern responsive single page applications, designing, developing and maintaining secure APIs, Database and mobile applications",
  creator: "Kavuma Herbert",
  applicationName: "Kavuma Herbert's portfolio",
  keywords: [
    "Kavuma Herbert",
    "Web designer",
    "Web developer",
    "Software Engineer",
    "Internet master",
    "Database administrator",
    "mobile application developer",
    "System administrator",
    "Graphic designer",
    "Backend developer",
    "Frontend developer",
    "Typescript developer",
    "React-native developer",
    "Nextjs developer",
    "Threejs developer",
    "Nodejs developer",
    "React developer",
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
      </head>

      <body className={classNames(inter.className, "scroller-container")}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
