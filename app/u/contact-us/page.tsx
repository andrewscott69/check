"use client"

import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({
    email: "",
    accountNumber: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      setResponse(data.message)
      setForm({ email: "", accountNumber: "", message: "" })
    } catch (err) {
      setResponse("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <input
          name="accountNumber"
          value={form.accountNumber}
          onChange={handleChange}
          required
          placeholder="Your Account Number"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Write your complaint..."
          className="w-full p-2 border rounded h-32"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {response && <p className="mt-4 text-green-600">{response}</p>}
    </div>
  )
}
