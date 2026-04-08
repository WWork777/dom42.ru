import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/footer";
import YandexMetrika from "@/components/YandexMetrika/YandexMEtrika";



export const metadata = {
  icons: {
    icon: [
      { rel: 'icon', type: 'image/svg+xml', url: '/favicon/favicon.svg' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', url: '/favicon/favicon-96x96.png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
};

const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});

const grandisExtended = localFont({
  src: [
    {
      path: './fonts/GrandisExtended-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/GrandisExtended-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/GrandisExtended-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GrandisExtended-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/GrandisExtended-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/GrandisExtended-Black.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${grandisExtended.className}`}>
      <head>
        <meta name="yandex-verification" content="71cb7fed874b0b24" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <YandexMetrika />
      </body>
    </html>
  );
}
