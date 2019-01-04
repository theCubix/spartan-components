import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'sc-section',
  styleUrl: 'sc-section.scss'
})
export class ScSection {
  @Prop() isFullheight: boolean
  @Prop() hasCentered: boolean
  @Prop() hasNomargin: boolean

  hostData() {
    return {
      'class': { 
        'is-fullheight': this.isFullheight,
        'has-centered': this.hasCentered,
        'has-nomargin': this.hasNomargin,
      }
    }
  }
  render() {
    return(
      <slot />
    )
  }
}