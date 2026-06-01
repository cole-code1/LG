import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/+254700401188"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-green-600"
      >
        {/* Pulse Animation */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-30"></span>

        {/* Icon */}
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white">
          <MessageCircle className="h-7 w-7 text-green-500" />
        </div>
      </a>
    </div>
  );
}