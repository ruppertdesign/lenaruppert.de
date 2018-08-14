import * as React from 'react'
import { HTMLContent } from '../Content'

interface Props {
  title: string
  content: string
}

export default ({ title, content }: Props) => {
  return (
    <section>
      <h1>{title}</h1>
      <HTMLContent className="content" content={content} />
    </section>
  )
}
