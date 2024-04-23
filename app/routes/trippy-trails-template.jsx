import { useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'
import { Column, PageTitle } from '../components/Components'

export function processReviews(reviews) {
  return reviews.nodes.map((review) => ({
    id: review.id,
    rating: JSON.parse(review.rating.value).value,
    summary: review.summary.value,
    reviewerName: review.reviewerName.value,
    countryEmoji: review.countryEmoji.value,
    title: review.title.value,
  }))
}

export async function loader({ params, context }) {
  const { reviews } = await context.storefront.query(
    LANDING_PAGE_QUERY,
    {
      variables: {},
    },
  )

  return json({ reviews: processReviews(reviews) })
}

export default function LandingPage() {
  const { reviews } = useLoaderData()
  return (
    <Column>
      <PageTitle>Hi!</PageTitle>
    </Column>
  )
}

export const LANDING_PAGE_QUERY = `#graphql
  query LandingPage(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    reviews: metaobjects(type: "product_ratings", first: 10) {
    nodes {
      id
      type
      rating: field(key: "rating") {
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
  }
  }
`
