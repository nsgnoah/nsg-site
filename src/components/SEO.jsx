import { useEffect } from 'react'

const SITE_NAME = 'NSG'
const BASE_URL = 'https://nsgsolutions.co'

export default function SEO({ title, description, path = '/' }) {
  const fullTitle = title === 'Home'
    ? `${SITE_NAME} - Software for People | Technology Consulting`
    : `${title} | ${SITE_NAME}`
  const url = `${BASE_URL}${path}`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`)
        || document.querySelector(`meta[property="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        if (name.startsWith('og:')) {
          el.setAttribute('property', name)
        } else {
          el.setAttribute('name', name)
        }
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    setMeta('description', description)
    setMeta('og:title', fullTitle)
    setMeta('og:description', description)
    setMeta('og:url', url)
    setMeta('og:type', 'website')
    setMeta('og:site_name', 'NSG')
    setMeta('og:image', 'https://nsgsolutions.co/og-image.png')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:image', 'https://nsgsolutions.co/og-image.png')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setLink('canonical', url)
  }, [fullTitle, description, url])

  return null
}
