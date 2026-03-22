export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 'dotnet-modernization',
    title: 'Legacy .NET Modernization',
    description:
      'Migrate from .NET Framework 2.x–4.8 to .NET 8/9 using proven strangler fig patterns — zero downtime, parallel-run validation.',
    details: [
      'Assessment of existing .NET Framework codebase',
      'Incremental migration with parallel-run validation',
      'ASP.NET WebForms → Blazor / MVC / minimal APIs',
      'WCF service replacement with modern gRPC or REST',
      'Performance benchmarking before and after migration',
    ],
    icon: 'refresh',
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Architecture',
    description:
      'Move to Azure Government Cloud or AWS GovCloud with IaC-driven, ATO-ready deployment pipelines built for federal compliance.',
    details: [
      'Cloud readiness assessment and cost modeling',
      'Infrastructure as Code with Bicep and Terraform',
      'Azure Government Cloud and AWS GovCloud expertise',
      'ATO-ready architecture with compliance guardrails',
      'Zero-trust network design and segmentation',
    ],
    icon: 'cloud',
  },
  {
    id: 'api-modernization',
    title: 'API Modernization & Integration',
    description:
      'Replace SOAP, ASMX, and WCF monoliths with RESTful or gRPC microservices — versioned, documented, and gateway-managed.',
    details: [
      'SOAP/WSDL to REST/OpenAPI migration',
      'WCF → gRPC for high-performance internal services',
      'API gateway configuration (Azure APIM)',
      'Consumer-driven contract testing',
      'OpenAPI documentation and developer portals',
    ],
    icon: 'api',
  },
  {
    id: 'devsecops',
    title: 'DevSecOps & CI/CD Pipelines',
    description:
      'Embed security into every commit with automated SAST/DAST scanning, SBOM generation, and container hardening for FedRAMP-ready pipelines.',
    details: [
      'GitHub Actions and Azure DevOps pipeline setup',
      'Automated SAST (static analysis) and DAST scanning',
      'Software Bill of Materials (SBOM) generation',
      'Container image scanning and hardening',
      'Secrets management with Azure Key Vault',
    ],
    icon: 'shield',
  },
  {
    id: 'compliance-ato',
    title: 'Compliance & ATO Support',
    description:
      'Expert guidance through FISMA High/Moderate and FedRAMP authorization, including NIST 800-53 control mapping and SSP documentation.',
    details: [
      'FISMA High and Moderate impact level support',
      'FedRAMP authorization readiness assessment',
      'NIST 800-53 control mapping and documentation',
      'System Security Plan (SSP) authoring',
      'Continuous monitoring strategy and implementation',
    ],
    icon: 'check-badge',
  },
  {
    id: 'agile-delivery',
    title: 'Agile Delivery & Program Management',
    description:
      'SAFe Agile and Scrum delivery with CPARS-ready artifacts, stakeholder reporting, and transparent sprint ceremonies built for government oversight.',
    details: [
      'SAFe Agile and Scrum framework implementation',
      'Government-standard sprint reporting and CDRLs',
      'CPARS-ready performance documentation',
      'COR relationship management and status briefings',
      'Risk management and milestone tracking',
    ],
    icon: 'chart',
  },
];
