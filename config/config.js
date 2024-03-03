import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
const MONGODB_URL = process.env.PORT
const LOCAL_HOST = process.env.LOCAL_HOST

export {
    PORT,
    MONGODB_URL,
    LOCAL_HOST,
}