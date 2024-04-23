import * as Utopia from 'utopia-api'
import { ReviewCard } from '../app/routes/_index'

const Annotations = {
  '/app/routes/trippy-trails': {
    ReviewCard: {
      component: ReviewCard,
      properties: {
        style: Utopia.styleControl(),
        rating: Utopia.numberControl(),
        title: Utopia.stringControl(),
        text: Utopia.stringControl(),
        country: Utopia.stringControl(),
        name: Utopia.stringControl(),
      },
      focus: 'never',
      inspector: [],
      variants: {
        label: 'Review card',
        imports: `import { ReviewCard } from "/app/routes/trippy-trails"`,
        code: `<ReviewCard rating={5} title="Great product" text="10/10 would buy again" country="🇮🇹" name="John Doe" />`,
      },
    },
  },
}

export default Annotations
