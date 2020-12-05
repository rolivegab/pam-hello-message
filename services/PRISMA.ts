import { PrismaClient } from '@prisma/client';

if (!global.prisma) {
  global.prisma = new PrismaClient({
    errorFormat: 'minimal',
  });
}

const PRISMA = global.prisma;

export default PRISMA;
