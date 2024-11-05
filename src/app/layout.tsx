import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavbarDemo from "@/components/Navbar/Navbar";
import Script from "next/script";

// Initialize the fonts with the correct configurations and use "font-display: swap"
const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  display: "swap", // Non-blocking font load
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["400", "500", "600", "700"], // Limit to necessary font weights
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload the video resource */}
        <link
          rel="preload"
          href="https://res.cloudinary.com/dj4jijw2a/video/upload/v1728362941/NesscoIcons/hgjyjg9lydioz5suzjg9.webm"
          as="video"
          type="video/webm"
          crossOrigin="anonymous"
        />

        {/* Asynchronously load the external PageSense script */}
        <Script
          src="https://cdn.pagesense.io/js/nesscoindia/ff3c25fdacd845338fcb5edd343fcde6.js"
          strategy="lazyOnload"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16529601205"
        ></script>
        {/* Google tag (gtag.js)  */}
        <Script id="gtag-init" strategy="beforeInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-16529601205');
  `}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <NavbarDemo />
        {children}

        {/* Zoho SalesIQ Chat Script */}
        <Script id="zsiqchat" strategy="lazyOnload">
          {`
            var $zoho = $zoho || {};
            $zoho.salesiq = $zoho.salesiq || {
              widgetcode: "siq57ecdd6785594ae3a0a956b5169f571c3e9a79d85694cb61eae8437cb511a908",
              values: {},
              ready: function() {}
            };
            var d = document;
            var s = d.createElement("script");
            s.type = "text/javascript";
            s.id = "zsiqscript";
            s.defer = true;
            s.src = "https://salesiq.zohopublic.com/widget";
            var t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s, t);
          `}
        </Script>
      </body>
    </html>
  );
}
