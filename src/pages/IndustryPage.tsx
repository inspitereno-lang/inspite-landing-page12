import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    ArrowLeft,
    ArrowRight,
    Heart,
    Landmark,
    ShoppingCart,
    GraduationCap,
    Server,
    Truck,
    CheckCircle2,
    Stethoscope,
    Activity,
    ShieldCheck,
    Pill,
    MonitorSmartphone,
    Users,
    CreditCard,
    BarChart3,
    Lock,
    TrendingUp,
    FileSearch,
    Banknote,
    Store,
    Package,
    Smartphone,
    Tag,
    ShoppingBag,
    BookOpen,
    Presentation,
    Video,
    Award,
    ClipboardList,
    Globe,
    Factory,
    Cog,
    Cpu,
    Wrench,
    Gauge,
    Wifi,
    MapPin,
    Route,
    Clock,
    Fuel,
    Container,
    type LucideIcon,
} from 'lucide-react';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

interface IndustryFeature {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface UseCaseItem {
    title: string;
    description: string;
}

interface IndustryData {
    slug: string;
    icon: LucideIcon;
    color: string;
    title: string;
    tagline: string;
    heroDescription: string;
    features: IndustryFeature[];
    useCases: UseCaseItem[];
    technologies: string[];
    stats: { value: string; label: string }[];
}

const industriesData: IndustryData[] = [
    {
        slug: 'healthcare',
        icon: Heart,
        color: '#EF4444',
        title: 'Healthcare',
        tagline: 'Digital Innovation for Better Patient Outcomes.',
        heroDescription:
            'We build transformative digital health solutions that improve patient care, streamline clinical workflows, enable telemedicine at scale, and ensure regulatory compliance — empowering healthcare providers to focus on what matters most.',
        features: [
            {
                icon: Stethoscope,
                title: 'Telemedicine Platforms',
                description:
                    'HIPAA-compliant video consultation platforms with integrated scheduling, e-prescriptions, digital health records, and real-time vital monitoring.',
            },
            {
                icon: Activity,
                title: 'Remote Patient Monitoring',
                description:
                    'IoT-powered wearable integrations that track vital signs in real-time, triggering automated alerts for care teams when anomalies are detected.',
            },
            {
                icon: ShieldCheck,
                title: 'EHR/EMR Systems',
                description:
                    'Custom electronic health record systems with interoperability (HL7 FHIR), clinical decision support, and seamless integration with hospital workflows.',
            },
            {
                icon: Pill,
                title: 'AI Clinical Analytics',
                description:
                    'Machine learning models for disease prediction, drug interaction analysis, diagnostic imaging support, and population health management.',
            },
            {
                icon: MonitorSmartphone,
                title: 'Patient Engagement Apps',
                description:
                    'Mobile-first platforms for appointment management, medication reminders, health education, and secure patient-provider communication.',
            },
            {
                icon: Users,
                title: 'Healthcare Operations',
                description:
                    'Intelligent scheduling, resource allocation, bed management, and supply chain optimization that reduce operational costs by up to 35%.',
            },
        ],
        useCases: [
            {
                title: 'Virtual Care Network',
                description:
                    'Multi-specialty telemedicine platform serving 500K+ patients across 200 clinics with AI-powered triage and automated follow-up scheduling.',
            },
            {
                title: 'Clinical Decision Support',
                description:
                    'ML-based diagnostic assistant achieving 94% accuracy in early detection of diabetic retinopathy from fundus images.',
            },
            {
                title: 'Hospital Command Center',
                description:
                    'Real-time operational dashboard reducing ED wait times by 40% through predictive patient flow modeling and dynamic resource allocation.',
            },
        ],
        technologies: [
            'HL7 FHIR',
            'HIPAA Compliance',
            'AWS HealthLake',
            'Epic Integration',
            'IoT Sensors',
            'TensorFlow Medical',
            'React Native',
            'WebRTC',
        ],
        stats: [
            { value: '500K+', label: 'Patients Served' },
            { value: '94%', label: 'Diagnostic Accuracy' },
            { value: '40%', label: 'Wait Time Reduction' },
            { value: 'HIPAA', label: 'Fully Compliant' },
        ],
    },
    {
        slug: 'finance',
        icon: Landmark,
        color: '#14B8A6',
        title: 'Finance',
        tagline: 'Secure, Intelligent Financial Technology.',
        heroDescription:
            'From real-time fraud detection to next-generation banking platforms, we build secure fintech solutions that handle billions in transactions while delivering seamless user experiences and meeting the strictest regulatory requirements.',
        features: [
            {
                icon: Lock,
                title: 'Fraud Detection & Prevention',
                description:
                    'Real-time ML models analyzing transaction patterns, behavioral biometrics, and network graphs to detect fraud with 99.7% accuracy and sub-100ms latency.',
            },
            {
                icon: CreditCard,
                title: 'Digital Banking Platforms',
                description:
                    'Full-stack neobanking solutions with account management, payments, lending, and wealth management — built for mobile-first experiences.',
            },
            {
                icon: BarChart3,
                title: 'Algorithmic Trading',
                description:
                    'Low-latency trading systems with backtesting frameworks, risk management engines, and real-time market data processing for institutional clients.',
            },
            {
                icon: TrendingUp,
                title: 'Risk & Compliance',
                description:
                    'Automated RegTech solutions for KYC/AML, transaction monitoring, stress testing, and regulatory reporting across multiple jurisdictions.',
            },
            {
                icon: FileSearch,
                title: 'Document Intelligence',
                description:
                    'AI-powered document processing for loan underwriting, insurance claims, contract analysis, and financial statement extraction.',
            },
            {
                icon: Banknote,
                title: 'Payment Infrastructure',
                description:
                    'PCI-DSS compliant payment gateways, multi-currency processing, real-time settlement, and blockchain-based cross-border transfers.',
            },
        ],
        useCases: [
            {
                title: 'Neobank Launch',
                description:
                    'End-to-end digital banking platform processing $2B+ annually with 99.99% uptime, serving 300K customers across 15 countries.',
            },
            {
                title: 'Real-Time Fraud Engine',
                description:
                    'Graph neural network detecting fraudulent transactions in <50ms, saving $12M annually in prevented fraud losses.',
            },
            {
                title: 'Automated Compliance',
                description:
                    'RegTech platform automating KYC checks across 40 countries, reducing onboarding time from 5 days to 15 minutes.',
            },
        ],
        technologies: [
            'PCI-DSS',
            'SOC 2',
            'Plaid',
            'Stripe API',
            'Apache Kafka',
            'GraphQL',
            'Blockchain',
            'Python',
        ],
        stats: [
            { value: '$2B+', label: 'Transactions/Year' },
            { value: '99.7%', label: 'Fraud Accuracy' },
            { value: '<50ms', label: 'Detection Latency' },
            { value: '15min', label: 'KYC Onboarding' },
        ],
    },
    {
        slug: 'retail',
        icon: ShoppingCart,
        color: '#10B981',
        title: 'Retail',
        tagline: 'Omnichannel Experiences That Convert.',
        heroDescription:
            'We build intelligent retail platforms that unify online and offline experiences, optimize inventory in real-time, personalize every customer interaction, and drive measurable revenue growth through data-driven decision making.',
        features: [
            {
                icon: Store,
                title: 'Omnichannel Commerce',
                description:
                    'Unified commerce platforms connecting web, mobile, POS, and marketplace channels with real-time inventory sync and consistent brand experiences.',
            },
            {
                icon: Package,
                title: 'Inventory Intelligence',
                description:
                    'AI-powered demand forecasting, automated replenishment, warehouse optimization, and supply chain visibility across all distribution channels.',
            },
            {
                icon: Smartphone,
                title: 'Mobile Commerce',
                description:
                    'Native and hybrid mobile shopping apps with AR try-on, visual search, one-tap checkout, and push notification-driven re-engagement campaigns.',
            },
            {
                icon: Tag,
                title: 'Dynamic Pricing',
                description:
                    'ML algorithms that optimize pricing in real-time based on demand, competition, seasonality, and inventory levels — maximizing margins automatically.',
            },
            {
                icon: Users,
                title: 'Customer 360',
                description:
                    'Unified customer data platforms aggregating behavior across all touchpoints to power hyper-personalized recommendations and loyalty programs.',
            },
            {
                icon: ShoppingBag,
                title: 'Marketplace Platforms',
                description:
                    'Multi-vendor marketplace solutions with seller management, product catalog, order orchestration, and integrated logistics partnerships.',
            },
        ],
        useCases: [
            {
                title: 'Unified Commerce Platform',
                description:
                    'Omnichannel platform for a 200-store retailer, increasing online revenue by 150% and enabling BOPIS (buy online, pick up in store) across all locations.',
            },
            {
                title: 'AI Recommendation Engine',
                description:
                    'Personalization engine serving 2M+ product recommendations daily, driving 35% increase in average order value through collaborative filtering.',
            },
            {
                title: 'Smart Inventory System',
                description:
                    'Demand forecasting platform reducing stockouts by 60% and overstock by 45%, saving $8M annually in inventory carrying costs.',
            },
        ],
        technologies: [
            'Shopify Plus',
            'Magento',
            'Algolia',
            'Stripe',
            'Redis',
            'Elasticsearch',
            'React Native',
            'AWS',
        ],
        stats: [
            { value: '150%', label: 'Revenue Growth' },
            { value: '35%', label: 'Higher AOV' },
            { value: '60%', label: 'Fewer Stockouts' },
            { value: '2M+', label: 'Daily Recommendations' },
        ],
    },
    {
        slug: 'education',
        icon: GraduationCap,
        color: '#84CC16',
        title: 'Education',
        tagline: 'Reimagining Learning for the Digital Age.',
        heroDescription:
            'We create modern e-learning ecosystems that make education accessible, engaging, and measurable. From virtual classrooms to AI-powered adaptive learning, our platforms transform how institutions teach and students learn.',
        features: [
            {
                icon: BookOpen,
                title: 'Learning Management Systems',
                description:
                    'Feature-rich LMS platforms with course creation tools, progress tracking, gamification, certificates, and multi-tenant support for institutions.',
            },
            {
                icon: Presentation,
                title: 'Virtual Classrooms',
                description:
                    'Real-time interactive learning environments with video conferencing, digital whiteboards, breakout rooms, polling, and session recording.',
            },
            {
                icon: Video,
                title: 'Adaptive Learning',
                description:
                    'AI-driven personalized learning paths that adjust content difficulty, pacing, and style based on individual student performance and engagement.',
            },
            {
                icon: Award,
                title: 'Assessment & Analytics',
                description:
                    'Automated grading, plagiarism detection, competency-based assessments, and learning analytics dashboards for educators and administrators.',
            },
            {
                icon: ClipboardList,
                title: 'Student Management',
                description:
                    'End-to-end student information systems covering admissions, enrollment, attendance, grading, and alumni management with parent portals.',
            },
            {
                icon: Globe,
                title: 'Content Marketplace',
                description:
                    'Digital content distribution platforms enabling educators to create, monetize, and share courses, assessments, and learning resources globally.',
            },
        ],
        useCases: [
            {
                title: 'University Digital Campus',
                description:
                    'Comprehensive digital campus for 50K+ students with LMS, virtual labs, student portal, and AI tutoring — achieving 92% student satisfaction.',
            },
            {
                title: 'K-12 Adaptive Platform',
                description:
                    'Personalized learning platform serving 200 schools with adaptive math and science curricula, improving test scores by 28% on average.',
            },
            {
                title: 'Corporate Training Hub',
                description:
                    'Enterprise learning platform with 500+ courses, skills tracking, compliance training, and integration with HR systems for 10K employees.',
            },
        ],
        technologies: [
            'WebRTC',
            'SCORM/xAPI',
            'Canvas LMS',
            'React',
            'Node.js',
            'TensorFlow',
            'MongoDB',
            'AWS',
        ],
        stats: [
            { value: '50K+', label: 'Students Served' },
            { value: '92%', label: 'Satisfaction Rate' },
            { value: '28%', label: 'Score Improvement' },
            { value: '500+', label: 'Courses Created' },
        ],
    },
    {
        slug: 'manufacturing',
        icon: Server,
        color: '#3B82F6',
        title: 'Manufacturing',
        tagline: 'Smart Factories. Intelligent Operations.',
        heroDescription:
            'We deliver Industry 4.0 solutions that connect shop floors to boardrooms. IoT sensor networks, digital twins, predictive maintenance AI, and real-time production analytics that transform manufacturing efficiency and quality.',
        features: [
            {
                icon: Factory,
                title: 'Smart Factory Platform',
                description:
                    'Unified manufacturing execution systems (MES) connecting machines, sensors, and operators with real-time production visibility and control.',
            },
            {
                icon: Cog,
                title: 'Predictive Maintenance',
                description:
                    'ML models analyzing vibration, temperature, and operational data from IoT sensors to predict equipment failures 72 hours before they occur.',
            },
            {
                icon: Cpu,
                title: 'Digital Twin Technology',
                description:
                    'Virtual replicas of physical assets and processes enabling simulation, optimization, and what-if analysis without disrupting production.',
            },
            {
                icon: Wrench,
                title: 'Quality Intelligence',
                description:
                    'Computer vision-powered defect detection achieving 99.5% accuracy on production lines, with automated root cause analysis and corrective actions.',
            },
            {
                icon: Gauge,
                title: 'OEE Optimization',
                description:
                    'Real-time Overall Equipment Effectiveness dashboards with AI-driven recommendations that improve availability, performance, and quality metrics.',
            },
            {
                icon: Wifi,
                title: 'Industrial IoT',
                description:
                    'End-to-end IIoT architectures connecting thousands of sensors to cloud analytics platforms via edge computing for low-latency decision making.',
            },
        ],
        useCases: [
            {
                title: 'Predictive Maintenance System',
                description:
                    'ML-powered maintenance platform for 500+ machines, reducing unplanned downtime by 65% and maintenance costs by $3M annually.',
            },
            {
                title: 'Vision Quality Inspection',
                description:
                    'Automated defect detection system processing 10K parts/hour with 99.5% accuracy, replacing manual QC and reducing scrap by 40%.',
            },
            {
                title: 'Supply Chain Control Tower',
                description:
                    'Real-time supply chain visibility platform tracking materials across 50 suppliers, reducing lead times by 30% and inventory cost by 25%.',
            },
        ],
        technologies: [
            'Azure IoT',
            'AWS IoT Core',
            'MQTT',
            'OPC-UA',
            'TensorFlow Lite',
            'Edge Computing',
            'Power BI',
            'PTC ThingWorx',
        ],
        stats: [
            { value: '65%', label: 'Less Downtime' },
            { value: '99.5%', label: 'Detection Accuracy' },
            { value: '$3M', label: 'Annual Savings' },
            { value: '500+', label: 'Machines Connected' },
        ],
    },
    {
        slug: 'transportation',
        icon: Truck,
        color: '#F59E0B',
        title: 'Transportation',
        tagline: 'Logistics Intelligence. Supply Chain Mastery.',
        heroDescription:
            'From fleet management to last-mile delivery optimization, we build intelligent transportation and logistics platforms that reduce costs, improve delivery accuracy, and provide end-to-end supply chain visibility.',
        features: [
            {
                icon: MapPin,
                title: 'Fleet Management',
                description:
                    'GPS-powered fleet tracking with real-time location, driver behavior scoring, fuel management, and automated compliance reporting.',
            },
            {
                icon: Route,
                title: 'Route Optimization',
                description:
                    'AI algorithms considering traffic, weather, vehicle capacity, and time windows to generate optimal routes — reducing fuel costs by 25%.',
            },
            {
                icon: Clock,
                title: 'Last-Mile Delivery',
                description:
                    'Dynamic dispatch and delivery management platforms with real-time ETA, proof of delivery, customer notifications, and driver apps.',
            },
            {
                icon: Fuel,
                title: 'Fuel & Emissions Analytics',
                description:
                    'IoT-based fuel consumption monitoring, eco-driving scoring, and carbon footprint tracking with sustainability reporting dashboards.',
            },
            {
                icon: Container,
                title: 'Warehouse Management',
                description:
                    'Smart WMS with pick-pack-ship optimization, barcode/RFID integration, slotting algorithms, and real-time inventory accuracy tracking.',
            },
            {
                icon: BarChart3,
                title: 'Supply Chain Analytics',
                description:
                    'End-to-end visibility platforms with predictive ETAs, exception management, carrier performance scoring, and demand-supply balancing.',
            },
        ],
        useCases: [
            {
                title: 'Fleet Intelligence Platform',
                description:
                    'GPS fleet management for 2,000+ vehicles, reducing fuel costs by 25% and improving on-time delivery to 97% through AI route optimization.',
            },
            {
                title: 'Last-Mile Excellence',
                description:
                    'Delivery management platform processing 50K+ deliveries daily with dynamic routing, real-time tracking, and 4.8/5 customer satisfaction.',
            },
            {
                title: 'Supply Chain Visibility',
                description:
                    'Multi-modal logistics tracking platform spanning ocean, air, and ground transport — reducing transit time uncertainty by 60%.',
            },
        ],
        technologies: [
            'Google Maps API',
            'HERE Maps',
            'Samsara',
            'Apache Kafka',
            'React Native',
            'PostgreSQL',
            'Redis',
            'TensorFlow',
        ],
        stats: [
            { value: '25%', label: 'Fuel Savings' },
            { value: '97%', label: 'On-Time Delivery' },
            { value: '50K+', label: 'Daily Deliveries' },
            { value: '2K+', label: 'Vehicles Tracked' },
        ],
    },
];

const IndustryPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const heroRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);
    const useCasesRef = useRef<HTMLDivElement>(null);
    const techRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    const industry = industriesData.find((i) => i.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        if (!industry) return;

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

            gsap.fromTo(
                featuresRef.current?.querySelectorAll('.feature-card') || [],
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power4.out',
                    scrollTrigger: { trigger: featuresRef.current, start: 'top 80%', once: true },
                }
            );

            gsap.fromTo(
                useCasesRef.current?.querySelectorAll('.usecase-card') || [],
                { x: -40, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power4.out',
                    scrollTrigger: { trigger: useCasesRef.current, start: 'top 80%', once: true },
                }
            );

            gsap.fromTo(
                techRef.current?.querySelectorAll('.tech-tag') || [],
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'back.out(1.7)',
                    scrollTrigger: { trigger: techRef.current, start: 'top 85%', once: true },
                }
            );

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
    }, [industry]);

    if (!industry) {
        return (
            <div className="min-h-screen bg-[#050B14] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
                    <p className="text-gray-400 mb-8">The industry page you're looking for doesn't exist.</p>
                    <Link to="/" className="inline-flex items-center gap-2 bg-[#3898EC] text-white px-6 py-3 rounded-xl hover:bg-[#3898EC]/80 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const Icon = industry.icon;

    return (
        <div className="min-h-screen bg-[#050B14] text-white overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px]" style={{ backgroundColor: `${industry.color}15` }} />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00ffff]/5 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#3898EC 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <Link to="/" className="hero-animate inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8 sm:mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Industries</span>
                    </Link>

                    <div className="hero-animate w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 border" style={{ background: `linear-gradient(135deg, ${industry.color}30, ${industry.color}10)`, borderColor: `${industry.color}50` }}>
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: industry.color }} />
                    </div>

                    <h1 className="hero-animate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1]">{industry.title}</h1>
                    <p className="hero-animate text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8" style={{ color: industry.color }}>{industry.tagline}</p>
                    <p className="hero-animate text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-10 sm:mb-14 font-light">{industry.heroDescription}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                        {industry.stats.map((stat) => (
                            <div key={stat.label} className="stat-item bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 text-center backdrop-blur-sm">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2" style={{ color: industry.color }}>{stat.value}</div>
                                <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section ref={featuresRef} className="py-16 sm:py-24 relative">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: industry.color }} />
                            <span className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide uppercase">Our Solutions</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">Build</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {industry.features.map((feature) => {
                            const FeatureIcon = feature.icon;
                            return (
                                <div key={feature.title} className="feature-card group relative bg-[#0a0f1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${industry.color}08, transparent)` }} />
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-[#050B14] rounded-xl flex items-center justify-center mb-5 border border-white/5 group-hover:border-white/20 transition-colors duration-500">
                                            <FeatureIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500" style={{ '--hover-color': industry.color } as React.CSSProperties} />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section ref={useCasesRef} className="py-16 sm:py-24 bg-[#0a0f1a]/50 relative">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full blur-[100px] -translate-y-1/2" style={{ backgroundColor: `${industry.color}08` }} />
                </div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        <div className="lg:w-[40%] flex-shrink-0">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#FF7B00] animate-pulse" />
                                <span className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide uppercase">Case Studies</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1]">
                                Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898EC] to-[#00ffff]">Impact</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-light">
                                See how our solutions have transformed {industry.title.toLowerCase()} organizations with measurable business outcomes.
                            </p>
                        </div>

                        <div className="lg:w-[60%] space-y-4 sm:space-y-6">
                            {industry.useCases.map((useCase, index) => (
                                <div key={useCase.title} className="usecase-card group flex gap-4 sm:gap-6 bg-[#050B14]/80 border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-white/20 transition-all duration-300">
                                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center border" style={{ background: `linear-gradient(135deg, ${industry.color}20, ${industry.color}08)`, borderColor: `${industry.color}30` }}>
                                        <span className="text-lg sm:text-xl font-bold" style={{ color: industry.color }}>0{index + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">{useCase.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">{useCase.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section ref={techRef} className="py-16 sm:py-24 relative">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-10 sm:mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#00E0C6] animate-pulse" />
                            <span className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide uppercase">Tech Stack</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                            Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898EC] to-[#00ffff]">Leverage</span>
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {industry.technologies.map((tech) => (
                            <div key={tech} className="tech-tag px-4 sm:px-6 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-full text-sm sm:text-base font-medium text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-default">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={ctaRef} className="py-16 sm:py-24 relative">
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px]" style={{ backgroundColor: `${industry.color}10` }} />
                </div>

                <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
                    <div className="cta-animate bg-gradient-to-br from-[#0a0f1a] to-[#050B14] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16">
                        <CheckCircle2 className="cta-animate w-12 h-12 mx-auto mb-6" style={{ color: industry.color }} />
                        <h2 className="cta-animate text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                            Transform Your {industry.title} Business
                        </h2>
                        <p className="cta-animate text-base sm:text-lg text-gray-400 leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto font-light">
                            Let's explore how our {industry.title.toLowerCase()} expertise can solve your biggest challenges and drive measurable results.
                        </p>
                        <div className="cta-animate flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3898EC] to-[#00ffff] text-white px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 group">
                                Start a Conversation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                                View All Industries
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Industries */}
            <section className="py-16 sm:py-24 bg-[#0a0f1a]/30">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center tracking-tight">Explore Other Industries</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {industriesData
                            .filter((i) => i.slug !== slug)
                            .map((i) => {
                                const OtherIcon = i.icon;
                                return (
                                    <Link key={i.slug} to={`/industries/${i.slug}`} className="group flex items-center gap-4 bg-[#050B14]/80 border border-white/10 rounded-xl p-4 sm:p-5 hover:border-white/20 transition-all duration-300">
                                        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                            <OtherIcon className="w-5 h-5 transition-colors" style={{ color: i.color }} />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-[#3898EC] transition-colors">{i.title}</h3>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#3898EC] group-hover:translate-x-1 transition-all" />
                                    </Link>
                                );
                            })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default IndustryPage;
