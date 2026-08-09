import Link from "next/link";
import { Logo } from "@/components/logo";
import { footerNav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {site.tagline}. {site.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
                Sections
              </p>
              <ul className="space-y-2 text-sm">
                {footerNav.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-ink-soft hover:text-pulse">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
                Reach us
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={`mailto:${site.email}`} className="text-ink-soft hover:text-pulse">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft hover:text-pulse"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="pulse-dot" aria-hidden="true" />
            Staging build — not yet the production edition.
          </p>
        </div>
      </div>
    </footer>
  );
}
