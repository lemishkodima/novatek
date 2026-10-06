export type SitePage = {
  label: string; title: string; eyebrow: string; intro: string; image?: string;
  journey?: { problem: string; deliverable: string; pilot: string; integration: string };
  sections: { title: string; body?: string; items?: string[]; id?: string; image?: string; challenge?: string; nextStep?: string }[];
};

export const nav = [
  { label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' },
  { label: 'Robotics', href: '/robotics' }, { label: 'AI', href: '/ai' },
  { label: 'Data', href: '/data' }, { label: 'Industries', href: '/industries' },
  { label: 'Partners', href: '/partners' }, { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const pages: Record<string, SitePage> = {
  solutions: {
    label: 'Solutions', eyebrow: 'What we do', title: 'Technology that moves business forward.',
    intro: 'NOVATEK International brings artificial intelligence, robotics, automation and data together to solve practical business challenges.', image: '/images/robotics-data.webp',
    journey: { problem: 'Disconnected processes, limited visibility and repetitive work slow operations and make scaling harder.', deliverable: 'A tailored solution architecture combining the right AI models, robotics, sensors, software and data.', pilot: 'A controlled pilot validates the workflow, technical fit and success criteria before wider investment.', integration: 'The validated solution is integrated into operations, scaled across sites and supported through its lifecycle.' },
    sections: [
      { title: 'Artificial intelligence', body: 'We develop and integrate AI for process automation, data analysis, forecasting, quality control and decision-making. Our systems can support manufacturing, logistics, service operations, construction and other industries.', items: ['Machine learning', 'Computer vision', 'Generative AI', 'Predictive analytics', 'Intelligent automation', 'AI agents and assistants', 'Process optimization'] },
      { title: 'Robotics and automation', body: 'We help companies select, integrate and deploy robotic systems for specific applications, from ready-made robots to custom solutions designed around a process.', items: ['Industrial, humanoid and service robots', 'Logistics and construction robots', 'Manufacturing robots', 'Automated robotic systems', 'Robotic vision systems', 'Human–robot collaboration'] },
      { title: 'Data and datasets', body: 'High-quality AI depends on high-quality data. We collect, structure and prepare data for training, testing and improving intelligent systems.', items: ['Image, video and audio datasets', 'Sensor and 3D data', 'LiDAR and text data', 'Robotics and computer vision datasets', 'Annotation, validation and quality control'] },
    ],
  },
  robotics: {
    label: 'Robotics', eyebrow: 'Robotics & automation', title: 'Robotics that work in the real world.',
    intro: 'Move from an initial idea to a fully operational robotic solution, designed around the work your business needs to get done.', image: '/images/hero-robotics.webp',
    journey: { problem: 'Repetitive, hazardous or capacity-limited operations constrain production and logistics teams.', deliverable: 'Robot selection, cell design, software adaptation, AI vision and integration around the target process.', pilot: 'We test the robot, workflow, safety requirements and operating assumptions in a controlled environment.', integration: 'Deployment includes technical integration, staff training, monitoring, maintenance and scale-up support.' },
    sections: [
      { title: 'Integration from idea to operation', body: 'We help companies move from an initial idea to a fully operational robotic solution.', items: ['Business process analysis', 'Identification of automation opportunities', 'Robotic equipment selection', 'Manufacturer selection', 'Technical integration', 'Software development or adaptation', 'AI integration', 'Testing', 'Deployment', 'Staff training', 'Service and support'] },
      { title: 'Robotic systems', body: 'We work with ready-made robots and complete custom solutions designed around a specific process.', items: ['Industrial robots', 'Humanoid robots', 'Service robots', 'Logistics robots', 'Construction robots', 'Manufacturing robots', 'Automated robotic systems', 'Robotic vision systems', 'Human–robot collaboration'] },
      { title: 'Distribution and localization', body: 'NOVATEK International is developing a robotics distribution and localization business line. We work with international robot manufacturers and can help build local sales, integration and service infrastructure.', items: ['Manufacturer sourcing', 'Dealer partnerships', 'Import', 'Localization', 'Certification support', 'Sales', 'Deployment', 'Technical maintenance', 'Training', 'After-sales service'] },
      { title: 'Technical service and support', body: 'We provide technical support for robotic systems and AI solutions throughout their lifecycle.', items: ['Installation', 'Commissioning', 'Diagnostics', 'Maintenance', 'Software updates', 'Remote monitoring', 'Technical support', 'Spare parts', 'Training'] },
    ],
  },
  ai: {
    label: 'AI', eyebrow: 'Artificial intelligence', title: 'AI solutions for real business challenges.',
    intro: 'We develop and integrate practical AI that helps manufacturing and logistics teams automate processes, improve quality control and make faster operational decisions.', image: '/images/ai-computer-vision.webp',
    journey: { problem: 'Manual inspection, fragmented information and delayed decisions create waste, defects and avoidable downtime.', deliverable: 'Production-ready computer vision, predictive analytics, AI assistants or intelligent automation fitted to the workflow.', pilot: 'A focused pilot uses representative data and agreed success criteria to validate accuracy and operational value.', integration: 'The approved system connects to existing tools and processes, with monitoring, staff enablement and ongoing improvement.' },
    sections: [
      { title: 'From data to decisions', body: 'We develop and integrate AI solutions for business process automation, data analysis, forecasting, quality control and decision-making. Our AI systems can be integrated into manufacturing, logistics, service operations, construction and other industries.', items: ['Machine learning', 'Computer vision', 'Generative AI', 'Predictive analytics', 'Intelligent automation', 'AI agents', 'AI assistants', 'Process optimization'] },
      { title: 'AI partnerships', body: 'We collaborate with AI companies on integration and development for real-world operations.', items: ['AI model integration', 'Computer vision', 'Dataset production', 'AI agents and robotics AI', 'Multimodal and industrial AI', 'AI infrastructure'] },
      { title: 'Research & development', body: 'NOVATEK International aims to create proprietary technology solutions and intellectual property.', items: ['Robotics', 'Humanoid robotics', 'Vision systems', 'Manipulation', 'Navigation', 'AI agents', 'Industrial automation', 'Datasets', 'Embodied AI'] },
      { title: 'Embodied AI', body: 'We see Embodied AI as one of the most promising technology directions: intelligent systems that interact with the physical world through robots. We believe there is major potential in developing data, models and integrations for the next generation of intelligent robots.' },
    ],
  },
  data: {
    label: 'Data', eyebrow: 'Data & dataset development', title: 'Data that makes AI smarter.',
    intro: 'We transform raw operational and sensor data into structured, reliable datasets for robotics, computer vision and industrial AI.', image: '/images/data-lidar-capture.webp',
    journey: { problem: 'AI initiatives stall when data is incomplete, inconsistent, poorly labeled or disconnected from real operating conditions.', deliverable: 'A documented dataset with collection, annotation, validation and quality-control workflows matched to the model objective.', pilot: 'A representative sample confirms the taxonomy, annotation rules, quality threshold and production effort.', integration: 'The approved data pipeline scales to ongoing collection, versioning, model training and continuous quality review.' },
    sections: [
      { title: 'Data for intelligent systems', body: 'High-quality AI depends on high-quality data. NOVATEK International creates, structures and prepares data for training, testing and improving artificial intelligence models.', items: ['Image datasets', 'Video datasets', 'Audio datasets', 'Sensor data', '3D data', 'LiDAR', 'Text data', 'Robotics datasets', 'Computer vision datasets'] },
      { title: 'Robotics dataset development', body: 'A strategic focus area for NOVATEK International is dataset development for robotics. We help robot manufacturers collect and structure real-world data required to train robots for practical tasks.', items: ['Object movement', 'Object recognition', 'Grasping and manipulation', 'Navigation', 'Sorting', 'Tool use', 'Cleaning', 'Table setting', 'Logistics tasks', 'Manufacturing operations', 'Human interaction'] },
      { title: 'Data annotation & processing', body: 'Our objective is to transform raw data into a structured, reliable asset for AI systems.', items: ['Data collection', 'Data cleaning', 'Data classification', 'Image annotation', 'Video annotation', 'Object detection', 'Segmentation', 'Bounding boxes', 'Keypoint annotation', '3D annotation', 'Data validation', 'Quality control'] },
    ],
  },
  industries: {
    label: 'Industries', eyebrow: 'Industries we serve', title: 'Applied technology for every operation.',
    intro: 'We work with organizations to tailor technology to the unique challenges of their industries and operating environments.', image: '/images/industry-automation.webp',
    sections: [
      { id: 'manufacturing', title: 'Manufacturing', image: '/images/ai-computer-vision.webp', challenge: 'Reduce repetitive work, defects and unplanned downtime while protecting production continuity.', body: 'Combine robotic automation, machine vision, predictive maintenance and production analytics around a defined process.', items: ['Repetitive operation automation', 'Quality control', 'Predictive maintenance', 'Production process optimization'], nextStep: 'Assess a production process' },
      { id: 'logistics', title: 'Logistics & warehousing', image: '/images/industry-automation.webp', challenge: 'Increase throughput and inventory visibility without adding avoidable manual handling.', body: 'Apply autonomous transportation, sorting, picking and warehouse analytics to the highest-impact workflow.', items: ['Autonomous transportation and sorting', 'Picking and inventory management', 'Warehouse analytics', 'Delivery automation'], nextStep: 'Review a warehouse workflow' },
      { id: 'construction', title: 'Construction', image: '/images/construction-inspection.webp', challenge: 'Improve progress visibility, measurement consistency and quality control across dynamic sites.', body: 'Use inspection robotics, computer vision and digital monitoring for repeatable field data and faster decisions.', items: ['Construction robotics', 'AI-based work progress monitoring', 'Computer vision', 'Automated measurements', 'Quality control', 'Robotic finishing', 'Digital construction monitoring'], nextStep: 'Discuss an inspection pilot' },
      { id: 'retail-service', title: 'Retail & service', challenge: 'Maintain service quality while automating repetitive customer and facility tasks.', body: 'Introduce service robotics and AI support in a controlled customer-facing workflow.', items: ['Customer service robots', 'Robotic waiters', 'Cleaning automation', 'Robotic delivery', 'AI customer support', 'Automated order taking'], nextStep: 'Explore a service pilot' },
      { id: 'hospitality', title: 'Hospitality & restaurants', challenge: 'Support staff during routine service tasks and improve consistency during peak demand.', body: 'Pilot reception, order, delivery or table-service automation within a clearly defined guest journey.', items: ['Guest reception', 'Order taking', 'Recommendations', 'Order delivery', 'Table setting', 'Table clearing', 'Navigation', 'Customer interaction'], nextStep: 'Map a guest workflow' },
      { id: 'energy', title: 'Energy', challenge: 'Inspect infrastructure and detect developing issues with less manual exposure and delay.', body: 'Combine remote monitoring, computer vision, inspection data and predictive analytics.', items: ['Predictive maintenance and monitoring', 'Analytics and computer vision', 'Infrastructure inspection', 'Energy optimization'], nextStep: 'Assess an inspection process' },
      { id: 'agriculture', title: 'Agriculture', challenge: 'Monitor crops and automate field operations with more consistent data and execution.', body: 'Apply autonomous systems, computer vision and targeted automation to a priority farm operation.', items: ['Autonomous robots and crop monitoring', 'Computer vision and harvesting systems', 'Smart irrigation', 'Farm automation'], nextStep: 'Discuss an agriculture pilot' },
    ],
  },
  partners: {
    label: 'Partners', eyebrow: 'Global partnerships', title: 'Build new markets and technology together.',
    intro: 'We create international cooperation with partners and manufacturers across Europe, Asia and other markets.', image: '/images/hero-robotics.webp',
    sections: [
      { title: 'Open to cooperation with', items: ['Robot manufacturers', 'AI companies', 'Technology startups', 'System integrators', 'Manufacturing companies', 'Investment funds', 'R&D centers', 'Universities', 'Distributors', 'International corporations'] },
      { title: 'For robotics manufacturers', body: 'We can become a local market partner for robotics manufacturers seeking expansion into new markets.', items: ['Market entry', 'Localization', 'Dealer network', 'Sales', 'Integration', 'Technical support', 'Customer acquisition', 'Dataset development', 'Pilot projects', 'After-sales service'] },
      { title: 'For AI companies', body: 'We collaborate with AI companies on practical technology deployment and development.', items: ['AI model integration', 'Computer vision', 'Dataset production', 'AI agents', 'Robotics AI', 'Multimodal AI', 'Industrial AI', 'AI infrastructure'] },
      { title: 'Flexible partnership models', items: ['Integration', 'Distribution', 'Dealership', 'Joint venture', 'Technology partnership', 'Data partnership', 'R&D cooperation'] },
    ],
  },
  about: {
    label: 'About', eyebrow: 'About NOVATEK International', title: 'Technology without borders. Progress without limits.',
    intro: 'NOVATEK International is an international technology company specializing in artificial intelligence, robotics, automation and data solutions.', image: '/images/industry-automation.webp',
    sections: [
      { title: 'Technology grounded in business', body: 'We operate at the intersection of technology and real business, helping companies integrate advanced AI solutions, robotic systems and data-driven tools into manufacturing and operational processes. Our goal is to create solutions that deliver measurable business results. We focus on long-term partnerships and support clients from business analysis and solution design to implementation, scaling and technical support.' },
      { title: 'Our mission', body: 'Our mission is to make advanced technologies practical, effective and accessible for real businesses. We help companies move from traditional processes to intelligent systems where AI, robotics and data work together.', items: ['Increase productivity', 'Reduce operating costs', 'Reduce dependence on manual labor', 'Improve quality and process control', 'Enable scalable growth', 'Create competitive advantage'] },
      { title: 'Why NOVATEK International', items: ['International approach: cooperation with partners and manufacturers across Europe, Asia and other markets', 'Technology expertise: a focus on AI, robotics, automation and data', 'Business-oriented approach: measurable business results guide the technology choice', 'End-to-end solutions: support from first consultation through full-scale implementation'] },
      { title: 'How we work', items: ['Discovery: understand the business, workflows and challenges', 'Analysis: identify where AI or robotics can have the greatest impact', 'Solution design: create the solution architecture', 'Technology selection: choose AI models, robots, sensors and software', 'Pilot project: launch a controlled pilot', 'Integration: fit the solution into business processes', 'Scale: expand the solution across operations', 'Support: maintain and develop the system'] },
      { title: 'A client-centric approach', body: 'Every business has different processes, constraints and goals. We analyze each client’s business and design a technology system around specific objectives and measurable outcomes, supporting the journey from analysis and solution design through implementation, scaling and technical support.' },
    ],
  },
  contact: {
    label: 'Contact', eyebrow: 'Get in touch', title: 'Let’s build the future together.',
    intro: 'Looking to automate your business, integrate robotics, apply AI or build a new technology product? Start with a consultation, a business process assessment or a pilot project.',
    sections: [
      { title: 'Sergey Sergov', body: 'Founder & CEO' },
      { title: 'Let’s build a smarter tomorrow.', items: ['Phone: +380 67 123 45 67', 'Email: sergey@novatek-international.com', 'Website: www.novatek-international.com'] },
      { title: 'Start a conversation', body: 'Book a meeting, discuss your project or explore a partnership. Email Sergey directly and share a little about what you are looking to achieve.' },
    ],
  },
};
