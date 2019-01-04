import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'sc-card',
  styleUrl: 'sc-card.scss'
})
export class ScCard {
  @Prop() heading: string
  @Prop() imageSrc: string
  @Prop() imageAlt: string
  @Prop() coloured: boolean
  @Prop() colouredAccent: boolean

  hostData() {
    return {
      'class': { 
        'coloured': this.colouredAccent,
        'coloured-background' : this.coloured
      }
    }
  }

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