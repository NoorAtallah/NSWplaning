import Image from "next/image";


export default function Hero() {
  return (
    <section className="bg-white flex flex-col overflow-hidden">

   

      {/* HERO */}
      <div
        className="relative min-h-[620px] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(145deg, #eaf6fd 0%, #e2f4f0 40%, #fdf8ed 80%, #e8f3fc 100%)" }}
      >

        {/* BLOBS */}
        <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full bg-[#6ac7ed]/20 blur-3xl" />
        <div className="absolute bottom-[-80px] left-[-80px] w-[380px] h-[380px] rounded-full bg-[#74c6b4]/20 blur-3xl" />
        <div className="absolute top-[40%] left-[40%] w-[260px] h-[260px] rounded-full bg-[#efc759]/10 blur-2xl" />

        {/* GRID */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[55%_45%] items-center px-6 md:px-10 lg:px-14 py-12 lg:py-14 gap-10 lg:gap-6">

          {/* LEFT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* TOP PILLS */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 flex-wrap">
              <div className="flex items-center gap-2 bg-[#013877] text-white text-[10px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#74c6b4] inline-block" />
                NDIS Registered Provider
              </div>
              <div className="flex items-center gap-2 bg-white text-[#013877] text-[10px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#efc759] inline-block" />
                Bankstown NSW
              </div>
            </div>

            {/* HEADING */}
            <h1 className="font-serif text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.07] tracking-[-1.5px] text-[#013877] mb-6 max-w-[600px]">
              Build a rewarding career in care & disability support
            </h1>

            <p className="text-[15px] font-medium text-[#013877]/60 max-w-[480px] leading-[1.85] mb-8">
              Nationally recognised, fully online courses designed for support workers,
              coordinators, and healthcare professionals across Australia.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-10 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#013877] text-white text-[14px] font-bold px-8 py-3.5 rounded-xl hover:bg-[#012a5a] transition-colors shadow-lg shadow-[#013877]/20">
                Enquire Now →
              </button>
              <button className="w-full sm:w-auto bg-white text-[#013877] text-[14px] font-bold px-7 py-3.5 rounded-xl border-2 border-[#013877]/10 hover:border-[#013877]/30 transition-colors shadow-sm">
                Browse Courses
              </button>
            </div>

            {/* STATS */}
            <div className="flex w-full sm:w-fit rounded-2xl overflow-hidden border border-[#013877]/8 bg-white shadow-sm">
              <div className="flex flex-col items-center justify-center flex-1 sm:flex-none sm:px-6 lg:px-8 py-4 border-r border-[#013877]/8">
                <span className="font-serif text-[26px] lg:text-[32px] text-[#013877] leading-none">6+</span>
                <span className="text-[10px] font-bold tracking-[1px] uppercase text-[#013877]/40 mt-1">Categories</span>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 sm:flex-none sm:px-6 lg:px-8 py-4 border-r border-[#013877]/8">
                <span className="font-serif text-[26px] lg:text-[32px] text-[#013877] leading-none">500+</span>
                <span className="text-[10px] font-bold tracking-[1px] uppercase text-[#013877]/40 mt-1">Graduates</span>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 sm:flex-none sm:px-6 lg:px-8 py-4 border-r border-[#013877]/8">
                <span className="font-serif text-[26px] lg:text-[32px] text-[#013877] leading-none">100%</span>
                <span className="text-[10px] font-bold tracking-[1px] uppercase text-[#013877]/40 mt-1">Online</span>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 sm:flex-none sm:px-6 lg:px-8 py-4">
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-[#efc759] text-[11px]">★</span>
                  ))}
                </div>
                <span className="text-[10px] font-bold tracking-[1px] uppercase text-[#013877]/40">Reviews</span>
              </div>
            </div>

          </div>

          {/* RIGHT — desktop only full circle layout */}
          <div className="hidden lg:flex relative items-center justify-center h-[520px]">

            {/* SPINNING DASHED RING */}
            <div
              className="absolute w-[430px] h-[430px] rounded-full border-[2px] border-dashed border-[#6ac7ed]/50 animate-spin"
              style={{ animationDuration: "20s" }}
            />

            {/* SOLID RING */}
            <div className="absolute w-[390px] h-[390px] rounded-full border-[3px] border-[#efc759]/50" />

            {/* MAIN CIRCLE IMAGE */}
            <div className="relative w-[340px] h-[340px] rounded-full overflow-hidden border-[8px] border-white shadow-2xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=700&q=80"
                alt="Care professional with client"
                fill
                className="object-cover object-center scale-110"
                priority
              />
            </div>

            {/* SMALL CIRCLE — TOP RIGHT */}
            <div className="absolute top-6 right-6 w-[110px] h-[110px] rounded-full overflow-hidden border-[5px] border-white shadow-xl z-20">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80"
                alt="Healthcare professional"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* SMALL CIRCLE — BOTTOM LEFT */}
            <div className="absolute bottom-10 left-6 w-[90px] h-[90px] rounded-full overflow-hidden border-[5px] border-white shadow-xl z-20">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&q=80"
                alt="Medical training"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* FLOATING CARD — TOP LEFT */}
            <div className="absolute top-16 left-0 bg-white rounded-2xl px-4 py-3 shadow-lg z-20 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#74c6b4]/20 flex items-center justify-center">
                <span className="text-[#74c6b4] text-[14px] font-bold">✓</span>
              </div>
              <div>
                <div className="text-[12px] font-bold text-[#013877]">Accredited</div>
                <div className="text-[10px] font-medium text-[#013877]/45">Nationally recognised</div>
              </div>
            </div>

            {/* FLOATING CARD — BOTTOM RIGHT */}
            <div className="absolute bottom-16 right-0 bg-[#013877] rounded-2xl px-4 py-3 shadow-lg z-20 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-[#efc759] text-[14px] font-bold">🎓</span>
              </div>
              <div>
                <div className="text-[12px] font-bold text-white">500+ Graduates</div>
                <div className="text-[10px] font-medium text-white/50">Across Australia</div>
              </div>
            </div>

            {/* YELLOW CHIP — BOTTOM CENTER */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#efc759] rounded-full px-5 py-2 shadow-md z-20 whitespace-nowrap">
              <span className="text-[12px] font-bold text-[#013877]">Self-paced · 100% Online</span>
            </div>

          </div>

          {/* MOBILE/TABLET IMAGE — simple circle, visible below lg */}
          <div className="flex lg:hidden justify-center pb-6">
            <div className="relative">
              {/* outer ring */}
              <div className="absolute inset-[-12px] rounded-full border-[2px] border-dashed border-[#6ac7ed]/40 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-[-6px] rounded-full border-[2px] border-[#efc759]/40" />
              {/* image */}
              <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=700&q=80"
                  alt="Care professional with client"
                  fill
                  className="object-cover object-center scale-110"
                  priority
                />
              </div>
              {/* mini badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#efc759] rounded-full px-4 py-1.5 shadow-md whitespace-nowrap">
                <span className="text-[11px] font-bold text-[#013877]">Self-paced · 100% Online</span>
              </div>
            </div>
          </div>

        </div>

        {/* WAVE */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[70px]">
            <path d="M0,35 C320,80 800,0 1440,45 L1440,70 L0,70 Z" fill="white" />
          </svg>
        </div>

      </div>
    </section>
  );
}