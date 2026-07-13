import React from "react";
import { notFound } from "next/navigation";
import { getSeoMetadata } from "@/lib/seo";
import blogs from "@/content/blogs.json";
import StrategyCTA from "@/components/ui/StrategyCTA";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return {};
  return getSeoMetadata(post.title, post.description, `/blog/${slug}`);
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  return (
    <article className="relative overflow-hidden bg-[#1C0F0A] min-h-screen py-16 sm:py-10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,178,106,0.03)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-xs text-[#EDE9E0]/50 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-4 mb-12 pb-8">
          <span className="inline-flex items-center rounded-lg bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3.5 py-1 text-xs font-semibold text-[#FFB26A]">
            Sector Blog &amp; Resources
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-[#EDE9E0]/50">
            <span>By {post.author}</span>
            <span>•</span>
            <span>Published on {post.date}</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none text-[#EDE9E0]/70 space-y-6 text-sm md:text-base leading-relaxed">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("###")) {
              return (
                <h3 key={index} className="text-base md:text-lg font-bold text-white pt-4 uppercase tracking-wider">
                  {paragraph.replace("###", "").trim()}
                </h3>
              );
            }
            if (paragraph.startsWith("*") || paragraph.startsWith("-")) {
              return (
                <ul key={index} className="list-disc pl-6 space-y-2 text-[#FFB26A]">
                  {paragraph.split("\n").map((li, liIdx) => (
                    <li key={liIdx} className="text-[#EDE9E0]/70">
                      {li.replace(/^[*\-]\s+/, "").trim()}
                    </li>
                  ))}
                </ul>
              );
            }
            if (/^\d+\./.test(paragraph)) {
              return (
                <ol key={index} className="list-decimal pl-6 space-y-2 text-[#FFB26A]">
                  {paragraph.split("\n").map((li, liIdx) => (
                    <li key={liIdx} className="text-[#EDE9E0]/70">
                      {li.replace(/^\d+\.\s+/, "").trim()}
                    </li>
                  ))}
                </ol>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        {/* CTA section inside blog */}
        <TiltCard tilt={4} className="glass-card glass-card-hover p-6 md:p-8 mt-16 text-center space-y-4">
          <BookOpen className="w-8 h-8 text-[#FFB26A] mx-auto" />
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Scale Your Tax Business with The Sector of Collectives</h4>
          <p className="text-xs text-[#EDE9E0]/55 max-w-md mx-auto leading-relaxed">
            Gain access to cloud-based professional tax software, ERO Application compliance checks, and a collaborative peer network.
          </p>
          <div className="pt-2">
            <StrategyCTA />
          </div>
        </TiltCard>
      </div>
    </article>
  );
}
