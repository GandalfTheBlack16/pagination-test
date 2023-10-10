import Express from 'express'
import { movieController } from './dependencies'

const app = Express()

app.get('/api/movies', movieController.run.bind(movieController))

app.listen(3000, () => {
  console.log('Application running on port 3000')
})
