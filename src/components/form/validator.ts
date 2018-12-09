const patterns = {
  text: '[0-9a-zA-ZßÖÄÜ\u00E0-\u00FC,. _-]{3,}',
  email: '[0-9a-zA-Z._%+-]+@[0-9a-zA-Z.-]+.[a-z]{2,4}',
  tel: '[()0-9 /+-]*',
}

const validate = ({
  required,
  value,
  minLength,
  maxLength,
  pattern,
}: HTMLInputElement): boolean => {
  const val = value == null ? '' : value.trim()
  if (required && val.length === 0) {
    return false
  }
  if (minLength > 0 && val.length < minLength) {
    return false
  }
  if (maxLength > 0 && val.length > maxLength) {
    return false
  }
  if (pattern != null && !new RegExp(`^(?:${pattern})$`).test(val)) {
    return false
  }
  return true
}

export default {
  patterns,
  validate,
}
