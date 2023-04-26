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
      adminid: req.params.id,
    },
  });
  res.json({ data });
};

export const getBilling = async (req, res) => {
  const data = await prisma.order.findMany({
    where: {
      isBilled: false,
      isCompleted: true,
      adminid: req.params.id,
    },
  });
  res.json({ data });
};

export const getUnserved = async (req, res) => {
  const data = await prisma.order.findMany({
    where: {
      isServed: false,
      isCompleted: true,
      adminid: req.params.id,
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

export const updateServe = async (req, res) => {
  const data = await prisma.order.update({
    where: {
      id: req.body.id,
    },
    data: {
      isServed: req.body.isServed,
    },
  });
  res.json({ data });
};

export const createBill = async (req, res) => {
  const data = await prisma.order.update({
    where: {
      id: req.body.id,
    },
    data: {
      isBilled: req.body.isBilled,
    },
  });
  res.json({ data });
  console.log("doneee");
};
