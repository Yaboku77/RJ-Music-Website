import React, { useState, useEffect } from 'react';
import {
  Play,
  Music,
  Headphones,
  Zap,
  Settings,
  ChevronRight,
  Github,
  Menu,
  X,
  Volume2,
  ListMusic,
  Users,
  Radio,
  Share2,
  Heart,
  Smartphone,
  Download,
  WifiOff,
  SlidersHorizontal,
  Clock
} from 'lucide-react';

// --- Custom Components ---

const Logo = ({ size = 'normal' }) => (
  <div className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-indigo-500/30 ${size === 'large' ? 'w-24 h-24 rounded-3xl' : 'w-10 h-10'}`}>
    <div className="w-full h-full bg-slate-950 rounded-[inherit] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-500/20 blur-xl"></div>
      <Headphones className={`text-indigo-400 relative z-10 ${size === 'large' ? 'w-10 h-10' : 'w-5 h-5'}`} />
    </div>
  </div>
);

const Button = ({ children, variant = 'primary', href = '#', className = '', icon: Icon }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)]",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600",
    outline: "bg-transparent border-2 border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white"
  };

  return (
    <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </a>
  );
};

const FeatureCard = ({ icon: Icon, title, description, badge }) => (
  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl hover:bg-slate-800/50 hover:border-indigo-500/30 transition-all duration-300 group relative overflow-hidden">
    {badge && (
      <div className="absolute top-4 right-4 bg-fuchsia-500/20 text-fuchsia-400 text-xs font-bold px-3 py-1 rounded-full border border-fuchsia-500/30">
        {badge}
      </div>
    )}
    <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
      <Icon className="w-7 h-7 text-indigo-400" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

// --- Main Application ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">

      {/* Ambient Background Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Logo />
            <span className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">RJ-Music</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-white transition-colors">Features</a>
            <a href="#listen-together" className="text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300 transition-colors flex items-center gap-1">
              <Radio className="w-4 h-4 animate-pulse" /> Live Sync
            </a>
            <a href="#interface" className="text-sm font-medium hover:text-white transition-colors">Interface</a>
            <Button href="https://github.com/Yaboku77/RJ-Music/releases" variant="primary" className="!px-5 !py-2.5 text-sm" icon={Download}>Download App</Button>
          </div>

          <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 py-4 px-6 flex flex-col gap-4 md:hidden shadow-2xl">
            <a href="#features" className="text-lg font-medium hover:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#listen-together" className="text-lg font-medium text-fuchsia-400" onClick={() => setMobileMenuOpen(false)}>Live Sync</a>
            <a href="#interface" className="text-lg font-medium hover:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>Interface</a>
            <Button href="https://github.com/Yaboku77/RJ-Music/releases" variant="primary" className="w-full mt-2" icon={Download}>Download APK</Button>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

              {/* Text Side */}
              <div className="w-full lg:w-1/2 text-center lg:text-left z-10 relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 font-medium text-sm mb-8 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
                  </span>
                  v3.0 with Listen Together is Out!
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                  Your Ultimate <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-fuchsia-500">Music Companion.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  A beautifully crafted, ad-free music player app. Enjoy your local library, stream seamlessly, tweak your EQ, and listen with friends in real-time.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button icon={Download} variant="primary" className="w-full sm:w-auto" href="https://github.com/Yaboku77/RJ-Music/releases">Download APK</Button>
                  <Button icon={Github} variant="secondary" href="https://github.com/Yaboku77/RJ-Music" className="w-full sm:w-auto">Source Code</Button>
                </div>
                <p className="mt-4 text-sm text-slate-500 flex items-center justify-center lg:justify-start gap-1">
                  <Smartphone className="w-4 h-4" /> Available for Android & Windows
                </p>
              </div>

              {/* App Mockup Side */}
              <div className="w-full lg:w-1/2 flex justify-center relative z-10 perspective-1000">
                <div className="relative w-72 h-[580px] bg-slate-950 border-[8px] border-slate-800 rounded-[3rem] shadow-2xl shadow-indigo-500/20 overflow-hidden transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>

                  {/* App Screen Content */}
                  <div className="w-full h-full bg-slate-900 flex flex-col pt-10 px-5 pb-6">
                    <div className="flex justify-between items-center mb-6">
                      <ChevronRight className="w-6 h-6 rotate-180 text-slate-400" />
                      <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Now Playing</span>
                      <SlidersHorizontal className="w-5 h-5 text-slate-400" />
                    </div>

                    {/* Album Art inside Phone */}
                    <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-8 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                      <Headphones className="w-20 h-20 text-white/50" />
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Starboy</h3>
                        <p className="text-sm text-indigo-400">The Weeknd, Daft Punk</p>
                      </div>
                      <Heart className="w-6 h-6 text-fuchsia-500 fill-fuchsia-500" />
                    </div>

                    <div className="w-full bg-slate-800 rounded-full h-1.5 mb-2">
                      <div className="bg-indigo-500 h-1.5 rounded-full w-[45%] relative"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 mb-8">
                      <span>1:34</span>
                      <span>3:50</span>
                    </div>

                    <div className="flex justify-between items-center px-2">
                      <Radio className="w-5 h-5 text-slate-400" />
                      <ChevronRight className="w-8 h-8 rotate-180 text-white" />
                      <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/40">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <ChevronRight className="w-8 h-8 text-white" />
                      <ListMusic className="w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Floating Elements around phone */}
                <div className="absolute top-20 -left-10 bg-slate-800/80 backdrop-blur border border-slate-700 p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400"><Clock className="w-5 h-5" /></div>
                  <div className="text-sm font-bold text-white">Sleep Timer<div className="text-xs text-slate-400 font-normal">Set for 30m</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="py-10 border-y border-slate-800/50 bg-slate-900/20 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-slate-800">
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">100K+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Downloads</div>
              </div>
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">4.9/5</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">User Rating</div>
              </div>
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">Zero</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Advertisements</div>
              </div>
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">Hi-Res</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Audio Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Listen Together Highlight Section */}
        <section id="listen-together" className="py-24 px-6 relative z-10">
          <div className="container mx-auto max-w-6xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/10 blur-[100px] rounded-full"></div>

            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">

              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 text-fuchsia-400 font-semibold mb-4 tracking-wider uppercase text-sm">
                  <Users className="w-5 h-5" /> In-App Social
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Don't listen alone. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">Sync your vibes.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Start a "Listen Together" session directly from the app. Generate a secure invite code, share it with friends, and RJ-Music will perfectly sync your playback, queue, and skips across all connected devices—no matter where they are.
                </p>

                <ul className="space-y-4 mb-8">
                  {['Cross-device synchronized playback', 'Shared queue management', 'Real-time host controls'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
                        <Share2 className="w-3 h-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Listen Together App Card Mockup */}
              <div className="w-full lg:w-1/2">
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl shadow-fuchsia-900/20 relative">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 bg-fuchsia-500/10 text-fuchsia-400 px-3 py-1 rounded-full text-xs font-bold border border-fuchsia-500/20">
                      <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span> LIVE SYNC ACTIVE
                    </div>
                    <div className="bg-slate-800 text-slate-300 px-3 py-1 rounded-lg text-sm font-mono tracking-widest border border-slate-700">CODE: 8A4-9PL</div>
                  </div>

                  <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg">
                      <Music className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Midnight City</h4>
                      <p className="text-slate-400 text-sm">M83</p>
                    </div>
                  </div>

                  {/* Listeners Avatars */}
                  <div className="border-t border-slate-800 pt-6">
                    <p className="text-sm text-slate-400 mb-4 font-medium">Currently in Session (4)</p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-500 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white z-40 relative">
                          RJ <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full border-2 border-slate-950 flex items-center justify-center text-[8px]">👑</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-pink-500 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white z-30">AL</div>
                        <div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white z-20">MK</div>
                        <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white z-10">JS</div>
                      </div>
                      <Button variant="secondary" className="!py-2 !px-4 !text-xs">Leave Session</Button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 relative z-10 bg-slate-900/30 border-y border-slate-800/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Crafted for Audiophiles.</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">RJ-Music replaces your default music player with a feature-rich, beautiful interface tailored for those who take their music seriously.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={Users}
                title="Listen Together"
                description="Built-in social listening. Generate a code and sync your current queue with friends seamlessly."
                badge="HOT"
              />
              <FeatureCard
                icon={WifiOff}
                title="True Offline Mode"
                description="Scan your local storage and organize your FLAC, MP3, and WAV files automatically with rich metadata fetching."
              />
              <FeatureCard
                icon={SlidersHorizontal}
                title="10-Band Equalizer"
                description="Take complete control of your sound with a built-in 10-band graphic equalizer and bass booster."
              />
              <FeatureCard
                icon={Clock}
                title="Smart Sleep Timer"
                description="Fall asleep to your favorite playlists. The app will smoothly fade out and pause when the timer ends."
              />
              <FeatureCard
                icon={Smartphone}
                title="Material Design 3"
                description="A gorgeous, fluid UI that adapts to your album art colors. Fully supports dark mode and dynamic theming."
              />
              <FeatureCard
                icon={ListMusic}
                title="Advanced Playlists"
                description="Create smart playlists, sort by most played, recently added, or organize by custom tags and genres."
              />
            </div>
          </div>
        </section>

        {/* Interface Highlights Section */}
        <section id="interface" className="py-24 px-6 relative z-10">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">No Clutter.<br />Just Music.</h2>
                <p className="text-slate-400 mb-8 text-lg">
                  We built RJ-Music to get out of your way. Navigate your vast library with intuitive swipe gestures, powerful search, and a mini-player that follows you everywhere in the app.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-slate-300"><ChevronRight className="w-4 h-4 text-indigo-500" /> Swipe down to close player</li>
                  <li className="flex items-center gap-2 text-slate-300"><ChevronRight className="w-4 h-4 text-indigo-500" /> Tap album art for lyrics</li>
                  <li className="flex items-center gap-2 text-slate-300"><ChevronRight className="w-4 h-4 text-indigo-500" /> Long press to reorder queue</li>
                </ul>
                <Button href="https://github.com/Yaboku77/RJ-Music" variant="outline" icon={Github}>View on GitHub</Button>
              </div>

              <div className="w-full md:w-1/2">
                <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden p-6 relative">
                  <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-white">Your Library</h3>
                    <Menu className="text-slate-400 w-5 h-5" />
                  </div>

                  <div className="space-y-4">
                    {[
                      { title: "Liked Songs", count: "142 tracks", icon: Heart, color: "text-red-500", bg: "bg-red-500/10" },
                      { title: "Recently Added", count: "12 tracks this week", icon: Clock, color: "text-blue-500", bg: "bg-blue-500/10" },
                      { title: "Local Folders", count: "/Music/Downloads", icon: Smartphone, color: "text-emerald-500", bg: "bg-emerald-500/10" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-800/50 transition-colors cursor-pointer border border-transparent hover:border-slate-700">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}>
                          <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{item.title}</h4>
                          <p className="text-slate-500 text-sm">{item.count}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mini Player Mockup */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-800 rounded-2xl p-3 border border-slate-700 flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-md"></div>
                      <div>
                        <p className="text-white text-sm font-bold">Starboy</p>
                        <p className="text-slate-400 text-xs">The Weeknd</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Play className="w-5 h-5 text-white fill-white" />
                      <ChevronRight className="w-6 h-6 text-slate-400" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Logo size="small" />
            <span className="text-xl font-bold text-white">RJ-Music App</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <a href="https://github.com/Yaboku77/RJ-Music/releases" className="hover:text-indigo-400 transition-colors">Releases</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="https://github.com/Yaboku77/RJ-Music" className="hover:text-indigo-400 transition-colors flex items-center gap-1"><Github className="w-4 h-4" /> GitHub</a>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} RJ-Music. Open Source Music Player.
          </p>
        </div>
      </footer>
    </div>
  );
}
