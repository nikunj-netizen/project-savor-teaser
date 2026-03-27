"use client";

import Image from "next/image";
import Slide from "@/components/deck/Slide";
import AnimateIn from "@/components/deck/AnimateIn";
import SectionLabel from "@/components/deck/SectionLabel";

const sections = [
  {
    title: "Confidentiality",
    text: "By gaining possession of this Teaser, the recipient hereby acknowledges that the contents set out in this document are confidential and agrees not to disclose the Teaser and any other information supplied in connection with the Teaser (or any part thereof) to anyone without the prior written permission of Alehar. Upon request, the recipient should immediately return to Alehar this Teaser and any other information supplied in connection with this Teaser (including any copies thereof).",
  },
  {
    title: "Purpose and Independent Investigation",
    text: "The issue of this Teaser shall not be taken as any form of commitment on the part of Alehar to proceed with a transaction. This Teaser has been delivered for informational purposes only and upon the express understanding that it will only be used for the purpose of providing an overview of the Target and its business. Nothing in this Teaser shall be construed as financial, legal or tax advice. The recipient must rely entirely on its own investigations, review and analysis and not upon this Teaser in relation to its assessment of the Target and its business.",
  },
  {
    title: "No Offer of Securities",
    text: "No securities are being offered by the Teaser. The Teaser is not intended to form the basis of a credit, investment or other evaluation. Under no circumstances should any information contained herein be used or considered as an offer to sell or solicitation of any offer to buy any securities or any other instruments in the Target. The recipient acknowledges that information herein may be material, non-public and/or price-sensitive, and applicable securities laws strictly prohibit dealing in publicly listed or tradeable securities based on such information.",
  },
  {
    title: "No Liability",
    text: "To the maximum extent permitted by law, neither Alehar nor any of its respective officers, employees, advisers, consultants, representatives and agents makes any representation or warranty concerning the accuracy, completeness, timeliness, fairness or reliability of the content of this Teaser. No such party accepts any liability for any direct or indirect loss or damage arising from the use of or reliance on the information contained herein.",
  },
  {
    title: "Forward Statements",
    text: "This Teaser may contain forward-looking statements, forecasts, estimates and projections. No representation or warranty is given as to the achievement or reasonableness of such statements. Actual results could vary materially. Neither Alehar nor any independent third party has reviewed the reasonableness of these statements.",
  },
  {
    title: "No Fiduciary & Other",
    text: "Neither the recipient nor Alehar intends that Alehar act as fiduciary. Each party is responsible for making its own independent judgments. This Teaser has been prepared as of March 2026. Alehar does not accept any responsibility to update, supplement or correct the Teaser after this date.",
  },
];

export default function SlideLegal() {
  return (
    <Slide
      className="slide-light"
      style={{
        background: "var(--color-surface-cream)",
        color: "var(--color-slate)",
      }}
    >
      <AnimateIn delay={0.1}>
        <SectionLabel>Legal Notice</SectionLabel>
        <p
          style={{
            fontSize: "0.75rem",
            lineHeight: 1.55,
            color: "var(--color-warm-600)",
            margin: 0,
            marginBottom: "0.75rem",
          }}
        >
          Alehar Advisors Inc (&ldquo;Alehar Advisors&rdquo; or
          &ldquo;Alehar&rdquo;) has prepared this document (the
          &ldquo;Teaser&rdquo;) regarding the potential sale of the Target as
          described herein. The following important notice applies to this Teaser
          and the recipient is therefore advised to read this carefully. In
          accepting the Teaser, the recipient agrees to be bound by the
          following conditions.
        </p>
      </AnimateIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.75rem 1.5rem",
        }}
      >
        {sections.map((section, i) => (
          <AnimateIn key={section.title} delay={0.15 + i * 0.05}>
            <div>
              <div
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--color-orange)",
                  marginBottom: "0.25rem",
                }}
              >
                {section.title}
              </div>
              <p
                style={{
                  fontSize: "0.625rem",
                  lineHeight: 1.55,
                  color: "var(--color-warm-500)",
                  margin: 0,
                }}
              >
                {section.text}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Logo */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Image
          src="/project-savor-teaser/alehar-logo.png"
          alt="Alehar Group"
          width={180}
          height={44}
        />
      </div>
    </Slide>
  );
}
