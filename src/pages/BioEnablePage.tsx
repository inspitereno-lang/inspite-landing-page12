import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, ScanFace, Lock, Zap, CheckCircle2, Cpu, Eye, Fingerprint, Camera, RefreshCw } from 'lucide-react';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const BioEnablePage = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const coreFeaturesRef = useRef<HTMLDivElement>(null);
    const enrollmentRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    const [isScanning, setIsScanning] = useState(false);
    const [scanComplete, setScanComplete] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.fromTo(
                heroRef.current?.querySelectorAll('.hero-anim') || [],
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
            );

            // Core Features
            gsap.fromTo(
                coreFeaturesRef.current?.querySelectorAll('.feature-card') || [],
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power4.out',
                    scrollTrigger: { trigger: coreFeaturesRef.current, start: 'top 80%', once: true },
                }
            );

            // Enrollment Demo
            gsap.fromTo(
                enrollmentRef.current?.children || [],
                { scale: 0.95, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 0.8, ease: 'expo.out',
                    scrollTrigger: { trigger: enrollmentRef.current, start: 'top 75%', once: true },
                }
            );

            // CTA
            gsap.fromTo(
                ctaRef.current?.querySelectorAll('.cta-anim') || [],
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power4.out',
                    scrollTrigger: { trigger: ctaRef.current, start: 'top 85%', once: true },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    const simulateScan = () => {
        if (isScanning || scanComplete) return;
        setIsScanning(true);

        // Simulate a 3-second face scanning process
        setTimeout(() => {
            setIsScanning(false);
            setScanComplete(true);
        }, 3000);
    };

    const resetScan = () => {
        setScanComplete(false);
    };

    const features = [
        {
            icon: ScanFace,
            title: 'Facial Recognition',
            desc: '3D depth sensing and liveness detection algorithms that prevent photo or video spoofing.',
        },
        {
            icon: Fingerprint,
            title: 'Fingerprint Biometrics',
            desc: 'High-resolution ultrasonic sensors capable of penetrating moisture and contaminants.',
        },
        {
            icon: Eye,
            title: 'Iris Scanning',
            desc: 'Captures over 240 unique biometric traits per eye for military-grade access control.',
        },
        {
            icon: Cpu,
            title: 'Edge Processing',
            desc: 'AI models deployed directly on local hardware for zero-latency verification without internet.',
        },
        {
            icon: Lock,
            title: 'Data Encryption',
            desc: 'Biometric vectors are hashed and encrypted. We never store raw images or fingerprints.',
        },
        {
            icon: Zap,
            title: 'High Throughput',
            desc: 'Process up to 60 individuals per minute for frictionless employee or venue access.',
        }
    ];

    return (
        <div className="min-h-screen bg-[#02050A] text-white overflow-x-hidden selection:bg-[#3898EC]/30">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden min-h-[85vh] flex items-center">
                {/* Background glow effects */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#3898EC]/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00ffff]/10 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 w-full">
                    <Link to="/" className="hero-anim inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8 mt-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="hero-anim inline-flex items-center gap-2.5 px-4 py-2 bg-[#3898EC]/10 border border-[#3898EC]/20 rounded-full mb-6 backdrop-blur-md">
                                <ScanFace className="w-4 h-4 text-[#3898EC]" />
                                <span className="text-xs sm:text-sm font-bold text-[#3898EC] tracking-widest uppercase">
                                    Flagship Product
                                </span>
                            </div>

                            <h1 className="hero-anim text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
                                Identity Verification,<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898EC] to-[#00ffff]">Reinvented.</span>
                            </h1>

                            <p className="hero-anim text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl mb-10 font-light">
                                BioEnable is the enterprise standard for biometric authentication. Leverage our proprietary ML models to secure your physical and digital assets with absolute certainty.
                            </p>

                            <div className="hero-anim flex flex-col sm:flex-row gap-4">
                                <a href="#enrollment-demo" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3898EC] to-[#00ffff] text-white px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(56,152,236,0.3)] hover:-translate-y-1 transition-all duration-300 group">
                                    Try Live Demo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Right Visual Dashboard */}
                        <div className="hero-anim relative w-full aspect-square sm:aspect-video lg:aspect-square bg-[#0a0f1a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                            {/* Decorative grid */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5aDQwdjFIMHptMzktMzl2NDBoMXYtNDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-50" />

                            <div className="relative z-10 w-[80%] h-[80%] rounded-full border border-[#3898EC]/20 flex items-center justify-center relative shadow-[0_0_50px_rgba(56,152,236,0.1)]">
                                {/* Outer rotating ring */}
                                <div className="absolute inset-0 rounded-full border-t border-l border-[#00ffff]/50 animate-[spin_8s_linear_infinite]" />
                                <div className="absolute inset-4 rounded-full border-b border-r border-[#3898EC]/50 animate-[spin_6s_linear_infinite_reverse]" />

                                {/* Core face icon */}
                                <div className="w-32 h-32 rounded-2xl bg-[#3898EC]/10 backdrop-blur-md border border-[#3898EC]/30 flex items-center justify-center relative overflow-hidden">
                                    <ScanFace className="w-16 h-16 text-[#00ffff]" />
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00ffff] animate-[scan_2s_ease-in-out_infinite] shadow-[0_0_10px_#00ffff]" />
                                </div>

                                {/* Data tooltips */}
                                <div className="absolute top-[10%] left-[10%] bg-[#050B14] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-[#00ffff] font-mono shadow-xl hidden sm:block">
                                    Liveness: 99.9%
                                </div>
                                <div className="absolute bottom-[20%] right-[-5%] bg-[#050B14] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-[#3898EC] font-mono shadow-xl hidden sm:block">
                                    Latency: 42ms
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Core Capabilities */}
            <section ref={coreFeaturesRef} className="py-24 relative bg-[#050B14]">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">Enterprise Capabilities</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">BioEnable is engineered for maximum security, privacy, and performance across every deployment vector.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className="feature-card bg-[#0a0f1a] border border-white/5 rounded-2xl p-8 hover:bg-[#0c121e] hover:border-[#3898EC]/30 transition-all duration-300">
                                <div className="w-12 h-12 bg-[#3898EC]/10 rounded-xl flex items-center justify-center mb-6">
                                    <feature.icon className="w-6 h-6 text-[#3898EC]" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Self-Enrollment Demo / Explanation */}
            <section id="enrollment-demo" className="py-24 relative">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

                    <div ref={enrollmentRef} className="bg-gradient-to-br from-[#121a2f] to-[#050B14] border border-[#3898EC]/20 rounded-3xl p-8 lg:p-16 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ffff]/5 rounded-full blur-[100px] pointer-events-none" />

                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                            {/* Text side */}
                            <div>
                                <div className="inline-flex items-center gap-2 text-[#00ffff] mb-4">
                                    <Camera className="w-5 h-5" />
                                    <span className="font-semibold tracking-wide uppercase text-sm">Create Your Identity</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">Pain-Free Self Enrollment</h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                                    Users can securely create their own biometric profile from their smartphone or computer in under 10 seconds. BioEnable uses your device camera to extract mathematical vectors, immediately discarding the actual photograph to guarantee privacy.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {['No physical hardware required for setup', 'Spoof-proof liveness verification', 'Instant database synchronization', 'GDPR and CCPA compliant by design'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300">
                                            <CheckCircle2 className="w-5 h-5 text-[#3898EC] flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Interactive Demo UI */}
                            <div className="bg-[#02050A] rounded-2xl border border-white/10 p-6 shadow-2xl relative flex flex-col items-center justify-center min-h-[400px]">

                                {!isScanning && !scanComplete && (
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 border-dashed">
                                            <ScanFace className="w-10 h-10 text-gray-500" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">Biometric Setup</h4>
                                        <p className="text-sm text-gray-400 mb-8 max-w-[250px] mx-auto">Click below to simulate generating your encrypted identity vector.</p>
                                        <button
                                            onClick={simulateScan}
                                            className="bg-[#3898EC] hover:bg-[#207aca] text-white px-8 py-3 rounded-xl font-semibold transition-colors w-full"
                                        >
                                            Start Enrollment
                                        </button>
                                    </div>
                                )}

                                {isScanning && (
                                    <div className="text-center w-full">
                                        <div className="relative w-40 h-40 mx-auto mb-8">
                                            {/* Scanning visual */}
                                            <ScanFace className="w-full h-full text-[#3898EC]/30" />
                                            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#00ffff] animate-[scan_1.5s_ease-in-out_infinite] shadow-[0_0_15px_#00ffff]" />

                                            {/* Grid overlay */}
                                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDE5aDIwdjFIMHptMTktMTl2MjBoMXYtMjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3N2Zz4=')] mix-blend-overlay" />
                                        </div>

                                        <h4 className="text-lg font-bold text-[#00ffff] mb-2 animate-pulse">Extracting Vectors...</h4>
                                        <div className="w-full max-w-[250px] h-1.5 bg-white/10 rounded-full mx-auto overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-[#3898EC] to-[#00ffff] w-full animate-[progress_3s_ease-in-out_forwards]" style={{ transformOrigin: 'left' }} />
                                        </div>
                                    </div>
                                )}

                                {scanComplete && (
                                    <div className="text-center animate-in fade-in zoom-in duration-500">
                                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/40">
                                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">Identity Secured</h4>
                                        <p className="text-sm text-gray-400 mb-6 max-w-[280px] mx-auto">Your biometric vector has been successfully encrypted and stored.</p>

                                        <div className="bg-white/5 rounded-lg p-3 text-left font-mono text-xs text-green-400 break-all mb-8 border border-white/5">
                                            Hash: 0x8F92...E4A1
                                        </div>

                                        <button
                                            onClick={resetScan}
                                            className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors mx-auto text-sm"
                                        >
                                            <RefreshCw className="w-4 h-4" /> Reset Simulation
                                        </button>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section ref={ctaRef} className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3898EC]/10 rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="cta-anim text-3xl sm:text-5xl font-bold mb-6">Ready to secure your enterprise?</h2>
                    <p className="cta-anim text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Deploy BioEnable in your infrastructure within days. Contact our engineering team for a technical overview and pricing.</p>
                    <div className="cta-anim">
                        <Link to="/#contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                            Request Deployment Access <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BioEnablePage;
