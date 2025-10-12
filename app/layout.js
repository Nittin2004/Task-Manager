import './globals.css'

export const metadata = {
  title: 'Task Manager',
  description: 'Stay organized and productive',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  )
}