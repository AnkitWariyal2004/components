import localFont from "next/font/local";

export const geistSans = localFont({
  src: [
    {
      path: "./fonts/Geist-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Geist-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});
