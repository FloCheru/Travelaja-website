import React from "react";

const HomePageContent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Travelers Point Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <img
              src="/placeholder.svg"
              alt="Traveler 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="col-span-2 row-span-2">
            <img
              src="/placeholder.svg"
              alt="Traveler 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/placeholder.svg"
              alt="Traveler 3"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            We help to find your dream place
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <span className="text-2xl font-bold">100+</span>
              <p className="text-sm text-gray-500">Holiday Package</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold">172</span>
              <p className="text-sm text-gray-500">Hotels</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold">68</span>
              <p className="text-sm text-gray-500">Bus Transportation</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold">32M+</span>
              <p className="text-sm text-gray-500">
                we help to find your dream place
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destination Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Discover your love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Destination Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Taman Nasional Komodo"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Taman Nasional Komodo</h3>
              <p className="text-sm text-gray-600 mb-2">Rp. 7,8jt</p>
              <p className="text-xs text-gray-500">
                {" "}
                <img
                  src="/placeholder.svg"
                  alt="time"
                  className="w-3 h-3 inline"
                />{" "}
                7 days for trips
              </p>
            </div>
          </div>
          {/* Destination Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Taman Nasional Bunaken"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Taman Nasional Bunaken</h3>
              <p className="text-sm text-gray-600 mb-2">Rp. 10,8jt</p>
              <p className="text-xs text-gray-500">
                <img
                  src="/placeholder.svg"
                  alt="time"
                  className="w-3 h-3 inline"
                />{" "}
                9 days for trips
              </p>
            </div>
          </div>
          {/* Destination Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Raja Ampat, Papua Barat"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Raja Ampat, Papua Barat</h3>
              <p className="text-sm text-gray-600 mb-2">Rp. 20,5jt</p>
              <p className="text-xs text-gray-500">
                {" "}
                <img
                  src="/placeholder.svg"
                  alt="time"
                  className="w-3 h-3 inline"
                />{" "}
                10 days for trips
              </p>
            </div>
          </div>
          {/* Destination Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Kepulauan Wakatobi"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Kepulauan Wakatobi</h3>
              <p className="text-sm text-gray-600 mb-2">Rp. 6,8jt</p>
              <p className="text-xs text-gray-500">
                {" "}
                <img
                  src="/placeholder.svg"
                  alt="time"
                  className="w-3 h-3 inline"
                />{" "}
                12 days for trips
              </p>
            </div>
          </div>
          {/* Destination Card 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Gili Trawangan, Lombok"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Gili Trawangan, Lombok</h3>
              <p className="text-sm text-gray-600 mb-2">Rp. 6,6jt</p>
              <p className="text-xs text-gray-500">
                {" "}
                <img
                  src="/placeholder.svg"
                  alt="time"
                  className="w-3 h-3 inline"
                />{" "}
                7 days for trips
              </p>
            </div>
          </div>
          {/* Destination Card 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Taman Nasional Bromo"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Taman Nasional Bromo</h3>
              <p className="text-sm text-gray-600 mb-2">Rp. 9,8jt</p>
              <p className="text-xs text-gray-500">
                <img
                  src="/placeholder.svg"
                  alt="time"
                  className="w-3 h-3 inline"
                />{" "}
                7 days for trips
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          What they say about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-4">
              <img
                src="/placeholder.svg"
                alt="Angelina Simple"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Angelina Simple</h4>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </p>
          </div>
          {/* Testimonial Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-4">
              <img
                src="/placeholder.svg"
                alt="Viola Natalie"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Viola Natalie</h4>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </p>
          </div>
          {/* Testimonial Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-4">
              <img
                src="/placeholder.svg"
                alt="Robert John K."
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Robert John K.</h4>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </p>
          </div>
          {/* Testimonial Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-4">
              <img
                src="/placeholder.svg"
                alt="Anggi Nani"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Anggi Nani</h4>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </p>
          </div>
          {/* Testimonial Card 5 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-4">
              <img
                src="/placeholder.svg"
                alt="Graham Suryo J"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Graham Suryo J</h4>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </p>
          </div>
          {/* Testimonial Card 6 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-4">
              <img
                src="/placeholder.svg"
                alt="Bagas G Natfl"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Bagas G Natfl</h4>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageContent;
