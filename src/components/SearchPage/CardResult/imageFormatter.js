const imageFormatter = (imageUrl = '') => {
  const urlSplit = imageUrl.split('/')
  urlSplit.pop()
  urlSplit.push('345x1400bb.jpg')

  return urlSplit.join('/')
}

export default imageFormatter
