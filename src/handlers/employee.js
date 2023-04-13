import prisma from "../db.js";

export const createEmployee = async (req, res) => {
  const createEmployees = await prisma.employee.create({
    data: req.body,
  });
  return res.json({ data: createEmployees });
};

export const getEmployee = async (req, res) => {
  const data = await prisma.employee.findFirst({
    where: {
      id: req.body.id,
    },
  });
  return res.json({ data });
};

export const getEmployees = async (req, res) => {
  const data = await prisma.employee.findMany({
    where: {
      adminid: req.params.id,
    },
  });
  return res.json({ data });
};

export const deleteEmployee = async (req, res) => {
  const data = await prisma.employee.delete({
    where: {
      id: req.body.id,
    },
  });
  return res.json({ data });
};

export const updateEmployee = async (req, res) => {
  const data = await prisma.employee.update({
    where: {
      id: req.body.id,
    },
    data: req.body,
  });
  return res.json({ data });
};
