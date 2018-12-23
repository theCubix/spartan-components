import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'sc-tooltip',
  styleUrl: 'sc-tooltip.scss'
})
export class ScTooltip {
  @Prop() tooltip: string
  @Prop() underlined: boolean

  hostData() {
    return {
      'class': { 'underlined': this.underlined },
      'data-tooltip' : this.tooltip,
      'tabindex': '0'
    }
  }

  render() {
    return (
      <slot />
    )
  }
}