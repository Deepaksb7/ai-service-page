import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-6 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            Nexus<span className="text-blue-600">AI</span>
          </Link>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-sm">
            Empowering enterprises with intelligent AI solutions. Strategy,
            implementation, and results driven by data.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <li>
              <Link href="#about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#careers" className="hover:text-blue-600">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-blue-600">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <li>
              <Link href="#" className="hover:text-blue-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Nexus AI Consulting. All rights reserved.
      </div>
    </footer>
  );
}
