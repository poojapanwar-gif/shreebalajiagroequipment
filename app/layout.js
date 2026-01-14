import React from "react";
import "../app/globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
export const metadata = {
  title: "Shree Balaji Agro | Agricultural Equipment Manufacturer Since 1975",
  description:
    "Shree Balaji Agro, established in 1975, is a trusted manufacturer of agricultural equipment including cultivators, seed drills, rotavators, and farm implements. Quality machinery for modern farming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body>
             {" "}
               <Header />
     
               {children}
     
               <Footer />
           </body>
    </html>
  );
}
