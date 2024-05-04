import * as React from 'react'
import { Storyboard, RemixScene } from 'utopia-api'

import { getLoadContext } from '../server'
import { Grid } from '/app/components/Components'
import { Section } from '/app/components/Components'
import { Image } from '@shopify/hydrogen'
import { TypographyText } from '/app/components/Components.tsx'

const contextGetter = getLoadContext(
  {
    PUBLIC_STORE_DOMAIN: 'praiseful-pear.myshopify.com',
    PUBLIC_STOREFRONT_API_TOKEN:
      '541564e540184b9648c529272ffa4b53',
  },
  {
    waitUntil: () => {},
  },
  // Demo cart ID obtained from https://mock.shop/create-cart
  'gid://shopify/Cart/Z2NwLXVzLWNlbnRyYWwxOjAxSEhKQ0I3RFoySlY3Mk5ORlhUVEo2RjhU',
)

export var storyboard = (
  <Storyboard>
    <RemixScene
      data-label='Desktop'
      style={{
        position: 'absolute',
        width: 1440,
        height: 'max-content',
        left: 0,
        top: 0,
        overflow: 'hidden',
      }}
      getLoadContext={contextGetter}
      commentId='bjt'
    />
    <TypographyText
      style={{ top: 0, left: 0, position: 'absolute' }}
    />
    <div
      style={{
        backgroundColor: '#aaaaaa33',
        position: 'absolute',
        left: 1657,
        top: 33,
        width: 278,
        height: 221,
      }}
    ></div>
  </Storyboard>
)
