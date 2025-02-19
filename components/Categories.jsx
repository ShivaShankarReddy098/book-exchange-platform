import { motion } from "framer-motion";

const categories = [
  { name: "Engineering", img: "/images/engineering.png" },
  { name: "Medical", img: "/images/medical.png" },
  { name: "Business", img: "/images/business.png" },
  { name: "Arts & Design", img: "/images/arts.png" },
  { name: "Programming", img: "/images/programming.png" },
];

const Categories = () => {
  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-blue-900">Top Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="p-4 border rounded-lg shadow-md hover:bg-blue-50 transition"
              whileHover={{ scale: 1.05 }}
            >
              <img src={category.img} alt={category.name} className="w-16 h-16 mx-auto" />
              <h4 className="mt-2 font-semibold text-blue-500">{category.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Categories;