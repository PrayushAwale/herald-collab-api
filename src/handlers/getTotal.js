import prisma from "../db.js";

export const getTotalEmployees = async (req, res) => {
  const count = await prisma.employee.count({
    where: {
      adminid: req.params.id,
    },
  });
  res.json({ data: count });
};
export const getTotalFoodItems = async (req, res) => {
  const count = await prisma.food_items.count({
    where: {
      adminid: req.params.id,
    },
  });
  console.log(count);
  res.json({ data: count });
};
