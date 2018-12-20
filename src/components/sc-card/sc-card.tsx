import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'sc-card',
  styleUrl: 'sc-card.scss'
})
export class ScCard {
  @Prop() heading: string

  render() {
    return (
      <div class="content">
        <h2 class="title is-2">{this.heading}</h2>
        <slot />
      </div>
    )
  }
}