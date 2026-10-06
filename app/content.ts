export type SitePage = {
  label: string; title: string; eyebrow: string; intro: string; image?: string;
  sections: { title: string; body?: string; items?: string[] }[];
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
    sections: [
      { title: 'Artificial intelligence', body: 'We develop and integrate AI for process automation, data analysis, forecasting, quality control and decision-making. Our systems can support manufacturing, logistics, service operations, construction and other industries.', items: ['Machine learning', 'Computer vision', 'Generative AI', 'Predictive analytics', 'Intelligent automation', 'AI agents and assistants', 'Process optimization'] },
      { title: 'Robotics and automation', body: 'We help companies select, integrate and deploy robotic systems for specific applications, from ready-made robots to custom solutions designed around a process.', items: ['Industrial, humanoid and service robots', 'Logistics and construction robots', 'Manufacturing robots', 'Automated robotic systems', 'Robotic vision systems', 'Human–robot collaboration'] },
      { title: 'Data and datasets', body: 'High-quality AI depends on high-quality data. We collect, structure and prepare data for training, testing and improving intelligent systems.', items: ['Image, video and audio datasets', 'Sensor and 3D data', 'LiDAR and text data', 'Robotics and computer vision datasets', 'Annotation, validation and quality control'] },
    ],
  },
  robotics: {
    label: 'Robotics', eyebrow: 'Robotics & automation', title: 'Robotics that work in the real world.',
    intro: 'Move from an initial idea to a fully operational robotic solution, designed around the work your business needs to get done.', image: '/images/hero-robotics.webp',
    sections: [
      { title: 'Integration from idea to operation', body: 'We support the full lifecycle, from selecting the right manufacturer and equipment to integrating robots into business operations, training staff and providing ongoing service.', items: ['Business process analysis', 'Automation opportunity assessment', 'Robot and manufacturer selection', 'Technical and software integration', 'AI integration and testing', 'Deployment, staff training and support'] },
      { title: 'Robotic systems', body: 'We work with ready-made robots and complete custom solutions for manufacturing and operational environments.', items: ['Industrial and manufacturing robots', 'Humanoid and service robots', 'Logistics and construction robots', 'Automated robotic systems', 'Robotic vision systems', 'Human–robot collaboration'] },
      { title: 'Distribution and localization', body: 'NOVATEK International is developing a robotics distribution and localization business line. We work with international robot manufacturers to build local sales, integration and service infrastructure.', items: ['Manufacturer sourcing and dealer partnerships', 'Import and localization', 'Certification support', 'Sales and deployment', 'Technical maintenance and training', 'After-sales service'] },
      { title: 'Technical service and support', body: 'We can support robotic systems throughout their lifecycle.', items: ['Installation and commissioning', 'Diagnostics and maintenance', 'Software updates and remote monitoring', 'Technical support and spare parts', 'Operator training'] },
    ],
  },
  ai: {
    label: 'AI', eyebrow: 'Artificial intelligence', title: 'AI solutions for real business challenges.',
    intro: 'We develop and integrate practical AI that helps teams automate processes, understand data, anticipate change and make better decisions.', image: '/images/robotics-data.webp',
    sections: [
      { title: 'From data to decisions', body: 'Our AI systems can be integrated into manufacturing, logistics, service operations, construction and other industries. We focus on solutions that fit the process and deliver measurable business results.', items: ['Machine learning and predictive analytics', 'Computer vision and quality control', 'Generative AI', 'Intelligent automation and process optimization', 'AI agents and assistants'] },
      { title: 'AI partnerships', body: 'We collaborate with AI companies on integration and development for real-world operations.', items: ['AI model integration', 'Computer vision', 'Dataset production', 'AI agents and robotics AI', 'Multimodal and industrial AI', 'AI infrastructure'] },
      { title: 'Research and embodied AI', body: 'We see Embodied AI as a promising direction: intelligent systems that interact with the physical world through robots. We aim to develop data, models and integrations for the next generation of intelligent robots.', items: ['Robotics and humanoid robotics', 'Vision systems, manipulation and navigation', 'Industrial automation', 'Datasets and embodied AI', 'AI agents'] },
    ],
  },
  data: {
    label: 'Data', eyebrow: 'Data & dataset development', title: 'Data that makes AI smarter.',
    intro: 'We transform raw information into structured, reliable assets that help AI systems learn and perform in practical environments.', image: '/images/robotics-data.webp',
    sections: [
      { title: 'Data for intelligent systems', body: 'NOVATEK International creates, structures and prepares data for training, testing and improving artificial intelligence models.', items: ['Image, video and audio datasets', 'Sensor and text data', '3D data and LiDAR', 'Robotics datasets', 'Computer vision datasets'] },
      { title: 'Robotics dataset development', body: 'A strategic focus area is collecting and structuring real-world data to train robots for practical tasks.', items: ['Object movement and recognition', 'Grasping and manipulation', 'Navigation and sorting', 'Tool use and cleaning', 'Table setting and logistics tasks', 'Manufacturing operations and human interaction'] },
      { title: 'Data preparation cycle', body: 'Our objective is to turn raw data into a structured, reliable asset for AI systems.', items: ['Data collection, cleaning and classification', 'Image and video annotation', 'Object detection and segmentation', 'Bounding boxes and keypoint annotation', '3D annotation', 'Data validation and quality control'] },
    ],
  },
  industries: {
    label: 'Industries', eyebrow: 'Industries we serve', title: 'Applied technology for every operation.',
    intro: 'We work with organizations to tailor technology to the unique challenges of their industries and operating environments.', image: '/images/industry-automation.webp',
    sections: [
      { title: 'Manufacturing', body: 'Robotics and AI for production environments.', items: ['Repetitive operation automation', 'Quality control', 'Predictive maintenance', 'Production process optimization'] },
      { title: 'Logistics & warehousing', items: ['Autonomous transportation and sorting', 'Picking and inventory management', 'Warehouse analytics', 'Delivery automation'] },
      { title: 'Construction', items: ['Construction robotics', 'AI work progress monitoring', 'Computer vision and automated measurements', 'Quality control and robotic finishing', 'Digital construction monitoring'] },
      { title: 'Retail & service', items: ['Customer service robots', 'Robotic waiters and delivery', 'Cleaning automation', 'AI customer support', 'Automated order taking'] },
      { title: 'Hospitality & restaurants', items: ['Guest reception and recommendations', 'Order taking and delivery', 'Table setting and clearing', 'Navigation and customer interaction'] },
      { title: 'Energy', items: ['Predictive maintenance and monitoring', 'Analytics and computer vision', 'Infrastructure inspection', 'Energy optimization'] },
      { title: 'Agriculture', items: ['Autonomous robots and crop monitoring', 'Computer vision and harvesting systems', 'Smart irrigation', 'Farm automation'] },
    ],
  },
  partners: {
    label: 'Partners', eyebrow: 'Global partnerships', title: 'Build new markets and technology together.',
    intro: 'We create international cooperation with partners and manufacturers across Europe, Asia and other markets.', image: '/images/hero-robotics.webp',
    sections: [
      { title: 'Open to cooperation with', items: ['Robot manufacturers', 'AI companies and technology startups', 'System integrators', 'Manufacturing companies', 'Investment funds', 'R&D centers and universities', 'Distributors and international corporations'] },
      { title: 'For robotics manufacturers', body: 'We can become a local market partner for robotics manufacturers seeking expansion into new markets.', items: ['Market entry and localization', 'Dealer network and sales', 'Integration and technical support', 'Customer acquisition and pilot projects', 'Dataset development and after-sales service'] },
      { title: 'Flexible partnership models', items: ['Integration and distribution', 'Dealership and joint venture', 'Technology and data partnerships', 'R&D cooperation'] },
    ],
  },
  about: {
    label: 'About', eyebrow: 'About NOVATEK International', title: 'Technology without borders. Progress without limits.',
    intro: 'NOVATEK International is an international technology company specializing in artificial intelligence, robotics, automation and data solutions.', image: '/images/industry-automation.webp',
    sections: [
      { title: 'Technology grounded in business', body: 'We work at the intersection of technology and real business, helping companies integrate AI, robotic systems and data-driven tools into manufacturing and operations. Our goal is to create solutions that deliver measurable business results.', items: ['Increase productivity', 'Reduce operating costs and dependence on manual labor', 'Improve quality and process control', 'Enable scalable growth', 'Create competitive advantage'] },
      { title: 'Our mission', body: 'Make advanced technologies practical, effective and accessible for real businesses. We help companies move from traditional processes to intelligent systems where AI, robotics and data work together.' },
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
