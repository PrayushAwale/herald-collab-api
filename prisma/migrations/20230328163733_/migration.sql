-- CreateTable
CREATE TABLE "Food_items" (
    "id" TEXT NOT NULL,
    "food_name" VARCHAR(100) NOT NULL,
    "category" VARCHAR(100) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "ingredients" TEXT,
    "imgSrc" TEXT,
    "isTrending" BOOLEAN DEFAULT false,

    CONSTRAINT "Food_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "f_name" VARCHAR(100) NOT NULL,
    "l_name" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "work_as" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);
