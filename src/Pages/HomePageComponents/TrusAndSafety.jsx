import {
  Shield,
  MessageSquare,
  Headphones,
  CheckCircle,
  Lock,
  Award,
} from "lucide-react";

export function TrustSafety() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="relative max-w-[2000px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            <div className="flex items-center gap-2 text-purple-600/60 text-sm uppercase tracking-widest">
              <Shield className="w-4 h-4" />
              Trust & Safety
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-6xl text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Built on Trust, Secured by Design
          </h2>
        </div>

        {/* Modern Bento-Style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[140px]">
          {/* Verified Profiles - Large */}
          <div className="md:col-span-3 lg:col-span-4 row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 flex flex-col justify-between">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-blue-400/90 text-2xl mb-2">
                  Verified Profiles
                </h3>
                <p className="text-blue-400/90 text-sm">
                  Expert authentication on every listing
                </p>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
          </div>

          {/* Secure Messaging - Tall */}
          <div className="md:col-span-3 lg:col-span-4 row-span-3 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 flex flex-col justify-between">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-purple-400 text-2xl mb-3">
                  Secure Messaging
                </h3>
                <p className="text-purple-400/60">
                  End-to-end encrypted communication with property owners and
                  agents
                </p>
              </div>
            </div>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
          </div>

          {/* 24/7 Support - Wide */}
          <div className="md:col-span-6 lg:col-span-4 row-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-green-400/90 text-xl">24/7 Support</h3>
                  <p className="text-green-400/60 text-sm">
                    Always here to assist
                  </p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 text-xs">Online</span>
              </div>
            </div>
          </div>

          {/* Secure Transactions - Medium */}
          <div className="md:col-span-3 lg:col-span-4 row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 flex flex-col justify-between">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-orange-400/90 text-2xl mb-2">
                  Secure Transactions
                </h3>
                <p className="text-orange-400/60 text-sm">
                  Bank-level security
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
          </div>

          {/* Quality Assured - Small */}
          <div className="md:col-span-3 lg:col-span-4 row-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-indigo-400/90 text-xl">Quality Assured</h3>
                <p className="text-indigo-400/60 text-sm">
                  Rigorous inspections
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-12 text-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                10,000+
              </div>
              <div className="text-purple-300/60 text-sm">Verified Users</div>
            </div>
          </div>

          <div className="w-px h-12 bg-purple-500/20" />

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                99.9%
              </div>
              <div className="text-purple-300/60 text-sm">Uptime</div>
            </div>
          </div>

          <div className="w-px h-12 bg-purple-500/20" />

          <div className="relative group">
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-4xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                24/7
              </div>
              <div className="text-purple-300/60 text-sm">
                Support Available
              </div>
            </div>
          </div>

          <div className="w-px h-12 bg-purple-500/20" />

          <div className="relative group">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-4xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-1">
                $2B+
              </div>
              <div className="text-purple-300/60 text-sm">
                Secured Transactions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
