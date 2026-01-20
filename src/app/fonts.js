import localFont from "next/font/local";

export const geistSans = localFont({
  src: [
    {
      path: "../../public/fonts/Geist-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});
