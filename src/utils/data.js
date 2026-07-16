import {
  Cloud,
  BrainCircuit,
  ShieldCheck,
  Code2,
  Workflow,
  BarChart3,
  Users,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Layers,
  HeadphonesIcon,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Factory,
  GraduationCap,
  Building2,
  Search,
  ClipboardList,
  PenTool,
  Hammer,
  Bug,
  UploadCloud,
  LifeBuoy,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Technologies", href: "/#technologies" },
  { label: "Contact", href: "/#contact" },
];

export const offices = [
  {
    country: "India",
    address: "Plot-20, Ganesh Nagar Colony, Near Panama Bus Stop, Vanasthalipuram, Hyderabad 500070",
    phone: "+91 6302640536",
    phoneHref: "+916302640536",
    hours: "6:00 PM – 4:00 AM IST",
  },
  {
    country: "USA",
    address: "5460 Babcock Rd, Suite 120 #187, San Antonio, TX 78240",
    phone: "+1 908 316 3885",
    phoneHref: "+19083163885",
    hours: "6:30 AM – 4:30 PM Central Time",
  },
];

export const services = [
  {
    icon: Cloud,
    title: "Cloud Consulting",
    description:
      "Strategic migration and management across AWS, Azure, and Google Cloud to modernize your infrastructure.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Custom machine learning models and generative AI integrations that turn data into competitive advantage.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "End-to-end security assessments, threat monitoring, and compliance frameworks to protect your business.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Full-stack engineering for web, mobile, and enterprise platforms built on modern, scalable architecture.",
  },
  {
    icon: Workflow,
    title: "DevOps",
    description:
      "CI/CD pipelines, infrastructure as code, and container orchestration for faster, reliable releases.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insight with dashboards, pipelines, and predictive analytics.",
  },
];

export const whyChooseUs = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Seasoned engineers and consultants with deep industry expertise.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "Every engagement is shaped around your goals, not ours.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We adopt emerging technology responsibly to keep you ahead.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile delivery cycles that get value into your hands sooner.",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description: "Architecture designed to grow with your business, not against it.",
  },
  {
    icon: HeadphonesIcon,
    title: "24×7 Support",
    description: "Round-the-clock monitoring and support whenever you need us.",
  },
];

export const industries = [
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Landmark, title: "Banking" },
  { icon: ShoppingCart, title: "Retail" },
  { icon: Factory, title: "Manufacturing" },
  { icon: GraduationCap, title: "Education" },
  { icon: Building2, title: "Government" },
];

export const technologies = [
  "AWS",
  "Azure",
  "Google Cloud",
  "React",
  "Angular",
  "Node.js",
  "Java",
  "Python",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
];

export const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We dive into your business goals, challenges, and technical landscape.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description: "A tailored roadmap with milestones, scope, and resource allocation.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "User-centered architecture and interface design validated with stakeholders.",
  },
  {
    icon: Hammer,
    title: "Development",
    description: "Agile sprints deliver working software with continuous feedback loops.",
  },
  {
    icon: Bug,
    title: "Testing",
    description: "Rigorous QA, security, and performance testing before release.",
  },
  {
    icon: UploadCloud,
    title: "Deployment",
    description: "Seamless, zero-downtime rollout into your production environment.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description: "Ongoing monitoring, optimization, and 24×7 support post-launch.",
  },
];

export const stats = [
  { label: "Projects Delivered", value: 240, suffix: "+" },
  { label: "Happy Clients", value: 180, suffix: "+" },
  { label: "Years Experience", value: 12, suffix: "+" },
  { label: "Team Members", value: 85, suffix: "+" },
];

export const faqs = [
  {
    question: "What industries does CAELUNA work with?",
    answer:
      "We partner with organizations across healthcare, banking, retail, manufacturing, education, and government, tailoring our approach to each industry's regulatory and operational needs.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Timelines vary by scope — a focused cloud migration may take 6-8 weeks, while a full digital transformation program can span 6-12 months. We define milestones during Discovery so you always know what to expect.",
  },
  {
    question: "Do you offer ongoing support after project delivery?",
    answer:
      "Yes. Every engagement includes a support plan, and we offer 24x7 monitoring and maintenance retainers for clients who want continuous coverage.",
  },
  {
    question: "Can you work with our existing in-house engineering team?",
    answer:
      "Absolutely. We regularly operate as an embedded extension of internal teams, aligning on tooling, workflows, and communication cadence from day one.",
  },
  {
    question: "What is your approach to data security and compliance?",
    answer:
      "Security is built into every phase of our process, not bolted on at the end. We align with frameworks like SOC 2, HIPAA, and GDPR depending on your industry requirements.",
  },
  {
    question: "How do you price your services?",
    answer:
      "We offer fixed-scope, time-and-materials, and dedicated team pricing models. During our discovery call we recommend the structure that best fits your project and budget.",
  },
  {
    question: "Do you support legacy system modernization?",
    answer:
      "Yes, modernizing legacy platforms is one of our core specialties, from re-platforming monoliths to phased migrations that minimize business disruption.",
  },
];

export const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
];
