import { App, Injector } from '@vert/core'
import { LotteryService } from './lottery/lottery.service'

const injector = Injector.create(LotteryService)
const lotterySrv = injector.get(LotteryService)

App.addSingleton(LotteryService, lotterySrv)
