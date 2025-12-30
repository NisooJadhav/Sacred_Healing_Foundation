import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-lotus-bg">
      {/* ================= ABOUT INTRO ================= */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-lotus-purple mb-6">
            About Poonam Chavan
          </h2>

          <p className="text-lotus-text leading-relaxed text-base sm:text-lg">
            Poonam Chavan is a holistic wellness guide and spiritual educator with
            hands-on experience in energy healing and consciousness-based
            practices. She has successfully trained and supported numerous
            students and clients through healing sessions, workshops, and
            certified courses.
          </p>

          <p className="mt-5 text-lotus-text leading-relaxed text-base sm:text-lg">
            Her expertise lies in Reiki Healing, Crystal Healing, Angel Therapy,
            Chakra Alignment, Meditation, and Energy Cleansing. Poonam’s vision is
            to spread authentic healing knowledge, encourage self-healing, and
            help individuals align with inner peace, emotional strength, and
            spiritual growth.
          </p>
        </div>
      </section>

      {/* ================= FOUNDER JOURNEY ================= */}
      <section className="bg-lotus-section px-4 py-18">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-lotus-purple text-center mb-10">
            🌿 My Reiki Healing Experience (Founder’s Journey) 🌿
          </h2>

          <div className="space-y-6 text-lotus-text leading-relaxed text-base sm:text-lg">
            <p>
              Reiki has completely transformed my life on every level —
              emotionally, physically, mentally, spiritually, and even
              financially. When I first stepped into my Reiki healing journey, I
              was simply searching for inner peace and emotional relief. But
              Reiki gave me far more than I had ever imagined.
            </p>

            <p>
              During my healing practice, I began experiencing deep emotional
              balance and mental clarity. Slowly, layers of fear, anxiety,
              stress, and overthinking started dissolving. I became more calm,
              centered, confident, and emotionally stable. My reactions to
              situations changed, my decision-making improved, and I started
              feeling more aligned with myself.
            </p>

            <p>
              One of the most powerful and visible shifts I witnessed was in my
              financial condition. As my energy healed and aligned, my mindset
              around money changed. Gradually, my business started growing, new
              opportunities appeared effortlessly, client flow improved, and
              abundance began flowing naturally into my life. Reiki helped me
              remove financial blockages and develop a positive, abundant
              outlook.
            </p>

            <p>
              Health-wise, Reiki worked like a true blessing for me. My childhood
              sinus problem, which I had been carrying for years, completely
              healed. Additionally, my long-standing migraine issues reduced
              gradually and finally disappeared. My sleep cycle improved, body
              fatigue reduced, and I started feeling more energetic and lighter
              from within.
            </p>

            <p>
              Reiki also strengthened my intuition and inner guidance. I became
              more aware of energies, more connected to my higher self, and more
              protected energetically. My relationships improved as emotional
              wounds healed, communication became smoother, and inner peace
              reflected in my outer world.
            </p>

            <p>
              Reiki didn’t just heal my symptoms — it healed my root causes. It
              aligned my mind, body, and soul, bringing balance, protection,
              clarity, and purpose into my life. This powerful transformation
              inspired me to walk on the path of healing and help others heal,
              grow, release blockages, and transform their lives through Reiki
              and energy healing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}