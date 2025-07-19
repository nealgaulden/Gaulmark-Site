import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gaulmark Global Trade LLC | Commodities & Logistics</title>
        <meta
          name="description"
          content="Gaulmark Global Trade LLC bridges global markets with integrity and precision in sugar, rice, and mineral trade. Trusted sourcing, logistics, and partnerships."
        />
        <meta property="og:title" content="Gaulmark Global Trade LLC" />
        <meta
          property="og:description"
          content="Commodities and global trade in sugar, rice, and minerals. Powered by ethics and execution."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1585128792025-47d7c4b9c9c5?auto=format&fit=crop&w=800&q=80"
        />
        <meta property="og:url" content="https://gaulmark.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gaulmark Global Trade LLC" />
        <meta
          name="twitter:description"
          content="Bridging global markets through trusted commodities trade."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1585128792025-47d7c4b9c9c5?auto=format&fit=crop&w=800&q=80"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX');
            `,
          }}
        />
      </Head>
      <main className="min-h-screen flex flex-col">
        {/* Hero */}
        <section className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-8 text-center">
          <img
            src="/gaulmark-logo.png"
            alt="Gaulmark Global Trade Logo"
            className="mx-auto mb-4 w-28 h-28"
          />
          <h1 className="text-3xl font-bold mb-2">Gaulmark Global Trade LLC</h1>
          <p className="text-lg max-w-xl mx-auto">
            Bridging global markets with integrity and precision in sugar, rice, and minerals.
          </p>
        </section>
        {/* Commodities */}
        <section className="py-12 bg-white">
          <h2 className="text-2xl font-bold text-center mb-8">Our Commodities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            <div className="border rounded-lg shadow-sm p-4 flex flex-col items-center">
              {/*
                Use a locally hosted image for sugar so the asset reliably renders.
                Place your own photo of packaged sugar sacks in the `/public` folder
                and name it `sugar-bags.jpg`. You can replace this with a different
                filename if you prefer; just update the `src` accordingly.
              */}
              <img
                src="/sugar-bags.jpg"
                alt="Sugar Packaging"
                className="w-full h-40 object-cover mb-3 rounded"
              />
              <h3 className="text-xl font-semibold mb-1">Sugar</h3>
              <p className="text-sm text-gray-600 text-center">
                Refined, raw, and specialty sugars for wholesalers and processors.
              </p>
            </div>
            <div className="border rounded-lg shadow-sm p-4 flex flex-col items-center">
              {/*
                Use a locally hosted image for rice. Place an image of rice sacks
                in the `/public` directory named `rice-sacks.jpg` (or update the
                filename here). This avoids relying on third‑party image hosts.
              */}
              <img
                src="/rice-sacks.jpg"
                alt="Rice Packaging"
                className="w-full h-40 object-cover mb-3 rounded"
              />
              <h3 className="text-xl font-semibold mb-1">Rice</h3>
              <p className="text-sm text-gray-600 text-center">
                Jasmine, basmati, and parboiled rice from trusted suppliers.
              </p>
            </div>
            <div className="border rounded-lg shadow-sm p-4 flex flex-col items-center">
              {/*
                Use a locally hosted image for minerals and logistics. Place an
                appropriate photo (e.g. shipping containers or mineral stockpiles)
                in the `/public` directory named `freight-shipping.jpg` and reference
                it here.
              */}
              <img
                src="/freight-shipping.jpg"
                alt="Freight Shipping"
                className="w-full h-40 object-cover mb-3 rounded"
              />
              <h3 className="text-xl font-semibold mb-1">Minerals</h3>
              <p className="text-sm text-gray-600 text-center">
                Metals & minerals for industrial use, delivered with reliable logistics.
              </p>
            </div>
          </div>
        </section>
        {/* Why Gaulmark */}
        <section className="py-12 bg-gray-50">
          <h2 className="text-2xl font-bold text-center mb-4">Why Gaulmark?</h2>
          <p className="max-w-3xl mx-auto text-center text-gray-700 mb-6 px-4">
            Gaulmark Global Trade is led by a seasoned executive team with over a decade of experience in global sourcing, logistics coordination, and business development across public and private sectors.
          </p>
          <ul className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="flex flex-col items-center p-4 bg-white shadow-sm rounded">
              <span className="text-lg font-semibold mb-2">Ethical Sourcing</span>
              <p className="text-sm text-gray-600 text-center">
                We prioritize transparency and sustainability in every transaction.
              </p>
            </li>
            <li className="flex flex-col items-center p-4 bg-white shadow-sm rounded">
              <span className="text-lg font-semibold mb-2">Global Network</span>
              <p className="text-sm text-gray-600 text-center">
                Access to trusted suppliers and buyers across multiple continents.
              </p>
            </li>
            <li className="flex flex-col items-center p-4 bg-white shadow-sm rounded">
              <span className="text-lg font-semibold mb-2">Reliability</span>
              <p className="text-sm text-gray-600 text-center">
                Timely delivery and seamless coordination through every stage.
              </p>
            </li>
          </ul>
        </section>
        {/* Leadership */}
        <section className="py-12 bg-white">
          <h2 className="text-2xl font-bold text-center mb-6">Leadership</h2>
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center px-4">
            {/*
              We omit a portrait here to respect personal privacy. If you would like
              to include a photo in the future, add an <img> tag and place the
              corresponding image in the `/public` directory.
            */}
            <div>
              {/* You can add your name below or leave it anonymous. */}
              <h3 className="text-xl font-semibold mb-2">Managing Partner</h3>
              <p className="text-sm text-gray-600 mb-2">Managing Partner</p>
              <p className="text-gray-700">
                Our leadership team brings over 15 years of experience in global trade, logistics and government relations, leading teams to deliver complex projects with precision.
              </p>
            </div>
          </div>
        </section>
        {/* Inquiries */}
        <section className="py-12 bg-gray-50">
          <h2 className="text-2xl font-bold text-center mb-4">Investor & Partner Inquiries</h2>
          <p className="text-center max-w-3xl mx-auto mb-6 px-4">
            Interested in partnering with us or investing in our supply chains? Send us a message and we’ll get back to you promptly.
          </p>
          <form className="max-w-xl mx-auto px-4">
            <div className="mb-4">
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Tell us about your interest..."
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </section>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 mt-auto">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm mb-2 md:mb-0">
                © {new Date().getFullYear()} Gaulmark Global Trade LLC. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <p className="text-sm">Washington, D.C.</p>
                <p className="text-sm">
                  <a href="mailto:info@gaulmark.com" className="hover:underline">
                    info@gaulmark.com
                  </a>
                </p>
                <p className="text-sm">+1 (360) 291-8181</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
