import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'sc-icon-code'
})
export class ScIconCode {
  @Prop() coloured: boolean
  @Prop() size: number = 24

  hostData() {
    return {
      'class': {
        'coloured': this.coloured,
        'icon': true
      },
    }
  }

  render () {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={this.size}
        height={this.size}>
        <path
          class="heroicon-ui"
          d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z"/>
      </svg>
    )
  }
}