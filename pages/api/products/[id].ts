import prisma from "../../../prisma";

export default async function handler(request, response) {
  // POST, DELETE, PATCH, PUT, GET

  // DELETE PRODUCTS
  if (request.method === "DELETE") {
    const deletedProduct = await prisma.product.delete({
      where: {
        id: Number(request.query.id),
      },
    });
    return response.status(200).json(deletedProduct);
  }

  // HACER LOS OTROS

  if (request.method === "GET") {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(request.query.id),
      },
    });
    return response.status(200).json(product);
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
