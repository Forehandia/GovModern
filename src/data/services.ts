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
      'Migrate from .NET Framework 2.x–4.8 to .NET 8, 9, or 10 using proven strangler fig patterns — zero downtime, parallel-run validation.',
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
      'Move to Azure or AWS with IaC-driven, compliance-ready deployment pipelines built for state and local government needs.',
    details: [
      'Cloud readiness assessment and cost modeling',
      'Infrastructure as Code with Bicep and Terraform',
      'Azure and AWS expertise for government workloads',
      'Compliance-ready architecture with security guardrails',
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
      'Embed security into every commit with automated SAST/DAST scanning, SBOM generation, and container hardening for compliance-ready pipelines.',
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
    id: 'agile-delivery',
    title: 'Flexible Delivery & Project Management',
    description:
      'Iterative, sprint-based delivery that adapts to your agency\'s pace — transparent progress, clear milestones, and no bureaucratic overhead.',
    details: [
      'Sprint-based delivery with visible, measurable progress',
      'Flexible engagement model fit to your timeline and budget',
      'Clear status reporting and stakeholder communication',
      'Rapid response to changing priorities or scope',
      'Lightweight project management that stays out of your way',
    ],
    icon: 'chart',
  },
];
