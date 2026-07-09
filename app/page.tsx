import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/app-icon.webp"
              alt="Momentum icon"
              width={40}
              height={40}
              className="rounded-[22%]"
            />
            <span className="text-2xl font-semibold text-black tracking-tight">Momentum</span>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-600 hover:text-black transition-colors">Privacy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-black transition-colors">Terms</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-[1.1] tracking-tight">
                See your month build up.
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Track your monthly progress with one-tap daily check-ins. No streaks. No pressure. Just clear signals of progress.
              </p>
              <a
                href="https://apps.apple.com/mu/app/momentum-monthly-progress/id6777656253"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download on App Store
              </a>
              <p className="text-sm text-gray-600 mt-4">Free download • One-time purchase • No subscription</p>
            </div>

            {/* Right side - Visual representation */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-white rounded-[3rem] p-8 shadow-2xl border-8 border-black" style={{width: '280px', height: '580px'}}>
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-sm font-medium">12:03</span>
                    <div className="w-20 h-7 bg-black rounded-full"></div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="text-6xl font-bold mb-1">24</div>
                    <div className="text-sm font-semibold mb-0.5">APRIL</div>
                    <div className="text-xs text-gray-500 mb-4">2026</div>

                    <div className="grid grid-cols-7 gap-1 text-[10px] text-gray-500 mb-2">
                      <div className="text-center">S</div>
                      <div className="text-center">M</div>
                      <div className="text-center">T</div>
                      <div className="text-center">W</div>
                      <div className="text-center">T</div>
                      <div className="text-center">F</div>
                      <div className="text-center">S</div>
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                      {[
                        'empty', 'empty', 'black', 'orange', 'black', 'empty', 'black',
                        'orange', 'black', 'orange', 'empty', 'orange', 'black', 'black',
                        'orange', 'black', 'empty', 'orange', 'black', 'orange', 'orange',
                        'orange', 'black', 'black', 'current', 'gray', 'gray', 'gray',
                        'gray', 'gray', 'gray'
                      ].map((color, i) => (
                        <div key={i} className="flex justify-center">
                          {color === 'empty' ? <div className="w-6 h-6"></div> :
                           color === 'orange' ? <div className="w-6 h-6 bg-[#FF7A00] rounded-full"></div> :
                           color === 'black' ? <div className="w-6 h-6 bg-black rounded-full"></div> :
                           color === 'gray' ? <div className="w-6 h-6 bg-gray-200 rounded-full"></div> :
                           <div className="w-6 h-6 bg-black rounded-full ring-2 ring-[#FF7A00] ring-offset-2"></div>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <button className="bg-black text-white px-8 py-2.5 rounded-full text-sm font-medium">
                      Check in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Feature 1 */}
            <div>
              <h2 className="text-4xl font-bold text-black mb-4 leading-tight">
                One tap.<br />That&apos;s it.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Answer one question daily: Did today move you forward? Choose from three simple options.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FF7A00] rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Moved forward</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Showed up</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Missed</span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div>
              <h2 className="text-4xl font-bold text-black mb-4 leading-tight">
                Simple,<br />and useful.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                No streaks. No guilt. No complex features. Just a clean view of your month.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7A00] mt-1">•</span>
                  <span>Optional daily reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7A00] mt-1">•</span>
                  <span>Works completely offline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7A00] mt-1">•</span>
                  <span>No account required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7A00] mt-1">•</span>
                  <span>One-time purchase, no subscription</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div>
              <h2 className="text-4xl font-bold text-black mb-4 leading-tight">
                Built from<br />first principles.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Designed for ambitious people who want clear signals of progress without another complex app to manage.
              </p>
              <div className="mt-6 bg-white rounded-2xl p-4 border border-gray-200">
                <p className="text-xs text-gray-600 leading-relaxed">
                  "Stay consistent, keep building."
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Momentum 1.0.1
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Ready to build<br />momentum?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Download now and start tracking your progress.
          </p>
          <a
            href="https://apps.apple.com/mu/app/momentum-monthly-progress/id6777656253"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Download on App Store
          </a>
          <p className="text-sm text-gray-600 mt-4">
            Free download • One-time purchase • No subscription
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-16 mt-32">
        <div className="max-w-6xl mx-auto border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              <p className="font-semibold text-black mb-1">Momentum</p>
              <p>© 2026 Bit Wise LLC</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-black transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-black transition-colors">Terms</Link>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            Requires iPhone running iOS 17.6 or later
          </p>
        </div>
      </footer>
    </div>
  );
}
