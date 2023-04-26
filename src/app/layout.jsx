'use client';

import 'styles/main.css';
import { SessionProvider } from 'next-auth/react';
// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <SessionProvider>
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  </SessionProvider>
);

export default RootLayout;
