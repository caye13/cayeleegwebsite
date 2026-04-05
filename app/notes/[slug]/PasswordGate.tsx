"use client"

import { useState } from "react"

const SECRET_CODE = "21" 

export default function PasswordGate({
  slug,
  hint,
}: {
  slug: string
  hint?: string
}) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const entered = password.trim()

    if (entered === SECRET_CODE) {
      document.cookie = `unlock_${slug}=yes; path=/; max-age=31536000; samesite=lax`
      window.location.reload()
      return
    }

    setError("incorrect code")
    setLoading(false)
  }

  return (
    <section className="mx-auto w-10/12 lg:w-1/2 mt-20 flex flex-col gap-6">
      <h1 className="text-xl font-sourceSans3">this article is protected</h1>

      {hint ? (
        <p className="text-sm opacity-70 font-sourceSans3">hint: {hint}</p>
      ) : null}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          inputMode="numeric"
          maxLength={2}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter 2 digits"
          className="border p-2"
        />
        <button className="border p-2" disabled={loading}>
          unlock
        </button>
      </form>

      {error ? <p className="text-red-500 text-sm">{error}</p> : null}
    </section>
  )
}