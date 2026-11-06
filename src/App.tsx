import { FluidParticlesBackground } from "@/components/ui/fluid-particles-background";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <FluidParticlesBackground
      particleCount={1500}
      noiseIntensity={0.002}
      particleSize={{ min: 0.5, max: 1.5 }}
      className="bg-black"
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
        <div className="max-w-[1428px] mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white tracking-tight">
            Framer<span className="text-indigo-500">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#agents" className="text-gray-300 hover:text-white transition-colors">
              Agents
            </a>
            <a href="#stats" className="text-gray-300 hover:text-white transition-colors">
              Stats
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-sm px-3 py-1.5 text-gray-300 border-white/20 hover:bg-white/10">
              Log in
            </Button>
            <Button className="text-sm px-4 py-1.5">Get started</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-[1428px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="uppercase tracking-[0.16em] text-xs font-bold text-indigo-400">
                The website builder for ambitious teams
              </p>
              <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
                Design with total creative control.
                <br />
                Ship in seconds.
              </h1>
              <p className="text-lg text-gray-400 max-w-[654px] leading-relaxed">
                Framer is the pro class design engine that gives you total creative
                control over every pixel. Build production-ready sites, publish
                instantly, and scale without limits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-100">
                  Get started — it&apos;s free
                </Button>
                <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10">
                  Browse templates
                </Button>
              </div>
            </div>
            <div className="relative h-[420px] rounded-2xl overflow-hidden bg-indigo-500/10">
              <canvas
                className="absolute inset-0 w-full h-full opacity-30 blur-[20px]"
                style={{ background: "radial-gradient(circle at 50% 50%, #6366f1, transparent)" }}
              />
              <div className="relative h-full w-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">Your site, live</h3>
                  <p className="text-gray-400 text-sm">Preview on any device</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section id="features" className="bg-black/30 border-y border-white/10 py-20">
        <div className="max-w-[1428px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Build your website together with agents.
            </h2>
            <p className="mt-4 text-gray-400 max-w-[654px] mx-auto leading-relaxed">
              AI-powered design tools that help you go from blank canvas to live
              site faster than ever.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            <article className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <span className="uppercase tracking-[0.14em] text-[10px] font-bold text-gray-500">
                  AI
                </span>
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">Sites built with AI</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Generate a complete site from a prompt, then refine every detail
                with the design engine.
              </p>
            </article>

            <article className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <span className="uppercase tracking-[0.14em] text-[10px] font-bold text-gray-500">
                  CMS
                </span>
                <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">Content management</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Structure your content with collections and publish updates across
                pages instantly.
              </p>
            </article>

            <article className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <span className="uppercase tracking-[0.14em] text-[10px] font-bold text-gray-500">
                  Effects
                </span>
                <div className="h-10 w-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                  E
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">Scroll effects</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Add parallax, reveal, and hover animations without writing a line
                of code.
              </p>
            </article>

            <article className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <span className="uppercase tracking-[0.14em] text-[10px] font-bold text-gray-500">
                  Deploy
                </span>
                <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  D
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">One-click publishing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Push to a global CDN with custom domains, SSL, and instant rollbacks
                included.
              </p>
            </article>

            <article className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <span className="uppercase tracking-[0.14em] text-[10px] font-bold text-gray-500">
                  Team
                </span>
                <div className="h-10 w-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                  T
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">Real-time collaboration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Design alongside your team with live cursors, comments, and version
                history.
              </p>
            </article>

            <article className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <span className="uppercase tracking-[0.14em] text-[10px] font-bold text-gray-500">
                  Code
                </span>
                <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  /
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">React components</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Drop in custom React components or connect your own design system.
              </p>
            </article>

            <article className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <span className="uppercase tracking-[0.14em] text-[10px] font-bold text-gray-500">
                  Performance
                </span>
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">Optimized by default</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Automatic image optimization, code splitting, and Core Web Vitals
                scoring.
              </p>
            </article>

            <article className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <span className="uppercase tracking-[0.14em] text-[10px] font-bold text-gray-500">
                  SEO
                </span>
                <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">Search-ready markup</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Semantic HTML, meta controls, and structured data built into every
                page.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Logos strip */}
      <section className="py-16 border-y border-white/10 bg-white/5">
        <div className="max-w-[1428px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-16 opacity-50 grayscale-[0.4]">
            <div className="h-8 flex items-center"><span className="text-gray-500 text-sm font-medium">Loom</span></div>
            <div className="h-8 flex items-center"><span className="text-gray-500 text-sm font-medium">Rippling</span></div>
            <div className="h-8 flex items-center"><span className="text-gray-500 text-sm font-medium">Harness</span></div>
            <div className="h-8 flex items-center"><span className="text-gray-500 text-sm font-medium">Memo</span></div>
            <div className="h-8 flex items-center"><span className="text-gray-500 text-sm font-medium">Salsify</span></div>
            <div className="h-8 flex items-center"><span className="text-gray-500 text-sm font-medium">Tally</span></div>
          </div>
        </div>
      </section>

      {/* Agent section */}
      <section id="agents" className="py-20 relative overflow-hidden">
        <div className="max-w-[1428px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Ship faster with AI agents.
              </h2>
              <p className="text-lg text-gray-400 max-w-[654px] leading-relaxed">
                Framer agents handle the repetitive work — writing copy, generating
                variants, and prepping assets — so you can focus on design decisions.
              </p>
              <div className="space-y-4 pt-8">
                <div className="flex items-center gap-4">
                  <span className="text-indigo-400 font-bold text-xl">01</span>
                  <div>
                    <h4 className="font-semibold text-white">AI copywriting</h4>
                    <p className="text-gray-400 text-sm">Generate and refine on-page copy in your brand voice.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-indigo-400 font-bold text-xl">02</span>
                  <div>
                    <h4 className="font-semibold text-white">Layout assistant</h4>
                    <p className="text-gray-400 text-sm">Auto-arrange elements into responsive grids and stacks.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-indigo-400 font-bold text-xl">03</span>
                  <div>
                    <h4 className="font-semibold text-white">Image prep</h4>
                    <p className="text-gray-400 text-sm">Resize, compress, and optimize assets automatically.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[460px] rounded-2xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">AI Agent Dashboard</h3>
                <p className="text-gray-400 text-sm">Generative design companion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient CTA */}
      <section className="py-20">
        <div className="max-w-[896px] mx-auto px-6 text-center">
          <div className="relative rounded-2xl p-8 md:p-12 bg-gradient-to-br from-orange-500 via-red-500 to-indigo-600 overflow-hidden">
            <div className="absolute inset-0 bg-white/10 blur-[60px] -top-[20%] -left-[20%] pointer-events-none" />
            <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Just like that, you&apos;re on a new platform.
            </h2>
            <p className="relative z-10 text-gray-100/90 text-lg leading-relaxed max-w-[654px] mx-auto mb-8">
              Everything you need to go from idea to live site — design, CMS,
              analytics, and hosting — all in one place.
            </p>
            <Button className="relative z-10 bg-white text-black hover:bg-gray-100">
              Start building for free
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-20 border-y border-white/10 bg-white/5">
        <div className="max-w-[1428px] mx-auto px-6">
          <div className="grid gap-6 text-center lg:grid-cols-4">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">99.99%</div>
              <div className="mt-2 text-sm font-medium text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">1M+</div>
              <div className="mt-2 text-sm font-medium text-gray-400">Sites published</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">180</div>
              <div className="mt-2 text-sm font-medium text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">24/7</div>
              <div className="mt-2 text-sm font-medium text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 bg-black/20">
        <div className="max-w-[1428px] mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <span className="text-2xl font-bold text-white tracking-tight">Framer<span className="text-indigo-500">.</span></span>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[412px]">
                The website builder for ambitious teams. Design, publish, and scale
                without limits.
              </p>
            </div>
            <div>
              <h4 className="uppercase tracking-[0.14em] text-[11px] font-bold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#agents" className="hover:text-white transition-colors">AI Agents</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-[0.14em] text-[11px] font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Learn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-[0.14em] text-[11px] font-bold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">© 2026 Framer. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </FluidParticlesBackground>
  );
}
