"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Slide from "@/components/deck/Slide";
import CornerAccents from "@/components/deck/CornerAccents";

export default function SlideClosing() {
  return (
    <Slide
      style={{
        background: "var(--color-black)",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      background={
        <>
          <div className="glow-orange-tr" />
          <div className="glow-slate-center" />
          <CornerAccents
            color="rgba(255,255,255,0.1)"
            size={28}
            inset={32}
          />
        </>
      }
    >
      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Image
            src="/project-savor-teaser/alehar-logo-darkbg.webp"
            alt="Alehar Group"
            width={180}
            height={44}
            style={{ opacity: 0.95, marginBottom: "1.25rem" }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 600,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            marginBottom: "1rem",
          }}
        >
          Interested in
          <br />
          <span style={{ color: "var(--color-orange)" }}>
            Project Savor?
          </span>
        </motion.h2>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.55,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            width: "60px",
            height: "3px",
            background: "rgba(255,255,255,0.2)",
            marginBottom: "0.75rem",
            transformOrigin: "center",
          }}
        />

        {/* CTA text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            fontSize: "0.9375rem",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.65,
            maxWidth: "600px",
            marginBottom: "1.25rem",
          }}
        >
          If you would like to receive additional information regarding this
          opportunity, please contact us. All communications, inquiries, and
          requests for information relating to these materials should be
          addressed to Alehar at the details below.
        </motion.p>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{ marginBottom: "1.25rem" }}
        >
          <a
            href="mailto:projectsavor@alehar.com"
            style={{
              fontSize: "1.125rem",
              color: "var(--color-orange)",
              textDecoration: "none",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            projectsavor@alehar.com
          </a>
        </motion.div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            width: "60px",
            height: "2px",
            background: "rgba(255,255,255,0.15)",
            marginBottom: "1rem",
            transformOrigin: "center",
          }}
        />

        {/* Contact person */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.95 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.25rem",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              fontSize: "0.625rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "0.25rem",
            }}
          >
            Or reach out to
          </div>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.02em",
            }}
          >
            Friederike Meyer, PhD, CFA
          </div>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.04em",
            }}
          >
            Managing Director
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="mailto:friederike@alehar.com"
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              friederike@alehar.com
            </a>
            <a
              href="https://www.linkedin.com/in/friederikemeyer/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#f77635"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Website */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.1 }}
          style={{ marginBottom: "1.25rem" }}
        >
          <a
            href="https://alehar.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            www.alehar.com
          </a>
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.2 }}
          style={{
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Dubai &middot; Bangalore &middot; Singapore &middot; Manila
        </motion.div>
      </div>
    </Slide>
  );
}
