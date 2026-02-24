import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScanFace, ShieldCheck, Zap, ArrowRight, Fingerprint, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BioEnable = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo(
                headerRef.current?.children || [],
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                }
            );

            // Main product image/content animation
            gsap.fromTo(
                contentRef.current,
                { scale: 0.95, opacity: 0, y: 40 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                }
            );

            // Features Animation
            gsap.fromTo(
                featuresRef.current?.children || [],
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: featuresRef.current,
                        start: 'top 85%',
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            icon: ScanFace,
            title: 'Multi-Modal Biometrics',
            desc: 'Facial, fingerprint, and iris recognition capabilities integrated seamlessly.',
            color: 'from-[#3898EC] to-[#00ffff]'
        },
        {
            icon: ShieldCheck,
            title: 'Enterprise Security',
            desc: 'Bank-grade encryption, anti-spoofing, and compliance with global privacy standards.',
            color: 'from-[#FF7B00] to-[#FFB366]'
        },
        {
            icon: Zap,
            title: 'Real-Time Processing',
            desc: 'Lightning-fast identity verification and recognition in under 100 milliseconds.',
            color: 'from-[#84CC16] to-[#A3E635]'
        }
    ];

    return (
        <section
            id="bioenable"
            ref={sectionRef}
            className="relative py-24 lg:py-32 bg-[#02050A] w-full overflow-hidden"
        >
            {/* Premium Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3898EC]/5 rounded-full blur-[150px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ffff]/5 rounded-full blur-[100px]" />

                {/* Subtle grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

                {/* Section Header */}
                <div ref={headerRef} className="text-center mb-16 lg:mb-24 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#3898EC]/10 border border-[#3898EC]/20 rounded-full mb-6 backdrop-blur-md">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3898EC] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3898EC]"></span>
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-[#3898EC] tracking-widest uppercase">
                            Our Flagship Product
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        BioEnable <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Recognition</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed font-light">
                        Advanced biometric recognition system powered by cutting-edge AI technology. BioEnable provides real-time facial recognition, identity verification, and access control solutions for enterprises.
                    </p>
                </div>

                {/* Main Product Showcase Area */}
                <div ref={contentRef} className="bg-gradient-to-br from-[#0a0f1a] to-[#050B14] border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 mb-16 relative overflow-hidden group">

                    {/* Inner Glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3898EC]/0 to-[#3898EC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                        {/* Left Content */}
                        <div>
                            <div className="flex gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-[#3898EC]/10 border border-[#3898EC]/20 flex items-center justify-center">
                                    <ScanFace className="w-6 h-6 text-[#3898EC]" />
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Fingerprint className="w-6 h-6 text-gray-400" />
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-gray-400" />
                                </div>
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
                                The Next Generation of Identity Intelligence
                            </h3>

                            <p className="text-base sm:text-lg text-gray-400 mb-10 leading-relaxed font-light">
                                Our platform combines state-of-the-art machine learning algorithms with robust security protocols to deliver accurate, fast, and reliable biometric authentication for businesses of all sizes. Built to operate flawlessly in crowded environments and challenging lighting conditions.
                            </p>

                            <Link
                                to="/bioenable"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-gray-200 transition-colors duration-300 group/btn"
                            >
                                Learn More About BioEnable
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                            </Link>
                        </div>

                        {/* Right Abstract Visual (Replacing actual image to keep it code-based & premium) */}
                        <div className="relative aspect-square lg:aspect-auto lg:h-[450px] w-full bg-[#050B14] rounded-2xl sm:rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center">

                            {/* Scanning visual effect */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-10">
                                <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                                    {/* Face outline abstract */}
                                    <ScanFace className="w-full h-full text-[#3898EC]/20 stroke-1" />

                                    {/* Animated scanning line */}
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ffff] to-transparent animate-[scan_3s_ease-in-out_infinite] blur-[1px]" />
                                    <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#00ffff]/20 to-transparent animate-[scan_3s_ease-in-out_infinite]" />
                                </div>
                            </div>

                            {/* Data points background */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(56, 152, 236, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 152, 236, 0.4) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                        </div>

                    </div>
                </div>

                {/* 3 Core Features */}
                <div ref={featuresRef} className="grid sm:grid-cols-3 gap-6 lg:gap-10">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-[#050B14]/50 border border-white/10 rounded-3xl p-8 hover:border-[#3898EC]/30 transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden"
                        >
                            {/* Hover gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-[1px] mb-6`}>
                                <div className="w-full h-full bg-[#050B14] rounded-2xl flex items-center justify-center">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                                {feature.title}
                            </h4>
                            <p className="text-gray-400 font-light leading-relaxed text-sm lg:text-base">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BioEnable;
