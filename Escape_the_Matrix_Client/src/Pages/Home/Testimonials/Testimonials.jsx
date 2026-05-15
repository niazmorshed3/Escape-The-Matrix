import useScrollReveal from "../../../Hooks/useScrollReveal";

const testimonials = [
  {
    name: "Levi Ackerman",
    role: "Student",
    avatar: "https://ui-avatars.com/api/?name=Levi+A&background=003366&color=fff&size=128",
    quote:
      "The auto-graded quizzes give me feedback the second I submit. I’ve never been able to study this efficiently.",
  },
  {
    name: "Erwin Smith",
    role: "Teacher",
    avatar: "https://ui-avatars.com/api/?name=Erwin+S&background=004080&color=fff&size=128",
    quote:
      "Creating assignments, tracking submissions, and grading all happen in one place. EMX saves me hours every week.",
  },
  {
    name: "Mikasa A.",
    role: "Student",
    avatar: "https://ui-avatars.com/api/?name=Mikasa+A&background=0066cc&color=fff&size=128",
    quote:
      "The dashboard tells me exactly what’s due, what’s graded, and what’s pending. No more lost deadlines.",
  },
];

const Testimonials = () => {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="py-20">
      <div
        ref={headRef}
        className={`text-center mb-14 px-4 reveal ${headVisible ? "reveal--visible" : ""}`}
      >
        <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          What learners say
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Trusted by students & teachers
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Real feedback from the people learning and teaching on EMX every day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`reveal ${visible ? "reveal--visible" : ""} relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
    >
      <span className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center text-xl shadow-lg">
        “
      </span>
      <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6 mt-2">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full ring-2 ring-blue-500/30"
        />
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
            {testimonial.role}
          </div>
        </div>
        <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
      </div>
    </div>
  );
};

export default Testimonials;
