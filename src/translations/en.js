import dimensionsEn from './dimensions-en';

const en = {
  common: {
    level: 'Level',
    people: 'People',
    policies: 'Policies',
    capabilities: 'Capabilities',
    improvement: 'Suggested Improvements and Practices',
    mainAspects: 'Main Aspects Evaluated',
    dimensions: 'Dimensions',
    choose: 'Choose one of the dimensions from the sidebar.'
  },
  dimensionsData: dimensionsEn,
  nav: {
    title: 'DG2M Framework - Version 1',
    about: 'About',
    levels: 'Levels',
    dimensions: 'Dimensions',
    roles: 'Roles',
    survey: 'Help Improve this Framework!'
  },
  footer: {
    copyright: '© 2025 DG2M. All rights reserved.'
  },
  main: {
    title: 'Data Governance Maturity Model (DG2M): The Framework',
    subtitle: 'Guiding Organizations Towards Strategic Use of Data',
    about: 'About',
    aboutContent: 'To operationalize the DG2M framework, a methodology is important for assessing an organization\'s maturity across predefined dimensions. This approach serves a dual purpose: it is diagnostic, identifying critical performance gaps, and developmental, providing a roadmap for strategic growth. The framework evaluates progress across six distinct maturity levels, spanning from Level 0 (Not Started) to Level 5 (Optimized).',
    dimensionsTitle: 'Dimensions',
    dimensionsContent: 'Organizational maturity is evaluated across six central dimensions:',
    dimensionsList: [
      'Data Strategy and Governance',
      'Teams, People, and Organizational Structure',
      'Formalization and Data Management Processes',
      'Data Quality',
      'Data Infrastructure',
      'Open Data (optional)'
    ],
    aspectsTitle: 'Analytical Aspects',
    aspectsContent: 'The model evaluates each dimension based on three analytical aspects:',
    aspectPeople: 'analyzes the involvement of professionals in data management, including technical knowledge, team engagement, and role clarity.',
    aspectPolicies: 'examines institutional guidelines, standards, and processes related to data use and management, such as security, privacy, and compliance.',
    aspectCapabilities: 'considers available technical resources, such as tools, technologies, and infrastructure focused on data processing, analysis, and integration.',
    aspectsConclusion: 'The combination of these three aspects allows for an assessment of data governance maturity, covering from human engagement to technical resources used in practice. Each assessment response is associated with a maturity level according to predefined criteria.',
    minLevelTitle: 'Minimum Level Rule',
    minLevelContent: 'The maturity of each dimension is determined by the Minimum Level Rule, meaning the lowest level among the three aspects is considered, highlighting possible bottlenecks.'
  },
  levels: {
    title: 'Data Governance Maturity Levels',
    subtitle: 'This model defines six maturity levels that help organizations assess and improve their data governance practices. Each level represents a stage in the journey from unstructured data practices to fully optimized, innovation-driven data governance.',
    level0: {
      title: 'Level 0: Not Started',
      description: 'At this stage, the organization has no initiatives or awareness regarding data governance or data science. There is no recognition of the strategic value of data, and decisions are made without any structured informational support.\n\nOrganizations at this level completely lack practices and structures for data management. The absence of processes and any governance-focused effort makes it difficult to obtain the benefits that effective data management could provide.'
    },
    level1: {
      title: 'Level 1: Initial – Ad Hoc, Unstructured and/or Learning',
      description: 'At the initial level, the first data management-related initiatives begin to emerge, but in a disorganized manner and without strategic alignment. The organization is currently in an exploratory phase, vetting various tools and technologies without a structured long-term vision.\n\nDecisions are reactive and based on intuition, with occasional exploratory projects aimed at understanding possible data uses. However, the lack of documentation and standardized processes limits the evolution of these initiatives.'
    },
    level2: {
      title: 'Level 2: Repeatable – Emerging Practices, Incipient Initiatives and Asset Transformation',
      description: 'Beyond the advances of the previous stage, at this level data begins to be recognized as a strategic asset, and the organization starts using tools such as dashboards and basic processes to support decision-making.\n\nPrototype development and initial technological investments characterize this level. Some areas begin to standardize processes, and decisions start to be based on information extracted from data. However, the adoption of these practices still occurs in isolation within the organization, without consolidated formal governance.'
    },
    level3: {
      title: 'Level 3: Defined – Structured and Standardized',
      description: 'Based on the advances of previous stages, at this level data governance becomes an integral part of organizational strategy, with well-defined and documented processes. The organization establishes clear roles and responsibilities for data management, promoting a structured and integrated approach across different areas.\n\nProcess standardization allows for greater efficiency and reliability in data use. Additionally, advanced analysis and monitoring tools begin to be implemented, increasing the organization\'s capacity to make data-driven decisions.'
    },
    level4: {
      title: 'Level 4: Managed – Measured and Predictive',
      description: 'Beyond the advances of previous stages, at this level the organization achieves significant control over its data governance processes, using quantitative metrics and statistical indicators to monitor, manage, and predict outcomes.\n\nDecisions become fully data-driven, eliminating subjectivity and reducing operational risks. Governance is based on key performance indicators (KPIs), ensuring continuous compliance and efficiency. Real-time monitoring of systems and processes ensures performance remains optimized and aligned with business objectives.'
    },
    level5: {
      title: 'Level 5: Optimized – Innovation and Continuous Improvement',
      description: 'Moving forward, at the most advanced level, data governance and data science become strategic assets, driving innovation and promoting a cycle of continuous improvement based on learning and predictive analysis.\n\nThe organization uses highly refined processes, with metrics, indicators, and analyses constantly improved to meet strategic objectives. Innovative solutions are integrated among stakeholders and value chains, promoting collaboration and alignment throughout the organizational structure. Furthermore, advanced technologies and automation are widely used to optimize operations and generate competitive advantage.'
    }
  },
  dimensions: {
    title: 'DG2M Dimensions',
    subtitle: 'To assess maturity levels, six dimensions have been developed, which are available below.'
  },
  roles: {
    title: 'Key Roles in DG2M',
    subtitle: 'Understanding Responsibilities in the Maturity Model',
    overview: 'Overview',
    overviewContent: 'Effective data governance requires defined roles and responsibilities. Each role contributes uniquely to the success of governance initiatives, ensuring that data is managed as an important organizational asset.',
    strategic: 'Strategic Level',
    strategicCDO: 'At the strategic level, the CDO (Chief Data Officer or Director of Data Governance) is responsible for aligning data initiatives with business objectives and overseeing governance implementation. This role collaborates with executive sponsors and data quality councils to ensure data assets support organizational goals.',
    strategicCommittees: 'Data Committees, such as Steering Committees and Quality Councils, oversee data quality, policy enforcement, and strategic decisions.',
    strategicPrivacy: 'Privacy and Compliance Specialists (e.g., Data Protection Officers) ensure compliance with data protection laws and internal security protocols, ensuring legal and ethical data use.',
    operational: 'Operational/Tactical Level',
    operationalCurators: 'Data Stewards manage data quality, definitions, and lifecycle across business domains, ensuring consistency and reliability.',
    operationalManagers: 'Data Team Managers coordinate data project teams, managing resources, schedules, and deliverables.',
    operationalConsumers: 'Data Consumers use data products for analysis, decision-making, and operations. Their feedback often guides governance priorities and system improvements.',
    technical: 'Technical Level',
    technicalAnalysts: 'Data Analysts and Data Scientists analyze, interpret, and model data to generate reports and documents that inform and strengthen business strategies. These professionals typically work in analytics teams under the leadership of data science professionals or strategic management.',
    technicalIT: 'IT and Database Specialists ensure the performance, availability, and security of data infrastructure. They also provide an important support to Data Stewards and other roles.',
    integration: 'Role Integration Across Maturity Levels',
    integrationContent: 'As the organization evolves, these roles become increasingly defined, integrated, and strengthened, contributing to a more agile, ethical, and value-driven data culture.'
  },
  survey: {
    title: 'Participate in the Data Governance Survey',
    thanks: 'Thank you very much for your collaboration!',
    fillForm: 'Fill out the form by clicking here (disabled)',
    scheduleMeeting: 'Schedule a meeting with me if you have questions (disabled)',
    contact: 'Or contact me at (email)',
    presentation: 'Presentation',
    objective: 'The objective is to validate the Data Governance Maturity Model (DG2M).',
    target: 'The survey is aimed at professionals working with data, governance, information technology, and related areas, and seeks to gather perceptions and feedback on the proposed model. All responses are confidential and used exclusively for academic purposes.'
  }
};

export default en;
