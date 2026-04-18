export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-white/50 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold italic text-gradient-blue">
            Zuup
          </span>
          <span className="hidden md:inline">—</span>
          <span>You Ready?</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#sports" className="hover:text-white">
            Sports
          </a>
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#how" className="hover:text-white">
            How it works
          </a>
          <a href="#download" className="hover:text-white">
            Download
          </a>
        </div>
        <div>© {new Date().getFullYear()} Zuup. All rights reserved.</div>
      </div>
    </footer>
  );
}
