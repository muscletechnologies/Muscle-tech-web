import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import Cta from "./components/Cta";

function Products({ data }) {
  const {
    frontmatter: { title, products, call_to_action },
  } = data;

  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>
          <p className="mt-4 text-center text-lg">
            Discover our suite of enterprise software products designed to streamline operations and drive business growth.
          </p>

          <div className="section row -mt-6">
            {products.map((product, index) => (
              <div key={product.id} className="col-12 mt-6">
                <div
                  className={`row items-center gap-8 ${
                    index % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="col-12 md:col-6">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="col-12 md:col-6">
                    <div className="flex items-center gap-3 mb-4">
                      {product.icon && (
                        <Image
                          src={product.icon}
                          width={40}
                          height={40}
                          alt=""
                        />
                      )}
                      <h2 className="font-bold">{product.title}</h2>
                    </div>
                    <p className="text-lg text-primary font-medium mb-4">
                      {product.subtitle}
                    </p>
                    <p className="mb-6">{product.shortDescription}</p>

                    {/* Features */}
                    <ul className="mb-6">
                      {product.features.slice(0, 6).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 mb-2"
                        >
                          <Image
                            src="/images/checkmark-circle.svg"
                            width={20}
                            height={20}
                            alt=""
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="btn btn-primary"
                    >
                      Request Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta cta={call_to_action} />
    </>
  );
}

export default Products;
