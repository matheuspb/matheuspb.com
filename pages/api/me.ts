import { NextApiHandler } from 'next'
import fs from 'fs'

const handler: NextApiHandler = (_, res) => {
  const i = Math.ceil(Math.random() * 100)
  const stream = fs.createReadStream(`public/avatars/${i}.jpg`)
  stream.pipe(res)
}

export default handler
