import { Suspense } from 'react'
import {
  Column,
  ProductCard,
  Row,
  TypographyTitle,
} from './Components'
import { Await, useLoaderData } from '@remix-run/react'
import { RecommendedProductsGrid } from './Layout'

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */
export function RecommendedProducts() {
  const { recommendedProducts } = useLoaderData()
  return (
    <Column centerH>
      <TypographyTitle level={2}>
        Featured Products
      </TypographyTitle>
      <Row scrollable>
        {recommendedProducts.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            handle={product.handle}
            image={product.images.nodes[0]}
            title={product.title}
            price={product.priceRange.minVariantPrice}
            backgroundColorIndex={i}
          />
        ))}
      </Row>
    </Column>
  )
}
