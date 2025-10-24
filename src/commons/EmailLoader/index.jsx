import React from "react";

export default function EmailLoader() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center overflow-hidden bg-opacity-50">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Glass morphism popup */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 max-w-md w-full mx-4 animate-fadeIn">
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
        </div>

        <div className="relative text-center">
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute left-1/4 w-2 h-2 bg-white/60 rounded-full animate-float-particle"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute left-1/2 w-2 h-2 bg-white/60 rounded-full animate-float-particle"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute right-1/4 w-2 h-2 bg-white/60 rounded-full animate-float-particle"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Email icon */}
          <div className="relative w-32 h-32 mx-auto mb-8 animate-float">
            {/* Envelope back */}
            <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-br from-white/90 to-white/70 rounded-xl shadow-2xl backdrop-blur-sm"></div>

            {/* Paper inside */}
            <div className="absolute top-3 left-3 right-3 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-lg animate-paper-slide">
              <div className="mt-4 mx-4 space-y-2">
                <div className="h-0.5 bg-white/70 rounded w-3/4"></div>
                <div className="h-0.5 bg-white/70 rounded w-2/3"></div>
                <div className="h-0.5 bg-white/70 rounded w-1/2"></div>
              </div>
            </div>

            {/* Envelope front */}
            <div
              className="absolute bottom-0 w-full h-1/2 bg-gradient-to-br from-white/80 to-white/60 rounded-b-xl"
              style={{
                clipPath: "polygon(0 0, 50% 60%, 100% 0, 100% 100%, 0 100%)",
              }}
            ></div>

            {/* Envelope flap */}
            <div
              className="absolute top-0 left-0 w-full h-0 border-l-[64px] border-l-transparent border-r-[64px] border-r-transparent border-t-[48px] border-t-white/50 animate-flap"
              style={{ transformOrigin: "top center" }}
            ></div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-xl blur-xl -z-10"></div>
          </div>

          {/* Loading dots */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-3 h-3 bg-white/90 rounded-full animate-pulse-dot"></div>
            <div
              className="w-3 h-3 bg-white/90 rounded-full animate-pulse-dot"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-white/90 rounded-full animate-pulse-dot"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>

          {/* Text */}
          <h2 className="text-3xl font-bold text-white mb-3 tracking-wide">
            Sending Email
          </h2>
          <p className="text-white/70 text-lg">
            Please wait while we deliver your message...
          </p>

          {/* Progress bar */}
          <div className="mt-8 w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-progress"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes flap {
          0%,
          100% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(-20deg);
          }
        }

        @keyframes paperSlide {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulseDot {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes floatParticle {
          0% {
            bottom: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            bottom: 150px;
            opacity: 0;
          }
        }

        @keyframes shimmer {
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-flap {
          animation: flap 2s ease-in-out infinite;
        }

        .animate-paper-slide {
          animation: paperSlide 2s ease-in-out infinite;
        }

        .animate-pulse-dot {
          animation: pulseDot 1.4s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: floatParticle 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
