import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 text-balance">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Partner with Muscle Tec Solutions to build scalable, innovative software solutions that drive growth and
          competitive advantage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8">
            Start Your Project
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-600 text-white hover:bg-slate-900 hover:border-red-500 bg-transparent"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
