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
  response: NextApiResponse<Product | ResponseError>
) {
  if (request.method === "DELETE") {
    const deletedProduct = await prisma.product.delete({
      where: {
        id: Number(request.query.id),
      },
    });
    return response.status(200).json(deletedProduct);
  }

  if (request.method === "GET") {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(request.query.id),
      },
    });

    return response.status(200).json(product as Product);
  }

  if (request.method === "PUT") {
    const product = await prisma.product.update({
      data: request.body,
      where: {
        id: Number(request.query.id),
      },
    });
    return response.status(200).json(product);
  }
}
