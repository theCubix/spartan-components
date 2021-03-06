import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
  namespace: 'SpartanComponents',
  srcDir: 'src',
  bundles: [
    { components: ['sc-app'] },
    { components: ['sc-backdrop'] },
    { components: ['sc-card'] },
    { components: ['sc-container'] },
    { components: ['sc-grid'] },
    { components: ['sc-icon-code'] },
    { components: ['sc-icon-info'] },
    { components: ['sc-icon-menu'] },
    { components: ['sc-icon-home'] },
    { components: ['sc-list'] },
    { components: ['sc-navbar'] },
    { components: ['sc-pill'] },
    { components: ['sc-section'] },
    { components: ['sc-tooltip'] },
    { components: ['sc-home'] },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/variables.scss',
        'src/global/breakpoint.scss'
      ]
    })
  ],
  outputTargets: [
    {
      type: 'www'
    }
  ]
}
