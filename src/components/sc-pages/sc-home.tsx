import { Component } from '@stencil/core'

@Component({
  tag: 'sc-home',
  styleUrl: 'sc-home.scss'
})
export class ScHome {
  render() {
    return (
      <div>
        <sc-section isFullheight hasCentered hasNomargin>
          <sc-container>
            <h1 class="title is-1 has-margin">spartan components.</h1>
            <sc-list>
              <li>a components collection</li>
              <li>reduced to the minimum</li>
              <li>with little <sc-tooltip underlined tooltip="and helpful tools">sparks of colour</sc-tooltip> </li>
            </sc-list>
            {/* <a class="underlined cta" href="#helloworld">get to know more</a> */}
          </sc-container>
        </sc-section>

        <sc-section id="helloworld">
          <sc-container>
            <h2 class="title is-2 has-margin-large">dead simple cards</h2>
            <sc-grid class="two-columns">
              <sc-card>
                <h3 slot="title" class="title is-3">your dead simple card title</h3>
                <p slot="content" class="text no-margin-bottom">
                  lorem ipsum dolor, sit amet consectetur adipisicing elit
                </p>
              </sc-card>
              <sc-card>
                <h3 slot="title" class="title is-3">dead awesome</h3>
                <p slot="content" class="text no-margin-bottom">absodudely. lorem ipsum or so</p>
              </sc-card>
              <sc-card>
                <h3 slot="title" class="title is-3">awesome dad</h3>
                <p slot="content" class="text no-margin-bottom"><i>oh no</i>, i dad it again</p>
              </sc-card>
            </sc-grid>
          </sc-container>
        </sc-section>

        <sc-section>
          <sc-container>
            <h2 class="title is-2 has-margin-large">coloured card</h2>
            <sc-grid class="two-columns">
              <sc-card colouredAccent>
                <h3 slot="title">notice the colour on the side?</h3>
                <p slot="content" class="text no-margin-bottom">see? quite a nice touch, isn't it?</p>
              </sc-card>
              <sc-card colouredAccent imageSrc="//source.unsplash.com/400x250" imageAlt="A random image from the web">
                <h3 slot="title">even works with images</h3>
                <p slot="content" class="text no-margin-bottom"><i>coolcoolcool</i></p>
              </sc-card>
            </sc-grid>
          </sc-container>
        </sc-section>

        <sc-section isFullheight hasCentered class="shapes">
          <sc-container>
            <h2 class="title is-1">
              contrast and shapes<br/>
              used in delicate harmony
            </h2>
          </sc-container>
        </sc-section>

        <sc-section isFullheight hasCentered>
          <sc-container>
            <h2 class="title is-1">
              minimalism is not a lack of something<br/>
              it is simply the <span class="underlined">perfect amount</span> of something
            </h2>
          </sc-container>
        </sc-section>
      </div>
    )
  }
}