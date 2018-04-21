import Vue from 'vue'
import VueRouter from 'vue-router'

import { App, Injectable, Injector } from '@vert/core'
import { Http } from '@vert/services'
import { Pothouse } from './services/pothouse'

Vue.use(VueRouter)

const http = new Http()
http['wow'] = 'http'
App.addSingleton(Http, http)

const potHouse = new Pothouse(http)
potHouse['wow'] = 'pothouse'
App.addSingleton(Pothouse, potHouse)

;(() => {
  const injector = Injector.create(Http, Pothouse)
  const http = injector.get(Http)
  const potHouse = injector.get(Pothouse)
  console.log(http, potHouse)
})()
