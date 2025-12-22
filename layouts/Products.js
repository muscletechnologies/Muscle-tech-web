import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import Cta from "./components/Cta";

function Products({ data }) {
  const {
    frontmatter: { title, intro, products, call_to_action },
  } = data;

  // Group products by category
  const categories = products.reduce((acc, product) => {
    const cat = product.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(product);
    return acc;
  }, {});

  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>
          {intro && (
            <div className="text-center mx-auto lg:col-10 mt-4">
              <h2 className="h3 font-normal">{intro.title}</h2>
              <p className="mt-4 text-lg">{intro.content}</p>
            </div>
          )}
        </div>
      </section>

      {/* Products by Category */}
      {Object.entries(categories).map(([category, categoryProducts]) => (
        <section key={category} className="section pb-0">
          <div className="container">
            <h2 className="mb-8 text-center">
              <span className="text-primary">{category}</span> Solutions
            </h2>
            <div className="row">
              {categoryProducts.map((product) => (
                <div key={product.id} className="col-12 md:col-6 lg:col-4 mb-8">
                  <div className="bg-theme-light rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-4">
                      {product.icon && (
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Image
                            src={product.icon}
                            width={28}
                            height={28}
                            alt=""
                          />
                        </div>
                      )}
                      <h3 className="h5 mb-0">{product.title}</h3>
                    </div>

                    {/* Subtitle */}
                    <p className="text-sm text-primary font-medium mb-3">
                      {product.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm mb-4">{product.shortDescription}</p>

                    {/* Features - Show first 4 */}
                    <ul className="mb-4 space-y-1">
                      {product.features.slice(0, 4).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                        >
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
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href="/contact"
                      className="btn btn-outline-primary btn-sm w-full"
                    >
                      Request Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Cta cta={call_to_action} />
    </>
  );
}

export default Products;
