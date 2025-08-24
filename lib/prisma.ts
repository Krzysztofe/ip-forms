import { PrismaClient } from "./generated/prisma/client";
import { TypeOf } from "better-auth";

const prisma = new PrismaClient();

const globalForPrisma = global as unknown as { prisma?: typeof prisma };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const db = prisma;
