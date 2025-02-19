import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Shiva",
    review: "I found my textbooks at half the price. This platform is amazing!",
  },
  {
    name: "Abhi",
    review: "Selling my old books was super easy. Highly recommend!",
  },
  {
    name: "Akash",
    review: "Great place to exchange notes with other students.",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      className="py-20 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-blue-900">
          What Our Users Say
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimony, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700">"{testimony.review}"</p>
              <h4 className="mt-4 font-semibold text-blue-500">
                {testimony.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
