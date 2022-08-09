import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col  mx-10 justify-center text-sm md:text-base  ">
      <div className="grid grid-cols-1  font-normal text-black md:grid md:grid-cols-2 items-center md:mb-10 md:px-5 lg:grid-cols-2 xl:grid-cols-4 xl:place-items-center xl:h-48 2xl:text-lg">
        <div className="flex flex-col  text ">
          <h2 className="font-bold">EMPRESA</h2>
          <div className="border w-10 my-2  bg-black " />
          <p>Nosotros - Magic Store</p>
          <p>Sucursales</p>
        </div>
        <div className="flex flex-col   ">
          <h2 className="font-bold mt-5">COMPRA</h2>
          <div className="border-b w-10 my-2  bg-gray-500" />
          <p>Como Comprar</p>
          <p>Envios y devoluciones - Magic Store</p>
        </div>
        <div className="flex flex-col   mr-5">
          <h2 className="font-bold mt-5">MI CUENTA</h2>
          <div className="border-b w-10 my-2  bg-gray-500" />
          <p>Mi Cuenta</p>
          <p>Mis Compras</p>
          <p>Mis Direcciones</p>
          <p>Wish List</p>
        </div>
        <div className="flex flex-col  ">
          <h2 className="font-bold mt-5 ">RECIBÍ TODAS NUESTRAS NOVEDADES</h2>
          <div className="border-b w-10 my-2  bg-gray-500" />
          <label className="bg-white h-8 w-64 flex items-center border border-gray-600">
            <input
              type="text"
              placeholder="Ingresa tu e-mail"
              className="bg-transparent  h-8 px-5 py-2"
            />
            <div className="h-8 flex   bg-gray-700 items-center  cursor-pointer text-white">
              <button>Suscribirne</button>
            </div>
          </label>
          <div className="flex items-center tex-center ">
            <span className="mx-3 my-3 w-5 h-5 flex items-center justify-center  hover:bg-black rounded-full hover:text-white">
              <FaFacebookF />
            </span>
            <span className="mx-3 my-3 w-5 h-5 flex items-center justify-center  hover:bg-black rounded-full hover:text-white">
              <AiOutlineTwitter />
            </span>
            <span className="mx-3 my-3 w-5 h-5 flex items-center justify-center  hover:bg-black rounded-full hover:text-white">
              <AiOutlineInstagram />
            </span>
          </div>
        </div>
      </div>

      <div className=" mb-4 text-base">
        <div>
          <ul className="flex mx-5 ">
            <li>
              <img
                className="w-7 h-7 mx-2"
                src="https://f.fcdn.app/logos/n/visa.svg"
              />
            </li>
            <li>
              <img
                className="w-7 h-7 mx-2"
                src="	https://f.fcdn.app/logos/n/master.svg "
              />
            </li>
            <li>
              <img
                className="w-7 h-7 mx-2"
                src="https://f.fcdn.app/logos/n/oca.svg"
              />
            </li>
            <li>
              <img
                className="w-7 h-7 mx-2"
                src="	https://f.fcdn.app/logos/n/lider.svg"
              />
            </li>
            <li>
              <img
                className="w-7 h-7 mx-2"
                src="https://f.fcdn.app/logos/n/diners.svg"
              />
            </li>
          </ul>
        </div>

        <div className="flex  text-black justify-between  mt-5 mx-5">
          <div className="font-thin text-xs md:text-sm 2xl:text-lg">
            <p>© Copyright 2022 / Magic Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
