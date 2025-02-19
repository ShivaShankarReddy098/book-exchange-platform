import { motion } from "framer-motion";

const Features = () => {
  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-blue-900">Why Choose Us?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <motion.div
            className="p-6 border border-gray-300 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-blue-700">
              Affordable Books
            </h4>
            <p className="mt-4 text-gray-700">
              Find second-hand books and notes at a fraction of the cost.
            </p>
          </motion.div>
          <motion.div
            className="p-6 border border-gray-300 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-blue-700">
              Instant Messaging
            </h4>
            <p className="mt-4 text-gray-700">
              Chat directly with sellers to negotiate and arrange payments.
            </p>
          </motion.div>
          <motion.div
            className="p-6 border border-gray-300 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-blue-700">
              Wide Selection
            </h4>
            <p className="mt-4 text-gray-700">
              Browse a variety of books and notes in different subjects.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
