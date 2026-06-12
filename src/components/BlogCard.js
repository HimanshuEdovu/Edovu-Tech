import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post, href, className = "" }) {
  return (
    <Link
      href={href ?? `/blogs/${post.slug}`}
      className={`group block h-full ${className}`}
    >
      <article className="flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-orange-400/30">
        <div className="relative h-[260px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1628] via-transparent to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">
              {post.category}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-7">
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>{post.readTime}</span>
            <span className="h-1 w-1 rounded-full bg-slate-500" />
            <span>{post.date}</span>
          </div>

          <h3 className="mt-4 line-clamp-2 min-h-[64px] text-2xl font-black leading-snug transition group-hover:text-orange-300">
            {post.title}
          </h3>

          <p className="mt-4 line-clamp-2 min-h-[56px] leading-7 text-slate-400">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between pt-7">
            <span className="font-semibold text-orange-300 transition group-hover:translate-x-2">
              Read Article →
            </span>

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition group-hover:border-orange-400/40 group-hover:bg-orange-500/10">
              →
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
