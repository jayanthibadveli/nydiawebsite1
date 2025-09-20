'use client';
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import { siteContent } from "@/lib/utils";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden pt-24 pb-8 md:pb-12" data-sync>
      {/* Background video — same as hero */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* soft veil so text/form remain readable */}
        <div className="absolute inset-0 bg-white/40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/80 to-transparent" />      </div>

      {/* Content */}
      <div className="container relative z-10 max-w-3xl">
        {/* PDF Closing CTA */}
        <div className="text-center mb-10 sync-item">
          <h3 className="text-2xl font-semibold text-foreground">{siteContent.contactCta[0]}</h3>
          {siteContent.contactCta.slice(1).map((p, i) => (
            <p key={i} className="text-neutral-700 mt-3">{p}</p>
          ))}
        </div>

        <SectionHeading title={siteContent.contact.heading} paragraph={siteContent.contact.sub} />
        <form className="card-gradient rounded-2xl p-6 grid gap-4 bg-white/70 backdrop-blur sync-item">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="Name"
              className="bg-white border border-neutral-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ring)]"
            />
            <input
              defaultValue={siteContent.contact.email}
              placeholder="Email"
              className="bg-white border border-neutral-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ring)]"
            />
          </div>
          <input
            placeholder="Company"
            className="bg-white border border-neutral-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ring)]"
          />
          <textarea
            placeholder="Tell us about your project…"
            rows={5}
            className="bg-white border border-neutral-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--ring)]"
          />
          <GradientButton className="justify-self-start" variant="black">
            Send message
          </GradientButton>
        </form>
      </div>
    </section>
  );
}
