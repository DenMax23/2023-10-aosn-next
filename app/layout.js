

import './styles/globals.scss'



export const metadata = {
  title: 'АОСН м.Вінниці',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='mx-auto px-5'>
        <div>
           {children}
        </div >
       
        </body>
    </html>
  )
}
