import express from 'express'
import { authenticateMiddleare, errorHandler } from './middlewares/'
import { userRoute, petsRouter, signupRoute, signinRoute } from './routes'
import 'dotenv/config'
import "express-async-errors"

const app = express()

app.use(express.json())
app.use('/api/users', userRoute)
app.use('/api/pets', authenticateMiddleare, petsRouter)
app.use('/api/signin', signinRoute)
app.use('/api/signup', signupRoute)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('Server running in http://localhost:3000')
})