import { useLoaderData } from '@remix-run/react'
import { defer, json } from '@shopify/remix-oxygen'

import {
  Column,
  Section,
  TypographyTitle,
} from '../components/Components'
import { connectToMetaObjects as connectToMetaObjectsTemplate } from '../helpers/connect-metaobject'

export const connectToMetaObjects =
  connectToMetaObjectsTemplate

function processTestimonial(testimonial) {
  return {
    id: testimonial.id,
    rating: testimonial.rating.value,
    summary: testimonial.summary.value,
    reviewerName: testimonial.reviewerName.value,
    countryEmoji: testimonial.countryEmoji.value,
    title: testimonial.title.value,
  }
}

export function processTestimonials(testimonials) {
  return testimonials.nodes.map(processTestimonial)
}

export function processFeaturedCollections(
  featuredCollections,
) {
  return featuredCollections.collections.nodes.map(
    (collection, index) => {
      return {
        id: collection.id,
        inverted: index % 2 !== 0,
        handle: collection.handle,
        title: collection.title,
        color: collection.color.value,
        featuredImage:
          collection.featuredImage.reference.image,
        featureTitle: collection.featureTitle.value,
        featuredTestimonial: processTestimonial(
          collection.featuredTestimonial.reference,
        ),
        relevantProductFeatures:
          collection.relevantProductFeatures.references.nodes.map(
            (feature) => {
              return {
                title: feature.title.value,
                description: feature.description.value,
                image: feature.image.reference.image,
              }
            },
          ),
      }
    },
  )
}

export async function loader({ params, context }) {
  const { testimonials } = await context.storefront.query(
    LANDING_PAGE_QUERY,
    {
      variables: {},
    },
  )

  const recommendedProducts =
    await context.storefront.query(
      RECOMMENDED_PRODUCTS_QUERY,
    )

  const featuredCollections =
    await context.storefront.query(
      FEATURED_COLLECTIONS_QUERY,
      {
        variables: {},
      },
    )

  return defer({
    testimonials: processTestimonials(testimonials),
    recommendedProducts: recommendedProducts.products.nodes,
    featuredCollections: processFeaturedCollections(
      featuredCollections,
    ),
  })
}

export default function LandingPage() {
  const { testimonials } = useLoaderData()
  const { featuredCollections } = useLoaderData()

  return (
    <div>
      <Column>
        <Section minHeight>
          <TypographyTitle level={1}>Titl!</TypographyTitle>
        </Section>
      </Column>
    </div>
  )
}

const PRODUCT_FRAGMENT = `#graphql
  fragment ProductReference on Product {
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
`

const IMAGE_REFERENCE_FRAGMENT = `#graphql
fragment ImageReference on MetafieldReference {
  ... on MediaImage {
    image {
      url
      width
      height
      altText
    }
  }
}
`

const REVIEW_FRAGMENT = `#graphql
  fragment Review on Metaobject {
    id
    type
    rating: field(key: "rating_fixed") {
      value
    }
    summary: field(key: "review_summary") {
      value
    }
    reviewerName: field(key: "reviewer_name") {
      value
    }
    countryEmoji: field(key: "country_emoji") {
      value
    }
    title: field(key: "review_title") {
      value
    }
  }
`

export const LANDING_PAGE_QUERY = `#graphql
${REVIEW_FRAGMENT}
  query LandingPage(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    testimonials: metaobjects(type: "product_ratings", first: 10) {
      nodes {
        ...Review
      }
    }
  }
`

export const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_FRAGMENT}
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 6, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...ProductReference
      }
    }
  }
`

export const FEATURED_COLLECTIONS_QUERY = `#graphql
  ${PRODUCT_FRAGMENT}
  ${IMAGE_REFERENCE_FRAGMENT}
  ${REVIEW_FRAGMENT}
  query FeaturedCollections ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
  collections(first: 6, sortKey: UPDATED_AT, reverse: true) {
    nodes {
      id
      handle
      title
      description
      relevantProductFeatures: metafield(
        namespace: "custom"
        key: "relevantProductFeatures"
      ) {
        references(first: 2) {
          nodes {
            ... on Metaobject {
              title: field(key: "title") {
                value
              }
              description: field(key: "description") {
                value
              }
              image: field(key: "image") {
                reference {
                  ...ImageReference
                }
              }
            }
          }
        }
      }
      featuredTestimonial: metafield(namespace: "custom", key: "featuredTestimonial") {
        reference {
          ... on Metaobject {
            ...Review
          }
        }
      }
      featuredImage: metafield(namespace: "custom", key: "featuredImage") {
        reference {
          ...ImageReference
        }
      }
      featuredProduct: metafield(namespace: "custom", key: "featuredProduct") {
        reference {
          ...ProductReference
        }
      }
      featureTitle: metafield(namespace: "custom", key: "featuretitle") {
        id
        key
        type
        value
      }
      color: metafield(namespace: "custom", key: "color") {
        value
      }
      image {
        id
        url
      }
    }
  }
}
`
