import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <motion.section
      className="py-16 bg-blue-600 text-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-3xl font-semibold">
        Start Selling Your Books Today!
      </h3>
      <p className="mt-4">
        Join thousands of students who are buying, selling, and exchanging
        books.
      </p>
      <Link
        href="/sign-up"
        className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 text-lg rounded-lg hover:bg-gray-200 transition"
      >
        Sign Up Now
      </Link>
    </motion.section>
  );
};

export default CTA;
