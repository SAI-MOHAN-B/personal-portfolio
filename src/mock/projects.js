import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all'
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  }
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);
export const PROJECTS = [
  {
    imgSrc: 'https://raw.githubusercontent.com/SAI-MOHAN-B/Redfin-DataAnalytics-ETL/main/arch.png',
    title: 'Redfin-DataAnalytics-ETL',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Python'),
      getSkillByLabel(FRONTEND_SKILLS, 'Amazon S3'),
      getSkillByLabel(FRONTEND_SKILLS, 'Apache Airflow'),
      getSkillByLabel(BACKEND_SKILLS, 'Snowflake'),
      getSkillByLabel(BACKEND_SKILLS, 'AWS Redshift'),
    ],
    description:
      'Designed and implemented a production-grade ETL (Extract, Transform, Load) pipeline ingesting Redfin real estate data from multiple sources. Applied Python and PySpark transformations to clean, enrich, and structure unstructured data. Loaded processed datasets into AWS Redshift and Snowflake data warehouses for analytics and reporting, enabling stakeholders to generate insights on real estate market trends.',
    repoLink: 'https://github.com/SAI-MOHAN-B/Redfin-DataAnalytics-ETL',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/SAI-MOHAN-B/Reddit-DataEngineering-Pipeline/refs/heads/main/RedditDataEngineering.png',
    title: 'Reddit Data Engineering Pipeline',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Python'),
      getSkillByLabel(FRONTEND_SKILLS, 'Amazon S3'),
      getSkillByLabel(FRONTEND_SKILLS, 'Apache Airflow'),
      getSkillByLabel(FRONTEND_SKILLS, 'AWS Glue'),
      getSkillByLabel(BACKEND_SKILLS, 'AWS Redshift'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'), 
    ],
    description:
      'Built an end-to-end data pipeline extracting Reddit data via REST APIs, orchestrated with Apache Airflow and Celery for distributed processing. Implemented data transformations using AWS Glue and PySpark, with CDC patterns for incremental updates. Integrated PostgreSQL for intermediate staging and Amazon Redshift for analytics-ready data warehouse, serving real-time and batch analytics use cases.',
    repoLink: 'https://github.com/SAI-MOHAN-B/Reddit-DataEngineering-Pipeline',
    sourceLink: '',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/SAI-MOHAN-B/FootballDataEngineering/main/arc/system_architecture.png',
    title: 'Football Data Engineering',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Python'),
      getSkillByLabel(FRONTEND_SKILLS, 'Apache Airflow'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
      getSkillByLabel(BACKEND_SKILLS, 'Azure Databricks'),
    ],
    description:
      'Developed a comprehensive data engineering pipeline fetching sports data from Wikipedia and third-party APIs. Automated data extraction, cleaning, and transformation workflows using Apache Airflow. Implemented schema management in PostgreSQL and leveraged Azure Databricks for advanced analytics processing. Created data visualization dashboards in Tableau for stakeholder insights and decision-making.',
    repoLink: 'https://github.com/SAI-MOHAN-B/FootballDataEngineering',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc: 'https://raw.githubusercontent.com/SAI-MOHAN-B/Capstone-Project-Lakehouse-Platform-Implementation/main/architecture/Screenshot%202024-09-19%20at%204.25.41%E2%80%AFPM.png',
    title: 'Data Lakehouse-Platform-Implementation',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Python'),
      getSkillByLabel(FRONTEND_SKILLS, 'Apache Spark'),
      getSkillByLabel(BACKEND_SKILLS, 'Azure'),

    ],
    description: 'Architected and implemented a modern data lakehouse platform on Azure supporting both batch and real-time streaming workflows. Implemented the Medallion architecture (Bronze, Silver, Gold layers) for organized data processing. Built PySpark jobs on Azure Databricks with auto-scaling capabilities. Configured separate dev, test, and production environments with infrastructure-as-code, ensuring reproducibility and compliance with enterprise standards.',
    repoLink: 'https://github.com/SAI-MOHAN-B/Capstone-Project-Lakehouse-Platform-Implementation',
    sourceLink: '',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
];
