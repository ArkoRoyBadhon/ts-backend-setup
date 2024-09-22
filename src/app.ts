import express, { Application, NextFunction, Request, Response } from 'express'
import path from 'path'
import router from './router/apiRouter'
import globalErrorHanlder from './middleware/globalErrorHanlder'
import responseMessage from './constant/responseMessage'
import httpError from './util/httpError'
import helmet from 'helmet'

const app: Application = express()

// middleware
app.use(helmet())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../', 'public')))

// routes
app.use('/api/v1', router)

// 404 handler
app.all('*', (req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'))
    } catch (error) {
        httpError(next, error, req, 404)
    }
})

// global error handler
app.use(globalErrorHanlder)

export default app
