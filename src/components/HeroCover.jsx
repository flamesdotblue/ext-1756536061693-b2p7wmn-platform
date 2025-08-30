import Spline from '@splinetool/react-spline';

function HeroCover() {
  return (
    <header className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="backdrop-blur-[2px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Sign up, then glide
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-700">
            A seamless grid of possibilities. Create an account to start building modern, interactive experiences.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#signup" className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 transition">
              Create your account
            </a>
            <a href="#learn-more" className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium text-rose-700 hover:text-rose-800">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroCover;
