import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import Cta from "./components/Cta";

function ServicesPage({ data }) {
  const {
    frontmatter: { title, intro, services, call_to_action },
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

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-12 md:col-6 mb-8">
                <div className="bg-theme-light rounded-xl p-8 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon && (
                      <div className="bg-white p-3 rounded-lg">
                        <Image
                          src={service.icon}
                          width={30}
                          height={30}
                          alt=""
                        />
                      </div>
                    )}
                    <h3 className="h4">{service.title}</h3>
                  </div>
                  <p className="mb-6">{service.content}</p>

                  {/* Features */}
                  {service.features && (
                    <ul>
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 mb-2"
                        >
                          <Image
                            src="/images/checkmark-circle.svg"
                            width={18}
                            height={18}
                            alt=""
                          />
                          <span className="text-sm">{feature}</span>
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

      <Cta cta={call_to_action} />
    </>
  );
}

export default ServicesPage;
