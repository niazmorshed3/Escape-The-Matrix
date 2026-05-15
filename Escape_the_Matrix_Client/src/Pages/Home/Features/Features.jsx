import useScrollReveal from "../../../Hooks/useScrollReveal";

const features = [
  {
    icon: "🎓",
    title: "Multi-Role Platform",
    description:
      "Built for Admins, Teachers, and Students with carefully tuned permissions for every role.",
    accent: "from-blue-500 to-blue-700",
  },
  {
    icon: "📝",
    title: "Complete Assessment Suite",
    description:
      "Assignments, quizzes, and discussion boards in one place — designed to mirror real classrooms.",
    accent: "from-purple-500 to-purple-700",
  },
  {
    icon: "⚡",
    title: "Instant Auto-Grading",
    description:
      "MCQ, True/False, and short-answer quizzes are graded the moment a student hits submit.",
    accent: "from-cyan-500 to-cyan-700",
  },
  {
    icon: "📂",
    title: "File-Based Submissions",
    description:
      "Students upload PDF, DOC, or DOCX assignments (up to 10MB) and teachers review them in-app.",
    accent: "from-indigo-500 to-indigo-700",
  },
  {
    icon: "📊",
    title: "Real-Time Progress",
    description:
      "Track enrollment, submissions, and grades as they happen — for the whole class or one student.",
    accent: "from-blue-600 to-purple-600",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    description:
      "Firebase Authentication with JWT and role-based access control protect every route.",
    accent: "from-fuchsia-500 to-pink-600",
  },
];

const Features = () => {
  const [headingRef, headingVisible] = useScrollReveal();

  return (
    <section className="py-20">
      <div
        ref={headingRef}
        className={`text-center mb-14 px-4 reveal ${headingVisible ? "reveal--visible" : ""}`}
      >
        <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          Why Escape The Matrix
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Everything a modern classroom needs
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A production-ready LMS that brings teaching, learning, and assessment
          into a single, beautifully consistent workspace.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }) => {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`reveal ${visible ? "reveal--visible" : ""} group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
    >
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${feature.accent} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
      ></div>
      <div
        className={`relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-xl text-3xl bg-gradient-to-br ${feature.accent} text-white shadow-lg mb-5`}
      >
        <span>{feature.icon}</span>
      </div>
      <h3 className="relative z-10 text-xl font-bold text-gray-900 dark:text-white mb-2">
        {feature.title}
      </h3>
      <p className="relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

export default Features;
