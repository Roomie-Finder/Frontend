import React from "react";
import { Link } from "react-router";

const SafetyPage = () => {
  const safetySections = [
    {
      icon: "🌐",
      title: "Online Smarts",
      description: "Your digital shield for safe interactions.",
      tips: [
        "Keep financial details (bank, credit card, SSN) private until you're ready to sign a lease. Seriously, don't share!",
        "Stick to our platform's messaging for initial chats. It keeps your personal contact info safe.",
        "Beware of anyone asking for money upfront or proposing odd financial schemes. Trust your gut!",
        "Do a quick online check – LinkedIn, social media. Make sure their story adds up.",
      ],
      color: "text-blue-500",
    },
    {
      icon: "👋",
      title: "Meet & Greet Wisely",
      description: "Making first impressions safe and sound.",
      tips: [
        "First meetings? Always in a public, well-lit spot like a bustling coffee shop or a park.",
        "Let a friend or family member know where and when you're meeting. Safety in numbers!",
        "Avoid going alone to a potential roommate's current place on your first visit. Take a pal!",
        "If a vibe feels off, it probably is. It's okay to politely end the meeting. Your comfort comes first.",
      ],
      color: "text-emerald-500",
    },
    {
      icon: "🏡",
      title: "Lease & Live Securely",
      description: "From signing to settling, staying secure.",
      tips: [
        "Always double-check the lease and verify the landlord before signing anything or transferring funds.",
        "Get everything important in writing: rent, utilities, house rules, cleaning duties. Clarity is key!",
        "Consider a background or credit check (with their permission, of course) for peace of mind.",
        "Avoid cash payments or untraceable methods like wire transfers. Use secure, traceable transactions.",
      ],
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-8 leading-tight">
          Your Safety, Our Priority
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Finding your perfect roommate should be exciting, not stressful.
          Follow these simple guidelines to ensure a safe and positive
          experience every step of the way.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {safetySections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col items-start border border-gray-100 transform transition-transform duration-300 hover:scale-[1.02] hover:border-blue-200"
            >
              <span className={`text-6xl mb-4 ${section.color}`}>
                {section.icon}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {section.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {section.description}
              </p>
              <ul className="space-y-4 text-gray-700 list-none pl-0">
                {section.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start">
                    <span className="text-xl mr-3 mt-1 text-gray-400">→</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-md text-gray-500 max-w-2xl mx-auto">
          <p className="mb-4">
            If you encounter anything suspicious or feel unsafe, please don't
            hesitate to report it to us immediately.
          </p>
          <Link
            to="/report"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Report an Issue
            <span className="ml-2">➡️</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SafetyPage;
