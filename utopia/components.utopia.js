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
    code: `<Row style={{ gap: 10 }} padded={true} >
  <Placeholder />
  <Placeholder />
</Row>`,
  },
]

const SectionVariants = [
  {
    label: 'Section with Rows',
    imports:
      'import { Section, Row } from "/app/components/Components"',
    code: `<Section
  style={{
    width: 653,
    height: 374,
    contain: 'layout',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 11,
    backgroundColor: '#0074ff',
    borderRadius: 21,
    overflow: 'hidden',
  }}
>
  <Row
    style={{
      width: '100%',
      height: 408,
      padding: '10px 10px 10px 10px',
      borderRadius: 13,
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        backgroundColor: '#5956d6',
        contain: 'layout',
        height: '100%',
        flexGrow: 1,
        borderRadius: 25,
        overflow: 'hidden',
      }}
    />
  </Row>
  <Row
    style={{
      padding: '10px 10px 10px 10px',
      width: '100%',
      height: 408,
    }}
  >
    <div
      style={{
        backgroundColor: '#5956d6',
        contain: 'layout',
        height: '100%',
        flexGrow: 1,
        borderRadius: 25,
        overflow: 'hidden',
      }}
    />
  </Row>
</Section>`,
  },
  {
    label: 'Section with Columns',
    imports:
      'import { Section, Column } from "/app/components/Components"',
    code: `<Section
  style={{
    width: 688,
    height: 348,
    contain: 'layout',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 40,
    borderRadius: 54,
    overflow: 'hidden',
    backgroundColor: '#5956d6',
  }}
>
  <Column
    style={{
      padding: '60px 60px 60px 60px',
      contain: 'layout',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      flexGrow: 1,
    }}
  >
    <div
      style={{
        backgroundColor: '#0074ff',
        contain: 'layout',
        width: 192,
        height: 276,
        borderRadius: 40,
        overflow: 'hidden',
      }}
    />
  </Column>
  <Column
    style={{
      padding: '60px 60px 60px 60px',
      contain: 'layout',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      flexGrow: 1,
    }}
  >
    <div
      style={{
        backgroundColor: '#0074ff',
        contain: 'layout',
        width: 192,
        height: 276,
        borderRadius: 42,
        overflow: 'hidden',
      }}
    />
  </Column>
</Section>`,
  },
]

const ColumnVariants = [
  {
    label: 'Column with Placeholders',
    imports:
      "import { Column, Placeholder } from '/app/components/Components'",
    code: `<Column style={{ gap: 10 }} padded={true} >
  <Placeholder />
  <Placeholder />
</Column>`,
  },
]

// SectionSubtitle,
// SectionTitle,

const Components = {
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
        rating: Utopia.sliderControl(0, 5, 1),
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
      },
      inspector: ['layout', 'layout-system'],
      focus: 'never',
      children: {
        preferredContents: [
          {
            component: 'Row',
            moduleName: '/app/components/Components',
            variants: RowVariants,
          },
          {
            component: 'Column',
            moduleName: '/app/components/Components',
            variants: { name: 'Column' },
          },
          {
            component: 'Section',
            moduleName: '/app/components/Components',
            variants: { name: 'Section' },
          },
        ],
      },
      variants: [...SectionVariants],
    },
    Row: {
      component: Row,
      inspector: ['layout-system'],
      properties: {
        padded: Utopia.checkboxControl(),
        centered: Utopia.checkboxControl(),
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
      inspector: ['typography'],
      properties: {
        padded: Utopia.checkboxControl(),
        centered: Utopia.checkboxControl(),
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
        rating: Utopia.sliderControl(0, 5, 1),
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
