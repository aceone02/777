// src/components/Navbar.tsx
import React, { useState } from 'react'; // ייבוא useState
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // אייקון לסגירה

const Navbar: React.FC = () => {
  // State לשליטה על פתיחה/סגירה של תפריט המובייל
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // פונקציה לשינוי מצב התפריט
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // פונקציה לסגירת התפריט (שימושי אחרי לחיצה על קישור)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  // מערך קישורים (לשימוש חוזר בתפריט דסקטופ ומובייל)
  const navLinks = [
    { href: '#features', text: 'תכונות' },
    { href: '#about', text: 'אודות' },
    { href: '#contact', text: 'צור קשר' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">

        {/* אזור הלוגו */}
        <div className="text-2xl font-bold text-blue-600">
          {/* החלף ב-<img /> אם יש לך לוגו */}
          <a href="/" onClick={closeMobileMenu}>MyLanding</a>
        </div>

        {/* אזור הניווט לדסקטופ */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-gray-700 hover:text-blue-600 transition duration-200">
                {link.text}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
              הרשמה
            </a>
          </li>
        </ul>

        {/* כפתור המבורגר למובייל */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none" aria-label="פתח תפריט">
            {/* הצג אייקון X או המבורגר בהתאם למצב */}
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* תפריט נגלל למובייל */}
      {/* שימוש ב-transition ו-max-height ליצירת אפקט פתיחה/סגירה */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen border-t border-gray-200' : 'max-h-0'}`}>
         <ul className="flex flex-col items-center px-2 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                {/* סגירת התפריט בלחיצה על קישור */}
                <a href={link.href} onClick={closeMobileMenu} className="block text-gray-700 hover:text-blue-600 py-2">
                  {link.text}
                </a>
              </li>
            ))}
            <li>
               <a href="#" onClick={closeMobileMenu} className="block bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 mt-2">
                 הרשמה
               </a>
            </li>
         </ul>
      </div>

    </header>
  );
};

export default Navbar;
