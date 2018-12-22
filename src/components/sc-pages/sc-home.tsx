import { Component } from '@stencil/core'

@Component({
  tag: 'sc-home'
})
export class ScHome {
  render() {
    return (
      <div>
        <sc-section class="is-fullheight has-centered">
          <sc-container>
            <h1 class="title is-1 has-margin">Spartan Components</h1>
            <sc-list>
              <li>a components collection</li>
              <li>reduced to the minimum</li>
              <li>with little <span class="underlined">sparks of colour</span></li>
            </sc-list>
          </sc-container>
        </sc-section>
    
        <sc-container>
          <sc-grid class="two-columns">

            <sc-card imageSrc="https://source.unsplash.com/random/400x200" imageAlt="another one">
              <h1 slot="title" class="title is-2">Web Components FTW.</h1>
              <p slot="content" class="text no-margin-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </sc-card>

            <sc-card imageSrc="https://source.unsplash.com/random/400x230" imageAlt="some random image">
              <h1 slot="title" class="title is-2">Right? So it is I guess</h1>
              <p slot="content" class="text no-margin-bottom">Absodudely. Lorem ipsum oder so. </p>
            </sc-card>
          </sc-grid>
    
        </sc-container>
      </div>
    )
  }
}