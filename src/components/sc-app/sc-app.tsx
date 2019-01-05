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
            <li><a href="/#/"><sc-icon-home size={15} />Home</a></li>
            <li><a href="/#/components/"><sc-icon-code  size={15} />Components</a></li>
            <li><a href="/#/about/"><sc-icon-info size={15} />About</a></li>
          </ul>
        </sc-navbar>

        <main>
          <slot />
        </main>
      </div>
    )
  }
}