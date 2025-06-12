import Link from "next/link"
import type {ArticleItem } from "@/types"

interface Props {
    category: string
    articles: ArticleItem[]
}

const ArticleItemList = ({category, articles}: Props) => {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="font-sourceSans3 text-4xl">{category}</h2>
            <div className="flex flex-col gap-2.5 font-sourceSans3 text-lg">
                {articles.map((article, id) => (
                    <Link href={`/notes/${article.id}`} key={id} className="articleLinks hover:text-green-800 transition duration-150">
                        {article.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ArticleItemList