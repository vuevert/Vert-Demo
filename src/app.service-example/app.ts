import 'reflect-metadata'
import './start-up'

import { App } from '@vert/core'
import RootComponent from './root-component.vue'

const app = new App({
  element: '#demo-app',
  rootComponent: RootComponent
})

app.start()
