import { Link } from "react-router-dom";
import useScrollReveal from "../../../Hooks/useScrollReveal";

const categories = [
  { name: "Web Development", icon: "💻", count: "Modern frontend & backend stacks" },
  { name: "Data Science", icon: "📈", count: "Analytics, ML, and visualization" },
  { name: "Design", icon: "🎨", count: "UI, UX, and creative thinking" },
  { name: "Business", icon: "💼", count: "Strategy, finance, and leadership" },
  { name: "Languages", icon: "🌍", count: "Speak with confidence" },
  { name: "Personal Growth", icon: "🌱", count: "Habits, focus, and productivity" },
  { name: "Mathematics", icon: "🧮", count: "From algebra to calculus" },
  { name: "Science", icon: "🔬", count: "Physics, chemistry, biology" },
];

const Categories = () => {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="py-20">
      <div
        ref={headRef}
        className={`text-center mb-14 px-4 reveal ${headVisible ? "reveal--visible" : ""}`}
      >
        <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">
          Explore by category
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Learn whatever you’re curious about
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Pick a category and dive into courses taught by people who actually
          do the work.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {categories.map((category, index) => (
          <CategoryCard key={category.name} category={category} index={index} />
        ))}
      </div>
    </section>
  );
};

const CategoryCard = ({ category, index }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <Link to="/allclasses">
      <div
        ref={ref}
        style={{ transitionDelay: `${index * 60}ms` }}
        className={`reveal ${visible ? "reveal--visible" : ""} group relative overflow-hidden h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-cyan-600/5 transition-all duration-500"></div>
        <div className="relative z-10 flex flex-col items-start">
          <span className="text-4xl mb-3 transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
            {category.icon}
          </span>
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {category.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">
            {category.count}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Categories;
