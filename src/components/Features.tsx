// src/components/Features.tsx
import React from 'react';
// ייבוא motion מ-framer-motion
import { motion } from 'framer-motion';
import {
  BoltIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const featuresData: FeatureItem[] = [
    {
      icon: BoltIcon,
      title: 'ביצועים מהירים',
      description: 'בנוי עם Vite ו-Tailwind JIT לטעינה ופיתוח מהירים בזק.',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'רספונסיבי לחלוטין',
      description: 'עיצוב שנראה מעולה ומתפקד בצורה מושלמת בכל גודל מסך.',
    },
    {
      icon: PaintBrushIcon,
      title: 'עיצוב מודרני',
      description: 'שימוש ב-Tailwind CSS ליצירת ממשקים נקיים ומודרניים בקלות.',
    },
     {
      icon: WrenchScrewdriverIcon,
      title: 'קל לתחזוקה והרחבה',
      description: 'קוד מאורגן בקומפוננטות TypeScript, קל להבנה ולשינוי.',
    },
  ];

  // הגדרות אנימציה ל-Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // מצב התחלתי (מוסתר, מוזז למטה)
    visible: { // מצב סופי (נראה, במיקום המקורי)
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // משך האנימציה
        ease: "easeOut" // סוג ההאצה
      }
    }
  };

  // הגדרות אנימציית hover לכרטיס
   const cardHoverVariants = {
     scale: 1.05, // הגדלה קלה
     boxShadow: "0px 15px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)", // צל מודגש יותר
     transition: { duration: 0.3 }
   }

  return (
    <section id="features" className="py-20 lg:py-24 bg-gray-50 overflow-hidden"> {/* הוספתי overflow-hidden למניעת גלישה אפשרית של אנימציה */}
      <div className="container mx-auto px-6">
        <motion.div // אנימציית כניסה לכותרת
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // הפעלה פעם אחת כשהאלמנט באמצע המסך
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            מה הופך את זה למיוחד?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            התכונות המרכזיות שתוכננו כדי לתת לך את היתרון.
          </p>
        </motion.div>

        {/* הגריד */}
        {/* שימוש ב-staggerChildren כדי שהכרטיסיות יופיעו אחת אחרי השנייה */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          initial="hidden" // מצב התחלתי לכל הילדים
          whileInView="visible" // מצב סופי כשנכנסים למסך
          viewport={{ once: true, amount: 0.1 }} // הפעלה פעם אחת כשרק 10% מהגריד נראה
          transition={{ staggerChildren: 0.2 }} // השהייה בין אנימציות הילדים
        >
          {featuresData.map((feature, index) => (
            // עטיפת כל כרטיס ב-motion.div
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center"
              variants={cardVariants} // שימוש ב-variants שהוגדרו למעלה
              whileHover={cardHoverVariants} // שימוש ב-variants ל-hover
              // אין צורך ב-initial/whileInView/viewport כאן, הם יורשים מההורה (הגריד)
            >
              {/* עיגול רקע לאייקון */}
              <div className="mb-6 inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                <feature.icon
                  className="h-8 w-8 text-blue-600"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
