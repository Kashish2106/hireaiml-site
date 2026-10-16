// jobs.js
const jobsData = {
    "Robotics Engineer - Sim-to-Real Modeling": {
        "Description": "Bridge the gap between simulation and real-world robotics by developing high-fidelity models and system identification pipelines. You will work closely with physical robot hardware to ensure accurate simulation environments that enable reliable deployment of learned control policies.",
        "Job Type": "Full-time",
        "Location": "On-site (Bangalore, India)",
        "Key Responsibilities": [
            "Develop high-fidelity mathematical models for robot subsystems including drivetrains, sensors, and network behavior",
            "Design and execute system identification experiments to estimate physical parameters such as friction, inertia, and latency",
            "Implement accurate models within modern simulation environments",
            "Benchmark and validate simulation performance against real-world robot data",
            "Analyze and minimize the sim-to-real gap for improved deployment reliability",
            "Collaborate with control, perception, and hardware teams to optimize system performance"
        ],
        "Required Skills and Qualifications": [
            "Master’s or PhD in Robotics, Mechanical Engineering, Electrical Engineering, or related field",
            "Strong understanding of multi-body dynamics, robot physics, and numerical methods",
            "Experience in system modeling and system identification for physical systems",
            "Proficiency in C++ and Python",
            "Hands-on experience with simulation tools such as Isaac Gym, MuJoCo, or Drake",
            "Experience working with real robotic hardware and conducting experiments"
        ],
        "Preferred Qualifications": [
            "Deep knowledge of actuator systems (BLDC motors, gearboxes, friction modeling)",
            "Experience with sensor modeling (IMUs, LiDAR, cameras)",
            "Familiarity with Reinforcement Learning",
            "Experience with robot description formats such as URDF, SDF, or USD",
            "Strong debugging skills at system and hardware levels"
        ]
    },
    "Robotics Research Engineer": {
        "Description": "Work on the cutting edge of generative AI and robotics to enable whole-body motion generation for humanoid systems. You will develop multimodal models that translate perception into real-world robot actions, bridging advances in neural avatars, computer vision, and robot learning.",
        "Job Type": "Full-time",
        "Location": "On-site (Bangalore, India)",
        "Key Responsibilities": [
            "Design and train state-of-the-art generative models for robot trajectory and motion generation",
            "Develop vision-conditioned models that map sensory input to robot actions",
            "Implement whole-body motion generation systems for humanoid robots",
            "Deploy and optimize learning-based trajectory generation on robotic platforms",
            "Collaborate with research and engineering teams to push real-world humanoid capabilities",
            "Work with GPU-based simulation environments to validate and scale models"
        ],
        "Required Skills and Qualifications": [
            "Master’s or PhD in Machine Learning, Robotics, Computer Vision, or related field",
            "Hands-on experience training generative models (diffusion, flow matching, or transformer-based)",
            "Strong proficiency in Python and PyTorch",
            "Experience with robot learning, imitation learning, or motion generation systems",
            "Solid understanding of modern machine learning architectures",
            "Proven research experience or strong project portfolio in relevant domains"
        ],
        "Preferred Qualifications": [
            "Publications in top-tier conferences (CVPR, ICCV, ECCV, SIGGRAPH, RSS, CoRL)",
            "Experience with multimodal generative models",
            "Knowledge of human motion generation or neural avatar systems",
            "Experience with simulation platforms like NVIDIA Omniverse or similar",
            "Familiarity with vision-based action prediction from egocentric perspectives",
            "Experience fine-tuning foundation models for motion or robotics tasks"
        ]
    },
    "AI Data Engineer (Human)": {
        "Description": "Join our AI team to build the data backbone that powers intelligent robots. You will design scalable data systems that enable machines to understand, learn, and interact with the real world. Working across robotics, machine learning, and data infrastructure, you will play a key role in shaping how data drives perception, decision-making, and adaptive behavior in next-generation systems.",
        "Job Type": "Full-time",
        "Location": "On-site (Bangalore, India)",
        "Key Responsibilities": [
            "Design, implement, and maintain scalable ETL data pipelines",
            "Build and optimize data models for robotics and AI applications",
            "Ensure data quality, governance, and security across data platforms",
            "Develop data workflows using streaming and large-scale processing systems",
            "Collaborate with cross-functional teams to deliver high-quality datasets",
            "Evaluate and integrate modern data engineering tools and best practices",
            "Support dataset curation and pipeline reliability for AI model training"
        ],
        "Required Skills and Qualifications": [
            "Master’s degree in Computer Science, Information Systems, or related field",
            "7+ years of experience in data engineering or similar roles",
            "Strong programming skills in Python and SQL",
            "Experience with big data technologies such as Spark, Kafka, and Airflow",
            "Familiarity with NoSQL databases (e.g., MongoDB)",
            "Cloud experience with AWS, Azure, or GCP",
            "Experience with data lake and data warehouse architectures",
            "Proficiency in containerization and orchestration tools like Docker and Kubernetes",
            "Strong problem-solving and debugging skills",
            "Fluent in English; German proficiency is a plus"
        ],
        "Preferred Qualifications": [
            "Experience working with robotics or AI/ML data pipelines",
            "Knowledge of large-scale dataset curation for machine learning",
            "Familiarity with multimodal data (vision, sensor, or time-series)",
            "Experience optimizing pipelines for real-time or near real-time systems",
            "Strong understanding of data lifecycle management in AI systems"
        ]
    },
    "Business Operations": {
        "Description": "Join us to drive high-impact business execution at the intersection of AI, robotics, and real-world deployment. This role works closely with founders and cross-functional teams to identify critical problems, structure solutions, and execute initiatives that scale the company’s operations, partnerships, and infrastructure.",
        "Job Type": "Full-time",
        "Location": "Flexible / On-site (Bangalore, India)",
        "Key Responsibilities": [
            "Own and execute cross-functional projects with high ambiguity and measurable business impact",
            "Source, negotiate, and manage partnerships related to data, compute, and infrastructure",
            "Support deployment initiatives including opportunity sourcing, contract structuring, and pricing strategy",
            "Drive internal scaling efforts such as office expansion, international operations, and company planning",
            "Prepare investor updates, board materials, and strategic analyses",
            "Act as an execution partner to founders, translating priorities into actionable outcomes",
            "Collaborate across research, engineering, operations, finance, and external partners"
        ],
        "Required Skills and Qualifications": [
            "Strong analytical and strategic thinking with a bias toward execution",
            "Ability to operate independently in ambiguous, fast-paced environments",
            "Basic financial and commercial understanding (contracts, pricing, trade-offs)",
            "Excellent written and verbal communication skills",
            "Strong prioritization skills with the ability to focus on high-leverage work",
            "Collaborative mindset with respect for technical and research-driven teams"
        ],
        "Preferred Qualifications": [
            "Background in consulting, venture capital, private equity, or finance",
            "Experience negotiating vendor, data, or infrastructure agreements",
            "Exposure to high-growth startups or rapidly scaling environments",
            "Experience with international operations or cross-border projects",
            "Familiarity with AI, robotics, or deep-tech industries"
        ]
    },
    "Forward Deployed Robotics Engineer": {
        "Description": "Join Rilith to support and maintain real-world robotic deployments across warehouse and data-collection environments. As a forward-deployed engineer, you will act as the first responder for technical issues, ensuring high fleet uptime by diagnosing, analyzing, and resolving hardware and software challenges in live systems.",
        "Job Type": "Full-time",
        "Location": "On-site / Field-based",
        "Key Responsibilities": [
            "Act as the primary technical triage point for robot fleet issues, managing and prioritizing incoming tickets",
            "Diagnose and classify issues across hardware, software, and operational domains",
            "Perform on-site inspections and functional testing to reproduce and validate issues",
            "Analyze telemetry, sensor data, and system logs to identify root causes",
            "Conduct failure analysis and root cause investigations for complex system issues",
            "Collaborate with hardware and software teams to resolve and prevent recurring problems",
            "Identify patterns across fleet issues and provide insights for system reliability improvements",
            "Maintain clear and structured documentation for diagnostics and escalations",
            "Track fleet health metrics and report trends to leadership",
            "Continuously improve troubleshooting processes and diagnostic procedures"
        ],
        "Required Skills and Qualifications": [
            "Bachelor’s degree in Robotics, Mechatronics, Systems Engineering, or equivalent experience",
            "Hands-on experience debugging electromechanical systems (actuators, PCBs, sensors, wiring, communication hardware)",
            "Experience with log analysis and scripting (Python or Bash)",
            "Strong understanding of integrated mechanical, electrical, and software systems",
            "Excellent written and verbal communication skills",
            "Minimum 2 years of experience in system debugging and root cause analysis"
        ],
        "Preferred Qualifications": [
            "Experience working with multi-robot fleets or warehouse automation systems",
            "Exposure to field robotics deployments or real-world robotic operations",
            "Strong troubleshooting mindset in fast-paced operational environments",
            "Familiarity with reliability engineering and system performance optimization"
        ]
    },
    "ML Infrastructure Engineer": {
        "Description": "Join Rilith to build and scale the infrastructure that powers large-scale AI model training. You will develop robust systems for distributed training, optimize performance across GPU/TPU clusters, and enable researchers to efficiently move from experimentation to production-grade training pipelines.",
        "Job Type": "Full-time",
        "Location": "On-site (Bangalore, India)/ Hybrid",
        "Key Responsibilities": [
            "Design, implement, and maintain infrastructure for large-scale model training and inference",
            "Build and manage systems for job scheduling, orchestration, checkpointing, and logging",
            "Scale distributed training workloads across GPU and TPU clusters",
            "Optimize training performance including memory usage, throughput, and device utilization",
            "Develop tools and abstractions for launching, monitoring, debugging, and reproducing experiments",
            "Manage cloud-based compute resources to ensure efficiency and cost control",
            "Collaborate with researchers to translate experimental needs into scalable infrastructure",
            "Contribute to core training pipelines and model code to support new architectures and modalities"
        ],
        "Required Skills and Qualifications": [
            "Strong software engineering fundamentals with experience in ML infrastructure or platform development",
            "Hands-on experience with large-scale model training using JAX or PyTorch",
            "Understanding of distributed training systems, multi-node setups, and data pipelines",
            "Experience with cloud platforms and orchestration tools (Kubernetes, SLURM, GCP, AWS)",
            "Ability to debug and optimize performance across the ML training stack",
            "Strong communication skills and ownership mindset"
        ],
        "Preferred Qualifications": [
            "Deep understanding of ML systems, compilers, or runtime optimization",
            "Experience with GPU/TPU performance tuning and low-level optimization",
            "Background in robotics, multimodal AI, or foundation models",
            "Experience designing scalable abstractions for research and production environments",
            "Familiarity with building reliable and reproducible ML training workflows"
        ]
    },
    "Robot Operator": {
        "Description": "Join Rilith to directly train the next generation of intelligent robots through high-quality demonstration data. As a Robot Operator, you will teleoperate robotic systems to perform real-world tasks, generating the datasets that power AI models for physical intelligence and human-robot interaction.",
        "Job Type": "Full-time",
        "Location": "On-site (Bangalore, India)",
        "Key Responsibilities": [
            "Teleoperate robotic arms to perform a wide range of real-world tasks",
            "Guide robot movements using manual control systems or motion mirroring techniques",
            "Execute tasks such as object manipulation, sorting, assembly, and household activities",
            "Maintain high standards for data quality, consistency, and accuracy",
            "Meet defined data collection metrics for volume and performance",
            "Review and annotate robot task recordings to improve dataset quality",
            "Provide feedback on robot behavior and system performance",
            "Assist with equipment setup and support operational workflows",
            "Contribute to process improvements for efficient data collection"
        ],
        "Required Skills and Qualifications": [
            "Strong attention to detail and ability to maintain high-quality output",
            "Good hand-eye coordination and manual dexterity",
            "Ability to perform repetitive, precision-focused tasks",
            "Physical capability to stand and work for extended periods",
            "Interest in AI, robotics, or advanced technology",
            "Reliable and consistent performance in metrics-driven environments"
        ],
        "Preferred Qualifications": [
            "Experience with robotics systems, automation, or teleoperation",
            "Background in manufacturing, assembly, or lab-based work",
            "Familiarity with AI/ML concepts or data collection workflows",
            "Experience with gaming controllers or simulation environments",
            "Comfort working in fast-paced, team-oriented settings"
        ]
    },
    "Product Manager - Developer Tools": {
        "Description": "Own and shape the developer experience for deploying AI software onto humanoid robots. This role sits at the intersection of engineering and customers, building the tools, SDKs, and workflows that enable seamless integration, testing, and deployment across robotic platforms.",
        "Job Type": "Full-time",
        "Location": "On-site (Bangalore, India)",
        "Key Responsibilities": [
            "Own the product roadmap for developer tooling including SDKs, APIs, CLI tools, GUIs, and integration frameworks",
            "Work closely with customer engineering teams to understand integration workflows, constraints, and pain points",
            "Translate real-world feedback into product requirements and tooling improvements",
            "Define requirements, acceptance criteria, and release plans for developer tools",
            "Get hands-on with robots to run integrations, reproduce issues, and validate tooling performance",
            "Drive release processes including documentation, versioning, and changelog communication",
            "Monitor tool adoption and usage to prioritize product backlog effectively",
            "Build and maintain developer documentation, tutorials, and reference architectures"
        ],
        "Required Skills and Qualifications": [
            "4+ years of product management experience for developer-facing products (SDKs, APIs, or platforms)",
            "Strong technical foundation with ability to read C++ code and work in terminal environments",
            "Hands-on experience with hardware, robotics, embedded systems, or similar domains",
            "Experience working with external developers or B2B technical customers",
            "Willingness to travel to customer sites across regions",
            "Excellent written and verbal communication skills",
            "Ability to operate in fast-paced, ambiguous startup environments"
        ],
        "Preferred Qualifications": [
            "Experience in robotics, computer vision, or motion planning",
            "Familiarity with AI/ML deployment pipelines",
            "Experience supporting integrations with third-party hardware platforms",
            "Strong understanding of developer experience (DX) design principles"
        ]
    },    

    "Face Collection": {
        "Description": "Join Rilith as a contributor to help build diverse facial datasets representing a range of skin tones for AI and machine learning model training. This remote opportunity is open to individuals in eligible countries who want to contribute to real-world AI development. Record videos using a device you have, such as a laptop, mobile phone, or tablet, in lighting conditions and indoor or outdoor environments where you feel comfortable. No prior experience or spoken language skills are required. The project involves video recording only, with no audio or speech required. Your contribution will help support the development and training of AI models.",
        "Job Type": "Flexible / No Daily Commitment",
        "Location": "Remote (India, Indonesia, Suriname, Brazil, Mexico, Australia, Trinidad and Tobago, Malawi)",
        "Key Responsibilities": [
            "Record videos for facial datasets used in AI and machine learning model training",
            "Use an available device, such as a laptop, mobile phone, or tablet, to record videos",
            "Record in indoor or outdoor environments, using lighting conditions in which you feel comfortable",
            "Ensure that all submitted recordings feature a real human and do not contain AI-generated content",
            "Follow the project's video recording instructions and submission guidelines",
            "Complete recording tasks according to your availability, without a fixed daily commitment"
        ],
        "Required Skills and Qualifications": [
            "No prior experience required",
            "Must be located in an eligible country: India, Indonesia, Suriname, Brazil, Mexico, Australia, Trinidad and Tobago, or Malawi",
            "Access to a device capable of recording video, such as a laptop, desktop computer, mobile phone, or tablet",
            "Ability to record and submit videos according to the project guidelines",
            "No language requirement, as no audio or speech is required",
            "Willingness to provide genuine recordings featuring a real human, not AI-generated content"
        ],
        "Preferred Qualifications": [
            "Ability to follow recording instructions carefully",
            "Attention to detail when capturing and submitting video recordings",
            "Willingness to contribute according to your availability"
        ]
    },

    
    "Egocentric Video - Household": {
        "Description": "Join Rilith in building one of the world's most comprehensive first-person video datasets for AI and robotics research. We are partnering with students, working professionals, and homemakers to record everyday activities through first-person (egocentric) videos. Your role is simple: record short videos of your normal routine at home or work using a head-mounted phone strap. Activities may include cooking, cleaning, laundry, warehouse operations, retail activities, and more. No acting, scripts, or prior experience are required. Your contribution will help train the intelligent systems of tomorrow.",
        "Job Type": "Part-Time / Flexible",
        "Location": "India (Remote)",
        "Key Responsibilities": [
            "Record first-person (egocentric) videos of everyday household or workplace activities",
            "Capture natural daily tasks such as cooking, cleaning, laundry, and other routine activities",
            "Record relevant workplace activities, including warehouse operations and retail tasks, where applicable",
            "Use a head-mounted phone strap to capture videos from a first-person perspective",
            "Follow the project's video recording guidelines to ensure the quality and usability of recordings",
            "Fit recording activities around your existing daily routine"
        ],
        "Required Skills and Qualifications": [
            "No prior experience required; students, working professionals, and homemakers are welcome",
            "Access to an iPhone 12 through iPhone 18, including all variants",
            "Ability to record videos of everyday activities using a head-mounted phone strap",
            "No language requirement, as the task involves recording only and no speech is needed",
            "Ability to follow recording instructions and project guidelines"
        ],
        "Preferred Qualifications": [
            "Willingness to contribute recordings consistently on a flexible schedule",
            "Ability to capture a variety of everyday household or workplace activities",
            "Attention to detail when following video recording requirements"
        ]
    },
    
    "Egocentric Video - Commercial": {
        "Description": "Join Rilith AI (DataWorkLab) as a contributor to an ongoing AI and robotics research project. This flexible, part-time opportunity is open to individuals working in commercial environments who can record short first-person (egocentric) videos of their hands while performing real tasks at their current workplace. The recordings will help train next-generation AI and robotics systems to better understand how people interact with the physical world. No prior experience is required, and no audio or speech is needed. The project focuses exclusively on hands and task footage.",
        "Job Type": "Part-Time / Flexible",
        "Location": "Remote (US, Canada, Mexico, Brazil, Colombia, and Argentina)",
        "Key Responsibilities": [
            "Record first-person (egocentric) videos showing your hands while performing real tasks at your current workplace",
            "Capture everyday work activities in eligible commercial, industrial, service, or trade environments",
            "Perform and record tasks naturally as part of your regular work routine",
            "Use a compatible smartphone to capture task footage according to project guidelines",
            "Ensure recordings focus on hands and task activities, without requiring audio or speech",
            "Follow the project's recording instructions and data quality requirements"
        ],
        "Required Skills and Qualifications": [
            "No prior experience in AI, robotics, or data collection required",
            "Currently working in one of the eligible industries or workplace environments",
            "Must reside in the United States, Canada, Mexico, Brazil, Colombia, or Argentina",
            "Must have a compatible smartphone: iPhone 12 or newer, excluding iPhone 16e and 17e; Google Pixel 6 or newer; or Samsung Galaxy S21 or newer",
            "Ability to record first-person videos of hands performing real workplace tasks",
            "Willingness to follow project recording and submission guidelines"
        ],
        "Preferred Qualifications": [
            "Experience performing hands-on tasks in commercial, industrial, service, or trade environments",
            "Ability to capture a variety of relevant workplace activities",
            "Attention to detail when recording task footage and following project requirements",
            "Willingness to contribute on an ongoing, flexible schedule"
        ]
    },

};
        
