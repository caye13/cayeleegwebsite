// import ArticleItemList from "@/components/ArticleListItem"
// import { getCategorisedArticles } from "@/lib/articles"
// import DarkModeToggle from "@/components/DarkModeToggle"
// import "../../styles/notes.css"

// const NotesPage = () => {
//   const articles = getCategorisedArticles()
//   // console.log(articles)
//   return (
//     <section className="mx-auto w-11/12 lg:w-1/2 mt-20 flex flex-col gap-16 mb-20 text-center">
//       <header className="notesPageTitle font-sourceSans3 font-light text-6xl text-center">
//         <h1>captain's log</h1>
//       </header>
//       <section className="mx-auto text-center">
//         <nav>
//           <DarkModeToggle />
//         </nav>
//       </section>
//       <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
//         {articles !== null &&
//           Object.keys(articles).map((article) => (
//             <ArticleItemList
//               category={article}
//               articles={articles[article]}
//               key={article}
//             />
//           ))}
//       </section>
//     </section>
//   )
// }

// export default NotesPage

import ArticleItemList from "@/components/ArticleListItem"
import { getCategorisedArticles } from "@/lib/articles"
import DarkModeToggle from "@/components/DarkModeToggle"
import "../../styles/notes.css"

const NotesPage = () => {
  const articles = getCategorisedArticles()
  
  // Flatten articles and sort by date (newest first)
  const flattenedArticles = articles !== null 
    ? Object.keys(articles).flatMap(category => 
        articles[category].map(article => ({
          ...article,
          category
        }))
      ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : []

  return (
    <section className="mx-auto w-11/12 lg:w-1/2 mt-20 flex flex-col gap-16 mb-20 text-center">
      <header className="notesPageTitle font-sourceSans3 font-light text-6xl text-center">
        <h1>captain's logs</h1>
      </header>
      <section className="mx-auto text-center">
        <nav>
          <DarkModeToggle />
        </nav>
      </section>
      <section className="flex flex-col gap-6">
        {flattenedArticles.map((article, index) => (
          <ArticleItemList
            key={`${article.id}-${index}`}
            article={article}
          />
        ))}
      </section>
    </section>
  )
}

export default NotesPage