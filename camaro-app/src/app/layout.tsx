// app/layout.tsx
import './styles/globals.css';  // Import your global styles
import Header from './components/Header';  // Assuming you have these components
import Footer from './components/Footer';
import CamaroCup from './components/camaro-cup';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>{children}</main>

        {/* Camaro Cup */}
        <CamaroCup />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
