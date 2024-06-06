import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { FaEarlybirds, FaPaintBrush, FaShareAlt } from "react-icons/fa";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="min-h-screen bg-black text-green-500 font-mono">
      {/* Header */}
      <header className="bg-gray-900 shadow-lg rounded-b-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-3xl font-extrabold text-green-500">Kwik-Kard</h1>
          <nav>
            <Link
              href="#features"
              className="mx-2 text-green-400 hover:text-green-600"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="mx-2 text-green-400 hover:text-green-600"
            >
              Testimonials
            </Link>
            <Link
              href="#cta"
              className="mx-2 text-green-400 hover:text-green-600"
            >
              Get Started
            </Link>
            {session && (
              <>
                <Link
                  href="/profile"
                  className="mx-2 text-green-400 hover:text-green-600"
                >
                  Profile
                </Link>
              </>
            )}
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="mx-2 text-green-400 hover:text-green-600"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800 py-20 text-white rounded-b-3xl shadow-lg">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-5xl font-extrabold">
            Create Your Online Business Card
          </h2>
          <p className="mb-8 text-lg">
            A simple and elegant way to showcase your online presence.
          </p>
          <a
            href="#cta"
            className="rounded-full bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-600"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-4xl font-extrabold text-green-500">Features</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-900 p-8 shadow-lg">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-700 flex items-center justify-center">
                <FaEarlybirds className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="mb-2 text-center text-2xl font-bold text-green-400">
                Easy to Use
              </h3>
              <p className="text-center text-green-300">
                Quickly create your profile with our user-friendly interface.
              </p>
            </div>
            <div className="rounded-lg bg-gray-900 p-8 shadow-lg">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-700 flex items-center justify-center">
                <FaPaintBrush className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="mb-2 text-center text-2xl font-bold text-green-400">
                Customizable
              </h3>
              <p className="text-center text-green-300">
                Personalize your profile with various themes and layouts.
              </p>
            </div>
            <div className="rounded-lg bg-gray-900 p-8 shadow-lg">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-700 flex items-center justify-center">
                <FaShareAlt className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="mb-2 text-center text-2xl font-bold text-green-400">
                Shareable
              </h3>
              <p className="text-center text-green-300">
                Easily share your profile link on social media and other
                platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-800 py-20 max-w-[80%] mx-auto px-8 rounded-xl">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-4xl font-extrabold text-green-500">Testimonials</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-gray-900 p-8 shadow-lg">
              <p className="mb-4 text-green-300">
                &quot;Kwik-Kard made it so easy to create and share my online
                presence. Highly recommended!&quot;
              </p>
              <p className="font-bold text-green-400">- John Doe</p>
            </div>
            <div className="rounded-lg bg-gray-900 p-8 shadow-lg">
              <p className="mb-4 text-green-300">
                &quot;I love the customization options. My profile looks exactly how
                I want it.&quot;
              </p>
              <p className="font-bold text-green-400">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="bg-gray-800 py-20 text-white rounded-t-3xl shadow-lg mt-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-4xl font-extrabold">
            Ready to Create Your Profile?
          </h2>
          <p className="mb-8 text-lg">
            Get started today and showcase your online presence with ease.
          </p>
          <a
            href="/create-profile"
            className="rounded-full bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-600"
          >
            Create Your Profile
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-green-500 rounded-t-lg">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Kwik-Kard. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
