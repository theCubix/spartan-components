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
              <li>with little <sc-tooltip underlined tooltip="And helpful tools :)">sparks of colour</sc-tooltip> </li>
            </sc-list>
          </sc-container>
        </sc-section>
    
        <sc-container>
          <h2 class="title is-2 has-margin-large">Dead Simple Cards</h2>
          <sc-grid class="two-columns">
            <sc-card>
              <h3 slot="title" class="title is-3 underlined">Your dead simple card title.</h3>
              <p slot="content" class="text no-margin-bottom">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </sc-card>
            <sc-card>
              <h3 slot="title" class="title is-3 underlined">Dead awesome</h3>
              <p slot="content" class="text no-margin-bottom">Absodudely. Lorem ipsum or so. </p>
            </sc-card>
            <sc-card>
              <h3 slot="title" class="title is-3 underlined">Dead awesome</h3>
              <p slot="content" class="text no-margin-bottom">Absodudely. Lorem ipsum or so. </p>
            </sc-card>
          </sc-grid>
    
        </sc-container>

        <sc-container>
          <h2 class="title is-2 has-margin-large">Coloured Card</h2>
          <sc-grid class="two-columns">
            <sc-card colouredAccent>
              <h3 slot="title">Notice the colour on the side?</h3>
              <p slot="content" class="text no-margin-bottom">See? Quite a nice touch, isn't it?</p>
            </sc-card>
            <sc-card colouredAccent imageSrc="//source.unsplash.com/400x250" imageAlt="A random image from the web">
              <h3 slot="title">Even works with images.</h3>
              <p slot="content" class="text no-margin-bottom">Cool cool cool.</p>
            </sc-card>
          </sc-grid>
        </sc-container>
      </div>
    )
  }
}