import prisma from "../db.js";

export const createFoodItem = async (req, res) => {
  try {
    const data = await prisma.food_items.create({
      data: req.body,
    });

    res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const getFoodItem = async (req, res) => {
//   const data = await prisma.food_items.findFirst({
//     where: {
//       id: req.body.id,
//     },
//   });
//   return res.json({ data });
// };

export const getFoodItems = async (req, res) => {
  try {
    const data = await prisma.food_items.findMany({
      where: {
        adminid: req.params.id,
      },
    });
    return res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFoodItem = async (req, res) => {
  try {
    const data = await prisma.food_items.delete({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateFoodItem = async (req, res) => {
  try {
    const data = await prisma.food_items.update({
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
