import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    ArrowLeft,
    ArrowRight,
    Lightbulb,
    Code2,
    Palette,
    Server,
    Shield,
    Blocks,
    CheckCircle2,
    Zap,
    Target,
    Layers,
    Globe,
    Database,
    Brain,
    Cloud,
    Cpu,
    BarChart3,
    Smartphone,
    Lock,
    RefreshCw,
    GitBranch,
    Box,
    Workflow,
    PenTool,
    Eye,
    Users,
    Gauge,
    LineChart,
    Cog,
    type LucideIcon,
} from 'lucide-react';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

interface ServiceFeature {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface ApproachStep {
    step: string;
    title: string;
    description: string;
}

interface ServiceData {
    slug: string;
    icon: LucideIcon;
    title: string;
    tagline: string;
    heroDescription: string;
    features: ServiceFeature[];
    approach: ApproachStep[];
    technologies: string[];
    stats: { value: string; label: string }[];
}

const servicesData: ServiceData[] = [
    {
        slug: 'application-engineering',
        icon: Lightbulb,
        title: 'Application Engineering',
        tagline: 'Build Resilient. Scale Infinitely.',
        heroDescription:
            'We architect and engineer enterprise-grade applications that power mission-critical operations. From microservices to monolithic powerhouses, our solutions are built for performance, security, and limitless scalability — tailored to your unique business needs.',
        features: [
            {
                icon: Layers,
                title: 'Microservices Architecture',
                description:
                    'Decompose complex systems into independently deployable services, enabling rapid iteration and fault isolation across your entire platform.',
            },
            {
                icon: Globe,
                title: 'Cloud-Native Development',
                description:
                    'Leverage Kubernetes, Docker, and serverless architectures to build applications that auto-scale with demand and reduce infrastructure costs by up to 60%.',
            },
            {
                icon: Zap,
                title: 'Real-Time Systems',
                description:
                    'WebSocket-powered live dashboards, event-driven architectures, and stream processing engines that handle millions of concurrent connections.',
            },
            {
                icon: Lock,
                title: 'Enterprise Security',
                description:
                    'Zero-trust architecture, OAuth 2.0, JWT-based auth, end-to-end encryption, and SOC 2 compliance baked into every layer of your application.',
            },
            {
                icon: Gauge,
                title: 'Performance Engineering',
                description:
                    'Sub-100ms API response times through intelligent caching, query optimization, CDN strategies, and advanced load balancing techniques.',
            },
            {
                icon: RefreshCw,
                title: 'CI/CD Pipelines',
                description:
                    'Automated testing, deployment, and rollback strategies using GitHub Actions, Jenkins, and ArgoCD for zero-downtime releases.',
            },
        ],
        approach: [
            {
                step: '01',
                title: 'Discovery & Architecture',
                description:
                    'Deep-dive into your business requirements, existing systems, and growth trajectory. We design the technical blueprint that aligns with your vision.',
            },
            {
                step: '02',
                title: 'Agile Development',
                description:
                    'Two-week sprints with continuous delivery. You see working software from day one, not just presentations and wireframes.',
            },
            {
                step: '03',
                title: 'Quality Assurance',
                description:
                    'Rigorous automated testing — unit, integration, performance, and security. We ship with confidence, not crossed fingers.',
            },
            {
                step: '04',
                title: 'Launch & Scale',
                description:
                    'Blue-green deployments, canary releases, and real-time monitoring ensure smooth launches and continuous optimization post-release.',
            },
        ],
        technologies: [
            'React',
            'Next.js',
            'Node.js',
            'Python',
            'Go',
            'TypeScript',
            'PostgreSQL',
            'Redis',
            'Kubernetes',
            'Docker',
            'AWS',
            'GraphQL',
        ],
        stats: [
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '<100ms', label: 'Avg Response' },
            { value: '50+', label: 'Apps Delivered' },
            { value: '10M+', label: 'Users Served' },
        ],
    },
    {
        slug: 'ai-machine-learning',
        icon: Code2,
        title: 'AI & Machine Learning',
        tagline: 'Intelligence That Transforms Business.',
        heroDescription:
            'From predictive analytics to generative AI, we deploy cutting-edge machine learning solutions that automate complex workflows, unlock hidden patterns in your data, and build truly intelligent products that learn and evolve.',
        features: [
            {
                icon: Brain,
                title: 'Custom AI Models',
                description:
                    'Purpose-built neural networks trained on your domain data — not generic off-the-shelf solutions. Models that understand your business context deeply.',
            },
            {
                icon: Workflow,
                title: 'Intelligent Automation',
                description:
                    'RPA + AI fusion that automates document processing, customer interactions, decision workflows, and quality control with human-level accuracy.',
            },
            {
                icon: BarChart3,
                title: 'Predictive Analytics',
                description:
                    'Forecast demand, churn, revenue, and risk with ensemble models that achieve 95%+ accuracy, powered by your historical and real-time data.',
            },
            {
                icon: Eye,
                title: 'Computer Vision',
                description:
                    'Object detection, image classification, OCR, and video analytics solutions deployed at edge or cloud for manufacturing, retail, and healthcare.',
            },
            {
                icon: Cpu,
                title: 'NLP & Conversational AI',
                description:
                    'RAG-powered chatbots, sentiment analysis, document summarization, and multilingual translation engines built on transformer architectures.',
            },
            {
                icon: LineChart,
                title: 'MLOps & Model Monitoring',
                description:
                    'End-to-end ML pipelines with automated retraining, drift detection, A/B testing, and performance dashboards for production AI systems.',
            },
        ],
        approach: [
            {
                step: '01',
                title: 'Data Assessment',
                description:
                    'Evaluate your data quality, volume, and structure. Identify the highest-impact AI opportunities that deliver measurable ROI.',
            },
            {
                step: '02',
                title: 'Model Development',
                description:
                    'Iterative experimentation with state-of-the-art architectures. We train, validate, and benchmark until performance exceeds your thresholds.',
            },
            {
                step: '03',
                title: 'Production Deployment',
                description:
                    'Containerized model serving with auto-scaling, A/B testing, and shadow deployment strategies for safe production rollouts.',
            },
            {
                step: '04',
                title: 'Continuous Learning',
                description:
                    'Automated monitoring detects model drift. Retraining pipelines ensure your AI stays accurate as your data and business evolve.',
            },
        ],
        technologies: [
            'TensorFlow',
            'PyTorch',
            'Hugging Face',
            'OpenAI',
            'LangChain',
            'Scikit-learn',
            'MLflow',
            'Kubeflow',
            'Apache Spark',
            'RAG',
            'ONNX',
            'Vertex AI',
        ],
        stats: [
            { value: '95%+', label: 'Model Accuracy' },
            { value: '40%', label: 'Cost Reduction' },
            { value: '30+', label: 'AI Models Deployed' },
            { value: '10x', label: 'Process Speed-Up' },
        ],
    },
    {
        slug: 'cloud-infrastructure',
        icon: Shield,
        title: 'Cloud & Infrastructure',
        tagline: 'Secure. Scalable. Autonomous.',
        heroDescription:
            'We design and manage cloud environments that are inherently secure, infinitely scalable, and self-healing. From multi-cloud strategies to infrastructure-as-code, we build the foundation your digital products need to thrive.',
        features: [
            {
                icon: Cloud,
                title: 'Multi-Cloud Strategy',
                description:
                    'Avoid vendor lock-in with architectures that seamlessly span AWS, Azure, and GCP. Optimize costs and leverage best-of-breed services from each provider.',
            },
            {
                icon: Lock,
                title: 'Zero-Trust Security',
                description:
                    'Network segmentation, identity-based access, encrypted data at rest and in transit, WAF, DDoS protection, and continuous compliance monitoring.',
            },
            {
                icon: Cog,
                title: 'Infrastructure as Code',
                description:
                    'Terraform, Pulumi, and CloudFormation templates that version-control your entire infrastructure. Reproducible, auditable, and drift-free environments.',
            },
            {
                icon: RefreshCw,
                title: 'Auto-Scaling & High Availability',
                description:
                    'Horizontal and vertical auto-scaling with multi-region failover. Your applications stay responsive whether serving 100 or 10 million requests.',
            },
            {
                icon: Gauge,
                title: 'Observability Stack',
                description:
                    'Full-stack monitoring with Prometheus, Grafana, Datadog, and custom dashboards. Real-time alerts, distributed tracing, and log aggregation.',
            },
            {
                icon: GitBranch,
                title: 'DevOps & SRE',
                description:
                    'Site reliability engineering practices, incident response automation, SLO-driven operations, and chaos engineering for bulletproof systems.',
            },
        ],
        approach: [
            {
                step: '01',
                title: 'Infrastructure Audit',
                description:
                    'Comprehensive review of your current infrastructure, identifying security gaps, cost inefficiencies, and scalability bottlenecks.',
            },
            {
                step: '02',
                title: 'Architecture Design',
                description:
                    'Design a cloud-native architecture optimized for your workload patterns, compliance requirements, and growth projections.',
            },
            {
                step: '03',
                title: 'Migration & Deployment',
                description:
                    'Zero-downtime migration with automated rollback. We move your workloads safely while maintaining business continuity.',
            },
            {
                step: '04',
                title: 'Managed Operations',
                description:
                    '24/7 monitoring, automated remediation, cost optimization, and continuous improvement of your cloud environment.',
            },
        ],
        technologies: [
            'AWS',
            'Azure',
            'GCP',
            'Terraform',
            'Kubernetes',
            'Docker',
            'Prometheus',
            'Grafana',
            'Ansible',
            'CloudFlare',
            'Vault',
            'Istio',
        ],
        stats: [
            { value: '99.99%', label: 'Uptime Achieved' },
            { value: '45%', label: 'Cost Savings' },
            { value: '200+', label: 'Servers Managed' },
            { value: '<5min', label: 'Incident Response' },
        ],
    },
    {
        slug: 'data-architecture',
        icon: Server,
        title: 'Data Architecture',
        tagline: 'From Raw Data to Strategic Intelligence.',
        heroDescription:
            'We transform chaotic data landscapes into structured, queryable, and actionable intelligence platforms. Our modern data architectures handle petabyte-scale workloads while delivering real-time insights to every stakeholder.',
        features: [
            {
                icon: Database,
                title: 'Data Lake & Lakehouse',
                description:
                    'Unified storage architectures using Delta Lake, Apache Iceberg, or Hudi that combine the flexibility of data lakes with the reliability of data warehouses.',
            },
            {
                icon: Workflow,
                title: 'ETL/ELT Pipelines',
                description:
                    'Robust data pipelines with Apache Airflow, dbt, and Spark that ingest, transform, and load data from hundreds of sources with guaranteed consistency.',
            },
            {
                icon: BarChart3,
                title: 'Real-Time Analytics',
                description:
                    'Stream processing with Apache Kafka, Flink, and ClickHouse for sub-second analytics dashboards that power time-critical business decisions.',
            },
            {
                icon: Shield,
                title: 'Data Governance',
                description:
                    'Data cataloging, lineage tracking, PII detection, GDPR/CCPA compliance automation, and role-based access control across your entire data estate.',
            },
            {
                icon: LineChart,
                title: 'Business Intelligence',
                description:
                    'Self-service BI platforms with Looker, Tableau, or custom dashboards that empower non-technical stakeholders to explore data independently.',
            },
            {
                icon: Layers,
                title: 'Data Mesh Architecture',
                description:
                    'Domain-driven data ownership with federated governance. Empower teams to own their data products while maintaining organization-wide standards.',
            },
        ],
        approach: [
            {
                step: '01',
                title: 'Data Discovery',
                description:
                    'Map your existing data sources, quality issues, and business intelligence needs. Identify quick wins and long-term transformation goals.',
            },
            {
                step: '02',
                title: 'Architecture Blueprint',
                description:
                    'Design a scalable data platform architecture — choosing the right stack of storage, compute, orchestration, and serving layers.',
            },
            {
                step: '03',
                title: 'Pipeline Engineering',
                description:
                    'Build, test, and deploy data pipelines with comprehensive data quality checks, alerting, and automated recovery mechanisms.',
            },
            {
                step: '04',
                title: 'Insights Activation',
                description:
                    'Connect your data platform to BI tools, ML models, and operational systems. Turn data into decisions and automated actions.',
            },
        ],
        technologies: [
            'Snowflake',
            'Databricks',
            'Apache Kafka',
            'Apache Spark',
            'dbt',
            'Airflow',
            'BigQuery',
            'Redshift',
            'ClickHouse',
            'Looker',
            'Delta Lake',
            'Fivetran',
        ],
        stats: [
            { value: '10PB+', label: 'Data Processed' },
            { value: '500+', label: 'Data Sources' },
            { value: '99.9%', label: 'Pipeline Uptime' },
            { value: '<1s', label: 'Query Latency' },
        ],
    },
    {
        slug: 'experience-design',
        icon: Palette,
        title: 'Experience Design (UX/UI)',
        tagline: 'Design That Converts. Experiences That Retain.',
        heroDescription:
            'We fuse deep psychological principles with high-end visual execution to create digital experiences that don\'t just look beautiful — they drive measurable business outcomes. Every pixel, interaction, and micro-animation is purposefully crafted.',
        features: [
            {
                icon: Users,
                title: 'User Research & Strategy',
                description:
                    'Ethnographic studies, user interviews, journey mapping, and behavioral analytics that uncover the "why" behind user actions and inform every design decision.',
            },
            {
                icon: PenTool,
                title: 'UI Design Systems',
                description:
                    'Comprehensive design systems with reusable components, design tokens, and documentation that ensure brand consistency across all digital touchpoints.',
            },
            {
                icon: Smartphone,
                title: 'Responsive & Adaptive Design',
                description:
                    'Fluid layouts that perform flawlessly across every device — from 4K desktops to mobile phones. Progressive enhancement ensures universal accessibility.',
            },
            {
                icon: Target,
                title: 'Conversion Optimization',
                description:
                    'A/B testing, heatmap analysis, and funnel optimization that systematically improve conversion rates, reducing bounce rates by up to 40%.',
            },
            {
                icon: Zap,
                title: 'Motion & Interaction Design',
                description:
                    'Purposeful micro-animations, transitions, and interactive elements that guide users, provide feedback, and create memorable brand experiences.',
            },
            {
                icon: Eye,
                title: 'Accessibility (WCAG 2.1)',
                description:
                    'Inclusive design practices ensuring your products are usable by everyone. Screen reader compatibility, keyboard navigation, and color contrast compliance.',
            },
        ],
        approach: [
            {
                step: '01',
                title: 'Research & Discovery',
                description:
                    'Deep user research, competitive analysis, and stakeholder workshops to define the experience strategy and design principles.',
            },
            {
                step: '02',
                title: 'Wireframes & Prototyping',
                description:
                    'Low to high-fidelity prototypes tested with real users. We iterate rapidly based on qualitative and quantitative feedback.',
            },
            {
                step: '03',
                title: 'Visual Design',
                description:
                    'Pixel-perfect UI design with motion specifications, design tokens, and comprehensive component documentation for seamless developer handoff.',
            },
            {
                step: '04',
                title: 'Design QA & Iteration',
                description:
                    'Post-launch usability testing and analytics-driven design iterations that continuously improve the user experience.',
            },
        ],
        technologies: [
            'Figma',
            'Framer',
            'Adobe XD',
            'Principle',
            'Lottie',
            'Storybook',
            'Hotjar',
            'Google Analytics',
            'Maze',
            'UserTesting',
            'Zeplin',
            'InVision',
        ],
        stats: [
            { value: '40%', label: 'Bounce Rate Drop' },
            { value: '3x', label: 'Conversion Lift' },
            { value: '60+', label: 'Products Designed' },
            { value: '4.8/5', label: 'User Satisfaction' },
        ],
    },
    {
        slug: 'platform-modernization',
        icon: Blocks,
        title: 'Platform Modernization',
        tagline: 'Future-Proof Your Technology Stack.',
        heroDescription:
            'We transform legacy monoliths into modern, agile platforms. From strangler fig patterns to complete rewrites, our modernization strategies minimize risk while maximizing business value — getting you ready for the next decade of scale.',
        features: [
            {
                icon: GitBranch,
                title: 'Monolith to Microservices',
                description:
                    'Strategic decomposition using strangler fig and branch-by-abstraction patterns. Gradual migration that maintains business continuity throughout.',
            },
            {
                icon: Box,
                title: 'Containerization',
                description:
                    'Dockerize legacy applications for consistent environments, simplified deployments, and seamless cloud migration. Container orchestration with Kubernetes.',
            },
            {
                icon: Database,
                title: 'Database Modernization',
                description:
                    'Migrate from legacy databases to modern solutions — SQL to NoSQL, on-prem to managed cloud databases, with zero data loss and minimal downtime.',
            },
            {
                icon: Workflow,
                title: 'API-First Redesign',
                description:
                    'Transform tightly coupled systems into API-driven architectures. RESTful and GraphQL APIs that enable ecosystem integration and partner connectivity.',
            },
            {
                icon: Cloud,
                title: 'Cloud Migration',
                description:
                    'Lift-and-shift, re-platform, or re-architect — we choose the right migration strategy for each workload to optimize cost, performance, and time-to-value.',
            },
            {
                icon: RefreshCw,
                title: 'Technical Debt Reduction',
                description:
                    'Systematic identification and elimination of technical debt. Code refactoring, dependency updates, and architecture improvements that reduce maintenance costs.',
            },
        ],
        approach: [
            {
                step: '01',
                title: 'Legacy Assessment',
                description:
                    'Comprehensive audit of your existing systems — codebase analysis, dependency mapping, risk assessment, and modernization opportunity scoring.',
            },
            {
                step: '02',
                title: 'Modernization Roadmap',
                description:
                    'Phased migration plan that balances risk, cost, and business impact. We prioritize the changes that deliver the fastest, highest-impact results.',
            },
            {
                step: '03',
                title: 'Incremental Migration',
                description:
                    'Execute the roadmap in controlled phases — each delivering measurable improvements while maintaining system stability and user experience.',
            },
            {
                step: '04',
                title: 'Optimization & Handoff',
                description:
                    'Performance tuning, team training, and documentation. We ensure your team can confidently own and evolve the modernized platform.',
            },
        ],
        technologies: [
            'Kubernetes',
            'Docker',
            'Kong API Gateway',
            'gRPC',
            'GraphQL',
            'Event Sourcing',
            'CQRS',
            'RabbitMQ',
            'Kafka',
            'Terraform',
            'Helm',
            'ArgoCD',
        ],
        stats: [
            { value: '70%', label: 'Faster Deployments' },
            { value: '50%', label: 'Cost Reduction' },
            { value: '25+', label: 'Platforms Modernized' },
            { value: '0', label: 'Data Loss Incidents' },
        ],
    },
];

const ServicePage = () => {
    const { slug } = useParams<{ slug: string }>();
    const heroRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);
    const approachRef = useRef<HTMLDivElement>(null);
    const techRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    const service = servicesData.find((s) => s.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        if (!service) return;

        const ctx = gsap.context(() => {
            // Hero animations
            gsap.fromTo(
                heroRef.current?.querySelectorAll('.hero-animate') || [],
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power4.out',
                    delay: 0.2,
                }
            );

            // Stats counter animation
            gsap.fromTo(
                heroRef.current?.querySelectorAll('.stat-item') || [],
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power4.out',
                    delay: 0.6,
                }
            );

            // Feature cards
            gsap.fromTo(
                featuresRef.current?.querySelectorAll('.feature-card') || [],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: featuresRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                }
            );

            // Approach steps
            gsap.fromTo(
                approachRef.current?.querySelectorAll('.approach-step') || [],
                { x: -40, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: approachRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                }
            );

            // Tech tags
            gsap.fromTo(
                techRef.current?.querySelectorAll('.tech-tag') || [],
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: techRef.current,
                        start: 'top 85%',
                        once: true,
                    },
                }
            );

            // CTA section
            gsap.fromTo(
                ctaRef.current?.querySelectorAll('.cta-animate') || [],
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 85%',
                        once: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, [service]);

    if (!service) {
        return (
            <div className="min-h-screen bg-[#050B14] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <p className="text-gray-400 mb-8">
                        The service you're looking for doesn't exist.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-[#3898EC] text-white px-6 py-3 rounded-xl hover:bg-[#3898EC]/80 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-[#050B14] text-white overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden"
            >
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#3898EC]/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00ffff]/5 rounded-full blur-[120px]" />
                    <div
                        className="absolute inset-0 opacity-[0.05]"
                        style={{
                            backgroundImage: 'radial-gradient(#3898EC 1px, transparent 0)',
                            backgroundSize: '40px 40px',
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    {/* Back Button */}
                    <Link
                        to="/"
                        className="hero-animate inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8 sm:mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Services</span>
                    </Link>

                    {/* Icon */}
                    <div className="hero-animate w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#3898EC]/20 to-[#00ffff]/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 border border-[#3898EC]/30">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#3898EC]" />
                    </div>

                    {/* Title */}
                    <h1 className="hero-animate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1]">
                        {service.title}
                    </h1>

                    {/* Tagline */}
                    <p className="hero-animate text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#3898EC] to-[#00ffff] font-semibold mb-6 sm:mb-8">
                        {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="hero-animate text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-10 sm:mb-14 font-light">
                        {service.heroDescription}
                    </p>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                        {service.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="stat-item bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 text-center backdrop-blur-sm"
                            >
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3898EC] to-[#00ffff] mb-1 sm:mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section ref={featuresRef} className="py-16 sm:py-24 relative">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    {/* Section Header */}
                    <div className="mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                            <span className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide uppercase">
                                Key Capabilities
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                            What We{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">
                                Deliver
                            </span>
                        </h2>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {service.features.map((feature) => {
                            const FeatureIcon = feature.icon;
                            return (
                                <div
                                    key={feature.title}
                                    className="feature-card group relative bg-[#0a0f1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#3898EC]/30"
                                >
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#3898EC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-[#050B14] rounded-xl flex items-center justify-center mb-5 border border-white/5 group-hover:border-[#3898EC]/30 transition-colors duration-500">
                                            <FeatureIcon className="w-5 h-5 text-gray-400 group-hover:text-[#3898EC] transition-colors duration-500" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section
                ref={approachRef}
                className="py-16 sm:py-24 bg-[#0a0f1a]/50 relative"
            >
                {/* Background accent */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#3898EC]/5 rounded-full blur-[100px] -translate-y-1/2" />
                </div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        {/* Left side */}
                        <div className="lg:w-[40%] flex-shrink-0">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#FF7B00] animate-pulse" />
                                <span className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide uppercase">
                                    Our Methodology
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1]">
                                A Proven{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898EC] to-[#00ffff]">
                                    Approach
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-light">
                                Our battle-tested methodology ensures predictable outcomes,
                                transparent communication, and exceptional results on every
                                engagement.
                            </p>
                        </div>

                        {/* Right side - Steps */}
                        <div className="lg:w-[60%] space-y-4 sm:space-y-6">
                            {service.approach.map((step) => (
                                <div
                                    key={step.step}
                                    className="approach-step group flex gap-4 sm:gap-6 bg-[#050B14]/80 border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-[#3898EC]/20 transition-all duration-300"
                                >
                                    {/* Step Number */}
                                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#3898EC]/20 to-[#00ffff]/10 rounded-xl sm:rounded-2xl flex items-center justify-center border border-[#3898EC]/20">
                                        <span className="text-lg sm:text-xl font-bold text-[#3898EC]">
                                            {step.step}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
                                            {step.description}
                                        </p>
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
                            <span className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide uppercase">
                                Tech Stack
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                            Technologies We{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3898EC] to-[#00ffff]">
                                Master
                            </span>
                        </h2>
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {service.technologies.map((tech) => (
                            <div
                                key={tech}
                                className="tech-tag px-4 sm:px-6 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-full text-sm sm:text-base font-medium text-gray-300 hover:bg-[#3898EC]/10 hover:border-[#3898EC]/30 hover:text-white transition-all duration-300 cursor-default"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={ctaRef} className="py-16 sm:py-24 relative">
                {/* Background Effect */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3898EC]/10 rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
                    <div className="cta-animate bg-gradient-to-br from-[#0a0f1a] to-[#050B14] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16">
                        <CheckCircle2 className="cta-animate w-12 h-12 text-[#3898EC] mx-auto mb-6" />
                        <h2 className="cta-animate text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="cta-animate text-base sm:text-lg text-gray-400 leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto font-light">
                            Let's discuss how our {service.title.toLowerCase()} expertise can
                            accelerate your business goals and drive measurable results.
                        </p>
                        <div className="cta-animate flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/#contact"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3898EC] to-[#00ffff] text-white px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 group"
                            >
                                Start a Conversation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Services */}
            <section className="py-16 sm:py-24 bg-[#0a0f1a]/30">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center tracking-tight">
                        Explore Other Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {servicesData
                            .filter((s) => s.slug !== slug)
                            .map((s) => {
                                const OtherIcon = s.icon;
                                return (
                                    <Link
                                        key={s.slug}
                                        to={`/services/${s.slug}`}
                                        className="group flex items-center gap-4 bg-[#050B14]/80 border border-white/10 rounded-xl p-4 sm:p-5 hover:border-[#3898EC]/30 transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#3898EC]/10 transition-colors">
                                            <OtherIcon className="w-5 h-5 text-gray-400 group-hover:text-[#3898EC] transition-colors" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-[#3898EC] transition-colors">
                                                {s.title}
                                            </h3>
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

export default ServicePage;
