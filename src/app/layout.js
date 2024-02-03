import { monserrat } from './ui/fonts'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${monserrat.className}`} antialiased='true'>
        {children}
      </body>
    </html>
  )
}
