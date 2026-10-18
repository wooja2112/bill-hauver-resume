export const profile = {
  name: "Bill Hauver",
  title: "Senior IT Leader",
  tagline: "DevOps, Cloud Infrastructure, Artificial Intelligence & Software Architecture",
  location: "Lutz, FL 33558",
  phone: "813-455-1589",
  phoneHref: "tel:+18134551589",
  email: "whauver@gmail.com",
  emailHref: "mailto:whauver@gmail.com",
  linkedinHref: "https://www.linkedin.com/in/bhauver/",
  veteran: "Proud U.S. veteran",
  summary:
    "Senior IT leader with 30+ years of experience spanning DevOps, cloud infrastructure, software architecture, and quality assurance, including 10+ years in senior management. Proven record of building and scaling technical teams of up to 45 people (onshore/offshore) and modernizing enterprise systems for Fortune 500 organizations. Skilled at turning around distressed projects, driving Agile/DevOps transformation, and reducing operating costs while improving system reliability and throughput. Actively applies AI-assisted development tools — Claude Code, Claude Desktop, and Microsoft Copilot — to accelerate business and technical documentation and to build AI agentic workflows that enforce coding best practices.",
};

export const metrics = [
  { value: "30+", label: "Years in IT leadership" },
  { value: "45", label: "Engineers led, peak team" },
  { value: "$1M+", label: "Annual cost savings delivered" },
  { value: "4M+", label: "Transactions/day supported" },
];

export const highlights = [
  "Led senior management roles (VP, Director, Sr. Manager) directing distributed technical teams of up to 45 people across the U.S. and offshore delivery centers.",
  "Deep expertise in Azure cloud infrastructure, Infrastructure-as-Code (ARM templates), CI/CD pipelines, and enterprise DevOps transformation for Fortune 500 clients.",
  "Delivered measurable business impact: $1M+ in annual cost savings, a 50% reduction in vendor contract cycle time, and infrastructure scaled to 4M+ transactions/day.",
  "Early adopter of AI-assisted development platforms (Claude Code, Claude Desktop, Microsoft Copilot), building agentic AI workflows that enforce coding best practices and accelerate documentation.",
  "Extensive leadership training in coaching, mentoring, team building, change management, and diversity and ethics.",
];

export const competencies = [
  "Cloud Infrastructure (Azure)",
  "DevOps & CI/CD Pipelines",
  "Application Architecture & Design",
  "Agile/Scrum Methodologies",
  "Resource & Vendor Management",
  "Financial & Budget Management",
  "Process Development & Maturity",
  "Automated & Manual QA Testing",
  "Security & Compliance",
  "Change & Release Management",
  "Disaster Recovery Planning",
  "Team Leadership & Mentoring",
  "AI-Assisted Development (Claude Code, Copilot)",
  "AI Agentic Workflow Design",
  "AI-Enhanced Technical & Business Writing",
];

export type ExperienceEntry = {
  company: string;
  location: string;
  role: string;
  dates: string;
  bullets?: string[];
  subRoles?: { role: string; period: string; body: string }[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Deloitte Services LP",
    location: "Tampa, FL",
    role: "Sr. Manager, DevOps Engineering (previously Manager, DevOps Engineering)",
    dates: "Sep 2017 – Present",
    bullets: [
      "Deliver DevOps consulting services to multiple Fortune 500 clients, serving as both team leader and hands-on contributor across engagements.",
      "Design and maintain Azure infrastructure through automated pipelines built on Azure Resource Manager (ARM) templates.",
      "Train business and technical teams on Agile/Scrum methodologies; provide technical leadership in scripting, automation, and ALM tooling including Azure DevOps.",
      "Diagnose and resolve issues across software builds, releases, and Azure IaaS/PaaS environments.",
      "Lead DevOps implementations spanning Windows, Linux, and Azure Kubernetes Service (AKS).",
    ],
  },
  {
    company: "AgileThought LLC",
    location: "Tampa, FL",
    role: "Sr. DevOps Consultant",
    dates: "Sep 2015 – Sep 2017",
    bullets: [
      "Established standardized DevOps policies and processes for enterprise consulting clients.",
      "Built and maintained Azure infrastructure using the Azure SDK and ARM templates.",
      "Managed Visual Studio Team Services (VSTS) build servers and agent pools.",
      "Automated code delivery pipelines using PowerShell scripting and reusable modules.",
      "Diagnosed and resolved issues across software releases and Azure IaaS/PaaS infrastructure.",
    ],
  },
  {
    company: "Jackson Hewitt Tax Service",
    location: "Sarasota, FL",
    role: "Vice President, Architecture & Engineering",
    dates: "Apr 2013 – Apr 2014",
    bullets: [
      "Led a 30-person development and architecture team, partnering with executive leadership to deliver key initiatives on schedule and within budget.",
      "Took ownership of a multimillion-dollar tax software modernization project that was 18 months behind schedule, offshore-managed by a third party, and affected by quality and communication issues.",
      "Turned the project around by adopting Agile/Scrum with Kanban, restructuring resourcing, and resolving architecture and design gaps — restoring a well-defined backlog and reliable status reporting.",
      "Cut vendor contract review cycle time by 50% by introducing SharePoint workflow automation and standardized document templates.",
      "Reduced problem-resolution time and improved cross-team communication by standardizing production support procedures.",
    ],
  },
  {
    company: "FIS",
    location: "St. Petersburg, FL",
    role: "Vice President → Director → Development Lead → Senior Developer",
    dates: "May 1997 – Apr 2013",
    bullets: [
      "Progressed over 16 years from Senior Developer to Vice President, culminating in leadership of a 45-person U.S./India technology organization.",
    ],
    subRoles: [
      {
        role: "VP, Credit/Fraud Midrange Development",
        period: "2011 – 2013",
        body: "Managed a 45-person US/India team; led migration of Fair Isaac Falcon Fraud Management from mainframe to client/server, supporting 750 transactions/second across all FIS North America card-authorization switches. Cut departmental expense by $1M+/year through offshore transition, and migrated all production applications to a new Active Directory domain with no business disruption.",
      },
      {
        role: "VP, Quality Assurance/Architecture",
        period: "2008 – 2011",
        body: "Led a 45-person cross-functional QA, architecture, and process team; unified three siloed business units into one standardized organization later used as a model by the FIS corporate PMO; reduced regression testing effort while raising quality via automated testing.",
      },
      {
        role: "Director, Credit Midrange Development",
        period: "2003 – 2008",
        body: "Led a 25-person team delivering a real-time mainframe interface with a data-driven mapping engine, eliminating hand-coding for API changes. Adoption helped secure agreements with three major financial institutions, doubling the platform's account base; system now processes 4M+ transactions/day at high reliability.",
      },
      {
        role: "Development Lead / Senior Developer",
        period: "1997 – 2003",
        body: "Led teams supporting accounting, call center, client relations, and card production; built reusable components and logging/alerting frameworks adopted org-wide, and a resource management/time-entry system used for executive reporting.",
      },
    ],
  },
];

export const recommendations = [
  {
    quote:
      "Bill came in to lead the engineering and architecture division of our company right in the middle of our biggest project in over 10 years. We were over budget, past due by nearly a year, and the product was a disaster. We still had a large offshore development vendor in the mix, but clearly needed new direction. Bill facilitated not only a major correction to our SDLC, but also turned the project around to the point of having a successful, in-house development team. He's excellent at what he does. He absolutely brought out the best in me and my team — forcing us to “prove it,” so to speak, when it came to our assumptions, timelines, and budget requests. I would gladly work for him again.",
    name: "Timothy Khouri",
    title: "Director of Technology, PPE Software",
    relationship: "Direct report",
  },
  {
    quote:
      "Bill is the most technical VP I have ever worked with. He started out as a software developer and worked his way up — to Architect, then Manager, then Director, then VP. It makes all the difference when an executive in IT has come up that way. I knew that whenever I ran into issues with my team or our projects, he could provide both strategic and business advice, as well as a development perspective. He had a very good understanding of the business and consistently helped make decisions that served both the business and IT.",
    name: "Steve Smith",
    title: "Software Engineering Manager, Centene Corporation",
    relationship: "Cross-team colleague",
  },
  {
    quote:
      "During Bill's career at FIS, I worked closely with Bill in different roles where he managed teams in software development, architecture, and quality assurance/control functions. Bill is a leader with a vision and skills to empower his teams to achieve his vision. Bill has technical expertise and business acumen to assess a challenging IT problem and its impacts, and either implement a solution or establish sufficient mitigating controls. Bill is a talented technologist as well as an effective manager, who achieves results.",
    name: "Julia “Jules” Marenkova",
    title: "Attorney",
    relationship: "Cross-team colleague",
  },
  {
    quote:
      "Bill is one of the finest professionals I have had the pleasure to work with. He is an incredibly talented technologist and excellent manager.",
    name: "Dan Klaeren",
    title: "Fractional CIO / Board Member",
    relationship: "Direct report",
  },
];

export const earlierCareer = [
  {
    org: "XCP Inc.",
    location: "Port Richey, FL",
    role: "Development Lead",
    period: "1995 – 1997",
    body: "C++/Assembly firmware developer for credit-card-enabled vending equipment.",
  },
  {
    org: "Bytor Computer Services",
    location: "",
    role: "Owner/President",
    period: "1990 – 1995",
    body: "Founded and ran an IT consulting firm serving Tampa Bay small businesses, including custom applications, network consulting, and business operations.",
  },
  {
    org: "United States Air Force",
    location: "",
    role: "Precision Measurement Equipment Technician / Automated Test Equipment Developer",
    period: "1984 – 1990",
    body: "Calibrated and repaired precision electronic test equipment; developed automated calibration systems in Assembly, ADA, and C.",
  },
];
