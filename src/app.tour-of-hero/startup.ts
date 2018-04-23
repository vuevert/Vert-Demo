import Vue from 'vue'
import VueRouter from 'vue-router'

import { App, Injector } from '@vert/core'
import { Http } from '@vert/services'
import { Pothouse } from './services/pothouse'

Vue.use(VueRouter)

const injector = Injector.create(Http, Pothouse)
const http = injector.get(Http)
const potHouse = injector.get(Pothouse)

http['wow'] = 'http'
potHouse['wow'] = 'pothouse'

App.addSingleton(Http, http)
App.addSingleton(Pothouse, potHouse)

;(() => {
  const injector = Injector.create(Http, Pothouse)
  const http = injector.get(Http)
  const potHouse = injector.get(Pothouse)
  console.log(http, potHouse)
})()
