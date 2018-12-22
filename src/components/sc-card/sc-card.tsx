import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'sc-card',
  styleUrl: 'sc-card.scss'
})
export class ScCard {
  @Prop() heading: string
  @Prop() imageSrc: string
  @Prop() imageAlt: string

  render() {
    return (
      <div>
        { this.imageSrc && <img src={this.imageSrc} alt={this.imageAlt} /> }
        <div class="content">
          <slot name="title" />
          <slot name="content" />
        </div>
      </div>
    )
  }
}