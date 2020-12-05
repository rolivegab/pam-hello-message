import { PrismaClient, PrismaClientOptions } from '@prisma/client';

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient<PrismaClientOptions>
    }
  }
}

declare module '*.scss'
