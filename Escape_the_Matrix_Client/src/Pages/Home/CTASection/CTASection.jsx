import { Link } from "react-router-dom";
import useScrollReveal from "../../../Hooks/useScrollReveal";

const CTASection = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="py-20">
      <div
        ref={ref}
        className={`reveal ${visible ? "reveal--visible" : ""} relative overflow-hidden rounded-3xl shadow-2xl`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-purple-900"></div>

        {/* Decorative blobs */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl"></div>

        <div className="relative z-10 px-6 py-16 md:py-20 md:px-12 text-center">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/15 text-white border border-white/20 backdrop-blur-sm">
            Ready to begin
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Your next skill is one click away
          </h2>
          <p className="mt-5 text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of learners and educators using Escape The Matrix to
            run real classrooms — fully online, fully tracked, fully yours.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <button className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Create free account
              </button>
            </Link>
            <Link to="/allclasses">
              <button className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-white border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Browse courses
              </button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-blue-100 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-green-300">✓</span> No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-300">✓</span> Free for students
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-300">✓</span> Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
