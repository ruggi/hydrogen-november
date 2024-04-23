import { defer } from '@shopify/remix-oxygen'
import {
  Await,
  useLoaderData,
  Link,
} from '@remix-run/react'
import { Suspense } from 'react'
import { Image, Money } from '@shopify/hydrogen'
import { RecommendedProductsGrid } from '../components/Layout'
import {
  ProductCard,
  SectionTitle,
} from '~/components/Components'

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{ title: 'Hydrogen | Home' }]
}

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({ context }) {
  const { storefront } = context
  const { collections } = await storefront.query(
    FEATURED_COLLECTION_QUERY,
  )
  const featuredCollection = collections.nodes[0]
  const recommendedProducts = storefront.query(
    RECOMMENDED_PRODUCTS_QUERY,
  )

  return defer({
    featuredCollection,
    recommendedProducts,
    collections,
  })
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData()
  return (
    <div className='home'>
      <FeaturedCollection
        collection={data['collections']['nodes'][4]}
      />
      <RecommendedProducts
        products={data.recommendedProducts}
      />
    </div>
  )
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function FeaturedCollection({ collection }) {
  if (!collection) return null
  const image = collection?.image
  return (
    <Link
      className='featured-collection'
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className='featured-collection-image'>
          <Image data={image} sizes='100vw' />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  )
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */
export function RecommendedProducts({ products }) {
  return (
    <div className='recommended-products'>
      <SectionTitle>Featured Products</SectionTitle>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({ products }) => {
            return (
              <RecommendedProductsGrid>
                {products.nodes.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    handle={product.handle}
                    image={product.images.nodes[0]}
                    title={product.title}
                    price={
                      product.priceRange.minVariantPrice
                    }
                    backgroundColorIndex={i}
                  />
                ))}
              </RecommendedProductsGrid>
            )
          }}
        </Await>
      </Suspense>
      <br />
    </div>
  )
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 5, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 6, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
