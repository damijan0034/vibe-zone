import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import BottomBar from '../../components/layout/BottomBar'
import RightSidebar from '../../components/layout/RightSidebar'
import LeftSidebar from '../../components/layout/LeftSidebar'
import MainContainer from '../../components/layout/MainContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className} bg-purple-2 text-light-1`}>
        <main className='flex flex-row'>
        <LeftSidebar />
        <MainContainer>
          
          {children}
          </MainContainer>
          <RightSidebar />
        </main>
        <BottomBar />
        </body>
    </html>
    </ClerkProvider>
  )
}
