/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npU6vCB3ZgbI@ep-fragrant-breeze-a51ne4vh.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };