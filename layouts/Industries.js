import Image from "next/image";
import Link from "next/link";
import Cta from "./components/Cta";

function Industries({ data }) {
  const {
    frontmatter: { title, intro, industries, call_to_action },
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

      {/* Industries Grid */}
      <section className="section">
        <div className="container">
          <div className="row">
            {industries.map((industry, index) => (
              <div key={industry.id} className="col-12 lg:col-6 mb-8">
                <div className="bg-theme-light rounded-xl overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="row items-center h-full">
                    {/* Image */}
                    <div className="col-12 md:col-5">
                      <div className="h-48 md:h-full relative">
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="col-12 md:col-7 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {industry.icon && (
                          <Image
                            src={industry.icon}
                            width={24}
                            height={24}
                            alt=""
                          />
                        )}
                        <h3 className="h4 mb-0">{industry.title}</h3>
                      </div>
                      <p className="text-sm mb-4">{industry.description}</p>

                      {/* Solutions */}
                      {industry.solutions && (
                        <div>
                          <p className="text-xs font-bold uppercase text-primary mb-2">Our Solutions:</p>
                          <ul className="space-y-1">
                            {industry.solutions.slice(0, 4).map((solution, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2"
                              >
                                <Image
                                  src="/images/checkmark-circle.svg"
                                  width={14}
                                  height={14}
                                  alt=""
                                />
                                <span className="text-xs">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
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

export default Industries;



