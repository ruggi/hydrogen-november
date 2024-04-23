import * as Utopia from 'utopia-api'
import {
  RecommendedProductsGrid,
  BlogComponent,
  Layout,
  CartAside,
  SearchAside,
  MobileMenuAside,
} from '../app/components/Layout'
import { Header } from '../app/components/Header'
import { Footer } from '../app/components/Footer'

import { RecommendedProducts } from '../app/routes/_index'

import {
  Grid,
  Section,
  Row,
  Column,
  HalfAndHalf,
  Spacer,
  Text,
  Stars,
  Placeholder,
  SectionTitle,
  SectionSubtitle,
  SpecialRow,
  TrippyButton,
  TwoFeatureCallout,
  QuoteWithRating,
  DuplicatedImageWithBackground,
} from '../app/components/Components'

import { ReviewCard } from '../app/routes/_index'

const PlaceholderContent = {
  component: 'Placeholder',
  moduleName: '/app/components/Components',
  variants: [],
}

const RowVariants = [
  {
    label: 'Row with Placeholders',
    imports:
      'import { Row, Placeholder } from "/app/components/Components"',
    code: `<Row style={{ gap: 10 }} padded >
  <Placeholder />
  <Placeholder />
</Row>`,
  },
]

const SectionVariants = [
  {
    label: 'Section',
    imports:
      'import { Section, Placeholder } from "/app/components/Components"',
    code: `<Section padded minHeight>
    <Placeholder />
</Section>`,
  },
]

const ColumnVariants = [
  {
    label: 'Column with Placeholders',
    imports:
      "import { Column, Placeholder } from '/app/components/Components'",
    code: `<Column style={{ gap: 10 }} padded >
  <Placeholder />
  <Placeholder />
</Column>`,
  },
]

// SectionSubtitle,
// SectionTitle,

const Components = {
  '/app/routes/trippy-trails': {
    ReviewCard: {
      component: ReviewCard,
      properties: {
        rating: Utopia.sliderControl(0, 5, 1, 'stars'),
        title: Utopia.stringControl(),
        text: Utopia.stringControl(),
        country: Utopia.stringControl(),
        name: Utopia.stringControl(),
      },
      focus: 'never',
      inspector: [],
      variants: {
        label: 'ReviewCard',
        imports: `import { ReviewCard } from '/app/routes/trippy-trails';`,
        code: `<ReviewCard
          rating={4}
          title='A good backpack is like a true friend'
          text='A friend should always underestimate your virtues and an enemy overestimate your faults.'
          country='🇮🇹'
          name='M Puzo'
        />`,
      },
    },
  },
  '/app/routes/_index': {
    RecommendedProducts: {
      component: RecommendedProducts,
      properties: {},
      focus: 'always',
      inspector: [],
    },
  },
  '/app/components/Header': {
    Header: {
      component: Header,
      supportsChildren: false,
      properties: {},
      variants: [],
      emphasis: 'emphasized',
    },
  },
  '/app/components/Footer': {
    Footer: {
      component: Footer,
      supportsChildren: false,
      properties: {},
      variants: [],
      emphasis: 'emphasized',
    },
  },
  '/app/components/Layout': {
    Layout: {
      component: Layout,
      supportsChildren: true,
      properties: {},
      variants: [],
      emphasis: 'regular',
    },
    CartAside: {
      component: CartAside,
      supportsChildren: true,
      properties: {},
      variants: [],
      emphasis: 'subdued',
    },
    SearchAside: {
      component: SearchAside,
      supportsChildren: true,
      properties: {},
      variants: [],
      emphasis: 'subdued',
    },
    MobileMenuAside: {
      component: MobileMenuAside,
      supportsChildren: true,
      properties: {},
      variants: [],
      emphasis: 'subdued',
    },
    RecommendedProductsGrid: {
      component: RecommendedProductsGrid,
      supportsChildren: true,
      properties: {},
      variants: [],
      focus: 'never',
    },
    BlogComponent: {
      component: BlogComponent,
      children: {
        preferredContents: {
          component: 'div',
          variants: { name: 'div' },
        },
      },
      properties: {
        title: {
          control: 'jsx',
          preferredContents: [
            {
              component: 'h1',
              variants: [
                { label: 'Title', code: '<h1>Title</h1>' },
              ],
            },
          ],
        },
        children: Utopia.arrayControl(Utopia.jsxControl()),
      },
      variants: [
        {
          label: '  Post',
          imports: `import { BlogComponent } from '/app/components/Layout';`,
          code: '<BlogComponent title={<h1>Title</h1>}><div>Blog Post</div></BlogComponent>',
        },
        {
          label: 'Empty Blog Post',
          imports: `import { BlogComponent } from '/app/components/Layout';`,
          code: '<BlogComponent title={<h1>Title</h1>} />',
        },
      ],
      preferredChildComponents: [
        {
          name: 'div',
        },
      ],
    },
  },
  '/app/components/Components': {
    DuplicatedImageWithBackground: {
      component: DuplicatedImageWithBackground,
      properties: {
        image: Utopia.stringControl(),
        backgroundColor: Utopia.colorControl(),
      },
      focus: 'never',
      inspector: [],
      variants: {
        label: 'DuplicatedImageWithBackground',
        imports: `import { DuplicatedImageWithBackground } from '/app/components/Components';`,
        code: `<DuplicatedImageWithBackground
          backgroundColor={'var(--lihgt-purple)'}
          image={'merchandise/bag-black@2x.png'}
        />`,
      },
    },
    QuoteWithRating: {
      component: QuoteWithRating,
      properties: {
        quote: Utopia.jsxControl(),
        rating: Utopia.sliderControl(0, 5, 1, 'stars'),
      },
      focus: 'never',
      variants: {
        label: 'QuoteWithRating',
        imports: `import { QuoteWithRating, Placeholder } from "/app/components/Components"`,
        code: `<QuoteWithRating
            quote={'I love this!'}
            rating={5}
          />`,
      },
    },
    TwoFeatureCallout: {
      component: TwoFeatureCallout,
      properties: {
        left: {
          control: 'jsx',
          preferredContents: PlaceholderContent,
        },
        right: {
          control: 'jsx',
          preferredContents: PlaceholderContent,
        },
      },
      focus: 'never',
      variants: {
        label: 'TwoFeatureCallout',
        imports: `import { TwoFeatureCallout, Placeholder } from "/app/components/Components"`,
        code: `<TwoFeatureCallout
            style={{ gap: 10 }}
            left={<Placeholder />}
            right={<Placeholder />}
          />`,
      },
    },
    SpecialRow: {
      component: SpecialRow,
      properties: {
        left: {
          control: 'jsx',
          preferredContents: [PlaceholderContent],
        },
        right: {
          control: 'jsx',
          preferredContents: [PlaceholderContent],
        },
        inverted: Utopia.checkboxControl(),
      },
      focus: 'never',
      variants: [
        {
          label: 'SpecialRow',
          imports: `import { SpecialRow, Placeholder } from "/app/components/Components"`,
          code: `<SpecialRow
            style={{ gap: 10 }}
            inverted={false}
            left={<Placeholder />}
            right={<Placeholder />}
          />`,
        },
      ],
    },
    HalfAndHalf: {
      component: HalfAndHalf,
      properties: {
        left: {
          control: 'jsx',
          preferredContents: PlaceholderContent,
        },
        right: {
          control: 'jsx',
          preferredContents: PlaceholderContent,
        },
        padded: Utopia.checkboxControl(),
        gap: Utopia.numberControl(),
      },
      focus: 'never',
      variants: {
        label: 'HalfAndHalf',
        imports: `import { HalfAndHalf, Placeholder } from "/app/components/Components"`,
        code: `<HalfAndHalf
            style={{ gap: 10 }}
            left={<Placeholder />}
            right={<Placeholder />}
          />`,
      },
    },
    TrippyButton: {
      component: TrippyButton,
      properties: {
        price: {
          control: 'jsx',
          preferredContents: [
            {
              component: 'Money',
              moduleName: '@shopify/hydrogen',
              variants: [
                {
                  label: 'Money',
                  imports:
                    'import { Money } from "@shopify/hydrogen"',
                  code: `<Money data={{
                    amount: '59',
                    currencyCode: 'HUF',
                  }} />`,
                },
              ],
            },
          ],
        },
      },
      children: {
        preferredContents: 'text',
      },
      focus: 'never',
      inspector: ['typography'],
      variants: [
        {
          label: 'TrippyButton with Money price',
          imports: `import { TrippyButton } from "/app/components/Components"
            import { Money } from "@shopify/hydrogen"`,
          code: `<TrippyButton
            price={
              <Money
                data={{ amount: '59', currencyCode: 'HUF' }}
              />
            }
          >Buy now</TrippyButton>`,
        },
      ],
    },
    Placeholder: {
      component: Placeholder,
      properties: {
        margin: Utopia.numberControl(),
        fill: Utopia.colorControl(),
        fixed: Utopia.checkboxControl(),
      },
      focus: 'never',
      inspector: [],
    },
    Grid: {
      component: Grid,
      properties: {
        left: {
          control: 'jsx',
          preferredContents: [
            {
              component: 'Row',
              moduleName: '/app/components/Components',
              variants: RowVariants,
            },
            {
              component: 'Column',
              moduleName: '/app/components/Components',
              variants: ColumnVariants,
            },
          ],
        },
        right: {
          control: 'jsx',
          preferredContents: [
            {
              component: 'Row',
              moduleName: '/app/components/Components',
              variants: RowVariants,
            },
            {
              component: 'Column',
              moduleName: '/app/components/Components',
              variants: ColumnVariants,
            },
          ],
        },
      },
      variants: [],
    },
    Section: {
      component: Section,
      properties: {
        padded: Utopia.checkboxControl(),
        minHeight: Utopia.checkboxControl(),
      },
      focus: 'never',
      children: {
        preferredContents: PlaceholderContent,
      },
      variants: SectionVariants,
    },
    Row: {
      component: Row,
      inspector: ['visual', 'typography'],
      properties: {
        padded: Utopia.checkboxControl(),
        centerH: Utopia.checkboxControl(),
        centerV: Utopia.checkboxControl(),
        grow: Utopia.checkboxControl(),
        scrollable: Utopia.checkboxControl(),
        wrap: Utopia.checkboxControl(),
        gap: Utopia.numberControl(),
      },
      focus: 'never',
      children: {
        preferredContents: [
          {
            component: 'Placeholder',
            moduleName: '/app/components/Components',
            variants: [],
          },
        ],
      },
      variants: RowVariants,
    },
    Column: {
      component: Column,
      properties: {
        padded: Utopia.checkboxControl(),
        centerH: Utopia.checkboxControl(),
        centerV: Utopia.checkboxControl(),
        grow: Utopia.checkboxControl(),
        scrollable: Utopia.checkboxControl(),
        wrap: Utopia.checkboxControl(),
        gap: Utopia.numberControl(),
      },
      focus: 'never',
      children: {
        preferredContents: [
          {
            component: 'Placeholder',
            moduleName: '/app/components/Components',
            variants: [],
          },
        ],
      },
      variants: ColumnVariants,
    },
    Spacer: {
      component: Spacer,
      properties: {
        height: Utopia.stringControl(),
      },
      focus: 'never',
      inspector: [],
      variants: {
        label: 'Spacer',
        imports:
          'import { Spacer } from "/app/components/Components"',
        code: `<Spacer height={50} />`,
      },
    },
    Text: {
      component: Text,
      properties: {
        level: Utopia.popupListControl([
          {
            label: 'large',
            value: 'large',
          },
          {
            label: 'embiggened',
            value: 'embiggened',
          },
          {
            label: 'regular',
            value: 'regular',
          },
          {
            label: 'smaller',
            value: 'smaller',
          },
        ]),
        deemphasized: Utopia.checkboxControl(),
        emboldened: Utopia.checkboxControl(),
        style: Utopia.styleControl(),
      },
      children: { preferredContents: 'text' },
      variants: [
        {
          label: 'Text, embiggened',
          imports:
            'import { Text } from "/app/components/Components"',
          code: `<Text level='embiggened'><span>Embiggened text</span></Text>`,
        },
      ],
    },
    Stars: {
      component: Stars,
      properties: {
        rating: Utopia.sliderControl(0, 5, 1, 'stars'),
        style: Utopia.styleControl(),
      },
      variants: {
        label: 'Stars',
        imports: `import { Stars } from '/app/components/Components'`,
        code: `<Stars rating={5} />`,
      },
    },
    SectionSubtitle: {
      component: SectionSubtitle,
      properties: { style: Utopia.styleControl() },
      children: { preferredContents: 'text' },
      variants: {
        label: 'Section subtitle',
        imports: `import { SectionSubtitle } from "/app/components/Components"`,
        code: `<SectionSubtitle>Section subtitle</SectionSubtitle>`,
      },
    },
    SectionTitle: {
      component: SectionTitle,
      properties: {
        style: Utopia.styleControl(),
      },
      children: 'supported',
      variants: {
        label: 'Section title',
        imports: `import { SectionTitle } from "/app/components/Components"`,
        code: `<SectionTitle>Section title</SectionTitle>`,
      },
    },
  },
}

export default Components
