import Vue from 'vue'
import Router from 'vue-router'

import { App } from '@vert/core'
import { Pothouse } from './services/pothouse'

Vue.use(Router)

const potHouse = new Pothouse()
potHouse['isGlobalSingleton'] = true
App.addSingleton(Pothouse, potHouse)

