import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    ArrowLeft,
    ArrowRight,
    Brain,
    Sparkles,
    Cpu,
    Bot,
    Workflow,
    Network,
    MessageSquare,
    Eye,
    BarChart3,
    Code2,
    Layers,
    GitBranch,
    Target,
    CheckCircle2,
} from 'lucide-react';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const AIProductLabPage = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const capabilitiesRef = useRef<HTMLDivElement>(null);
    const agentsRef = useRef<HTMLDivElement>(null);
    const proficiencyRef = useRef<HTMLDivElement>(null);
    const rndRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                heroRef.current?.querySelectorAll('.hero-animate') || [],
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
            );

            gsap.fromTo(
                heroRef.current?.querySelectorAll('.stat-item') || [],
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power4.out', delay: 0.6 }
            );

            const sections = [capabilitiesRef, agentsRef, proficiencyRef, rndRef];
            sections.forEach((ref) => {
                if (ref.current) {
                    gsap.fromTo(
                        ref.current.querySelectorAll('.animate-in'),
                        { y: 50, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power4.out',
                            scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
                        }
                    );
                }
            });

            gsap.fromTo(
                ctaRef.current?.querySelectorAll('.cta-animate') || [],
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power4.out',
                    scrollTrigger: { trigger: ctaRef.current, start: 'top 85%', once: true },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    const capabilities = [
        {
            icon: Bot,
            title: 'Autonomous AI Agents',
            description: 'Self-directed agents that plan, reason, and execute multi-step tasks — from customer support to complex data analysis workflows.',
        },
        {
            icon: Network,
            title: 'Multi-Agent Orchestration',
            description: 'Coordinated agent systems where specialized AI agents collaborate, delegate, and solve problems that no single model can handle alone.',
        },
        {
            icon: MessageSquare,
            title: 'RAG-Powered Chatbots',
            description: 'Context-aware conversational AI grounded in your enterprise data. Reliable answers with source citations and hallucination guardrails.',
        },
        {
            icon: Eye,
            title: 'Computer Vision AI',
            description: 'Object detection, image classification, OCR, and video analytics deployed at edge or cloud for real-time visual intelligence.',
        },
        {
            icon: BarChart3,
            title: 'Predictive Intelligence',
            description: 'Ensemble ML models forecasting demand, churn, risk, and revenue with 95%+ accuracy powered by your historical and real-time data.',
        },
        {
            icon: Code2,
            title: 'Custom LLM Fine-Tuning',
            description: 'Domain-specialized language models fine-tuned on your data for superior accuracy in industry-specific tasks and terminology.',
        },
    ];

    const agentFeatures = [
        {
            icon: Workflow,
            title: 'Agentic Workflows',
            description: 'Design complex multi-step workflows where AI agents autonomously navigate decision trees, call APIs, and process data.',
        },
        {
            icon: Layers,
            title: 'Tool Integration',
            description: 'Connect agents to your existing tools — CRMs, databases, APIs, file systems — enabling them to take real actions in your environment.',
        },
        {
            icon: GitBranch,
            title: 'Memory & Context',
            description: 'Long-term memory systems that give agents persistent context across sessions, enabling more intelligent and personalized interactions.',
        },
        {
            icon: Target,
            title: 'Goal-Oriented Planning',
            description: 'Agents that break down complex objectives into sub-tasks, create execution plans, and adapt strategies based on intermediate results.',
        },
    ];

    const aiProficiency = [
        { title: 'Natural Language Processing', description: 'Text classification, sentiment analysis, entity extraction, summarization, and translation across 50+ languages.' },
        { title: 'Generative AI', description: 'Content generation, code synthesis, image creation, and creative AI applications powered by state-of-the-art foundation models.' },
        { title: 'Reinforcement Learning', description: 'Optimization agents for pricing, resource allocation, robotics control, and recommendation systems that learn from interaction.' },
        { title: 'Federated Learning', description: 'Privacy-preserving ML that trains models across distributed data sources without centralizing sensitive information.' },
        { title: 'Edge AI', description: 'Compressed, optimized models deployed on edge devices for real-time inference without cloud latency or connectivity requirements.' },
        { title: 'Explainable AI (XAI)', description: 'Transparent models with interpretable predictions, feature importance analysis, and audit-ready decision documentation.' },
    ];

    const rndAreas = [
        { title: 'Foundation Model Research', description: 'Exploring novel architectures beyond transformers — state-space models, mixture of experts, and hybrid approaches.' },
        { title: 'Synthetic Data Generation', description: 'Creating high-quality training data using generative models for domains where real data is scarce or sensitive.' },
        { title: 'AI Safety & Alignment', description: 'Developing guardrails, red-teaming methodologies, and alignment techniques for reliable, trustworthy AI systems.' },
        { title: 'Efficient Inference', description: 'Quantization, distillation, and speculative decoding research for 10x faster inference at a fraction of the compute cost.' },
    ];

    return (
        <div className="min-h-screen bg-[#050B14] text-white overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FF6B35]/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#3898EC]/10 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#3898EC 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <Link to="/" className="hero-animate inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8 sm:mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>

                    <div className="hero-animate inline-flex items-center gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-6 sm:mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide uppercase">AI Product Lab</span>
                    </div>

                    <h1 className="hero-animate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1]">
                        AI-first platform{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#f9a886]">engineering.</span>
                    </h1>

                    <p className="hero-animate text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-10 sm:mb-14 font-light">
                        We leverage advanced LLMs, agentic workflows, and custom machine learning models to build intelligent platforms that allow your business to achieve exponential scale with less operational overhead. From concept to production, we deliver AI that works.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { value: '50+', label: 'AI Models Deployed' },
                            { value: '95%+', label: 'Model Accuracy' },
                            { value: '10x', label: 'Efficiency Gain' },
                            { value: '24/7', label: 'Autonomous Ops' },
                        ].map((stat) => (
                            <div key={stat.label} className="stat-item bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 text-center backdrop-blur-sm">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#f9a886] mb-1 sm:mb-2">{stat.value}</div>
                                <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section ref={capabilitiesRef} className="py-16 sm:py-24 relative">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                            <span className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide uppercase">Core Capabilities</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                            Intelligent Solutions{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#f9a886]">at Scale</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {capabilities.map((cap) => {
                            const CapIcon = cap.icon;
                            return (
                                <div key={cap.title} className="animate-in group relative bg-[#0a0f1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#FF6B35]/30">
                                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FF6B35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-[#050B14] rounded-xl flex items-center justify-center mb-5 border border-white/5 group-hover:border-[#FF6B35]/30 transition-colors duration-500">
                                            <CapIcon className="w-5 h-5 text-gray-400 group-hover:text-[#FF6B35] transition-colors duration-500" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">{cap.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">{cap.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* AI Agents & Integrations */}
            <section ref={agentsRef} id="agents" className="py-16 sm:py-24 bg-[#0a0f1a]/50 relative">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#FF6B35]/5 rounded-full blur-[120px] -translate-y-1/2" />
                </div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        <div className="lg:w-[40%] flex-shrink-0">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
                                <Brain className="w-3.5 h-3.5 text-[#FF6B35]" />
                                <span className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide uppercase">AI Agents & Integrations</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1]">
                                LLMs & ML{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#f9a886]">Powered Solutions</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-light">
                                Our AI agents don't just respond — they think, plan, and act. We build autonomous systems that integrate with your entire technology ecosystem to deliver real business value.
                            </p>
                        </div>

                        <div className="lg:w-[60%] grid sm:grid-cols-2 gap-4 sm:gap-6">
                            {agentFeatures.map((feature) => {
                                const FeatureIcon = feature.icon;
                                return (
                                    <div key={feature.title} className="animate-in group bg-[#050B14]/80 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-[#FF6B35]/20 transition-all duration-300">
                                        <div className="w-11 h-11 bg-gradient-to-br from-[#FF6B35]/15 to-transparent rounded-xl flex items-center justify-center mb-4 border border-[#FF6B35]/15">
                                            <FeatureIcon className="w-5 h-5 text-[#FF6B35]" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed font-light">{feature.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Proficiency */}
            <section ref={proficiencyRef} id="proficiency" className="py-16 sm:py-24 relative">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
                            <Sparkles className="w-3.5 h-3.5 text-[#3898EC]" />
                            <span className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide uppercase">AI Proficiency</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Advanced AI{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898EC] to-[#00ffff]">Capabilities</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-light">
                            Deep expertise across the entire AI/ML spectrum — from classical machine learning to cutting-edge generative AI.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {aiProficiency.map((item) => (
                            <div key={item.title} className="animate-in group bg-[#0a0f1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#3898EC]/20 transition-all duration-300">
                                <div className="w-2 h-2 rounded-full bg-[#3898EC] mb-4" />
                                <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed font-light">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI R&D */}
            <section ref={rndRef} id="rnd" className="py-16 sm:py-24 bg-[#0a0f1a]/50 relative">
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#3898EC]/5 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        <div className="lg:w-[40%] flex-shrink-0">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
                                <Cpu className="w-3.5 h-3.5 text-[#00E0C6]" />
                                <span className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide uppercase">AI R&D</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1]">
                                Research &{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0C6] to-[#00D9FF]">Development</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-light">
                                Our research division pushes the boundaries of what's possible with AI, ensuring our production systems always incorporate the latest breakthroughs.
                            </p>
                        </div>

                        <div className="lg:w-[60%] space-y-4 sm:space-y-6">
                            {rndAreas.map((area, index) => (
                                <div key={area.title} className="animate-in group flex gap-4 sm:gap-6 bg-[#050B14]/80 border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-[#00E0C6]/20 transition-all duration-300">
                                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#00E0C6]/20 to-[#00E0C6]/5 rounded-xl sm:rounded-2xl flex items-center justify-center border border-[#00E0C6]/20">
                                        <span className="text-lg sm:text-xl font-bold text-[#00E0C6]">0{index + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">{area.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">{area.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-16 sm:py-24 relative">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-10 sm:mb-14">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                            Our AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#f9a886]">Stack</span>
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {[
                            'OpenAI GPT-4', 'Claude', 'Gemini', 'LangChain', 'LangGraph', 'CrewAI',
                            'PyTorch', 'TensorFlow', 'Hugging Face', 'ONNX', 'MLflow', 'Kubeflow',
                            'Pinecone', 'Weaviate', 'RAG', 'Vertex AI', 'AWS SageMaker', 'Vector DBs',
                        ].map((tech) => (
                            <div key={tech} className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-full text-sm sm:text-base font-medium text-gray-300 hover:bg-[#FF6B35]/10 hover:border-[#FF6B35]/30 hover:text-white transition-all duration-300 cursor-default">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={ctaRef} className="py-16 sm:py-24 relative">
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF6B35]/10 rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
                    <div className="cta-animate bg-gradient-to-br from-[#0a0f1a] to-[#050B14] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16">
                        <CheckCircle2 className="cta-animate w-12 h-12 text-[#FF6B35] mx-auto mb-6" />
                        <h2 className="cta-animate text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                            Build with AI Today
                        </h2>
                        <p className="cta-animate text-base sm:text-lg text-gray-400 leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto font-light">
                            Whether you need an AI agent, a custom model, or a complete intelligent platform — let's make it happen.
                        </p>
                        <div className="cta-animate flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#f9a886] text-white px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 group">
                                Start a Conversation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AIProductLabPage;
