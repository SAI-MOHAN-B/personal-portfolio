export const WORK_EXPERIENCE = [
  {
    company: 'Eli Lilly and Company',
    position: 'Data Engineer',
    duration: 'March 2025 - Present',
    location: 'Bangalore, KA',
    highlights: [
      'Designed and operated AWS AppFlow-based ingestion pipelines to onboard source-system data into the analytics platform, improving integration standardization and reducing manual effort',
      'Embedded PII masking and privacy controls into ingestion and transformation workflows to support compliant data processing',
      'Built and optimized PySpark jobs on Amazon EMR to transform curated datasets and write them to Apache Iceberg tables on Amazon S3 for scalable storage and downstream analytics',
      'Implemented SCD Type 2 logic in batch processing workflows to accurately maintain historical changes in dimensional data',
      'Orchestrated end-to-end batch pipelines in Apache Airflow, managing scheduling, dependencies, and retry policies for reliable production execution',
      'Mentored junior data engineers on coding standards, data engineering best practices, and operational discipline in production environments'
    ]
  },
  {
    company: 'Trigent Software Inc',
    position: 'Data Engineer',
    duration: 'October 2024 - January 2025',
    location: 'Bangalore, KA',
    highlights: [
      'Reduced analytics query costs by 30% by redesigning query workloads and moving suitable access patterns from Amazon Redshift to AWS Athena over S3-based datasets',
      'Designed and implemented a PySpark ETL pipeline on AWS EMR to process high-volume user interaction data at GBs-per-day TBs-per-month scale',
      'Implemented CDC workflows in AWS Glue using Delta Lake MERGE operations to process late-arriving events and eliminate duplicate records',
      'Improved storage management and downstream query performance by transitioning curated datasets from raw Parquet layouts to Delta Lake tables on Amazon S3',
      'Automated multi-stage workflow orchestration with AWS Step Functions, coordinating EMR, S3, and Glue jobs to improve pipeline reliability and reduce manual intervention'
    ]
  },
  {
    company: 'Guidewire Software',
    position: 'Data Platform Engineer',
    duration: 'May 2023 - February 2024',
    location: 'Bangalore, KA',
    highlights: [
      'Developed Apache Spark code for 20+ AWS Glue jobs, optimizing data transformation logic and reducing average processing time by 30%',
      'Built modular Python data processing framework with 50+ reusable components, improving code maintainability and reducing development time for new ETL workflows by 45%',
      'Optimized SQL query performance across 100+ analytical queries through indexing strategies and query plan analysis, reducing execution time by 20%',
      'Designed and maintained 25+ dynamic Apache Airflow DAGs with sophisticated dependency management, reducing data pipeline delays by 40%',
      'Containerized data platform components using Docker and deployed with AWS ECS on Bitbucket Pipelines, reducing deployment time by 50% and deployment errors by 30%'
    ]
  }
];
