import Image from "next/image";
import Link from "next/link";
import Cta from "./components/Cta";

function Pricing({ data }) {
  const {
    frontmatter: { title, intro, plans, addons, payment_options, why_choose, faqs, call_to_action },
  } = data;

  const planColors = {
    green: "border-green-500 bg-green-50",
    yellow: "border-yellow-500 bg-yellow-50",
    blue: "border-blue-500 bg-blue-50",
    purple: "border-purple-500 bg-purple-50",
  };

  const planBadgeColors = {
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>
          {intro && (
            <div className="text-center mx-auto lg:col-8 mt-4">
              <h2 className="h3 font-normal text-primary">{intro.title}</h2>
              <p className="text-xl font-medium mt-2">{intro.subtitle}</p>
              <p className="mt-4 text-lg">{intro.content}</p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={plan.title + index}
                className={`relative rounded-2xl border-2 p-6 ${planColors[plan.color] || "border-gray-200 bg-white"} ${
                  plan.recommended ? "ring-2 ring-primary shadow-xl scale-105 z-10" : ""
                }`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-4 ${planBadgeColors[plan.color] || "bg-gray-500"}`}>
                  {plan.title.toUpperCase()}
                </div>

                {/* Price */}
                <div className="mb-4">
                  {plan.price === "Custom" ? (
                    <div className="text-3xl font-bold text-dark">Custom Quote</div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-600">{plan.currency}</span>
                        <span className="text-3xl font-bold text-dark">{plan.price}</span>
                      </div>
                      <div className="text-sm text-gray-600">per {plan.period}</div>
                    </>
                  )}
                </div>

                {/* Setup Fee */}
                <div className="text-sm mb-4 pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Setup Fee: </span>
                  <span className="font-semibold">
                    {plan.setup_fee === "Custom" ? "Custom Quote" : `UGX ${plan.setup_fee}`}
                  </span>
                </div>

                {/* Users */}
                <div className="mb-4">
                  <span className="font-semibold text-sm">{plan.users}</span>
                </div>

                {/* Best For */}
                <div className="text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                  <span className="font-medium">Best for: </span>{plan.best_for}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {plan.features.slice(0, 8).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Image
                        src="/images/checkmark-circle.svg"
                        width={16}
                        height={16}
                        alt=""
                        className="mt-0.5 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.features.length > 8 && (
                    <li className="text-sm text-primary font-medium">
                      +{plan.features.length - 8} more features
                    </li>
                  )}
                </ul>

                {/* CTA Button */}
                <Link
                  href={plan.button.link}
                  className={`btn w-full text-center ${plan.recommended ? "btn-primary" : "btn-outline-primary"}`}
                >
                  {plan.button.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      {addons && (
        <section className="section bg-theme-light">
          <div className="container">
            <h2 className="text-center mb-8">{addons.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {addons.items.map((addon, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center">
                  <div className="font-semibold text-sm mb-1">{addon.name}</div>
                  <div className="text-primary font-bold">{addon.price}</div>
                </div>
              ))}
            </div>

            {/* Payment Options */}
            {payment_options && (
              <div className="mt-10 text-center">
                <h3 className="h4 mb-4">{payment_options.title}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {payment_options.options.map((option, index) => (
                    <span key={index} className="bg-white px-4 py-2 rounded-full text-sm">
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Why Choose Section */}
      {why_choose && (
        <section className="section">
          <div className="container">
            <h2 className="text-center mb-10">{why_choose.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {why_choose.reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-2xl">{reason.icon}</span>
                  <div>
                    <h4 className="font-bold mb-1">{reason.title}</h4>
                    <p className="text-sm text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs && (
        <section className="section bg-theme-light">
          <div className="container">
            <h2 className="text-center mb-10">{faqs.title}</h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid gap-4">
                {faqs.items.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg p-6">
                    <h4 className="font-bold mb-2 text-primary">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <section className="py-6 bg-gray-100">
        <div className="container text-center text-sm text-gray-500">
          Prices are in Uganda Shillings (UGX) and exclude applicable taxes. Terms and conditions apply.
        </div>
      </section>

      <Cta cta={call_to_action} />
    </>
  );
}

export default Pricing;
