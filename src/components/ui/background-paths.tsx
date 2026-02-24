import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ─── Animated SVG Curving Lines ─────────────────────────────────────── */
function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.4 + i * 0.025,
        isOrange: i % 3 === 0,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 696 316" fill="none" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF7B00" />
                        <stop offset="100%" stopColor="#FFB366" />
                    </linearGradient>
                    <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0066CC" />
                        <stop offset="100%" stopColor="#3898EC" />
                    </linearGradient>
                </defs>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={path.isOrange ? "url(#grad-orange)" : "url(#grad-blue)"}
                        strokeWidth={path.width}
                        strokeOpacity={0.08 + path.id * 0.02}
                        initial={{ pathLength: 0.3, opacity: 0.4 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.15, 0.55, 0.15],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 18 + Math.random() * 12,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

/* ─── Floating Particle Dots ─────────────────────────────────────────── */
function ParticleDots() {
    const dots = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 4,
        color: i % 4 === 0 ? "#FF7B00" : i % 3 === 0 ? "#3898EC" : "#00D9FF",
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {dots.map((dot) => (
                <motion.div
                    key={dot.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${dot.x}%`,
                        top: `${dot.y}%`,
                        width: dot.size,
                        height: dot.size,
                        backgroundColor: dot.color,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.5, 0.5],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: dot.duration,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: dot.delay,
                    }}
                />
            ))}
        </div>
    );
}

/* ─── Scroll Indicator ────────────────────────────────────────────────── */
function ScrollIndicator() {
    return (
        <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
        >
            <span className="text-xs text-white/30 tracking-[0.3em] uppercase font-medium">
                Scroll
            </span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
                <ChevronDown className="w-5 h-5 text-[#3898EC]/60" />
            </motion.div>
        </motion.div>
    );
}

/* ─── Main Component ─────────────────────────────────────────────────── */
export function BackgroundPaths({ title = "Infynix Solutions" }: { title?: string }) {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            if (!gridRef.current) return;
            const rect = gridRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            gridRef.current.style.setProperty("--mx", `${x}%`);
            gridRef.current.style.setProperty("--my", `${y}%`);
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, []);



    return (
        <div
            ref={gridRef}
            className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
            style={{ background: "#050B14" }}
        >
            {/* ── Grid pattern overlay ── */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `radial-gradient(#3898EC 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* ── Mouse-follow radial glow ── */}
            <div
                className="absolute inset-0 pointer-events-none transition-all duration-700 hover:duration-0"
                style={{
                    background: `radial-gradient(700px circle at var(--mx, 50%) var(--my, 50%), rgba(56,152,236,0.06), transparent 60%)`,
                }}
            />

            {/* ── Ambient corner glows ── */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF7B00]/[0.04] rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3898EC]/[0.06] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00D9FF]/[0.02] rounded-full blur-[100px] pointer-events-none" />

            {/* ── Animated path lines ── */}
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />

            {/* ── Floating particles ── */}
            <ParticleDots />

            {/* ── Hero Photo Container ── */}
            <div className="absolute inset-0 z-0 flex flex-col lg:flex-row justify-end lg:justify-end items-center lg:items-center pointer-events-none overflow-hidden">
                <div className="hidden lg:flex w-full lg:h-full lg:w-[50%] relative mt-auto lg:mt-0 pointer-events-auto opacity-0 animate-[scaleIn_1s_ease-out_1s_forwards] items-center justify-center">
                    <motion.img
                        src="/hero-candid-photo.png"
                        alt="Infynix Professional"
                        className="w-[75%] max-w-[500px] h-auto object-contain drop-shadow-[0_0_40px_rgba(56,152,236,0.3)]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
                        transition={{ delay: 0.5, duration: 6, opacity: { duration: 1 }, scale: { duration: 1 }, y: { repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", duration: 8 } }}
                    />
                </div>
            </div>

            {/* ── Main Content ── */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:pl-16 xl:pl-24 flex flex-col justify-center items-start text-left min-h-screen pt-24 sm:pt-28 lg:pt-20 pb-8 sm:pb-16 pointer-events-none">
                <div className="w-full lg:max-w-[700px] pointer-events-auto flex flex-col items-start text-left">
                    {/* Main Title */}
                    <div className="mb-4 sm:mb-6 overflow-hidden w-full">
                        <motion.h1
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.8rem] leading-[1.08] font-black tracking-tighter"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                                {title.split(" ").slice(0, 2).join(" ")}
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7B00] via-[#FFB366] to-[#FF7B00]">
                                {title.split(" ").slice(2).join(" ")}
                            </span>
                        </motion.h1>
                    </div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.9 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-white/50 max-w-2xl leading-relaxed sm:leading-[1.7] font-light mb-6 sm:mb-10 lg:mb-14 w-full"
                    >
                        We design intelligent digital solutions that reduce manual effort, save time, and help your business run faster and smarter. Bring your vision to life and elevate your business to extraordinary success.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto mb-8 sm:mb-16"
                    >
                        {/* Primary CTA */}
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base text-white overflow-hidden shadow-[0_0_30px_rgba(255,123,0,0.15)] hover:shadow-[0_0_60px_rgba(255,123,0,0.4)] transition-shadow duration-500"
                            style={{
                                background: "linear-gradient(135deg, #FF7B00 0%, #FFB366 50%, #FF7B00 100%)",
                                backgroundSize: "200% 200%",
                            }}
                        >
                            <span>Start Your Project</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                            {/* Shine sweep */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                        </motion.a>

                        {/* Secondary CTA */}
                        <motion.a
                            href="#services"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base text-white/70 hover:text-white border border-white/10 hover:border-[#3898EC]/50 backdrop-blur-md bg-white/[0.04] hover:bg-[#3898EC]/10 transition-all duration-300"
                        >
                            <span>Explore Services</span>
                            <div className="w-5 h-5 rounded-full border border-white/10 group-hover:border-[#3898EC] flex items-center justify-center transition-colors duration-300">
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                            </div>
                        </motion.a>
                    </motion.div>

                    {/* Mobile Hero Image - only visible on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        className="lg:hidden w-full flex justify-center mt-2 mb-4"
                    >
                        <img
                            src="/hero-candid-photo.png"
                            alt="Infynix Professional"
                            className="w-[65%] max-w-[320px] h-auto object-contain drop-shadow-[0_0_30px_rgba(56,152,236,0.2)]"
                        />
                    </motion.div>
                </div>
            </div>

            {/* ── Bottom fade ── */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050B14] to-transparent pointer-events-none z-20" />

            {/* ── Scroll indicator ── */}
            <ScrollIndicator />
        </div>
    );
}
