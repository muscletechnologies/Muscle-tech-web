import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Cta from "./components/Cta";

function About({ data }) {
  const {
    frontmatter: { title, intro, vision, mission, values, industries, approach, call_to_action },
  } = data;

  return (
    <>
      {/* Hero Section */}
      <section className="section pb-0">
        <div className="container">
          <div className="row items-center">
            <div className="col-12 lg:col-6">
              <h1 className="font-normal">{title}</h1>
              {intro && (
                <>
                  <h2 className="mt-4 h3 font-bold">{intro.title}</h2>
                  <p className="mt-4 text-lg">{intro.content}</p>
                </>
              )}
            </div>
            <div className="col-12 lg:col-6 mt-8 lg:mt-0">
              {intro?.image && (
                <Image
                  src={intro.image}
                  alt="About us"
                  width={600}
                  height={400}
                  className="mx-auto"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="row">
            {vision && (
              <div className="col-12 md:col-6 mb-6 md:mb-0">
                <div className="bg-white rounded-xl p-8 h-full">
                  <h2 className="mb-4 text-primary">{vision.title}</h2>
                  <p className="text-lg">{vision.content}</p>
                </div>
              </div>
            )}
            {mission && (
              <div className="col-12 md:col-6">
                <div className="bg-white rounded-xl p-8 h-full">
                  <h2 className="mb-4 text-primary">{mission.title}</h2>
                  <p className="text-lg">{mission.content}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Values Section */}
      {values && (
        <section className="section">
          <div className="container">
            <h2 className="text-center mb-8">Our Values</h2>
            <div className="row">
              {values.map((value, index) => (
                <div key={index} className="col-12 md:col-6 lg:col-3 mb-6">
                  <div className="text-center p-6">
                    {value.icon && (
                      <div className="bg-theme-light inline-block p-4 rounded-full mb-4">
                        <Image
                          src={value.icon}
                          width={30}
                          height={30}
                          alt=""
                        />
                      </div>
                    )}
                    <h4 className="mb-3">{value.title}</h4>
                    <p className="text-sm">{value.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries Section */}
      {industries && (
        <section className="section bg-theme-light">
          <div className="container">
            <h2 className="text-center mb-4">{industries.title}</h2>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {industries.sectors.map((sector, index) => (
                <span
                  key={index}
                  className="bg-white px-5 py-3 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Approach Section */}
      {approach && (
        <section className="section">
          <div className="container">
            <h2 className="text-center mb-10">{approach.title}</h2>
            <div className="row">
              {approach.steps.map((step, index) => (
                <div key={index} className="col-12 md:col-6 lg:col-3 mb-6">
                  <div className="bg-theme-light rounded-xl p-6 text-center h-full">
                    <div className="text-4xl font-bold text-primary mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h4 className="mb-3">{step.title}</h4>
                    <p className="text-sm">{step.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Cta cta={call_to_action} />
    </>
  );
}

export default About;
