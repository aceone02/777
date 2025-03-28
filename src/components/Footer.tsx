// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // קבלת השנה הנוכחית

  return (
    <footer id="footer" className="bg-gray-800 text-gray-300 py-12"> {/* רקע כהה, טקסט בהיר, ריווח אנכי */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center"> {/* פלקס (טור במובייל, שורה בדסקטופ) */}

          {/* אזור שמאלי: זכויות יוצרים */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p>© {currentYear} שם הפרויקט שלך. כל הזכויות שמורות.</p>
            <p className="text-sm text-gray-500">נבנה בכיף עם React, TS & Tailwind</p>
          </div>

          {/* אזור ימני: קישורים (דוגמה) */}
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="hover:text-white transition duration-200">
              מדיניות פרטיות
            </a>
            <a href="/terms-of-service" className="hover:text-white transition duration-200">
              תנאי שימוש
            </a>
            {/* אפשר להוסיף כאן קישורים לרשתות חברתיות עם אייקונים */}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
