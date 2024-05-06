import * as Utopia from 'utopia-api'
import {
  TypographyText,
  TypographyTitle,
  TypographyParagraph,
} from '../app/components/Components'

export const AntdTextVariants = [
  {
    label: 'Text',
    imports:
      'import { TypographyText } from "/app/components/Components"',
    code: `<TypographyText>Sample Text</TypographyText>`,
  },
  {
    label: 'Text (italic)',
    imports:
      'import { TypographyText } from "/app/components/Components"',
    code: `<TypographyText italic>Sample Text</TypographyText>`,
  },
  {
    label: 'Text (bold)',
    imports:
      'import { TypographyText } from "/app/components/Components"',
    code: `<TypographyText strong>Sample Text</TypographyText>`,
  },
]

export const AntdTitleVariants = [
  {
    label: 'Title (Level 1)',
    imports:
      'import { TypographyTitle } from "/app/components/Components"',
    code: `<TypographyTitle level={1}>Sample Text</TypographyTitle>`,
  },
  {
    label: 'Title (Level 2)',
    imports:
      'import { TypographyTitle } from "/app/components/Components"',
    code: `<TypographyTitle level={2}>Sample Text</TypographyTitle>`,
  },
  {
    label: 'Title (Level 3)',
    imports:
      'import { TypographyTitle } from "/app/components/Components"',
    code: `<TypographyTitle level={3}>Sample Text</TypographyTitle>`,
  },
  {
    label: 'Title (Level 4)',
    imports:
      'import { TypographyTitle } from "/app/components/Components"',
    code: `<TypographyTitle level={4}>Sample Text</TypographyTitle>`,
  },
  {
    label: 'Title (Level 5)',
    imports:
      'import { TypographyTitle } from "/app/components/Components"',
    code: `<TypographyTitle level={5}>Sample Text</TypographyTitle>`,
  },
]

export const AntdParagraphVariants = [
  {
    label: 'Paragraph',
    imports:
      'import { TypographyParagraph } from "/app/components/Components"',
    code: `<TypographyParagraph>Sample Text</TypographyParagraph>`,
  },
  {
    label: 'Paragraph (italic)',
    imports:
      'import { TypographyParagraph } from "/app/components/Components"',
    code: `<TypographyParagraph italic>Sample Text</TypographyParagraph>`,
  },
  {
    label: 'Paragraph (bold)',
    imports:
      'import { TypographyParagraph } from "/app/components/Components"',
    code: `<TypographyParagraph strong>Sample Text</TypographyParagraph>`,
  },
]

const AntdTypoBaseProps = {
  italic: Utopia.checkboxControl(),
  underline: Utopia.checkboxControl(),
  mark: Utopia.checkboxControl(),
  code: Utopia.checkboxControl(),
  delete: Utopia.checkboxControl(),
  disabled: Utopia.checkboxControl(),
  ellipsis: Utopia.checkboxControl(),
  keyboard: Utopia.checkboxControl(),
  copyable: Utopia.checkboxControl(),
  type: Utopia.popupListControl([
    {
      label: 'none',
      value: 'undefined',
    },
    {
      label: 'secondary',
      value: 'secondary',
    },
    {
      label: 'success',
      value: 'success',
    },
    {
      label: 'warning',
      value: 'warning',
    },
    {
      label: 'danger',
      value: 'danger',
    },
  ]),
}

const AntdTypoAnnotations = {
  properties: AntdTypoBaseProps,
  focus: 'never',
  children: {
    preferredContents: 'text',
  },
  focus: 'never',
  inspector: ['typography'],
}

/**
 * @type {{[modulePath: string]: {[componentName:string]: import("utopia-api").ComponentToRegister}}}
 */
const Components = {
  '/app/components/Components': {
    TypographyText: {
      ...AntdTypoAnnotations,
      properties: {
        ...AntdTypoBaseProps,
        strong: {
          control: 'checkbox',
          label: 'bold',
        },
      },
      component: TypographyText,
      icon: 'text',
      variants: AntdTextVariants,
    },
    TypographyTitle: {
      ...AntdTypoAnnotations,
      properties: {
        level: Utopia.sliderControl(1, 5, 1),
        ...AntdTypoBaseProps,
      },
      component: TypographyTitle,
      icon: 'title',
      variants: AntdTitleVariants,
    },
    TypographyParagraph: {
      ...AntdTypoAnnotations,
      properties: {
        deemphasized: Utopia.checkboxControl(),
        strong: {
          control: 'checkbox',
          label: 'bold',
        },
        ...AntdTypoBaseProps,
      },
      component: TypographyParagraph,
      icon: 'paragraph',
      variants: AntdParagraphVariants,
    },
  },
}

export default Components
