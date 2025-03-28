// src/App.tsx
import React from 'react';
// ייבוא קומפוננטות
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';     // <-- ייבוא חדש
import Contact from './components/Contact';   // <-- ייבוא חדש
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App"> {/* ייתכן שתרצה להסיר את ה-className הזה אם אינו בשימוש */}
      <Navbar />
      <main> {/* תוכן עטוף בתג סמנטי */}
        <Hero />
        <Features />
        <About />      {/* <-- שימוש בקומפוננטה */}
        <Contact />    {/* <-- שימוש בקומפוננטה */}
        {/* כאן ניתן להוסיף עוד חלקים בעתיד */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
