import { Component } from '@stencil/core'

@Component({
  tag: 'sc-list',
  styleUrl: 'sc-list.scss'
})
export class ScList {
  render() {
    return(
      <slot />
    )
  }
}