import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gaulmark Global Trade LLC | Commodities & Logistics</title>
        <meta name="description" content="Gaulmark Global Trade LLC bridges global markets with integrity and precision in sugar, rice, and mineral trade. Trusted sourcing, logistics, and partnerships." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Gaulmark Global Trade LLC" />
        <meta property="og:description" content="Commodities and global trade in sugar, rice, and minerals. Powered by ethics and execution." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1585128792025-47d7c4b9c9c5?auto=format&fit=crop&w=800&q=80" />
        <meta property="og:url" content="https://gaulmark.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gaulmark Global Trade LLC" />
        <meta name="twitter:description" content="Bridging global markets through trusted commodities trade." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1585128792025-47d7c4b9c9c5?auto=format&fit=crop&w=800&q=80" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        ` }}></script>
      </Head>
      <main className="min-h-screen bg-white text-gray-900">
        <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-6">
              <img src="/gaulmark-logo.png" alt="Gaulmark Logo" width={120} height={120} className="mx-auto" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Gaulmark Global Trade LLC</h1>
            <p className="text-xl text-gray-600 mb-8">
              Bridging international markets with integrity and precision in global commodity trading.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">Contact Us</button>
          </motion.div>
        </section>
      </main>
    </>
  );
}
