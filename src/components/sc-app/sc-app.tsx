import { Component } from '@stencil/core'

@Component({
  tag: 'sc-app',
  styleUrl: 'sc-app.scss'
})
export class ScApp {
  render() {
    return (
      <slot />
    )
  }
}