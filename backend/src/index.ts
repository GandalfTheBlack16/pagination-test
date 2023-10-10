import Express from 'express'
import { movieController } from './dependencies'
import cors from 'cors'

const app = Express()

app.use(cors())

app.get('/api/movies', movieController.run.bind(movieController))

app.listen(3000, () => {
  console.log('Application running on port 3000')
})
