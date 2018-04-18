import { RequestHandler, send } from 'micro'
import { router, get } from 'microrouter'

import { getHello, indexHello } from './routes/hello'

const service: RequestHandler = (req, res) => {
  const data = {
    status: 'ok',
    data: {
      message: 'Welcome to Micro'
    }
  }

  send(res, 200, data)
}

module.exports = router(
  get('/', service),
  get('/hello', indexHello),
  get('/hello/:toWho', getHello)
)
