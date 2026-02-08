/**
 * @file Arquivo de configuração e inicialização do Prisma Client.
 * @module database/prisma
 */

import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const connectionString = process.env.DATABASE_URL
const pool = new pg.Pool({ connectionString })

/**
 * Adaptador do Prisma para PostgreSQL (Necessário na v7+).
 * Faz a ponte entre o motor do Prisma e o driver nativo do Node.js.
 * @type {PrismaPg}
 */

const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ 
  adapter,
  log: ['query', 'info', 'warn', 'error'] 
})

export default prisma
