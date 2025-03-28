// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white"> {/* רקע לבן, ריווח אנכי, ID */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> {/* גריד רספונסיבי (1 או 2 טורים), מרווח, יישור אנכי */}

          {/* עמודה 1: טקסט */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              קצת עלינו
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              אנחנו צוות שמאמין בכוחה של טכנולוגיה ליצור פתרונות מדהימים. הפרויקט הזה נולד מתוך רצון להדגים כיצד כלים מודרניים כמו React, TypeScript ו-Tailwind CSS מאפשרים פיתוח מהיר ויעיל של ממשקי משתמש איכותיים.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              המטרה שלנו היא לספק בסיס חזק וגמיש שתוכלו לקחת ולהתאים לצרכים שלכם, בין אם זה דף נחיתה, אתר תדמית או חלק מאפליקציה גדולה יותר.
            </p>
            <a
              href="#contact" // קישור לאזור צור קשר
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
              // כפתור
            >
              דברו איתנו
            </a>
          </div>

          {/* עמודה 2: תמונה (Placeholder) */}
          <div className="flex justify-center">
            {/* החלף את ה-div הזה בתג <img> עם מקור אמיתי */}
            <div className="w-full max-w-md h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-500">
              [מקום לתמונה מרשימה]
            </div>
            {/* דוגמה לתג תמונה אמיתי (דורש תמונה בפרויקט):
            <img
              src="/path/to/your/image.jpg" // שנה לנתיב הנכון
              alt="צוות או מוצר בפעולה"
              className="w-full max-w-md rounded-lg shadow-lg object-cover" // עיצוב תמונה
            />
            */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
