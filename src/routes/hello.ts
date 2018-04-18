import { send } from 'micro'
import { AugmentedRequestHandler } from 'microrouter'

export const indexHello: AugmentedRequestHandler = (req, res) => {
  const data = {
    status: 'ok',
    data: {
      hello: [
        { toWho: 'world' },
        { toWho: 'Memphis' },
        { toWho: 'folks' },
        { toWho: 'fellas' },
        { toWho: 'everyone' }
      ]
    }
  }

  send(res, 200, data)
}

export const getHello: AugmentedRequestHandler = (req, res) => {
  const data = {
    status: 'ok',
    data: {
      toWho: req.params.toWho
    }
  }

  send(res, 200, data)
}
