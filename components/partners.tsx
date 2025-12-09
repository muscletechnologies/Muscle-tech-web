import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Partners() {
  const partnerCategories = [
    {
      category: "Payment Processors",
      partners: ["Stripe", "Square", "PayPal", "Adyen"],
    },
    {
      category: "Delivery & Logistics",
      partners: ["DoorDash", "Uber Eats", "Grab Food", "Zomato"],
    },
    {
      category: "Hospitality Partners",
      partners: ["Toast", "Lightspeed", "Touchbistro", "MarginEdge"],
    },
    {
      category: "Business Services",
      partners: ["QuickBooks", "Xero", "SAP", "NetSuite"],
    },
  ]

  return (
    <section id="partners" className="py-20 sm:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Trusted Integrations</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Muscle Tec integrates seamlessly with leading payment processors, delivery platforms, and business software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {partnerCategories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">
                  {idx + 1}
                </span>
                {cat.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {cat.partners.map((partner, pIdx) => (
                  <Card
                    key={pIdx}
                    className="p-4 bg-slate-900 border border-slate-800 hover:border-red-500/50 transition-all group cursor-pointer"
                  >
                    <p className="text-slate-300 font-semibold group-hover:text-white transition">{partner}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-slate-400 mb-6">Want to partner with us?</p>
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-semibold">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
