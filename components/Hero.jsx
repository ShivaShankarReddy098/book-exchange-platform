import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.section
      className="flex-1 bg-blue-50 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-blue-900">
          Buy, Sell, and Exchange Books and Notes
        </h2>
        <p className="mt-4 text-xl text-blue-700">
          A platform for students to exchange second-hand books and notes at
          affordable prices.
        </p>
        <div className="mt-6">
          <Link
            href="/books"
            className="px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 transition"
          >
            Browse Books
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
