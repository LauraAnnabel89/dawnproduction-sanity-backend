import Slider from '../components/slider'

export default function resolveInput(type) {
  if (type.name === 'number' && type.options && type.options.range) {
    return Slider
  }

  if (type.name === 'string' && type.options && type.options.type === 'builder') {
    return Slider
  }
}
