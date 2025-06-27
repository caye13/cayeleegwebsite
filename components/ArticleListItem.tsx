// import Link from "next/link"
// import type {ArticleItem } from "@/types"

// interface Props {
//     category: string
//     articles: ArticleItem[]
// }

// const ArticleItemList = ({category, articles}: Props) => {
//     return (
//         <div className="flex flex-col gap-5">
//             <h2 className="font-sourceSans3 text-4xl">{category}</h2>
//             <div className="flex flex-col gap-2.5 font-sourceSans3 text-lg">
//                 {articles.map((article, id) => (
//                     <Link href={`/notes/${article.id}`} key={id} className="articleLinks hover:text-green-800 transition duration-150">
//                         {article.title}
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default ArticleItemList

import Link from "next/link"
import type { ArticleItem } from "@/types"
import "../styles/notes.css"

interface Props {
  article: ArticleItem & { category: string }
}

const ArticleItemList = ({ article }: Props) => {
interface FormatDateOptions {
    year: 'numeric' | '2-digit';
    month: 'short' | 'long' | 'numeric' | '2-digit' | 'narrow';
    day: 'numeric' | '2-digit';
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    } as FormatDateOptions)
}

  return (
    <Link href={`/notes/${article.id}`} className="articleLinks">
      <div className="articleItemBoxes">
        <div className="flex flex-col items-start flex-grow">
          <span className="articleItemTitle">
            {article.title}
          </span>
          <span className="articleItemSubtitle">
            {article.category}
          </span>
        </div>
        <div className="ml-4 flex-shrink-0">
          <span className="articleItemDate">
            Stardate:{" "}
            {formatDate(article.date)}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ArticleItemList