import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white flex flex-col overflow-hidden">
      {/* HERO */}
      <div
        className="relative min-h-[720px] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #eaf6fd 0%, #e2f4f0 40%, #fdf8ed 80%, #e8f3fc 100%)",
        }}
      >
        {/* GRID PAPER TEXTURE */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #013877 1px, transparent 1px), linear-gradient(to bottom, #013877 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* NOISE/GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* BLOBS */}
        <div className="absolute top-[-180px] right-[-150px] w-[600px] h-[600px] rounded-full bg-sky/25 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-100px] w-[450px] h-[450px] rounded-full bg-mint/25 blur-3xl" />
        <div className="absolute top-[35%] left-[42%] w-[320px] h-[320px] rounded-full bg-gold/15 blur-3xl" />

        {/* DECORATIVE NUMBER WATERMARK */}
        <div className="hidden lg:block absolute top-[4%] right-[3%] font-serif text-[280px] leading-none text-brand/[0.04] select-none pointer-events-none tracking-[-15px]">
          24
        </div>

        {/* VERTICAL TICKER — LEFT EDGE */}
        <div className="hidden lg:flex absolute left-0 top-0 bottom-[70px] w-[44px] z-20 flex-col items-center justify-between py-10 bg-brand/[0.02] border-r border-brand/8">
          <div className="text-[10px] font-bold tracking-[3px] uppercase text-brand/50">
            <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              EST. 2019 — BANKSTOWN
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="w-1.5 h-1.5 rounded-full bg-mint" />
            <span className="w-1.5 h-1.5 rounded-full bg-sky" />
          </div>
          <div className="text-[10px] font-bold tracking-[3px] uppercase text-brand/50">
            <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              SCROLL TO EXPLORE ↓
            </span>
          </div>
        </div>

        {/* GRID */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[58%_42%] items-center px-6 md:px-10 lg:pl-24 lg:pr-16 py-12 lg:py-14 gap-10 lg:gap-8">
          {/* LEFT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* TOP BADGE STRIP */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-8 flex-wrap">
              <div className="flex items-center gap-2 bg-brand text-white text-[10px] font-bold tracking-[2px] uppercase pl-2 pr-3 py-1.5 rounded-full">
                <span className="flex w-5 h-5 items-center justify-center rounded-full bg-mint text-brand">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5L4 7L8 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                NDIS Registered
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-brand text-[10px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full shadow-sm ring-1 ring-brand/5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Bankstown NSW
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-brand text-[10px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full shadow-sm ring-1 ring-brand/5">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-mint opacity-75 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-mint" />
                </span>
                Enrolling Now
              </div>
            </div>

            {/* EYEBROW WITH LINE */}
            <div className="flex items-center gap-3 mb-5">
              <span className="h-[1px] w-10 bg-brand/25" />
              <span className="text-[11px] font-bold tracking-[4px] uppercase text-brand/55">
                Career in Care · Since 2019
              </span>
            </div>

            {/* HEADING */}
            <h1 className="font-serif text-[44px] sm:text-[58px] lg:text-[74px] leading-[0.98] tracking-[-2.5px] text-brand mb-6 max-w-[680px]">
              Build a rewarding career in{" "}
              <span className="relative inline-block italic">
                <span className="relative z-10">care</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 14"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2,9 Q50,1 100,7 T198,5"
                    stroke="#efc759"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              & disability support
            </h1>

            {/* DESCRIPTION */}
            <p className="text-[16px] font-medium text-brand/60 max-w-[500px] leading-[1.75] mb-9">
              Nationally recognised, fully online courses for support workers,
              coordinators, and healthcare professionals across Australia.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-10 w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto bg-brand text-white text-[14px] font-bold px-8 py-4 rounded-xl hover:bg-brand-dark transition-all shadow-xl shadow-brand/25 hover:shadow-2xl hover:shadow-brand/30 hover:-translate-y-0.5 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enquire Now
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
              <button className="group w-full sm:w-auto bg-white/90 backdrop-blur-sm text-brand text-[14px] font-bold px-7 py-4 rounded-xl ring-1 ring-brand/10 hover:ring-brand/30 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                Browse Courses
                <span className="w-5 h-5 rounded-full bg-brand/5 flex items-center justify-center text-[10px] group-hover:bg-gold transition-colors">
                  ↓
                </span>
              </button>
            </div>

            {/* TRUST ROW */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative w-10 h-10 rounded-full overflow-hidden border-[3px] border-white shadow-sm"
                  >
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-brand text-white text-[10px] font-bold flex items-center justify-center border-[3px] border-white shadow-sm">
                  +500
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-gold text-[13px]">
                      ★
                    </span>
                  ))}
                  <span className="text-[13px] font-bold text-brand ml-1">
                    4.9
                  </span>
                </div>
                <span className="text-[10px] font-bold tracking-[1px] uppercase text-brand/45">
                  Trusted by 500+ graduates
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — DESKTOP */}
          <div className="hidden lg:flex relative items-center justify-center h-[580px]">
            {/* OUTER DASHED RING */}
            <div
              className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-brand/15 animate-spin"
              style={{ animationDuration: "50s" }}
            />

            {/* SPINNING DASHED RING */}
            <div
              className="absolute w-[440px] h-[440px] rounded-full border-[2px] border-dashed border-sky/50 animate-spin"
              style={{ animationDuration: "25s", animationDirection: "reverse" }}
            />

            {/* DOTS ON ORBIT */}
            <div
              className="absolute w-[500px] h-[500px] animate-spin"
              style={{ animationDuration: "50s" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-md ring-4 ring-gold/20" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-mint shadow-md" />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-sky shadow-md" />
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-brand shadow-md" />
            </div>

            {/* GOLD SOLID RING */}
            <div className="absolute w-[400px] h-[400px] rounded-full border-[3px] border-gold/45" />

            {/* MAIN CIRCLE IMAGE */}
            <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-[8px] border-white shadow-2xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=700&q=80"
                alt="Care professional with client"
                fill
                className="object-cover object-center scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/15 via-transparent to-transparent" />
            </div>

            {/* SMALL CIRCLE — TOP RIGHT */}
            <div className="absolute top-2 right-2 w-[120px] h-[120px] rounded-full overflow-hidden border-[5px] border-white shadow-xl z-20 hover:scale-105 transition-transform">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80"
                alt="Healthcare professional"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* SMALL CIRCLE — BOTTOM LEFT */}
            <div className="absolute bottom-8 left-2 w-[100px] h-[100px] rounded-full overflow-hidden border-[5px] border-white shadow-xl z-20 hover:scale-105 transition-transform">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&q=80"
                alt="Medical training"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* ACCREDITED CARD — TOP LEFT */}
            <div className="absolute top-14 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl ring-1 ring-brand/5 z-20 flex items-center gap-3 hover:-translate-y-1 transition-transform">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-mint to-mint-dark flex items-center justify-center shadow-md">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7L6 10L11 4"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-[12px] font-bold text-brand leading-tight">
                  Accredited
                </div>
                <div className="text-[10px] font-medium text-brand/45 leading-tight mt-0.5">
                  Nationally recognised
                </div>
              </div>
            </div>

            {/* GRADUATES CARD — BOTTOM RIGHT */}
            <div className="absolute bottom-16 -right-4 bg-brand rounded-2xl px-4 py-3 shadow-xl z-20 flex items-center gap-3 hover:-translate-y-1 transition-transform">
              <div className="relative w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center ring-1 ring-white/10">
                <span className="text-gold text-[16px]">🎓</span>
              </div>
              <div>
                <div className="text-[12px] font-bold text-white leading-tight">
                  500+ Graduates
                </div>
                <div className="text-[10px] font-medium text-white/55 leading-tight mt-0.5">
                  Across Australia
                </div>
              </div>
            </div>

            {/* LIVE COUNTER — MIDDLE LEFT */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg ring-1 ring-brand/5 z-20">
              <div className="flex items-center gap-2">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-mint opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-mint" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-brand leading-none">
                    24 enrolled
                  </span>
                  <span className="text-[9px] font-medium text-brand/40 leading-none mt-0.5">
                    this week
                  </span>
                </div>
              </div>
            </div>

            {/* YELLOW CHIP — BOTTOM CENTER */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gold rounded-full px-5 py-2.5 shadow-lg z-20 whitespace-nowrap ring-4 ring-white">
              <span className="text-[12px] font-bold text-brand flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                Self-paced · 100% Online
              </span>
            </div>
          </div>

          {/* MOBILE IMAGE */}
          <div className="flex lg:hidden justify-center pb-6">
            <div className="relative">
              <div
                className="absolute inset-[-18px] rounded-full border border-dashed border-brand/15 animate-spin"
                style={{ animationDuration: "30s" }}
              />
              <div
                className="absolute inset-[-10px] rounded-full border-[2px] border-dashed border-sky/40 animate-spin"
                style={{ animationDuration: "25s", animationDirection: "reverse" }}
              />
              <div className="absolute inset-[-3px] rounded-full border-[2px] border-gold/40" />

              <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=700&q=80"
                  alt="Care professional with client"
                  fill
                  className="object-cover object-center scale-110"
                  priority
                />
              </div>

              <div className="absolute -top-2 -right-4 bg-white rounded-xl px-3 py-2 shadow-lg ring-1 ring-brand/5 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-mint/20 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5L4 7L8 3"
                      stroke="#74c6b4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-brand">
                  Accredited
                </span>
              </div>

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gold rounded-full px-4 py-1.5 shadow-md whitespace-nowrap ring-4 ring-white">
                <span className="text-[11px] font-bold text-brand">
                  Self-paced · 100% Online
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* WAVE */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 70"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-[70px]"
          >
            <path
              d="M0,35 C320,80 800,0 1440,45 L1440,70 L0,70 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* STATS BAR — BELOW WAVE, INSIDE WHITE AREA */}
      <div className="relative bg-white px-6 md:px-10 lg:px-16 pt-2 pb-12 lg:pb-16">
        <div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-2xl shadow-brand/8 ring-1 ring-brand/8 grid grid-cols-2 md:grid-cols-4 overflow-hidden -mt-16 relative z-20">
          <div className="flex items-center gap-3 px-5 py-5 border-r border-b md:border-b-0 border-brand/8 hover:bg-ice/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-brand/5 flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="14"
                  height="14"
                  rx="2"
                  stroke="#013877"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 8H13M7 11H11"
                  stroke="#013877"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[28px] text-brand leading-none">
                6+
              </span>
              <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand/45 mt-1">
                Categories
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-5 border-b md:border-b-0 md:border-r border-brand/8 hover:bg-mist/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-mint/15 flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 10C11.6569 10 13 8.65685 13 7C13 5.34315 11.6569 4 10 4C8.34315 4 7 5.34315 7 7C7 8.65685 8.34315 10 10 10Z"
                  stroke="#5ab39e"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 17C4 13.5 6.5 11 10 11C13.5 11 16 13.5 16 17"
                  stroke="#5ab39e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[28px] text-brand leading-none">
                500+
              </span>
              <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand/45 mt-1">
                Graduates
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-5 border-r border-brand/8 hover:bg-ice/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-sky/15 flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle
                  cx="10"
                  cy="10"
                  r="6.5"
                  stroke="#3aa0c8"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 6V10L12.5 12"
                  stroke="#3aa0c8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[28px] text-brand leading-none">
                100%
              </span>
              <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand/45 mt-1">
                Online
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-5 hover:bg-sand/60 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2L12.5 7.5L18.5 8L14 12L15 18L10 15L5 18L6 12L1.5 8L7.5 7.5L10 2Z"
                  fill="#efc759"
                  stroke="#d4a943"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[28px] text-brand leading-none">
                4.9
              </span>
              <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand/45 mt-1">
                Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}