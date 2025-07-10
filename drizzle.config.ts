import { defineConfig } from 'drizzle-kit'
import { env } from './src/env.ts'

export default defineConfig({
    dialect: 'postgresql',
    casing: 'snake_case',
    schema: './src/db/schema/**.ts',
    out: './src/db/migrations',
    dbCredentials:{
        url: env.DATABASE_URL
    },
})

//npx drizzle-kit generate -> create migrations
//npx drizzle-kt migrate -> run migrations