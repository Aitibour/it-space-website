type Lang = 'fr' | 'en' | 'ar';
type T = Record<Lang, string>;

export interface Feature { title: T; desc: T }
export interface Benefit { title: T; desc: T }
export interface UseCase { title: T; desc: T }

export interface ServiceData {
  slug: string;
  color: string;
  image: string;
  heroImage: string;
  iconName: string;
  title: T;
  short: T;
  description: T;
  features: Feature[];
  benefits: Benefit[];
  useCases: UseCase[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'consulting',
    color: '#F59E0B',
    iconName: 'Lightbulb',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=90&auto=format&fit=crop',
    title: { en: 'IT Consulting', fr: 'Conseil IT', ar: 'الاستشارات التقنية' },
    short: { en: 'Strategic technology guidance', fr: 'Orientation technologique stratégique', ar: 'التوجيه التكنولوجي الاستراتيجي' },
    description: {
      en: 'We help organizations align technology with business objectives through strategic guidance, infrastructure audits, and comprehensive tech roadmaps that drive measurable results.',
      fr: "Nous aidons les organisations à aligner la technologie sur leurs objectifs métier grâce à des orientations stratégiques, des audits d'infrastructure et des feuilles de route complètes.",
      ar: 'نساعد المنظمات على مواءمة التكنولوجيا مع الأهداف التجارية من خلال التوجيه الاستراتيجي وعمليات التدقيق والخرائط التقنية الشاملة.',
    },
    features: [
      { title: { en: 'IT Infrastructure Audit', fr: "Audit d'Infrastructure IT", ar: 'تدقيق البنية التحتية' }, desc: { en: 'Thorough assessment of your current IT environment to identify gaps, risks, and optimization opportunities.', fr: 'Évaluation approfondie de votre environnement IT pour identifier les lacunes, risques et opportunités.', ar: 'تقييم شامل لبيئة تكنولوجيا المعلومات الحالية لتحديد الثغرات والمخاطر.' } },
      { title: { en: 'Technology Roadmapping', fr: 'Feuille de Route Technologique', ar: 'خارطة الطريق التكنولوجية' }, desc: { en: 'Strategic multi-year IT plans aligned with your business growth and digital transformation goals.', fr: 'Plans IT stratégiques pluriannuels alignés sur votre croissance et objectifs de transformation digitale.', ar: 'خطط تقنية استراتيجية متعددة السنوات تتوافق مع أهداف نمو أعمالك.' } },
      { title: { en: 'Vendor Management', fr: 'Gestion des Fournisseurs', ar: 'إدارة الموردين' }, desc: { en: 'Expert selection, negotiation, and governance of technology vendors and service providers.', fr: 'Sélection experte, négociation et gouvernance des fournisseurs technologiques.', ar: 'الاختيار الخبير والتفاوض وحوكمة موردي التكنولوجيا.' } },
      { title: { en: 'Change Management', fr: 'Conduite du Changement', ar: 'إدارة التغيير' }, desc: { en: 'Structured approach to transition your teams through technology changes with minimal disruption.', fr: 'Approche structurée pour accompagner vos équipes à travers les changements technologiques.', ar: 'نهج منظم لتحويل فرقك عبر التغييرات التكنولوجية بأدنى قدر من التعطيل.' } },
    ],
    benefits: [
      { title: { en: 'Reduced IT Costs', fr: 'Réduction des Coûts IT', ar: 'تخفيض تكاليف تكنولوجيا المعلومات' }, desc: { en: 'Identify inefficiencies and optimize your IT spend for maximum ROI.', fr: 'Identifiez les inefficacités et optimisez vos dépenses IT.', ar: 'تحديد أوجه القصور وتحسين إنفاق تكنولوجيا المعلومات.' } },
      { title: { en: 'Strategic Alignment', fr: 'Alignement Stratégique', ar: 'التوافق الاستراتيجي' }, desc: { en: 'Ensure every technology decision supports your core business objectives.', fr: "Assurez-vous que chaque décision technologique soutient vos objectifs métier.", ar: 'ضمان أن كل قرار تقني يدعم أهدافك التجارية الأساسية.' } },
      { title: { en: 'Risk Mitigation', fr: 'Atténuation des Risques', ar: 'تخفيف المخاطر' }, desc: { en: 'Proactively identify and address technology risks before they impact operations.', fr: 'Identifiez et gérez proactivement les risques technologiques.', ar: 'تحديد ومعالجة مخاطر التكنولوجيا بشكل استباقي.' } },
    ],
    useCases: [
      { title: { en: 'Digital Transformation Planning', fr: 'Planification de Transformation Digitale', ar: 'تخطيط التحول الرقمي' }, desc: { en: 'End-to-end roadmap from legacy systems to modern cloud architecture.', fr: 'Feuille de route complète des systèmes legacy vers une architecture cloud moderne.', ar: 'خارطة طريق شاملة من الأنظمة القديمة إلى البنية السحابية الحديثة.' } },
      { title: { en: 'IT Cost Optimization', fr: 'Optimisation des Coûts IT', ar: 'تحسين تكاليف تكنولوجيا المعلومات' }, desc: { en: 'Reduce total cost of ownership by up to 35% through smart technology choices.', fr: "Réduisez le coût total de possession jusqu'à 35% grâce à des choix technologiques intelligents.", ar: 'تخفيض إجمالي تكلفة الملكية بنسبة تصل إلى 35%.' } },
      { title: { en: 'M&A Technology Integration', fr: 'Intégration Technologique M&A', ar: 'دمج التكنولوجيا في عمليات الاندماج' }, desc: { en: 'Seamlessly integrate IT systems during mergers and acquisitions.', fr: 'Intégrez les systèmes IT de façon transparente lors de fusions-acquisitions.', ar: 'دمج أنظمة تكنولوجيا المعلومات بسلاسة أثناء عمليات الاندماج.' } },
    ],
  },
  {
    slug: 'security',
    color: '#EF4444',
    iconName: 'Shield',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374173516?w=800&q=80&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374173516?w=1920&q=90&auto=format&fit=crop',
    title: { en: 'Cybersecurity', fr: 'Cybersécurité', ar: 'الأمن السيبراني' },
    short: { en: 'Protect your digital assets and data', fr: 'Protégez vos actifs numériques', ar: 'حماية أصولك الرقمية' },
    description: { en: 'Comprehensive threat assessment, real-time SOC monitoring, ISO 27001 compliance, and incident response services to keep your business safe from modern cyber threats.', fr: "Évaluation des menaces, surveillance SOC en temps réel, conformité ISO 27001 et services de réponse aux incidents pour protéger votre entreprise.", ar: 'تقييم شامل للتهديدات ومراقبة SOC في الوقت الفعلي وامتثال ISO 27001 وخدمات الاستجابة للحوادث.' },
    features: [
      { title: { en: 'Threat Assessment & Penetration Testing', fr: "Évaluation des Menaces & Tests d'Intrusion", ar: 'تقييم التهديدات واختبار الاختراق' }, desc: { en: 'Identify vulnerabilities before attackers do with comprehensive security audits and ethical hacking.', fr: "Identifiez les vulnérabilités avant les attaquants avec des audits de sécurité et du hacking éthique.", ar: 'تحديد نقاط الضعف قبل المهاجمين من خلال عمليات تدقيق الأمان الشاملة.' } },
      { title: { en: 'SOC Monitoring 24/7', fr: 'Surveillance SOC 24/7', ar: 'مراقبة SOC على مدار الساعة' }, desc: { en: 'Round-the-clock security operations center monitoring with real-time threat detection and response.', fr: "Centre d'opérations de sécurité 24/7 avec détection et réponse aux menaces en temps réel.", ar: 'مراقبة مركز عمليات الأمان على مدار الساعة مع الكشف الفوري عن التهديدات.' } },
      { title: { en: 'ISO 27001 Compliance', fr: 'Conformité ISO 27001', ar: 'الامتثال لمعيار ISO 27001' }, desc: { en: 'Implement and maintain information security management systems certified to international standards.', fr: "Implémentez et maintenez des systèmes de gestion de la sécurité certifiés aux normes internationales.", ar: 'تنفيذ وصيانة أنظمة إدارة أمن المعلومات المعتمدة وفق المعايير الدولية.' } },
      { title: { en: 'Incident Response & Recovery', fr: 'Réponse aux Incidents & Récupération', ar: 'الاستجابة للحوادث والتعافي' }, desc: { en: 'Rapid containment, investigation, and recovery from cybersecurity incidents to minimize business impact.', fr: "Containment rapide, investigation et récupération des incidents cybersécurité.", ar: 'احتواء سريع وتحقيق وتعافٍ من الحوادث الأمنية لتقليل التأثير على الأعمال.' } },
    ],
    benefits: [
      { title: { en: 'Data Protection', fr: 'Protection des Données', ar: 'حماية البيانات' }, desc: { en: 'Keep sensitive business data and customer information safe from breaches.', fr: "Protégez les données sensibles et les informations clients contre les violations.", ar: 'حفظ بيانات الأعمال الحساسة ومعلومات العملاء من الاختراقات.' } },
      { title: { en: 'Regulatory Compliance', fr: 'Conformité Réglementaire', ar: 'الامتثال التنظيمي' }, desc: { en: 'Meet GDPR, ISO 27001, and local compliance requirements with confidence.', fr: "Répondez aux exigences RGPD, ISO 27001 et réglementaires locales.", ar: 'الوفاء بمتطلبات GDPR وISO 27001 والمتطلبات التنظيمية المحلية.' } },
      { title: { en: 'Business Continuity', fr: 'Continuité des Activités', ar: 'استمرارية الأعمال' }, desc: { en: 'Minimize downtime and financial losses from cyberattacks with rapid response plans.', fr: "Minimisez les temps d'arrêt et pertes financières avec des plans de réponse rapide.", ar: 'تقليل وقت التوقف والخسائر المالية من خلال خطوط الاستجابة السريعة.' } },
    ],
    useCases: [
      { title: { en: 'Financial Institution Security', fr: 'Sécurité des Institutions Financières', ar: 'أمن المؤسسات المالية' }, desc: { en: 'Protect sensitive financial data and ensure regulatory compliance for banks and insurers.', fr: "Protégez les données financières sensibles et assurez la conformité réglementaire.", ar: 'حماية البيانات المالية الحساسة وضمان الامتثال التنظيمي.' } },
      { title: { en: 'Healthcare Data Security', fr: 'Sécurité des Données de Santé', ar: 'أمن بيانات الرعاية الصحية' }, desc: { en: 'Safeguard patient data and medical systems against ransomware and data breaches.', fr: "Protégez les données patients et systèmes médicaux contre les ransomwares.", ar: 'حماية بيانات المرضى والأنظمة الطبية من برامج الفدية.' } },
      { title: { en: 'E-commerce Platform Protection', fr: 'Protection des Plateformes E-commerce', ar: 'حماية منصات التجارة الإلكترونية' }, desc: { en: 'Secure customer payment data and prevent fraud on digital commerce platforms.', fr: "Sécurisez les données de paiement clients et prévenez la fraude.", ar: 'تأمين بيانات دفع العملاء ومنع الاحتيال على منصات التجارة الرقمية.' } },
    ],
  },
  {
    slug: 'cloud',
    color: '#00B4FF',
    iconName: 'Cloud',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=90&auto=format&fit=crop',
    title: { en: 'Cloud Solutions', fr: 'Solutions Cloud', ar: 'حلول السحابة' },
    short: { en: 'Scalable cloud infrastructure for growth', fr: 'Infrastructure cloud évolutive', ar: 'بنية سحابية قابلة للتوسع' },
    description: { en: 'Cloud migration, infrastructure optimization, multi-cloud strategy, and managed cloud services to help your business scale efficiently and securely.', fr: "Migration cloud, optimisation d'infrastructure, stratégie multi-cloud et services cloud gérés pour aider votre entreprise à évoluer efficacement.", ar: 'الترحيل السحابي وتحسين البنية التحتية واستراتيجية متعددة السحب والخدمات السحابية المدارة.' },
    features: [
      { title: { en: 'Cloud Migration', fr: 'Migration Cloud', ar: 'الترحيل السحابي' }, desc: { en: 'Seamless migration of your on-premise infrastructure to AWS, Azure, or Google Cloud with zero downtime.', fr: 'Migration transparente de votre infrastructure vers AWS, Azure ou Google Cloud sans interruption.', ar: 'ترحيل سلس للبنية التحتية المحلية إلى AWS أو Azure أو Google Cloud دون توقف.' } },
      { title: { en: 'Multi-Cloud Strategy', fr: 'Stratégie Multi-Cloud', ar: 'استراتيجية متعددة السحب' }, desc: { en: 'Optimize workloads across multiple cloud providers for best performance, cost, and resilience.', fr: 'Optimisez les charges de travail sur plusieurs fournisseurs cloud pour meilleures performances et coûts.', ar: 'تحسين أحمال العمل عبر موفرين سحابيين متعددين لأفضل أداء وتكلفة.' } },
      { title: { en: 'Managed Cloud Services', fr: 'Services Cloud Gérés', ar: 'خدمات السحابة المدارة' }, desc: { en: '24/7 management, monitoring, and optimization of your cloud environment by certified experts.', fr: 'Gestion, surveillance et optimisation 24/7 de votre environnement cloud par des experts certifiés.', ar: 'إدارة ومراقبة وتحسين بيئتك السحابية على مدار الساعة من قبل خبراء معتمدين.' } },
      { title: { en: 'Disaster Recovery & Backup', fr: 'Reprise après Sinistre & Sauvegarde', ar: 'التعافي من الكوارث والنسخ الاحتياطي' }, desc: { en: 'Cloud-based disaster recovery solutions with RPO and RTO guarantees to protect business continuity.', fr: 'Solutions de reprise après sinistre basées sur le cloud avec garanties RPO et RTO.', ar: 'حلول التعافي من الكوارث المستندة إلى السحابة مع ضمانات RPO وRTO.' } },
    ],
    benefits: [
      { title: { en: 'Scalability on Demand', fr: 'Évolutivité à la Demande', ar: 'قابلية التوسع عند الطلب' }, desc: { en: 'Scale resources up or down instantly based on business demand.', fr: 'Faites évoluer les ressources instantanément selon les besoins.', ar: 'توسيع أو تقليص الموارد فوراً بناءً على متطلبات الأعمال.' } },
      { title: { en: 'Cost Efficiency', fr: 'Efficacité des Coûts', ar: 'كفاءة التكاليف' }, desc: { en: 'Eliminate capital expenditure and pay only for what you use.', fr: 'Éliminez les dépenses en capital et ne payez que ce que vous utilisez.', ar: 'إلغاء النفقات الرأسمالية والدفع فقط مقابل ما تستخدمه.' } },
      { title: { en: 'High Availability', fr: 'Haute Disponibilité', ar: 'التوفر العالي' }, desc: { en: '99.99% uptime SLA with multi-region failover and automated recovery.', fr: 'SLA de disponibilité 99,99% avec basculement multi-région et récupération automatisée.', ar: 'اتفاقية مستوى الخدمة 99.99% مع تشغيل بديل متعدد المناطق.' } },
    ],
    useCases: [
      { title: { en: 'Legacy to Cloud Modernization', fr: 'Modernisation Legacy vers Cloud', ar: 'تحديث النظام القديم إلى السحابة' }, desc: { en: 'Transform outdated on-premise systems into agile cloud-native applications.', fr: "Transformez les systèmes on-premise obsolètes en applications cloud-native agiles.", ar: 'تحويل الأنظمة القديمة إلى تطبيقات سحابية أصلية مرنة.' } },
      { title: { en: 'DevOps & CI/CD Pipeline', fr: 'DevOps & Pipeline CI/CD', ar: 'DevOps وخط CI/CD' }, desc: { en: 'Accelerate software delivery with automated CI/CD pipelines on cloud infrastructure.', fr: 'Accélérez la livraison logicielle avec des pipelines CI/CD automatisés.', ar: 'تسريع تسليم البرامج باستخدام خطوط CI/CD الآلية على البنية السحابية.' } },
      { title: { en: 'Remote Work Infrastructure', fr: 'Infrastructure de Travail à Distance', ar: 'بنية تحتية للعمل عن بعد' }, desc: { en: 'Secure, scalable cloud infrastructure enabling distributed teams to collaborate effectively.', fr: 'Infrastructure cloud sécurisée et évolutive pour les équipes distribuées.', ar: 'بنية تحتية سحابية آمنة وقابلة للتوسع لتمكين الفرق الموزعة.' } },
    ],
  },
  {
    slug: 'digital',
    color: '#8B5CF6',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=90&auto=format&fit=crop',
    title: { en: 'Digital Transformation', fr: 'Transformation Digitale', ar: 'التحول الرقمي' },
    short: { en: 'Accelerate your digital journey', fr: 'Accélérez votre parcours numérique', ar: 'تسريع رحلتك الرقمية' },
    description: { en: 'End-to-end digital transformation — from process automation to ERP implementation — helping businesses modernize operations and gain competitive advantage.', fr: "Transformation digitale de bout en bout — de l'automatisation des processus à l'implémentation ERP — aidant les entreprises à moderniser leurs opérations.", ar: 'تحول رقمي شامل من أتمتة العمليات إلى تطبيق ERP، مما يساعد الشركات على تحديث عملياتها.' },
    features: [
      { title: { en: 'Process Automation (BPA/RPA)', fr: 'Automatisation des Processus (BPA/RPA)', ar: 'أتمتة العمليات (BPA/RPA)' }, desc: { en: 'Automate repetitive tasks and workflows to boost productivity and reduce human error.', fr: 'Automatisez les tâches répétitives et les flux de travail pour booster la productivité.', ar: 'أتمتة المهام المتكررة وسير العمل لتعزيز الإنتاجية وتقليل الأخطاء البشرية.' } },
      { title: { en: 'ERP & CRM Implementation', fr: 'Implémentation ERP & CRM', ar: 'تطبيق ERP وCRM' }, desc: { en: 'Deploy and customize leading ERP/CRM systems (SAP, Odoo, Salesforce) to streamline operations.', fr: 'Déployez et personnalisez les principaux systèmes ERP/CRM (SAP, Odoo, Salesforce).', ar: 'نشر وتخصيص أنظمة ERP/CRM الرائدة (SAP، Odoo، Salesforce) لتحسين العمليات.' } },
      { title: { en: 'Business Intelligence & Analytics', fr: 'Business Intelligence & Analytique', ar: 'ذكاء الأعمال والتحليلات' }, desc: { en: 'Transform raw data into actionable insights with dashboards, reporting, and predictive analytics.', fr: 'Transformez les données brutes en insights actionnables avec tableaux de bord et analyses prédictives.', ar: 'تحويل البيانات الخام إلى رؤى قابلة للتنفيذ من خلال لوحات المعلومات والتحليلات التنبؤية.' } },
      { title: { en: 'Customer Experience Design', fr: "Conception de l'Expérience Client", ar: 'تصميم تجربة العملاء' }, desc: { en: 'Redesign customer journeys and digital touchpoints to increase engagement and conversion rates.', fr: "Repensez les parcours clients et points de contact numériques pour augmenter l'engagement.", ar: 'إعادة تصميم رحلات العملاء ونقاط الاتصال الرقمية لزيادة المشاركة ومعدلات التحويل.' } },
    ],
    benefits: [
      { title: { en: 'Operational Efficiency', fr: 'Efficacité Opérationnelle', ar: 'الكفاءة التشغيلية' }, desc: { en: 'Streamline processes and reduce manual work by up to 70%.', fr: "Rationalisez les processus et réduisez le travail manuel jusqu'à 70%.", ar: 'تبسيط العمليات وتقليل العمل اليدوي بنسبة تصل إلى 70%.' } },
      { title: { en: 'Competitive Advantage', fr: 'Avantage Concurrentiel', ar: 'الميزة التنافسية' }, desc: { en: 'Stay ahead of competition with modern digital capabilities and faster time-to-market.', fr: 'Restez en avance sur la concurrence avec des capacités numériques modernes.', ar: 'البقاء في المقدمة مع الإمكانات الرقمية الحديثة وتسريع وقت الطرح في السوق.' } },
      { title: { en: 'Data-Driven Decisions', fr: 'Décisions Basées sur les Données', ar: 'قرارات مبنية على البيانات' }, desc: { en: 'Replace gut-feel decisions with real-time data and analytics across all departments.', fr: 'Remplacez les décisions instinctives par des données en temps réel dans tous les départements.', ar: 'استبدال القرارات الحدسية بالبيانات الفورية والتحليلات عبر جميع الأقسام.' } },
    ],
    useCases: [
      { title: { en: 'Manufacturing Digitalization', fr: 'Digitalisation Industrielle', ar: 'رقمنة التصنيع' }, desc: { en: 'Connect factory floor to boardroom with IoT, MES, and real-time production dashboards.', fr: "Connectez l'atelier à la direction avec l'IoT, MES et tableaux de bord production.", ar: 'ربط أرضية المصنع بالإدارة العليا من خلال إنترنت الأشياء وأنظمة تنفيذ التصنيع.' } },
      { title: { en: 'Retail & E-commerce Transformation', fr: 'Transformation Retail & E-commerce', ar: 'تحول قطاع التجزئة والتجارة الإلكترونية' }, desc: { en: 'Build omnichannel commerce experiences that connect physical and digital retail.', fr: 'Construisez des expériences commerce omnicanal connectant retail physique et numérique.', ar: 'بناء تجارب تجارية متعددة القنوات تربط بين التجزئة المادية والرقمية.' } },
      { title: { en: 'Government Digital Services', fr: 'Services Numériques Gouvernementaux', ar: 'الخدمات الحكومية الرقمية' }, desc: { en: 'Modernize public services with citizen-centric digital platforms and paperless processes.', fr: 'Modernisez les services publics avec des plateformes numériques centrées sur le citoyen.', ar: 'تحديث الخدمات العامة بمنصات رقمية تتمحور حول المواطن.' } },
    ],
  },
  {
    slug: 'software',
    color: '#10B981',
    iconName: 'Code2',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=90&auto=format&fit=crop',
    title: { en: 'Software Development', fr: 'Développement Logiciel', ar: 'تطوير البرمجيات' },
    short: { en: 'Custom software built for your needs', fr: 'Logiciels personnalisés adaptés à vos besoins', ar: 'برمجيات مخصصة لاحتياجاتك' },
    description: { en: 'Custom web and mobile applications, API integrations, and enterprise software solutions designed and built by our certified development team.', fr: "Applications web et mobiles personnalisées, intégrations API et solutions logicielles d'entreprise conçues et développées par notre équipe certifiée.", ar: 'تطبيقات ويب وجوال مخصصة وتكاملات API وحلول برمجية للمؤسسات مصممة ومبنية من قبل فريقنا المعتمد.' },
    features: [
      { title: { en: 'Web Application Development', fr: "Développement d'Applications Web", ar: 'تطوير تطبيقات الويب' }, desc: { en: 'Full-stack web applications built with modern frameworks (React, Next.js, Node.js, Django).', fr: 'Applications web full-stack construites avec des frameworks modernes (React, Next.js, Node.js).', ar: 'تطبيقات ويب متكاملة مبنية بأطر عمل حديثة (React وNext.js وNode.js).' } },
      { title: { en: 'Mobile App Development', fr: "Développement d'Applications Mobiles", ar: 'تطوير التطبيقات الجوالة' }, desc: { en: 'iOS and Android native and cross-platform apps (React Native, Flutter) for seamless user experiences.', fr: 'Applications iOS et Android natives et cross-platform (React Native, Flutter).', ar: 'تطبيقات iOS وAndroid أصلية ومتعددة المنصات (React Native وFlutter).' } },
      { title: { en: 'API Design & Integration', fr: "Conception & Intégration d'API", ar: 'تصميم وتكامل API' }, desc: { en: 'RESTful and GraphQL API design, third-party integrations, and microservices architecture.', fr: "Conception d'API RESTful et GraphQL, intégrations tierces et architecture microservices.", ar: 'تصميم API RESTful وGraphQL وتكاملات طرف ثالث وبنية الخدمات المصغرة.' } },
      { title: { en: 'Legacy System Modernization', fr: 'Modernisation des Systèmes Legacy', ar: 'تحديث الأنظمة القديمة' }, desc: { en: 'Refactor, migrate, and modernize outdated software systems without disrupting operations.', fr: 'Refactorisez, migrez et modernisez les logiciels obsolètes sans perturber les opérations.', ar: 'إعادة هيكلة وترحيل وتحديث البرامج القديمة دون تعطيل العمليات.' } },
    ],
    benefits: [
      { title: { en: 'Exactly What You Need', fr: 'Exactement Ce Dont Vous Avez Besoin', ar: 'بالضبط ما تحتاجه' }, desc: { en: 'Custom-built software matches your exact business workflows — no compromises.', fr: 'Logiciels sur mesure correspondant exactement à vos processus métier.', ar: 'برمجيات مخصصة تتطابق مع سير عمل أعمالك بدقة.' } },
      { title: { en: 'Faster Time-to-Market', fr: 'Délai de Mise sur le Marché Plus Court', ar: 'وقت أقصر للوصول إلى السوق' }, desc: { en: 'Agile development methodology delivers working software in weeks, not months.', fr: 'La méthodologie agile livre des logiciels fonctionnels en semaines, pas en mois.', ar: 'منهجية التطوير الرشيق تسلم برامج عاملة في أسابيع وليس شهور.' } },
      { title: { en: 'Scalable Architecture', fr: 'Architecture Évolutive', ar: 'بنية قابلة للتوسع' }, desc: { en: 'Built to grow from 100 to 1 million users without costly rewrites.', fr: "Conçu pour évoluer de 100 à 1 million d'utilisateurs sans réécritures coûteuses.", ar: 'مبني للنمو من 100 إلى مليون مستخدم دون إعادة كتابة مكلفة.' } },
    ],
    useCases: [
      { title: { en: 'SaaS Product Development', fr: 'Développement de Produit SaaS', ar: 'تطوير منتج SaaS' }, desc: { en: 'Build and launch scalable software-as-a-service products from idea to production.', fr: "Construisez et lancez des produits SaaS évolutifs de l'idée à la production.", ar: 'بناء وإطلاق منتجات البرمجيات كخدمة القابلة للتوسع من الفكرة إلى الإنتاج.' } },
      { title: { en: 'Internal Tools & Dashboards', fr: 'Outils Internes & Tableaux de Bord', ar: 'الأدوات الداخلية ولوحات المعلومات' }, desc: { en: 'Custom admin panels, HR systems, and operational dashboards that replace spreadsheets.', fr: "Panneaux d'administration, systèmes RH et tableaux de bord opérationnels personnalisés.", ar: 'لوحات إدارة مخصصة وأنظمة موارد بشرية ولوحات معلومات تشغيلية.' } },
      { title: { en: 'E-commerce Platforms', fr: 'Plateformes E-commerce', ar: 'منصات التجارة الإلكترونية' }, desc: { en: 'Feature-rich online stores with payment gateways, inventory management, and analytics.', fr: 'Boutiques en ligne complètes avec passerelles de paiement et gestion des stocks.', ar: 'متاجر إلكترونية متكاملة مع بوابات الدفع وإدارة المخزون والتحليلات.' } },
    ],
  },
  {
    slug: 'ai-data',
    color: '#FF6B35',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=90&auto=format&fit=crop',
    title: { en: 'AI & Data Solutions', fr: 'Solutions IA & Données', ar: 'حلول الذكاء الاصطناعي والبيانات' },
    short: { en: 'Intelligent automation powered by AI', fr: "Automatisation intelligente propulsée par l'IA", ar: 'أتمتة ذكية مدعومة بالذكاء الاصطناعي' },
    description: { en: 'Harness the power of artificial intelligence and big data to automate processes, uncover insights, and make smarter decisions that give your business a competitive edge.', fr: "Exploitez la puissance de l'intelligence artificielle et du big data pour automatiser les processus, découvrir des insights et prendre des décisions plus intelligentes.", ar: 'استغلال قوة الذكاء الاصطناعي والبيانات الضخمة لأتمتة العمليات واكتشاف الرؤى واتخاذ قرارات أذكى.' },
    features: [
      { title: { en: 'AI Strategy & Roadmap', fr: 'Stratégie IA & Feuille de Route', ar: 'استراتيجية الذكاء الاصطناعي وخارطة الطريق' }, desc: { en: 'Build a practical AI adoption strategy tailored to your industry, data maturity, and business goals.', fr: "Construisez une stratégie pratique d'adoption de l'IA adaptée à votre secteur et objectifs.", ar: 'بناء استراتيجية عملية لتبني الذكاء الاصطناعي مصممة لصناعتك وأهدافك.' } },
      { title: { en: 'Machine Learning & Predictive Analytics', fr: 'Machine Learning & Analytique Prédictive', ar: 'التعلم الآلي والتحليلات التنبؤية' }, desc: { en: 'Custom ML models for demand forecasting, churn prediction, fraud detection, and quality control.', fr: 'Modèles ML personnalisés pour prévision de la demande, prédiction du churn et détection de fraude.', ar: 'نماذج ML مخصصة للتنبؤ بالطلب وتوقع المغادرة والكشف عن الاحتيال.' } },
      { title: { en: 'Data Engineering & Pipelines', fr: 'Ingénierie des Données & Pipelines', ar: 'هندسة البيانات وخطوط الأنابيب' }, desc: { en: 'Build robust data pipelines, lakehouses, and warehouses to make your data analysis-ready at scale.', fr: 'Construisez des pipelines de données robustes et des entrepôts pour rendre vos données prêtes à l\'analyse.', ar: 'بناء خطوط بيانات قوية ومستودعات لجعل بياناتك جاهزة للتحليل على نطاق واسع.' } },
      { title: { en: 'Generative AI Integration', fr: 'Intégration IA Générative', ar: 'تكامل الذكاء الاصطناعي التوليدي' }, desc: { en: 'Integrate LLMs (GPT-4, Claude, Mistral) into your products and workflows for intelligent automation.', fr: 'Intégrez les LLM (GPT-4, Claude, Mistral) dans vos produits et workflows pour l\'automatisation intelligente.', ar: 'دمج نماذج اللغة الكبيرة (GPT-4 وClaude وMistral) في منتجاتك وسير العمل.' } },
    ],
    benefits: [
      { title: { en: 'Intelligent Automation', fr: 'Automatisation Intelligente', ar: 'الأتمتة الذكية' }, desc: { en: 'Automate complex cognitive tasks that traditionally required human expertise.', fr: 'Automatisez les tâches cognitives complexes nécessitant traditionnellement une expertise humaine.', ar: 'أتمتة المهام المعرفية المعقدة التي تتطلب تقليدياً خبرة بشرية.' } },
      { title: { en: 'Data-Driven Insights', fr: 'Insights Basés sur les Données', ar: 'رؤى مبنية على البيانات' }, desc: { en: 'Turn petabytes of raw data into actionable business intelligence and competitive insights.', fr: 'Transformez des pétaoctets de données brutes en intelligence commerciale exploitable.', ar: 'تحويل البيانات الخام إلى ذكاء أعمال قابل للتنفيذ ورؤى تنافسية.' } },
      { title: { en: 'Competitive Edge', fr: 'Avantage Concurrentiel', ar: 'الميزة التنافسية' }, desc: { en: 'Deploy AI capabilities months before competitors using our pre-built accelerators.', fr: 'Déployez les capacités IA des mois avant vos concurrents grâce à nos accélérateurs préconstruits.', ar: 'نشر قدرات الذكاء الاصطناعي قبل المنافسين بأشهر باستخدام مسرعاتنا المبنية مسبقاً.' } },
    ],
    useCases: [
      { title: { en: 'Intelligent Customer Support', fr: 'Support Client Intelligent', ar: 'دعم العملاء الذكي' }, desc: { en: 'AI chatbots and virtual agents that resolve 80% of customer queries without human intervention.', fr: 'Chatbots IA et agents virtuels qui résolvent 80% des requêtes clients sans intervention humaine.', ar: 'روبوتات الدردشة والوكلاء الافتراضيون الذين يحلون 80% من استفسارات العملاء.' } },
      { title: { en: 'Predictive Maintenance', fr: 'Maintenance Prédictive', ar: 'الصيانة التنبؤية' }, desc: { en: 'Predict equipment failures before they happen, reducing downtime and maintenance costs.', fr: "Prédisez les pannes d'équipement avant qu'elles surviennent, réduisant les temps d'arrêt.", ar: 'التنبؤ بأعطال المعدات قبل حدوثها، مما يقلل وقت التوقف وتكاليف الصيانة.' } },
      { title: { en: 'Document Intelligence', fr: 'Intelligence Documentaire', ar: 'ذكاء الوثائق' }, desc: { en: 'Automate extraction, classification, and processing of documents at enterprise scale.', fr: "Automatisez l'extraction, la classification et le traitement des documents à l'échelle enterprise.", ar: 'أتمتة استخراج وتصنيف ومعالجة الوثائق على نطاق المؤسسة.' } },
    ],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
