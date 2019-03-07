export default {
  titleCase (str) {
    if (!str) return ''
    else {
      return str.toLowerCase().split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
  }
}
