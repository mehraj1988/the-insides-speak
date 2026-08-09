"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

// A static export has no server to receive form posts, so this ships wired
// to a free Formspree endpoint by default — set NEXT_PUBLIC_FORM_ENDPOINT
// (see README) to point it at your own form ID. Until then, submissions
// fall back to opening the visitor's email client with the message
// pre-filled, so "Write To Us" always works.
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Message from ${name || "the website"}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-line bg-surface p-8 text-center">
        <p className="font-heading text-xl font-semibold text-ink">Message on its way.</p>
        <p className="mt-2 text-sm text-ink-soft">
          Thanks for writing in — we read every note. If you don&apos;t hear back, reach us
          directly at{" "}
          <a href={`mailto:${site.email}`} className="text-pulse underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Name
          <input
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-md border border-line bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-pulse"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Email
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border border-line bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-pulse"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Message
        <textarea
          required
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="resize-none rounded-md border border-line bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-pulse"
          placeholder="What's on your mind?"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-fit items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-pulse">
          Something went wrong. Please email us directly at {site.email}.
        </p>
      )}
    </form>
  );
}
