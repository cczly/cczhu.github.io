import React from "react";
import HonorMd from "@/data/home/Honors.mdx";

export default function HonorSection() {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">Honors and Awards</h1>
      <HonorMd />
    </section>
  );
}
