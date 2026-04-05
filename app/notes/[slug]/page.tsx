// import Link from "next/link"
// import { cookies } from "next/headers";
// import fs from "fs";
// import path from "path";
// import { ArrowLeftIcon } from "@heroicons/react/24/solid"
// import { getArticleData } from "@/lib/articles"

// const Article = async ({ params }: { params: Promise<{ slug: string }> }) => {
//     const { slug } = await params
//     const articleData = await getArticleData(slug)

//     return (
//         <section className="mx-auto w-10/12 lg:w-1/2 mt-20 flex flex-col gap-5">
//             <div className="flex justify-between font-sourceSans3">
//                 <Link href={"/notes"} className="articleLinks flex flex-row gap-1 place-items-center hover:text-green-800 transition duration-150">
//                     <ArrowLeftIcon width={20} />
//                     <p>back to home</p>
//                 </Link>
//                 <p>{articleData.date.toString()}</p>
//             </div>
//             <article className="article" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
//         </section>
//     )
// }

// export default Article

// import Link from "next/link"
// import { cookies } from "next/headers"
// import { ArrowLeftIcon } from "@heroicons/react/24/solid"
// import { getArticleData } from "@/lib/articles"
// import PasswordGate from "./PasswordGate"

// const Article = async ({ params }: { params: { slug: string } }) => {
//     const { slug } = params
//     const articleData = await getArticleData(slug)

//     const cookieStore = await cookies()
//     const unlocked = cookieStore.get?.(`unlock_${slug}`)?.value === "yes"

//     if (articleData.protected === true && !unlocked) {
//         return <PasswordGate slug={slug} hint={articleData.hint} />
//     }

//     return (
//         <section className="mx-auto w-10/12 lg:w-1/2 mt-20 flex flex-col gap-5">
//             <div className="flex justify-between font-sourceSans3">
//                 <Link href={"/notes"} className="articleLinks flex flex-row gap-1 place-items-center hover:text-green-800 transition duration-150">
//                     <ArrowLeftIcon width={20} />
//                     <p>back to home</p>
//                 </Link>
//                 <p>{articleData.date.toString()}</p>
//             </div>
//             <article className="article" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
//         </section>
//     )
// }

// export default Article

// import Link from "next/link"
// import { cookies } from "next/headers"
// import { ArrowLeftIcon } from "@heroicons/react/24/solid"
// import { notFound } from "next/navigation"
// import { getArticleData } from "@/lib/articles"
// import PasswordGate from "./PasswordGate"

// const Article = async ({ params }: { params: Promise<{ slug: string }> }) => {
//     const { slug } = await params

//     if (!slug) {
//         notFound()
//     }

//     const articleData = await getArticleData(slug)

//     const cookieStore = await cookies()
//     const unlocked = cookieStore.get(`unlock_${slug}`)?.value === "yes"

//     if (articleData.protected === true && !unlocked) {
//         return <PasswordGate slug={slug} hint={articleData.hint} />
//     }

//     return (
//         <section className="mx-auto w-10/12 lg:w-1/2 mt-20 flex flex-col gap-5">
//             <div className="flex justify-between font-sourceSans3">
//                 <Link href="/notes" className="articleLinks flex flex-row gap-1 place-items-center hover:text-green-800 transition duration-150">
//                     <ArrowLeftIcon width={20} />
//                     <p>back to home</p>
//                 </Link>
//                 <p>{articleData.date.toString()}</p>
//             </div>
//             <article className="article" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
//         </section>
//     )
// }

// export default Article
import Link from "next/link"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { getArticleData } from "@/lib/articles"
import PasswordGate from "./PasswordGate"

const Article = async ({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string }
}) => {
  const resolvedParams = await Promise.resolve(params)
  const { slug } = resolvedParams

  if (!slug) {
    notFound()
  }

  const articleData = await getArticleData(slug)

  const cookieStore = await cookies()
  const unlocked = cookieStore.get(`unlock_${slug}`)?.value === "yes"

  if (articleData.protected === true && !unlocked) {
    return <PasswordGate slug={slug} hint={articleData.hint} />
  }

  return (
    <section className="mx-auto w-10/12 lg:w-1/2 mt-20 flex flex-col gap-5">
      <div className="flex justify-between font-sourceSans3">
        <Link
          href="/notes"
          className="articleLinks flex flex-row gap-1 place-items-center hover:text-green-800 transition duration-150"
        >
          <ArrowLeftIcon width={20} />
          <p>back to home</p>
        </Link>
        <p>{articleData.date.toString()}</p>
      </div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </section>
  )
}

export default Article