import Image from "next/image";
import Link from "next/link";
import Cta from "./components/Cta";

function IctProducts({ data }) {
  const {
    frontmatter: { title, intro, categories, call_to_action },
  } = data;

  return (
    <>
      {/* Intro Section */}
      <section className="section pb-0">
        <div className="container">
          <div className="text-center mx-auto lg:col-10">
            <h1 className="font-normal">{title}</h1>
            {intro && (
              <>
                <h2 className="mt-4 h3 font-normal">{intro.title}</h2>
                <p className="mt-4 text-lg">{intro.content}</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section">
        <div className="container">
          <div className="row">
            {categories.map((category, index) => (
              <div key={category.id} className="col-12 md:col-6 lg:col-4 mb-8">
                <div className="bg-theme-light rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    {category.icon && (
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Image
                          src={category.icon}
                          width={30}
                          height={30}
                          alt=""
                        />
                      </div>
                    )}
                    <h3 className="h4 mb-0">{category.title}</h3>
                  </div>
                  <p className="mb-4 text-sm">{category.description}</p>

                  {/* Products List */}
                  {category.products && (
                    <ul className="space-y-2">
                      {category.products.map((product, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2"
                        >
                          <Image
                            src="/images/checkmark-circle.svg"
                            width={16}
                            height={16}
                            alt=""
                          />
                          <span className="text-sm">{product}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="section bg-theme-light">
        <div className="container">
          <h2 className="text-center mb-10">Why Buy From Us?</h2>
          <div className="row">
            <div className="col-12 md:col-4 mb-6">
              <div className="text-center">
                <div className="bg-white inline-block p-4 rounded-full mb-4">
                  <Image
                    src="/images/checkmark-circle.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <h4 className="mb-3">Quality Guaranteed</h4>
                <p className="text-sm">We source from trusted suppliers and provide warranty on all equipment.</p>
              </div>
            </div>
            <div className="col-12 md:col-4 mb-6">
              <div className="text-center">
                <div className="bg-white inline-block p-4 rounded-full mb-4">
                  <Image
                    src="/images/speedometer.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <h4 className="mb-3">Fast Delivery</h4>
                <p className="text-sm">Quick delivery across the region with tracking and secure packaging.</p>
              </div>
            </div>
            <div className="col-12 md:col-4 mb-6">
              <div className="text-center">
                <div className="bg-white inline-block p-4 rounded-full mb-4">
                  <Image
                    src="/images/user-clock.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <h4 className="mb-3">Expert Support</h4>
                <p className="text-sm">Our technical team provides installation and after-sales support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta cta={call_to_action} />
    </>
  );
}

export default IctProducts;

