import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"></div>

      {/* Angled SVG shape */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ filter: "drop-shadow(0 -2px 3px rgba(0,0,0,0.2))" }}
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,128C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight text-balance">
              Run Your Restaurant & Business Efficiently
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
              Muscle Tec Solutions provides powerful restaurant POS and ERP software to help you streamline operations,
              manage inventory, maximize profits, and scale your business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8">
                Try Free Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-900 hover:border-slate-500 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Visual - Spiria style illustration */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Placeholder for illustration with accent colors */}
              <svg
                viewBox="0 0 400 300"
                className="w-full h-auto"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
                }}
              >
                {/* Dashboard background */}
                <rect x="50" y="30" width="300" height="200" rx="12" fill="white" opacity="0.95" />

                {/* Charts and dashboard elements */}
                <circle cx="120" cy="100" r="25" fill="#f59e0b" opacity="0.8" />
                <rect x="180" y="80" width="40" height="50" fill="#3b82f6" opacity="0.8" />
                <rect x="240" y="100" width="35" height="30" fill="#ef4444" opacity="0.8" />

                {/* Dashboard text */}
                <rect x="60" y="160" width="100" height="8" fill="#d1d5db" rx="4" />
                <rect x="60" y="175" width="150" height="8" fill="#e5e7eb" rx="4" />

                {/* Decorative person silhouettes */}
                <circle cx="80" cy="260" r="8" fill="#f59e0b" />
                <circle cx="320" cy="240" r="8" fill="#3b82f6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
