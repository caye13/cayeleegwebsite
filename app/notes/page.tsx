import ArticleItemList from "@/components/ArticleListItem"
import { getCategorisedArticles } from "@/lib/articles"
import DarkModeToggle from "@/components/DarkModeToggle"

const NotesPage = () => {
  const articles = getCategorisedArticles()
  // console.log(articles)
  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20 text-center">
      <header className="font-sourceSans3 font-light text-6xl text-center">
        <h1>cayeleeg captain's (b)log</h1>
      </header>
      <section className="mx-auto text-center">
        <nav>
          <DarkModeToggle />
        </nav>
      </section>
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))}
      </section>
    </section>
  )
}

export default NotesPage