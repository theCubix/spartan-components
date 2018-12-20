import { Component } from '@stencil/core'

@Component({
  tag: 'sc-grid',
  styleUrl: 'sc-grid.scss'
})
export class ScGrid {
  render() {
    return (
      <slot />
    )
  }
}