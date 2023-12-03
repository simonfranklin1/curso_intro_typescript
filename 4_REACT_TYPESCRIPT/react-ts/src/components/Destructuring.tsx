type Props = {
    title: string,
    content: string,
    commentsQty: number,
    tags: string[]

    // 8 - enum
    category: Category
}

export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    PY = "Python"
}

const Destructuring = ( data: Props) => {
    const {title, content, commentsQty, tags, category} = data;

  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentários: {commentsQty}</p>
        <div>
            {tags.map((tag) => (
                <span>#{tag}</span>
            ))}
        </div>
        <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Destructuring