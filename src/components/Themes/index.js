import config from '../../Utils/config'

export default function Theme() {
  document.documentElement.style.setProperty(
    '--primary-color',config.themas[0]
  )

}