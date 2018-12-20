import { Component } from '@stencil/core'

@Component({
  tag: 'sc-section',
  styleUrl: 'sc-section.scss'
})
export class ScSection {
  render() {
    return(
      <slot />
    )
  }
}