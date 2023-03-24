import prisma from "../db.js";

export const createOrder = async (req, res) => {
  const placeOrder = await prisma.order.createMany({
    data: req.body,
  });
  res.json({ data: placeOrder });
};

export const getOrder = async (req, res) => {
  const getOrders = await prisma.order.findMany({
    where: {
      isCompleted: false,
    },
  });
  res.json({ orders: getOrders });
};

export const getBilling = async (req, res) => {
  const getOrders = await prisma.order.findMany({
    where: {
      isCompleted: true,
    },
  });
  res.json({ orders: getOrders });
};

export const updateOrder = async (req, res) => {
  const update = await prisma.order.update({
    where: {
      id: req.body.id,
    },
    data: {
      isCompleted: req.body.isCompleted,
    },
  });
  res.json({ message: update });
};
