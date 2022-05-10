import express from 'express'
import { mainRouter } from './routes'

const app = express()

app.use('/', mainRouter)

// app.route('/')
//   .get((req, res) => {
//     return res.status(200).json({
//       "message": "Hello Express Server!"
//     })
//   })

app.listen(3000, () => {
  console.log('Server running in http://localhost:3000')
})