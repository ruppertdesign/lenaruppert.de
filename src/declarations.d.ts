declare const graphql: (query: TemplateStringsArray) => void

interface Window {
  netlifyIdentity?: any
}

declare var window: Window

declare module '*.png'
