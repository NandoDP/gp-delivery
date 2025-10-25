import './globals.css'

export const metadata = {
  title: 'GP Delivery - Service de Livraison',
  description: 'Service de livraison rapide et fiable au Sénégal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}