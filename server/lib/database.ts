import { PrismaClient } from "@prisma/client";
5

declare global {
  var prisma: PrismaClient | undefined |any;
}

export const db = globalThis.prisma || new PrismaClient();