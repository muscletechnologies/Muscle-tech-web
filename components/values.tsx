export default function Values() {
  const values = [
    {
      title: "Operational Efficiency",
      description:
        "Streamline restaurant operations and business processes, reduce manual work, and let your team focus on customer service and growth.",
    },
    {
      title: "Complete Integration",
      description:
        "Connect POS, inventory, accounting, and HR in one unified system for real-time visibility across your entire business.",
    },
    {
      title: "Revenue Growth",
      description:
        "Increase sales through better customer insights, loyalty programs, and data-driven decision-making that drives profitability.",
    },
    {
      title: "Expert Support",
      description:
        "Dedicated support team for implementation, training, and ongoing optimization to ensure your success every step of the way.",
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">Why Choose Muscle Tec?</h2>
          <p className="text-lg text-slate-600">
            POS and ERP software built for restaurants and businesses that want to scale efficiently.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {values.map((value, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 text-white font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="p-12 bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 rounded-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">Our Mission</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            Empower businesses worldwide with affordable, easy-to-use software that drives growth, efficiency, and
            profitability online. We believe every business—regardless of size—deserves access to world-class tools to
            compete and succeed.
          </p>
        </div>
      </div>
    </section>
  )
}
