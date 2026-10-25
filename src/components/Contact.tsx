import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { interestOptions, SITE } from "../data/site";
import { ArchLines, Kolam } from "./Ornaments";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type ContactProps = {
  interest: string;
  onInterestChange: (value: string) => void;
};

type FieldErrors = {
  name?: string;
  contact?: string;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;

function validate(name: string, contact: string, message: string): FieldErrors {
  const errors: FieldErrors = {};

  if (name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  const trimmedContact = contact.trim();
  if (!trimmedContact) {
    errors.contact = "Please add a phone number or email address.";
  } else if (trimmedContact.includes("@")) {
    if (!EMAIL_PATTERN.test(trimmedContact)) {
      errors.contact = "Please enter a valid email address.";
    }
  } else if (!PHONE_PATTERN.test(trimmedContact) || trimmedContact.replace(/\D/g, "").length < 7) {
    errors.contact = "Please enter a valid phone number.";
  }

  if (message.trim().length < 5) {
    errors.message = "Please tell us a little about your enquiry.";
  }

  return errors;
}

export function Contact({ interest, onInterestChange }: ContactProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState("");
  const [manualUrl, setManualUrl] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(name, contact, message);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      setManualUrl("");
      const first = nextErrors.name ? "name" : nextErrors.contact ? "contact-info" : "message";
      document.getElementById(first)?.focus();
      return;
    }

    const enquiry = [
      "Namaskaram Guru Smt. Madhumitha,",
      "",
      `My name is ${name.trim()}.`,
      `I am interested in: ${interest || "General enquiry"}.`,
      "",
      message.trim(),
      "",
      `You can reach me at: ${contact.trim()}`,
    ].join("\n");

    const url = `${SITE.whatsapp}?text=${encodeURIComponent(enquiry)}`;
    setManualUrl(url);
    setStatus(
      "WhatsApp should now be open with your enquiry ready to send. If it did not open, use the direct link below — nothing has been stored on this website.",
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-pad relative overflow-hidden bg-paper"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(183,154,99,0.14),transparent_47%)]" />
        <ArchLines className="absolute -right-20 top-0 h-full w-[48%] text-gold opacity-[0.07]" />
      </div>

      <div className="container-editorial relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="12">Contact &amp; Enrolment</SectionLabel>
              <h2
                id="contact-title"
                className="display mt-7 text-[clamp(2.9rem,5.6vw,5.4rem)]"
              >
                Begin Your Dance{" "}
                <span className="display-italic text-gold-text">Journey.</span>
              </h2>
              <p className="display-italic mt-5 text-[clamp(1.3rem,2vw,1.7rem)] text-ink">
                Let us celebrate the timeless beauty of Kuchipudi together.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-10">
              <div className="border-t border-line pt-6">
                <p className="eyebrow text-[0.51rem] text-muted">The institution</p>
                <p className="mt-2 font-serif text-2xl leading-tight text-ink">
                  {SITE.institution}
                </p>
                <p className="mt-2 text-[0.78rem] uppercase tracking-[0.15em] text-muted">
                  {SITE.location}
                </p>
              </div>

              <div className="mt-8">
                <p className="eyebrow text-[0.51rem] text-muted">Speak with us</p>
                <a
                  href={SITE.tel}
                  className="mt-2 inline-flex items-center gap-3 font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-none text-ink transition-colors hover:text-gold-text"
                >
                  <Phone className="h-5 w-5 text-gold-text" strokeWidth={1.4} aria-hidden="true" />
                  {SITE.phone}
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={SITE.tel} className="btn btn-outline">
                  <Phone className="h-4 w-4" strokeWidth={1.4} aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={`${SITE.whatsapp}?text=${encodeURIComponent(
                    "Namaskaram, I would like to know more about Kuchipudi classes at Sri Narthaki Kuchipudi Natyalaya.",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gold group"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  WhatsApp
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="mt-8 flex items-start gap-4 border border-line bg-paper-alt p-5">
                <Kolam className="mt-0.5 h-5 w-5 shrink-0 text-gold-text" />
                <p className="text-[0.75rem] leading-relaxed text-muted">
                  For class enquiries, workshops, choreography, and performance
                  invitations, call or send a WhatsApp message. We look forward to hearing
                  from you.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal className="border-t border-line pt-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="eyebrow text-[0.52rem] text-gold-text">Enquiry form</p>
                  <p className="mt-2 font-serif text-2xl text-ink">Tell us about you</p>
                </div>
                <p className="max-w-[16rem] text-right text-[0.62rem] uppercase leading-relaxed tracking-[0.13em] text-muted">
                  Opens WhatsApp with your message ready to send
                </p>
              </div>

              <form onSubmit={onSubmit} noValidate className="mt-8">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="eyebrow block text-[0.51rem] text-muted"
                    >
                      Your name <span className="text-gold-text">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="field mt-2"
                      placeholder="Your full name"
                    />
                    {errors.name ? (
                      <p id="name-error" className="mt-2 text-[0.72rem] text-[#b34242]" role="alert">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-info"
                      className="eyebrow block text-[0.51rem] text-muted"
                    >
                      Phone or email <span className="text-gold-text">*</span>
                    </label>
                    <input
                      id="contact-info"
                      name="contact"
                      type="text"
                      autoComplete="tel"
                      value={contact}
                      onChange={(event) => setContact(event.target.value)}
                      aria-invalid={Boolean(errors.contact)}
                      aria-describedby={errors.contact ? "contact-error" : undefined}
                      className="field mt-2"
                      placeholder="How can we reach you?"
                    />
                    {errors.contact ? (
                      <p
                        id="contact-error"
                        className="mt-2 text-[0.72rem] text-[#b34242]"
                        role="alert"
                      >
                        {errors.contact}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-7">
                  <label
                    htmlFor="interest"
                    className="eyebrow block text-[0.51rem] text-muted"
                  >
                    Area of interest <span className="text-gold-text">*</span>
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={interest}
                    onChange={(event) => onInterestChange(event.target.value)}
                    className="field mt-2"
                  >
                    {interestOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-7">
                  <label
                    htmlFor="message"
                    className="eyebrow block text-[0.51rem] text-muted"
                  >
                    Your message <span className="text-gold-text">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="field mt-2 resize-y"
                    placeholder="Tell us a little about your interest, experience, or the occasion."
                  />
                  {errors.message ? (
                    <p
                      id="message-error"
                      className="mt-2 text-[0.72rem] text-[#b34242]"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button type="submit" className="btn btn-gold group sm:min-w-[16rem]">
                    Send Enquiry via WhatsApp
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                  <p className="text-[0.66rem] leading-relaxed text-muted">
                    This form does not store data. Your enquiry is handed off to WhatsApp
                    for you to review and send.
                  </p>
                </div>

                <div aria-live="polite" className="mt-5">
                  {status ? (
                    <div className="border border-gold/40 bg-paper-alt p-4">
                      <p className="text-[0.78rem] leading-relaxed text-ink">{status}</p>
                      {manualUrl ? (
                        <a
                          href={manualUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="link-line mt-2 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-gold-text"
                        >
                          Open WhatsApp directly
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
