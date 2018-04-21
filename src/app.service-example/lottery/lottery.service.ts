import { Injectable } from '@vert/core'

@Injectable()
class LotteryService {
  name: string = 'lottery'
  count: number = 10
}

export {
  LotteryService
}
