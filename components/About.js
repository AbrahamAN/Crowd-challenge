import React from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";

const About = () => {
  const router = useRouter();

  return (
    <div>
      <div>
        <div className="relative">
          <img
            className="w-screen opacity-90"
            alt="Logo"
            src="https://img.freepik.com/free-photo/female-legs-tights-sports-shoes-wooden-background-concept-sports_169016-4716.jpg?w=1380&t=st=1659880543~exp=1659881143~hmac=d8af3cf5416869f55f3088c6a27eeada0200fc1cea1062b884e560cf487c7959"
          />
        </div>
        <div className="absolute bottom-2/4 left-2 top-40 text-gray-900 font-bold md:left-5 md:top-44 xl:left-20 xl:top-72">
          <h2 className="text-sm font-bold  sm:text-2xl md:text-3xl lg:text-4xl">
            The Best Shop For Find What You Wnat
          </h2>
          <h3 className="text-sm font-normal sm:text-xl md:text-3xl lg:text-4xl ">
            The best cloth on the market
          </h3>
          <button
            onClick={() => router.push("/products")}
            className="w-20 h-10 rounded-sm text-sm  items-center justify-center bg-red-500 hover:bg-red-600 flex text-gray-900  sm:mt-2 sm:w-24 sm:text-base md:text-lg lg:text-xl lg:w-32 "
          >
            Go Shop
          </button>
        </div>
      </div>

      <div className="text-center ">
        <h3 className="mt-5 font-medium text-xl sm:text-2xl sm:font-bold lg:text-3xl">
          About Us
        </h3>

        <div className="flex flex-col 2xl:grid 2xl:grid-cols-2 2xl:items-center 2xl:mx-10">
          <div>
            <img
              className=" mt-5"
              alt="logo"
              src="https://img.freepik.com/free-photo/couple-training-morning_1098-3674.jpg?w=1380&t=st=1659881923~exp=1659882523~hmac=79a48b36aee34e873602b13fab00877e437ee9359554df82568359507de40084"
            />
          </div>

          <div className=" w-full ">
            <p className="text-sm font-normal mt-5 sm:text-lg md:text-xl lg:text-2xl 2xl:mx-10 ">
              Magic Store is a company dedicated to satisfying the customer with
              the best sportswear and we have a wide variety of products,
              clothing and shoes to satisfy all the needs of our customers.
              Welcome We are
            </p>
            <h3 className="mt-5 font-medium mb-5 sm:font-bold md:text-3xl">
              MAGIC STORE
            </h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
