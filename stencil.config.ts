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
    { components: ['sc-list'] },
    { components: ['sc-navbar'] },
    { components: ['sc-section'] },
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
