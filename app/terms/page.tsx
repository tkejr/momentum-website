import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Momentum",
  description: "Terms of service for Momentum: Monthly Progress app.",
};

export default function Terms() {
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
            <Link href="/terms" className="text-black font-medium">Terms</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Terms of Service</h1>
        <p className="text-base text-gray-600 mb-12">Last updated: July 8, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Agreement to Terms</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              By downloading, installing, or using the Momentum: Monthly Progress app (&quot;Momentum&quot; or the &quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">License</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              Subject to your compliance with these Terms, Bit Wise LLC grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use Momentum for your personal, non-commercial use on devices that you own or control.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">In-App Purchase</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              Momentum is free to download with a one-time in-app purchase of $0.99 USD to unlock full functionality. This purchase is non-refundable except as required by applicable law or as determined by Apple&apos;s App Store policies.
            </p>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              All in-app purchases are processed through the Apple App Store and are subject to Apple&apos;s terms and conditions. We do not process payments directly and do not have access to your payment information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Acceptable Use</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              You agree to use Momentum only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-600 space-y-2 mb-4">
              <li>Modify, reverse engineer, decompile, or disassemble the App</li>
              <li>Remove any copyright, trademark, or other proprietary notices from the App</li>
              <li>Use the App in any way that could damage, disable, overburden, or impair the App</li>
              <li>Attempt to gain unauthorized access to any portion of the App or any other systems or networks</li>
              <li>Use the App for any commercial purpose without our express written consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Intellectual Property</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              The App and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, and the design, selection, and arrangement thereof) are owned by Bit Wise LLC, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Disclaimer of Warranties</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              Bit Wise LLC does not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components. Your use of the App is at your sole risk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Limitation of Liability</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL BIT WISE LLC, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-600 space-y-2 mb-4">
              <li>Your access to or use of or inability to access or use the App</li>
              <li>Any conduct or content of any third party on the App</li>
              <li>Any content obtained from the App</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Data Storage</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              All data created within Momentum is stored locally on your device. We do not maintain backups of your data on our servers. You are responsible for maintaining your own backups through iCloud or other backup mechanisms provided by Apple.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Updates and Modifications</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              We reserve the right to modify or discontinue the App at any time with or without notice. We may also update these Terms from time to time. Your continued use of the App after any changes to these Terms constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Termination</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              These Terms are effective until terminated. Your rights under these Terms will terminate automatically if you fail to comply with any of these Terms. Upon termination, you must cease all use of the App and delete all copies from your devices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Governing Law</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within the United States.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Apple App Store Requirements</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              These Terms are between you and Bit Wise LLC, not with Apple Inc. Apple is not responsible for the App and has no obligation to provide any maintenance or support services with respect to the App.
            </p>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the App. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the App.
            </p>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              Apple is not responsible for addressing any claims you have relating to the App or your possession and use of the App, including product liability claims, consumer protection claims, or intellectual property infringement claims.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Severability</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">Contact Information</h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Bit Wise LLC<br />
              Email: support@momentum-app.com
            </p>
          </section>

          <section className="mb-12 bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-black mb-3">Questions?</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service or how Momentum works, please don&apos;t hesitate to reach out. We&apos;re here to help.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-sm text-black hover:text-gray-600 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </main>

      <footer className="container mx-auto px-6 py-16 mt-16">
        <div className="max-w-3xl mx-auto border-t border-gray-300 pt-8">
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
        </div>
      </footer>
    </div>
  );
}
