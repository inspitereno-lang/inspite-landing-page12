import { MessageCircle } from 'lucide-react';

const AIChatWidget = () => {
    return (
        <a
            href="https://wa.me/918714153735"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-7 h-7" />
        </a>
    );
};

export default AIChatWidget;
