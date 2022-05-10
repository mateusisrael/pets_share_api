import express from 'express'
import { authenticateMiddleare } from './middlewares/'
import { errorHandler } from './middlewares'
import { userRoute, petsRouter } from './routes'
// import "express-async-errors"

const app = express()


app.use('/api/users', authenticateMiddleare, userRoute)
app.use('/api/pets', authenticateMiddleare, petsRouter)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('Server running in http://localhost:3000')
})