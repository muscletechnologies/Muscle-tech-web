import { Card } from "@/components/ui/card"
import { UtensilsCrossed, Package, BarChart3, Users, Zap, TrendingUp } from "lucide-react"

export default function Solutions() {
  const products = [
    {
      icon: UtensilsCrossed,
      title: "Restaurant POS System",
      description:
        "Complete point-of-sale solution for table management, order processing, payment handling, and kitchen display integration for seamless restaurant operations.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Real-time inventory tracking, stock alerts, supplier management, and automated reordering to minimize waste and optimize costs across your operations.",
      color: "from-amber-400 to-orange-400",
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description:
        "Comprehensive dashboards tracking sales, revenue, customer trends, and performance metrics to make data-driven decisions and identify growth opportunities.",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Users,
      title: "Customer Management",
      description:
        "Build customer profiles, track order history, loyalty programs, and personalized engagement to increase retention and drive repeat business.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "ERP Integration",
      description:
        "Unified enterprise resource planning connecting HR, finance, supply chain, and operations for complete business visibility and streamlined workflows.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      title: "Financial Management",
      description:
        "Accounting, invoicing, expense tracking, and financial reporting tools to maintain profitability and ensure regulatory compliance across your business.",
      color: "from-indigo-500 to-blue-500",
    },
  ]

  return (
    <section id="products" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 text-balance">OUR PRODUCTS</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful restaurant POS and ERP solutions designed to streamline operations and grow your business
            efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card
                key={index}
                className="group p-8 bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition">
                  {product.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{product.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
