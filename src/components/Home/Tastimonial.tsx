import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      {/* Section: Design Block */}
      <section className="mb-32 text-center lg:text-left">
        <div className="py-12 md:px-6 lg:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="grid  items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                    Anna Doe
                  </h2>
                  <p className="mb-4 font-semibold">Graphic designer</p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                    neque iaculis malesuada. Aenean gravida magna orci, non
                    efficitur est porta id. Donec magna diam.
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    Ad, at blanditiis quaerat laborum officia incidunt
                    cupiditate dignissimos voluptates eius aliquid minus
                    praesentium! Perferendis et totam ipsum ex aut earum libero
                    accusamus voluptas quod numquam saepe, consequuntur nihil
                    quia tenetur consequatur. Quis, explicabo deserunt quasi
                    assumenda ea maiores nulla, et dolor saepe praesentium natus
                    error reiciendis voluptas iste. Esse, laudantium ipsum
                    animi, quos voluptatibus atque vero repellat sit eligendi
                    autem maiores quasi cum aperiam. Aperiam rerum culpa
                    accusantium, ducimus deserunt aliquid alias vitae quasi
                    corporis placeat vel maiores explicabo commodi!
                  </p>
                  <ul className="flex justify-center lg:justify-start">
                    {[...Array(5)].map((_, index) => (
                      <li key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <div className="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20">
                  <Image
                    src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/080.jpg"
                    alt="image"
                    width={1200}
                    height={1200} 
                    objectFit="cover" 
                    objectPosition="center" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
  );
};

export default Testimonial;
