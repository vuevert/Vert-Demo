import { AppComponent, Component } from '@vert/core'

@Component
export default class App01 extends AppComponent {
  get name () {
    return this.$store.getters.getName
  }
}
