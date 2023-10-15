'use client'
import 'swiper/css';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'
import { Navbar } from '@src/components/Navbar/NavBar'
import { Footer } from '@src/components/Footer'
import AppContextProvider from '@src/context/AppContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>SW Work</title>
        <meta title="description" content="Buy any furniture" />
      </head>
    <body>
     <CacheProvider>
          <ChakraProvider theme={theme}>
            <AppContextProvider>
            <Navbar />
            {children}
              <Footer />
          </AppContextProvider>
        </ChakraProvider>
       </CacheProvider>
    </body>
  </html>
  )
}
