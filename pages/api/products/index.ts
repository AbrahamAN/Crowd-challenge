import prisma from "../../../prisma";

export default async function handler(request, response) {
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
