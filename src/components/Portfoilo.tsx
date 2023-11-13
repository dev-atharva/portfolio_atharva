const Portfoilo = () => {
  return (
    <div className="bg-[#F5F5F5] py-8 sm:py-10 lg:py-14 font-baloo">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <!-- text - start --> */}
        <div className="mb-8 md:mb-16 mt-2">
          <h2 className="mb-2 text-center text-4xl font-bold text-[#555555] md:mb-2 lg:text-5xl">
            Portfolio
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-[#444444] md:text-lg">
            My development work
          </p>
        </div>
        {/* <!-- text - end --> */}

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {/* <!-- product - start --> */}
          <div>
            <a
              href="https://converso-production.up.railway.app/"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                loading="lazy"
                alt="Photo of converso application "
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="https://converso-production.up.railway.app/"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Converso
                </a>
                <span className="text-gray-500">
                  Real time chat application
                </span>
              </div>
            </div>
          </div>
          {/* <!-- product - end --> */}

          {/* <!-- product - start --> */}
          <div>
            <a
              href="https://car-rental-ex8ldqiah-dev-atharva.vercel.app/"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1580679568899-be51739ba2df?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                loading="lazy"
                alt="Photo of Auto wheels"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="https://car-rental-ex8ldqiah-dev-atharva.vercel.app/"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Auto Wheels
                </a>
                <span className="text-gray-500">
                  A luxury car booking service
                </span>
              </div>
            </div>
          </div>
          {/* <!-- product - end --> */}

          {/* <!-- product - start --> */}
          <div>
            <a
              href="https://ichiba-nextjs.vercel.app/"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                loading="lazy"
                alt="Photo of Rakuten new life"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="https://ichiba-nextjs.vercel.app/"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Rakuten New Life
                </a>
                <span className="text-gray-500">
                  Ecommerce application using Rakuten API'S
                </span>
              </div>
            </div>
          </div>
          {/* <!-- product - end --> */}

          {/* <!-- product - start --> */}
          <div>
            <a
              href="https://divyang-next-js-wrk9.vercel.app/"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1599282271323-f4d8e3b18df1?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                loading="lazy"
                alt="Photo of Empowerable"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="https://divyang-next-js-wrk9.vercel.app/"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Empowerable
                </a>
                <span className="text-gray-500">
                  Web platform for disabled people
                </span>
              </div>
            </div>
          </div>
          {/* <!-- product - end --> */}
          {/* <!-- product - start --> */}
          <div>
            <a
              href="https://room-rentals.vercel.app/"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                loading="lazy"
                alt="Photo of room renting application"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="https://room-rentals.vercel.app/"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Airbnb Clone
                </a>
                <span className="text-gray-500">Room booking platform</span>
              </div>
            </div>
          </div>
          {/* <!-- product - end --> */}
          {/* <!-- product - start --> */}
          <div>
            <a
              href="https://res.cloudinary.com/dcyo1ji8f/image/upload/v1699885463/portfolio/Food_Delivery_application_screenshots_xdgcg6.pdf"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1572195577046-2f25894c06fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                loading="lazy"
                alt="Photo of Speedy eats"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="https://res.cloudinary.com/dcyo1ji8f/image/upload/v1699885463/portfolio/Food_Delivery_application_screenshots_xdgcg6.pdf"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  SpeedyEats
                </a>
                <span className="text-gray-500">
                  Food delivery mobile application
                </span>
              </div>
            </div>
          </div>
          {/* <!-- product - end --> */}
          {/* <!-- product - start --> */}
          <div>
            <a
              href="https://github.com/dev-atharva/image_caption_web_app"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1641840296052-1b41c4bce493?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                loading="lazy"
                alt="Photo of Empowerable"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="https://github.com/dev-atharva/image_caption_web_app"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Image Captioning
                </a>
                <span className="text-gray-500">
                  Deep learning algorithm 
                </span>
              </div>
            </div>
          </div>
          {/* <!-- product - end --> */}
        </div>
      </div>
    </div>
  );
};

export default Portfoilo;
