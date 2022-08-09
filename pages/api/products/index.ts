import prisma from "../../../prisma";
import { NextApiRequest, NextApiResponse } from "next";

type Product = {
  id: number;
  name: string;
  image_url: string;
  price: number;
  description?: string | null;
};

type ResponseError = {
  message: string;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Product[] | Product | ResponseError>
) {
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
