import { Component } from '@stencil/core'

@Component({
  tag: 'sc-container',
  styleUrl: 'sc-container.scss'
})
export class ScContainer {
  render() {
    return(
      <slot />
    )
  }
}