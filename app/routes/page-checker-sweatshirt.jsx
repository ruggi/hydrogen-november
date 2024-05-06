import { useLoaderData } from '@remix-run/react'
import { defer, json } from '@shopify/remix-oxygen'

import {
  Column,
  Section,
  TypographyTitle,
} from '../components/Components'
import { connectToMetaObjects as connectToMetaObjectsTemplate } from '../helpers/connect-metaobject'
import {
  DecorativeClouds,
  ColorOptionsColumn,
  Placeholder,
  Row,
  HalfAndHalf,
  TrippyButton,
  Spacer,
} from '../components/Components'
import { Money } from '@shopify/hydrogen'
import { Illustration } from '/app/routes/_index'
import { TypographyParagraph } from '../components/Components'
import { TestimonialCard } from '/app/routes/_index'
import {
  ProductFeatureRow,
  QuoteWithRating,
  TwoFeatureCallout,
} from '../components/Components'
import { Image } from '@shopify/hydrogen'
import { Image as Image_2 } from '../components/Components'
import { Placeholder as Placeholder_2 } from 'utopia-api'
import * as React from 'react'

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
      <Column padded>
        <Section
          horizontalPadding='medium'
          style={{ height: 800 }}
        >
          <HalfAndHalf
            left={
              <Column style={{ gap: 28 }}>
                <TypographyTitle level={1}>
                  We produce high quality bags for your
                  lifestyle
                </TypographyTitle>
                <TrippyButton
                  price={
                    <Money
                      data={{
                        amount: '59.00',
                        currencyCode: 'USD',
                      }}
                    />
                  }
                >
                  Add to Cart
                </TrippyButton>
                <Spacer />
                <Illustration />
              </Column>
            }
            right={
              <Row gap={42} style={{ gap: 38 }}>
                <Column centerV>
                  <ColorOptionsColumn />
                </Column>
                <Column centerV centerH grow>
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '40%',
                      bottom: '15%',
                      borderRadius: 30,
                      backgroundColor: 'var(--yellow)',
                      zIndex: -1,
                    }}
                  >
                    <DecorativeClouds />
                  </div>
                  <img
                    alt='Hero Image'
                    srcSet='merchandise/bag-hero@2x.png 2x'
                  />
                </Column>
                <Column centerV gap={10}>
                  <img
                    alt='Badge 1'
                    srcSet='badge_01@2x.png 2x'
                  />
                  <img
                    alt='Badge 2'
                    srcSet='badge_02@2x.png 2x'
                  />
                  <img
                    alt='Badge 3'
                    srcSet='badge_03@2x.png 2x'
                  />
                  <img
                    alt='Badge 4'
                    srcSet='badge_04@2x.png 2x'
                  />
                </Column>
              </Row>
            }
          />
        </Section>
        <Section style={{ padding: '5em 9em' }}>
          <Column gap={50}>
            {featuredCollections.map((listItem) => (
              <ProductFeatureRow
                background={listItem['color']}
                image={
                  <div style={{ contain: 'layout' }}>
                    <Image
                      style={{ height: 'auto' }}
                      data={{
                        altText: 'Example image',
                        url: listItem['featuredImage'][
                          'url'
                        ],
                        height: 'auto',
                      }}
                    />
                    <QuoteWithRating
                      quote='Testimonial Quote'
                      rating={5}
                      backgroundColor={listItem['color']}
                      style={{
                        position: 'relative',
                        left: 100,
                      }}
                    />
                  </div>
                }
                content={
                  <Column style={{ padding: '2em 2em' }}>
                    <h2
                      style={{
                        color: 'var(--color-light)',
                        fontSize: 40,
                        paddingTop: '1em',
                        lineHeight: '1.2em',
                      }}
                    >
                      {listItem['featureTitle']}
                    </h2>
                    <a
                      style={{
                        marginTop: '1em',
                        color: 'white',
                      }}
                      href='/'
                    >
                      {listItem['title']}
                    </a>
                    <TwoFeatureCallout
                      style={{ marginTop: '1.4em' }}
                      left={
                        <Column padded>
                          <Image
                            style={{
                              width: 55,
                              height: 55,
                            }}
                            data={{
                              url: 'https://cdn.shopify.com/s/files/1/0598/5959/9382/files/battery_ab4fb1b1-24e6-457e-8f0f-6443b0318ffe.png',
                            }}
                          />
                          <h4>Callout Name</h4>
                          <p>Callout Description</p>
                        </Column>
                      }
                      right={
                        <Column padded>
                          <Image
                            style={{
                              width: 55,
                              height: 55,
                            }}
                            data={{
                              url: 'https://cdn.shopify.com/s/files/1/0598/5959/9382/files/battery_ab4fb1b1-24e6-457e-8f0f-6443b0318ffe.png',
                            }}
                          />
                          <h4>Callout Name</h4>
                          <p>Callout Description</p>
                        </Column>
                      }
                    />
                  </Column>
                }
              />
            ))}
          </Column>
        </Section>
        <Section
          style={{ background: 'white', paddingTop: 100 }}
        >
          <Column centerH>
            <Column
              centerH
              centerV
              style={{
                paddingLeft: '21em',
                paddingRight: '21em',
                marginBottom: 50,
              }}
            >
              <TypographyTitle level={5}>
                They love us ❤️
              </TypographyTitle>
              <TypographyTitle
                level={2}
                style={{
                  marginTop: 8,
                  position: 'relative',
                }}
              >
                <img
                  style={{
                    position: 'absolute',
                    top: -55,
                    left: -55,
                    transform: 'scale(.5)',
                    zIndex: -1,
                  }}
                  src='decorative/swirl_black_02@2x.png'
                  alt='decorative swirl'
                />
                <img
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: -80,
                    transform: 'scale(.5)',
                    zIndex: -1,
                  }}
                  src='decorative/underline_01@2x.png'
                  alt='decorative swirl'
                />
              </TypographyTitle>
              <TypographyTitle level={2}>
                some of our happy faces
              </TypographyTitle>
              <TypographyParagraph
                level='large'
                style={{
                  marginTop: 16,
                  marginBottom: 16,
                  textAlign: 'center',
                }}
              >
                Our backpacks are worn and loved by
                millions. But don't take it from us - here
                is what some of our faceless customers are
                saying about our products and service.
              </TypographyParagraph>
            </Column>
            <Row
              gap={57}
              scrollable
              style={{ marginBottom: 36 }}
            >
              {testimonials.map((testimonial) => {
                return (
                  <TestimonialCard
                    key={testimonial.id}
                    rating={testimonial.rating}
                    title={testimonial.title}
                    text={testimonial.summary}
                    country={testimonial.countryEmoji}
                    name={testimonial.reviewerName}
                  />
                )
              })}
            </Row>
          </Column>
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
