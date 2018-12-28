export interface PreviewProps {
  entry: {
    getIn: (path: string[]) => any
  }
  widgetFor: (name: string) => any
}
