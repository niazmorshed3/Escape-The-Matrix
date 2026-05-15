import { Link } from "react-router-dom";
import useScrollReveal from "../../../Hooks/useScrollReveal";

const steps = [
  {
    step: "01",
    title: "Create your account",
    description:
      "Sign up in seconds. Start as a student, or apply through “Teach on EMX” to teach.",
    icon: "👤",
  },
  {
    step: "02",
    title: "Enroll in a course",
    description:
      "Browse approved courses, view details and pricing, and enroll with a single click.",
    icon: "📚",
  },
  {
    step: "03",
    title: "Learn & get graded",
    description:
      "Submit assignments, take auto-graded quizzes, join discussions, and track your grades.",
    icon: "🏆",
  },
];

const HowItWorks = () => {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="py-20 relative">
      <div
        ref={headRef}
        className={`text-center mb-14 px-4 reveal ${headVisible ? "reveal--visible" : ""}`}
      >
        <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
          How it works
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
          From sign-up to certificate
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Three simple steps separate you from your next big skill.
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Connector line for md+ screens */}
        <div className="hidden md:block absolute top-24 left-[16.6%] right-[16.6%] h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30"></div>

        {steps.map((step, index) => (
          <StepCard key={step.step} step={step} index={index} />
        ))}
      </div>

      <div className="mt-12 text-center px-4">
        <Link to="/allclasses">
          <button className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Start exploring courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
};

const StepCard = ({ step, index }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`relative reveal ${visible ? "reveal--visible" : ""} bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center`}
    >
      <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white text-3xl shadow-lg mb-5">
        <span>{step.icon}</span>
        <span className="absolute -top-2 -right-2 text-xs font-bold px-2 py-1 rounded-full bg-white text-blue-600 dark:bg-gray-900 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
          {step.step}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
    </div>
  );
};

export default HowItWorks;
