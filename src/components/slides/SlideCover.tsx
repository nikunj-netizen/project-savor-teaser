"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Slide from "@/components/deck/Slide";
import CornerAccents from "@/components/deck/CornerAccents";

export default function SlideCover() {
  return (
    <Slide
      style={{
        background: "var(--color-black)",
        color: "white",
        justifyContent: "center",
      }}
      background={
        <>
          <div className="glow-orange-tr" />
          <div className="glow-slate-center" />
          <CornerAccents
            color="rgba(255,255,255,0.08)"
            size={28}
            inset={32}
          />
        </>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ maxWidth: "750px" }}
      >
        <Image
          src="/alehar-logo-darkbg.webp"
          alt="Alehar Group"
          width={180}
          height={44}
          style={{ opacity: 0.95, marginBottom: "2rem" }}
          priority
        />
        <div
          style={{
            fontSize: "0.8125rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "1rem",
          }}
        >
          Confidential Investment Opportunity
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 600,
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            marginBottom: "1rem",
          }}
        >
          Project <span style={{ color: "var(--color-orange)" }}>Savor</span>
        </h1>
        <div
          style={{
            width: "80px",
            height: "3px",
            background: "var(--color-orange)",
            marginBottom: "1.25rem",
          }}
        />
        <div
          style={{
            fontSize: "1rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.5,
            marginBottom: "1.5rem",
          }}
        >
          A Leading Omnichannel Food Distribution
          <br />
          Platform in the Philippines
        </div>
        <div
          style={{
            fontSize: "0.875rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          [Strategic Investment]
        </div>
      </motion.div>
    </Slide>
  );
}
