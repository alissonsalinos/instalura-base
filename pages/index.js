import React from 'react';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';

export default function Home() {  
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="shortcut icon" href="#" />
      <Menu />
      <Footer />
    </div>
  )
}
