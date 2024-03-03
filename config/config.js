import dotenv from 'dotenv'
dotenv.config()

// const PORT = process.env.PORT
// const MONGODB_URL = process.env.PORT
// const LOCAL_HOST = process.env.LOCAL_HOST

const config =  {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    LOCAL_HOST: process.env.LOCAL_HOST,
}

export default config;