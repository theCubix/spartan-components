import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'sc-pill',
  styleUrl: 'sc-pill.scss'
})
export class ScPill {
  @Prop() colour: string = 'brand-primary'

  hostData() {
    return {
      'class': {
        'bg-colour-brand-primary': this.colour === 'brand-primary',
        'bg-colour-brand-faded': this.colour === 'brand-faded',
        'bg-colour-brand-dark': this.colour === 'brand-dark'
      }
    }
  }
  render() {
    return (
      <slot />
    )
  }
}