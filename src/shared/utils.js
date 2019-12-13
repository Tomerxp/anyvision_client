export const isEmptyObject = obj =>
  !obj || (Object.entries(obj).length === 0 && obj.constructor === Object)

export const imageFormatter = (imageUrl = '', height = 140, width = 345) => {
  const urlSplit = String(imageUrl).split('/')
  urlSplit.pop()
  urlSplit.push(`${width}x${height}0bb.jpg`)

  return urlSplit.join('/')
}

export const extractFileExtension = fileUrl =>
  String(fileUrl)
    .split('.')
    .pop()

export const generateRandomObjectId = (
  m = Math,
  d = Date,
  h = 16,
  s = s => m.floor(s).toString(h),
) => s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))
