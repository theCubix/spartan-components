import { Component, Prop, State, Method } from '@stencil/core'

@Component({
  tag: 'sc-navbar',
  styleUrl: 'sc-navbar.scss'
})
export class ScNavbar {
  @Prop() name: string

  hostData() {
    return {
      'class': { 'is-open': this.menuActive }
    }
  }

  @State() menuActive: boolean

  componentWillLoad() {
    this.menuActive = false
  }

  @Method()
  toggle() {
    this.menuActive = !this.menuActive
  }

  render() {
    return(
      <header class="is-fixed">
        <h1 class="title">{this.name}</h1>
        <img class="menu-icon" src="assets/icon-menu.svg" onClick={() => this.toggle()} />
        <div class="list">
          <img class="close-icon" src="assets/icon-x.svg" onClick={() => this.toggle()} />
          <slot />
        </div>
        <sc-backdrop onClick={() => this.toggle()} class={ this.menuActive === true ? 'show' : null }></sc-backdrop>
      </header>
    )
  }
}