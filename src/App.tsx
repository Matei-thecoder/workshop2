import { useState } from "react"

const images = {
  hero: "https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=2000",
  kangaroo:
    "https://images.unsplash.com/photo-1588475935720-845e2aacb8c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
  trees:
    "https://images.unsplash.com/photo-1649397129586-4ec253dd3887?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
  ocean:
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
}

function LeafMark({ light = false }: { light?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-9 w-9 ${light ? "text-[#e7f2d7]" : "text-[#244b2a]"}`}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M32.8 5.4C20.2 5.8 9.1 10.2 7.3 21.8c-1 6.4 4.1 11.1 10 9.6 10.8-2.8 14.9-13.8 15.5-26Z"
        fill="currentColor"
      />
      <path
        d="M7.2 34.6c4.8-10.2 10.5-16.4 19.4-22.4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-4 w-4 ${down ? "rotate-90" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4 10h11M11 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      {open ? (
        <path
          d="m6 6 12 12M18 6 6 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}

const navItems = [
  ["Home", "#"],
  ["Journal", "#stories"],
  ["Wildlife", "#wildlife"],
  ["Trees", "#forests"],
  ["About", "#about"],
  ["Test","#t"]
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f3f1e8] text-[#17331e]">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/20 text-white">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <a
            href="#"
            className="flex items-center gap-2.5"
            aria-label="TheNature's Corner home"
          >
            <LeafMark light />
            <span className="font-display text-[22px] font-semibold tracking-[-0.02em]">
              TheNature&apos;s Corner
            </span>
          </a>

          <nav
            className="hidden items-center gap-9 md:flex"
            aria-label="Main navigation"
          >
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/80 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#about"
            className="hidden items-center gap-2 border border-white/55 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] transition hover:bg-white hover:text-[#17331e] md:flex"
          >
            About me <Arrow />
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-white/40 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-white/20 bg-[#17331e]/95 px-6 py-6 backdrop-blur-md md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-5">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-2xl"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative flex min-h-[780px] items-end overflow-hidden bg-[#17331e] text-white md:min-h-[860px]">
          <img
            src={images.hero}
            alt="Mist settling between densely forested mountains"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,28,14,0.83)_0%,rgba(8,28,14,0.46)_48%,rgba(8,28,14,0.12)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,28,14,0.66)_0%,transparent_50%)]" />

          <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 pt-36 lg:px-10 lg:pb-24">
            <div className="max-w-[800px]">
              <p className="mb-6 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.24em] text-[#d8e7c6]">
                <span className="h-px w-9 bg-[#d8e7c6]" />A personal nature
                journal
              </p>
              <h1 className="font-display text-[clamp(4rem,9vw,8.5rem)] leading-[0.82] font-medium tracking-[-0.055em]">
                Notes from
                <br />
                <span className="italic font-normal text-[#ddecbd]">
                  the wild.
                </span>
              </h1>
              <p className="mt-8 max-w-lg text-[17px] leading-7 text-white/80">
                I&apos;m Matei, a weekend wanderer writing about the animals,
                forests, and quiet corners that keep pulling me outdoors.
              </p>
              <a
                href="#stories"
                className="mt-9 inline-flex items-center gap-3 bg-[#e8efda] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-[#17331e] transition hover:bg-white"
              >
                Read my journal <Arrow down />
              </a>
            </div>
            <div className="mt-16 flex items-center justify-between border-t border-white/25 pt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">
              <span>Tasmanian wilderness, Australia</span>
              <span className="hidden sm:block">43.1° S / 146.2° E</span>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto grid max-w-[1400px] gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.5fr] lg:px-10 lg:py-32"
        >
          <div>
            <p className="section-label">Hello, I&apos;m Alex</p>
          </div>
          <div>
            <h2 className="max-w-4xl font-display text-[clamp(2.8rem,5vw,5.3rem)] leading-[0.98] tracking-[-0.045em] text-[#214828]">
              I go outside to pay attention, then come home{" "}
              <span className="italic text-[#789365]">and write it down.</span>
            </h2>
            <div className="mt-12 grid gap-8 border-t border-[#b8c4a9] pt-8 md:grid-cols-[1fr_1fr]">
              <p className="text-[17px] leading-8 text-[#4f6352]">
                TheNature&apos;s Corner is my field notebook on the web. It
                began as a place to collect observations from local walks and
                has grown into a record of the wild places I&apos;m lucky enough
                to visit.
              </p>
              <p className="text-[17px] leading-8 text-[#4f6352]">
                Nothing here is exhaustive. These are simply the details that
                made me stop: a kangaroo at dawn, light in an old canopy, cold
                water moving down a mountain.
              </p>
            </div>
          </div>
        </section>

        <section id="stories" className="bg-[#dce6ce] py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="section-label">Latest entries</p>
                <h2 className="mt-4 font-display text-[clamp(3rem,5vw,5rem)] leading-none tracking-[-0.04em]">
                  From my notebook
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#526555]">
                Personal essays, photographs, and small observations gathered
                while wandering outside.
              </p>
            </div>

            <article
              id="wildlife"
              className="group grid overflow-hidden bg-[#f6f4eb] lg:grid-cols-[1.15fr_0.85fr]"
            >
              <div className="min-h-[440px] overflow-hidden lg:min-h-[620px]">
                <img
                  src={images.kangaroo}
                  alt="A kangaroo pausing in the Australian grasslands"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#77886b]">
                    18 May 2025 · Australia · 6 min read
                  </p>
                  <h3 className="mt-7 font-display text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.92] tracking-[-0.04em]">
                    Born to
                    <br />
                    <span className="italic text-[#708760]">bound free</span>
                  </h3>
                  <p className="mt-8 max-w-md text-[16px] leading-7 text-[#566657]">
                    I met this quiet silhouette just after sunrise. For ten
                    minutes we shared the same patch of grass, both of us
                    listening to the morning wake up around us.
                  </p>
                </div>
                <div className="mt-12 border-t border-[#bdc8b4] pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#71806f]">
                    Field note 014 · Kangaroo Valley
                  </p>
                </div>
              </div>
            </article>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <article
                id="forests"
                className="group relative min-h-[590px] overflow-hidden text-white"
              >
                <img
                  src={images.trees}
                  alt="Looking upward along the trunk of an ancient forest tree"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2614]/95 via-[#0c2614]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d7e7c5]">
                    02 April 2025 · Forest journal · 4 min read
                  </p>
                  <h3 className="mt-4 font-display text-5xl leading-none tracking-[-0.04em] md:text-6xl">
                    The quiet giants
                  </h3>
                  <p className="mt-5 max-w-md leading-7 text-white/75">
                    An afternoon beneath trees older than any story I know, and
                    a reminder to move a little more slowly.
                  </p>
                </div>
              </article>

              <article className="group flex min-h-[590px] flex-col bg-[#214a2b] text-white">
                <div className="h-[310px] overflow-hidden">
                  <img
                    src={images.ocean}
                    alt="A pristine lake reflecting mountain peaks"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-8 md:p-10">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c4d7b6]">
                      21 March 2025 · Trail notes · 5 min read
                    </p>
                    <h3 className="mt-4 font-display text-5xl leading-none tracking-[-0.04em]">
                      Where water begins
                    </h3>
                  </div>
                  <p className="mt-6 max-w-lg text-sm leading-6 text-white/70">
                    Following snowmelt from a high ridge to the valley below,
                    with wet boots and a notebook full of questions.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#193c22] py-28 text-center text-white md:py-40">
          <div className="absolute left-[8%] top-20 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute bottom-[-70px] right-[7%] h-64 w-64 rounded-full border border-white/10" />
          <div className="relative mx-auto max-w-3xl px-6">
            <LeafMark light />
            <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.22em] text-[#bdd1ad]">
              A thought I keep returning to
            </p>
            <blockquote className="mt-6 font-display text-[clamp(2.6rem,5vw,5rem)] leading-[1.04] tracking-[-0.035em]">
              “In every walk with nature, one receives far more than they seek.”
            </blockquote>
            <p className="mt-7 text-sm text-white/55">
              — John Muir, naturalist
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#102918] px-6 pb-10 pt-20 text-white lg:px-10 lg:pt-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
            <div>
              <div className="flex items-center gap-3">
                <LeafMark light />
                <span className="font-display text-3xl">
                  TheNature&apos;s Corner
                </span>
              </div>
              <p className="mt-6 max-w-md text-sm leading-6 text-white/55">
                A personal journal about noticing more, wandering often, and
                staying curious about the living world.
              </p>
              <a
                href="mailto:alex@naturescorner.blog"
                className="mt-8 inline-block font-display text-2xl text-[#d9e9c6] hover:text-white"
              >
                alex@naturescorner.blog
              </a>
            </div>
            <div>
              <p className="footer-label">Explore</p>
              <div className="mt-6 flex flex-col gap-3 text-sm text-white/65">
                {navItems.map(([label, href]) => (
                  <a key={label} href={href} className="hover:text-white">
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="footer-label">Elsewhere</p>
              <div className="mt-6 flex flex-col gap-3 text-sm text-white/65">
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
                <a href="#" className="hover:text-white">
                  Substack
                </a>
                <a
                  href="mailto:alex@naturescorner.blog"
                  className="hover:text-white"
                >
                  Send a note
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-8 text-[11px] uppercase tracking-[0.14em] text-white/40 sm:flex-row">
            <p>© 2025 TheNature&apos;s Corner. All rights reserved.</p>
            <p>Written by Alex · Somewhere outdoors</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
