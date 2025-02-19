import { motion } from "framer-motion";
import { BookOpen, Upload, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: <Upload size={40} />,
    title: "List Your Book",
    desc: "Upload book details, set a price, and list it for sale.",
  },
  {
    icon: <BookOpen size={40} />,
    title: "Browse & Buy",
    desc: "Find second-hand books and notes at great prices.",
  },
  {
    icon: <MessageCircle size={40} />,
    title: "Chat & Exchange",
    desc: "Message sellers directly to negotiate deals.",
  },
];

const HowItWorks = () => {
  return (
    <motion.section
      className="py-20 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-blue-900">How It Works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center text-blue-500">{step.icon}</div>
              <h4 className="text-xl font-semibold mt-4 text-blue-500">{step.title}</h4>
              <p className="mt-2 text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
