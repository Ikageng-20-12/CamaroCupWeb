import './styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'SimGrid Clone',
  description: 'Recreating the SimGrid site with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gray-900 text-white">
        {children}  {/* This will render the page content */}
      </body>
    </html>
  );
}