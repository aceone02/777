// src/components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  // פונקציית דמה לטיפול בשליחה (כרגע רק מדפיסה לקונסול)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // מניעת ריענון דף ברירת מחדל
    console.log('טופס נשלח (דמה)');
    // כאן תוסיף לוגיקה אמיתית לשליחת הטופס (למשל, לשרת או שירות צד שלישי)
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"> {/* רקע גרדיאנט בהיר, ריווח אנכי, ID */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          צור קשר
        </h2>

        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg"> {/* קופסה ממורכזת, ריווח, צל */}
          <form onSubmit={handleSubmit}>
            {/* שדה שם */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="השם שלך"
              />
            </div>

            {/* שדה אימייל */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                כתובת אימייל
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="your@email.com"
              />
            </div>

            {/* שדה הודעה */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                הודעה
              </label>
              <textarea
                id="message"
                name="message"
                rows={5} // מספר שורות התחלתי
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="כתוב לנו משהו..."
              ></textarea>
            </div>

            {/* כפתור שליחה */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 w-full md:w-auto"
              >
                שלח הודעה
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
