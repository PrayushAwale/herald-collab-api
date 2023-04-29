import prisma from "../db.js";

export const createEmployee = async (req, res) => {
  try {
    const createEmployees = await prisma.employee.create({
      data: req.body,
    });
    return res.json({ data: createEmployees });
  } catch (error) {
    console.log(error.message);
  }
};

export const getEmployee = async (req, res) => {
  try {
    const data = await prisma.employee.findFirst({
      where: {
        id: req.body.id,
      },
    });
    return res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getEmployees = async (req, res) => {
  try {
    const data = await prisma.employee.findMany({
      where: {
        adminid: req.params.id,
      },
    });
    return res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const data = await prisma.employee.delete({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const data = await prisma.employee.update({
      where: {
        id: req.body.id,
      },
      data: req.body,
    });
    return res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};
