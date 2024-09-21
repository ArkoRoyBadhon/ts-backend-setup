import dotenvFlow from 'dotenv-flow'

dotenvFlow.config()

export default {
    ENV: process.env.ENV || 'development',
    PORT: process.env.PORT || 3000,
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:3000',

    DTABASE_URL: process.env.DTABASE_URL,
}
