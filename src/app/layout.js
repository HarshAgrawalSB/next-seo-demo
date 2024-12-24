

export const metadata = {
  title: 'Popular Blogging Site',
  description: "Read & upload blogs",
  metadataBase: new URL('https://next-seo-demo.onrender.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  robots: {
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

      >
        {children}
      </body>
    </html>
  );
}
