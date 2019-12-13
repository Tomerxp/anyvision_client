import moment from 'moment'

const fieldMap = {
  kind: 'Media Type',
  trackPrice: 'Price',
  currency: 'Currency',
  releaseDate: 'Released at',
  primaryGenreName: 'Genre',
  trackTimeMillis: 'Length',
  collectionPrice: 'Collection Price',
  description: 'Description',
}

const fieldFormat = {
  releaseDate: date => moment(date).format('DD/MM/YYYY HH:mm'),
  trackTimeMillis: time => moment.utc(time).format('mm:ss'),
  description: text => `${text.substring(0, 100)}...`,
}

const formatFields = (fields = {}) => {
  const formattedFields = []

  Object.keys(fields).map(
    fieldKey =>
      fieldMap[fieldKey] &&
      formattedFields.push({
        field: fieldMap[fieldKey],
        value: fieldFormat[fieldKey]
          ? fieldFormat[fieldKey](fields[fieldKey])
          : fields[fieldKey],
      }),
  )

  return formattedFields
}

export default formatFields
