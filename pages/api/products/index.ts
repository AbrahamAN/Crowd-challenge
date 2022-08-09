import prisma from "../../../prisma";
import { NextApiRequest, NextApiResponse } from "next";

type Product = {
  id: number;
  name: string;
  image_url: string;
  price: number;
  description: string;
};

type ResponseError = {
  message: string;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Product[] | ResponseError>
) {
  // POST, DELETE, PATCH, PUT, GET

  if (request.method === "POST") {
    const createdProduct = await prisma.product.create({
      data: request.body,
    });

    return response.status(200).json(createdProduct);
  } else {
    const products = await prisma.product.findMany();
    response.status(200).json(products);
  }
}
