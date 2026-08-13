import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { EditionsGrid } from "@/components/editions-grid";
import { sortedEditions } from "@/content/editions";

export const metadata: Metadata = {
  title: "E-Paper",
  description: "Every monthly edition of The Insides Speak, laid out as a downloadable PDF.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="E-Paper"
        title="The full edition, every month."
        description="Laid out the way it was meant to be read — download the PDF, or catch up on an issue you missed."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <EditionsGrid editions={sortedEditions()} />
      </section>
    </>
  );
}
