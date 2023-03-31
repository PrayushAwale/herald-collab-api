import prisma from "../db.js";

export const createOrder = async (req, res) => {
  const data = await prisma.order.createMany({
    data: req.body,
  });
  res.json({ data });
};

export const getOrder = async (req, res) => {
  const data = await prisma.order.findMany({
    where: {
      isCompleted: false,
    },
  });
  res.json({ data });
};

export const getBilling = async (req, res) => {
  const data = await prisma.order.findMany({
    where: {
      isCompleted: true,
    },
  });
  res.json({ data });
};

export const updateOrder = async (req, res) => {
  const data = await prisma.order.update({
    where: {
      id: req.body.id,
    },
    data: {
      isCompleted: req.body.isCompleted,
    },
  });
  res.json({ data });
};
