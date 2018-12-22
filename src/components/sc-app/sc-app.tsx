import { Component } from '@stencil/core'
import '@stencil/router'

@Component({
  tag: 'sc-app',
  styleUrl: 'sc-app.scss'
})
export class ScApp {
  render() {
    return (
      <div>
        <sc-navbar class="is-fixed" name="Spartan Components">
          <ul>
            <li><a href="/#/">Home</a></li>
            <li><a href="/#/components/">Components</a></li>
            <li><a href="/#/about/">About</a></li>
          </ul>
        </sc-navbar>

        <main>
          <slot />
        </main>
      </div>
    )
  }
}