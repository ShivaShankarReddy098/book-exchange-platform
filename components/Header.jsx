import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <motion.header
      className="bg-blue-600 p-4 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">📚 SecondHand Books</h1>
        <div className="space-x-4">
          <Link href="/sign-in" className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-700 transition">
            Sign In
          </Link>
          <Link href="/sign-up" className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-700 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;