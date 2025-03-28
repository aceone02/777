// src/components/Hero.tsx
import React from 'react';
// הוספת אייקונים לכפתורים
import { ArrowDownCircleIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  // הגדרת תבנית SVG כ-Data URI (נקודות עדינות)
  const svgPattern = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 text-white pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden" // הוספנו overflow-hidden
      // הוספת תבנית הרקע באמצעות inline style
      style={{ backgroundImage: `${svgPattern}, linear-gradient(to right, var(--tw-gradient-stops))` }}
    >
      {/* שכבת כיסוי להכהייה קלה (אופציונלי, אפשר להסיר אם הרקע מספיק כהה) */}
      {/* <div className="absolute inset-0 bg-black opacity-10 z-0"></div> */}

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight sm:leading-snug mb-6 animate-fade-in-down"> {/* שיניתי leading-tight ל-sm:leading-snug */}
          בנה את דף הנחיתה הבא שלך
        </h1>
        <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-3xl mx-auto animate-fade-in-up">
          השתמש בריאקט, TypeScript ו-Tailwind CSS כדי ליצור דפים מודרניים ורספונסיביים במהירות וביעילות.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"> {/* שינוי ל-flex-col במובייל */}
          {/* כפתור ראשי עם אייקון */}
          <a
            href="#features"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-indigo-700 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto animate-fade-in-up" // הוספנו inline-flex, items-center, justify-center, w-full/sm:w-auto, אנימציה
            style={{ animationDelay: '0.5s' }} // השהייה קלה לאנימציה
          >
            <ArrowDownCircleIcon className="h-5 w-5 mr-2" /> {/* אייקון */}
            למד עוד
          </a>
          {/* כפתור משני עם אייקון */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto animate-fade-in-up" // הוספנו inline-flex, items-center, justify-center, w-full/sm:w-auto, אנימציה
            style={{ animationDelay: '0.7s' }} // השהייה קלה נוספת לאנימציה
          >
             <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" /> {/* אייקון */}
            צור קשר
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
