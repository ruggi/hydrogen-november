const METAOBJECT_UPDATE_MUTATION = `#graphql
mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
  metaobjectUpdate(id: $id, metaobject: $metaobject) {
    metaobject {
      handle
    }
    userErrors {
      field
      message
      code
    }
  }
}`

function metaobjectWithFields(id, fields) {
  return {
    id,
    metaobject: { fields },
  }
}

function connectData(dataPath, loaderResult, newValue) {
  if (dataPath[0] !== 'testimonials') {
    return null
  }

  // TODO: use object-path
  const index = parseInt(dataPath[1])

  const review = loaderResult['testimonials'][index]
  if (review == null) {
    return null
  }

  switch (dataPath[2]) {
    case 'rating':
      return metaobjectWithFields(review['id'], [
        {
          key: 'rating',
          value: JSON.stringify({
            scale_min: 1,
            scale_max: 5,
            value: newValue,
          }),
        },
      ])
    case 'summary':
      return metaobjectWithFields(review['id'], [
        {
          key: 'review_summary',
          value: newValue,
        },
      ])
    case 'reviewerName':
      return metaobjectWithFields(review['id'], [
        {
          key: 'reviewer_name',
          value: newValue,
        },
      ])
    case 'countryEmoji':
      return metaobjectWithFields(review['id'], [
        {
          key: 'country_emoji',
          value: newValue,
        },
      ])
    case 'title':
      return metaobjectWithFields(review['id'], [
        {
          key: 'review_title',
          value: newValue,
        },
      ])
    default:
      return null
  }
}

export const connectToMetaObjects = (
  dataPath,
  loaderResult,
  newValue,
) => {
  return {
    query: METAOBJECT_UPDATE_MUTATION,
    variables: connectData(
      dataPath,
      loaderResult,
      newValue,
    ),
  }
}
