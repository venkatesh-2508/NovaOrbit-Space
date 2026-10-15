import { DisasterScenario, FeatureItem, StepItem, StakeholderItem, ImpactItem } from '../types';

export const COMPANY_INFO = {
  name: 'NovaOrbit Space',
  tagline: 'AI + Satellite Intelligence for a Safer Earth',
  mission:
    'Our mission is to harness satellite technology and artificial intelligence to improve disaster preparedness, enable faster emergency response, protect vulnerable communities, and build a safer, more resilient future.',
  vision:
    'Our vision is to make disaster intelligence more accessible and actionable through space technology and artificial intelligence.',
  status: 'Emerging SpaceTech Venture · Prototype Development',
  initiative: 'Developed in association with the Wadhwani Foundation Entrepreneurship Program',
  contactEmail: 'contact@novaorbitspace.com',
  location: 'Global Remote / SpaceTech Innovation Lab',
};

export const PROBLEM_POINTS = [
  {
    number: '01',
    title: 'Fragmented & Siloed Data Sources',
    description:
      'Disaster managers are forced to manually cross-reference disconnected feeds from meteorological agencies, optical satellites, hydrological gauges, and local municipal databases during active crises.',
    consequence: 'Crucial hours are lost parsing incompatible formats and contradictory telemetry.',
  },
  {
    number: '02',
    title: 'Critical Latency in Disaster Detection',
    description:
      'Conventional satellite imagery processing often takes 24 to 72 hours to reach ground teams, rendering post-event maps obsolete for urgent evacuation and life-saving rescue maneuvers.',
    consequence: 'First responders arrive without clear knowledge of collapsed bridges or severed access routes.',
  },
  {
    number: '03',
    title: 'Vulnerability Blind Spots',
    description:
      'Marginalized settlements, informal housing belts, and rural agrarian populations are frequently missing from high-level catastrophe risk models, leading to severe under-protection.',
    consequence: 'Resource deployment disproportionately prioritizes documented assets over vulnerable human lives.',
  },
  {
    number: '04',
    title: 'Cognitive Overload in Emergency Rooms',
    description:
      'During extreme floods, wildfires, or cyclone landfalls, command centers receive millions of raw telemetry rows without synthesized operational priorities or clear action guidance.',
    consequence: 'Commanders experience analysis paralysis when rapid decisions make the difference between survival and catastrophe.',
  },
];

export const SOLUTION_PILLARS = [
  {
    title: 'Multi-Source Satellite Ingestion',
    category: 'Ingestion Engine',
    description:
      'Automated pipeline harmonizing synthetic aperture radar (SAR for all-weather/night imaging), optical multispectral imagery, and real-time numerical weather prediction feeds.',
    metric: 'Optical + SAR + Hydrology',
  },
  {
    title: 'NovaCore AI Geo-Inference',
    category: 'Analytical Core',
    description:
      'Trained deep learning vision models segment inundation perimeters, calculate runoff velocity vectors, detect thermal heat anomalies, and forecast hazard progression.',
    metric: 'Automated Computer Vision',
  },
  {
    title: 'Actionable Preparedness Intelligence',
    category: 'Decision Layer',
    description:
      'Transforms complex geospatial telemetry into straightforward hazard boundary polygons, priority evacuation corridors, and targeted agency briefings.',
    metric: 'Unified Tactical GIS',
  },
];

export const KEY_FEATURES: FeatureItem[] = [
  {
    id: 'satellite-monitoring',
    title: 'Satellite and Environmental Monitoring',
    tagline: 'Continuous Earth observation',
    description:
      'Harmonizes multispectral optical satellites, synthetic aperture radar (SAR), and atmospheric sensors to monitor terrestrial conditions through cloud cover and darkness.',
    capabilities: [
      'Day/night radar penetration through severe cloud decks',
      'Surface moisture & vegetative water stress tracking',
      'Automated orbital pass ingestion pipeline',
    ],
    icon: 'Satellite',
  },
  {
    id: 'ai-risk-assessment',
    title: 'AI-Based Disaster Risk Assessment',
    tagline: 'Predictive machine intelligence',
    description:
      'Deep learning models analyze terrain slope, soil saturation, drainage capacity, and weather dynamics to compute precise multi-tier hazard probabilities before landfall.',
    capabilities: [
      'Convolutional neural network hazard segmentation',
      'Hydrological watershed runoff simulation',
      'Continuous anomaly detection across seasonal baselines',
    ],
    icon: 'Cpu',
  },
  {
    id: 'vulnerable-area-id',
    title: 'Vulnerable Area Identification',
    tagline: 'Granular community protection',
    description:
      'Cross-references geographical hazard zones with population density, building materials, healthcare facility locations, and low-lying topography to isolate high-risk settlements.',
    capabilities: [
      'High-resolution demographic vulnerability scoring',
      'Critical infrastructure exposure index',
      'Isolation risk mapping for cut-off communities',
    ],
    icon: 'MapPin',
  },
  {
    id: 'early-risk-alerts',
    title: 'Early-Risk Alerts',
    tagline: 'Timely warning dissemination',
    description:
      'Generates automated, location-specific alert bulletins prior to hazard escalation, giving municipal and regional teams actionable lead time to execute proactive evacuations.',
    capabilities: [
      'Configurable hazard threshold triggers',
      'Multi-channel dispatch (SMS, Webhook, Tactical API)',
      'Escalation alerts for rapid-onset flash events',
    ],
    icon: 'BellRing',
  },
  {
    id: 'interactive-gis-maps',
    title: 'Interactive GIS Risk Maps',
    tagline: 'Operational spatial awareness',
    description:
      'High-performance browser-based GIS interface allowing field teams to overlay live flood extents, cyclone wind cones, road networks, and elevation contours seamlessly.',
    capabilities: [
      'Vector tile rendering with multi-layer toggles',
      'Topographic elevation profile analysis',
      'Cross-platform mobile and desktop field accessibility',
    ],
    icon: 'Layers',
  },
  {
    id: 'disaster-reports',
    title: 'Disaster Intelligence Reports',
    tagline: 'One-click executive summaries',
    description:
      'Synthesizes complex geospatial and meteorological telemetry into standardized, exportable situation briefs designed for ministerial review and field briefing.',
    capabilities: [
      'Automated PDF situation reports (SitReps)',
      'Quantified infrastructure damage exposure estimates',
      'Standardized UN-SPIDER & NDMA report structures',
    ],
    icon: 'FileText',
  },
  {
    id: 'weather-integration',
    title: 'Weather Data Integration',
    tagline: 'Real-time meteorological fusion',
    description:
      'Direct synchronization with global atmospheric models (ECMWF, GFS, NOAA) and regional Doppler radar arrays to monitor precipitation intensity and atmospheric pressure shifts.',
    capabilities: [
      'Atmospheric moisture vector tracking',
      'Precipitation accumulation threshold modeling',
      'Cyclone track path ensemble projections',
    ],
    icon: 'CloudRain',
  },
  {
    id: 'decision-dashboards',
    title: 'Decision-Support Dashboards',
    tagline: 'Unified command console',
    description:
      'Centralized command interface tailored for emergency directors, providing clear incident triage, resource allocation recommendations, and status monitoring.',
    capabilities: [
      'Real-time incident priority queues',
      'Logistics and evacuation staging checklists',
      'Role-based permissions for inter-agency coordination',
    ],
    icon: 'LayoutDashboard',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: 'Step 01',
    title: 'Collect Satellite, Weather, and Environmental Data',
    description:
      'NovaOrbit automatically ingests multi-spectral optical imagery, synthetic aperture radar (SAR), elevation models, and real-time meteorological forecasts from public and commercial orbital constellations.',
    details: [
      'Sentinel, Landsat & commercial high-resolution imagery',
      'Global weather forecast ensembles & ground station readings',
      'Digital elevation models (DEM) and hydrological contours',
    ],
  },
  {
    step: 'Step 02',
    title: 'Analyze Information Using AI and Machine Learning',
    description:
      'Our specialized computer vision and geospatial neural networks process raw orbital pixels, stripping atmospheric interference and computing changes against historical terrain baselines.',
    details: [
      'Automated cloud masking and surface water extraction',
      'Soil moisture indices and vegetation anomaly calculation',
      'Predictive modeling of water runoff and surge dynamics',
    ],
  },
  {
    step: 'Step 03',
    title: 'Identify Potential Risks and Vulnerable Areas',
    description:
      'The platform overlays projected hazard perimeters onto demographic data, land-use maps, and critical infrastructure to flag the exact neighborhoods and assets under threat.',
    details: [
      'Identification of unmapped or informal residential clusters',
      'Assessment of bridge, hospital, and electrical grid exposure',
      'Classification of evacuation route accessibility',
    ],
  },
  {
    step: 'Step 04',
    title: 'Present Actionable Insights Through Maps, Dashboards, and Alerts',
    description:
      'Commanders, field responders, and planners receive clear, synthesized situation briefings, interactive GIS maps, and automated priority alerts to guide timely interventions.',
    details: [
      'Dynamic web GIS risk maps accessible across all devices',
      'Exportable situation reports (SitReps) for leadership',
      'Early-warning alerts sent directly to responder teams',
    ],
  },
];

export const WHO_WE_SERVE_LIST: StakeholderItem[] = [
  {
    id: 'government',
    title: 'Government Agencies',
    subtitle: 'Ministries of Environment, Urban Planning & Infrastructure',
    description:
      'Enables state and national ministries to integrate long-term climate vulnerability mapping into zoning laws, flood mitigation defenses, and infrastructure investments.',
    keyNeeds: [
      'Comprehensive territorial risk baselines',
      'Objective post-disaster loss verification',
      'Inter-departmental alignment on single source of truth',
    ],
    platformValue:
      'Reduces bureaucratic delays by providing verifiable, satellite-backed evidence for regional disaster resilience planning.',
  },
  {
    id: 'disaster-management',
    title: 'Disaster Management Authorities',
    subtitle: 'National & Regional Emergency Management Centers (e.g., NDMA, FEMA equivalents)',
    description:
      'Equips disaster operations directors with real-time risk triage, automated hazard boundary alerts, and standardized situation reports during high-stress crises.',
    keyNeeds: [
      'Rapid situational awareness before and during events',
      'Automated multi-hazard monitoring across large provinces',
      'Streamlined communication with district coordinators',
    ],
    platformValue:
      'Cuts decision latency by transforming overwhelming telemetry into actionable evacuation and shelter deployment directives.',
  },
  {
    id: 'emergency-response',
    title: 'Emergency Response Teams',
    subtitle: 'First Responders, Civil Defense, Fire & Rescue Units',
    description:
      'Supplies tactical frontline units with passable road corridors, submerged bridge alerts, and pinpoint coordinates of stranded or high-risk communities.',
    keyNeeds: [
      'Passable navigation routes avoiding submerged infrastructure',
      'Exact geographic locations of isolated habitations',
      'Low-bandwidth mobile map accessibility in the field',
    ],
    platformValue:
      'Protects responders and speeds up rescue missions by highlighting inaccessible zones and secondary hazard pockets.',
  },
  {
    id: 'environmental-orgs',
    title: 'Environmental Monitoring Organizations',
    subtitle: 'Conservation Groups, River Basin Commissions & Climate NGOs',
    description:
      'Assists environmental stewards in tracking wetland degradation, deforestation-induced landslide risks, and agricultural drought indices over multi-year periods.',
    keyNeeds: [
      'Long-term ecological baseline monitoring',
      'Early signals of watershed erosion and aquifer depletion',
      'Transparent, audit-ready environmental indicators',
    ],
    platformValue:
      'Empowers proactive environmental stewardship with high-frequency space observation before irreversible damage occurs.',
  },
  {
    id: 'research',
    title: 'Research Institutions',
    subtitle: 'Earth Science Laboratories, Aerospace Institutes & Universities',
    description:
      'Provides researchers with standardized, pre-processed datasets to calibrate hydrological models, train disaster AI algorithms, and publish reproducible findings.',
    keyNeeds: [
      'Standardized multispectral satellite datasets',
      'Ground-truth calibration tools and validation pipelines',
      'Collaborative academic licensing and open APIs',
    ],
    platformValue:
      'Accelerates scientific innovation by eliminating repetitive raw sensor processing and data pipeline engineering.',
  },
];

export const IMPACT_POINTS: ImpactItem[] = [
  {
    title: 'Improve Disaster Preparedness',
    focusArea: 'Proactive Mobilization',
    description:
      'Transitioning emergency management from reactive relief to proactive pre-positioning of shelters, medical supplies, and flood barriers before landfall.',
  },
  {
    title: 'Support Faster Emergency Response',
    focusArea: 'Response Latency',
    description:
      'Accelerating situational awareness delivery to ground commanders from multiple days to minutes following satellite pass acquisition.',
  },
  {
    title: 'Help Protect Vulnerable Communities',
    focusArea: 'Equitable Resilience',
    description:
      'Ensuring low-income settlements and remote rural hamlets receive the same high-resolution early hazard detection as metropolitan centers.',
  },
  {
    title: 'Reduce Potential Economic Losses',
    focusArea: 'Economic Safeguard',
    description:
      'Mitigating supply chain collapses, industrial shutdowns, and agricultural losses through timely flood gates management and asset protection.',
  },
  {
    title: 'Improve Environmental Monitoring',
    focusArea: 'Ecosystem Health',
    description:
      'Tracking fragile river basins, coastal mangrove buffers, and forest canopies to combat long-term climate vulnerability and land degradation.',
  },
  {
    title: 'Support Data-Driven Decision-Making',
    focusArea: 'Governance Rigor',
    description:
      'Providing civil defense leadership and policymakers with objective, verifiable space intelligence rather than fragmented anecdotal estimates.',
  },
];

export const SAMPLE_DISASTER_SCENARIOS: DisasterScenario[] = [
  {
    id: 'scenario-flood',
    name: 'Mekong Coastal River Basin Inundation',
    type: 'flood',
    location: 'Southern Delta Region (Mekong / Tiền River Corridor)',
    coordinates: '10.2500° N, 105.8000° E',
    severityLevel: 'Critical',
    affectedPopulationEstimate: '184,000 residents in direct hazard perimeter',
    satelliteBands: ['SAR Sentinel-1 (C-Band)', 'Sentinel-2 (RGB-NIR)', 'SRTM Elevation'],
    keyRiskIndicator: 'Water level +3.4m above seasonal threshold · Soil moisture 94%',
    summary:
      'Heavy monsoonal inflow combined with coastal high-tide surge has triggered critical overtopping along secondary river channels and low-lying agricultural zones.',
    hotspots: [
      {
        id: 'hs-1',
        label: 'Vinh Long Riverbend Dyke Breach',
        x: 38,
        y: 42,
        details: 'Secondary levee breach causing 1.8m rapid inundation across residential quarter.',
        evacuationPriority: 'Immediate',
      },
      {
        id: 'hs-2',
        label: 'Can Tho Submerged Transit Link',
        x: 27,
        y: 53,
        details: 'Primary transit artery cut off by 60cm water flow; emergency reroute active.',
        evacuationPriority: 'Immediate',
      },
      {
        id: 'hs-3',
        label: 'My Tho Agricultural Polder',
        x: 48,
        y: 31,
        details: 'Aquaculture containment threatened; flood gate relief diversion pending.',
        evacuationPriority: 'Standby',
      },
      {
        id: 'hs-4',
        label: 'Coastal Mangrove Surge Buffer',
        x: 65,
        y: 62,
        details: 'Natural barrier holding peak surge; monitoring estuarine overflow.',
        evacuationPriority: 'Advisory',
      },
    ],
    mitigationRecommendation:
      'Immediate deployment of inflatable flood barriers at Vinh Long bottleneck; reroute heavy evacuation vehicles through western elevated highway corridor.',
  },
  {
    id: 'scenario-cyclone',
    name: 'Bay of Bengal Super Cyclone Landfall',
    type: 'cyclone',
    location: 'Eastern Littoral Delta & Coastal Belts',
    coordinates: '17.4800° N, 83.3200° E',
    severityLevel: 'Severe',
    affectedPopulationEstimate: '420,000 coastal residents across 6 districts',
    satelliteBands: ['GOES/Himawari Thermal IR', 'Scatterometer Winds', 'SAR Radar'],
    keyRiskIndicator: 'Sustained winds 165 km/h · Projected storm surge 2.8m - 3.5m',
    summary:
      'Category 4 equivalent tropical cyclonic storm approaching eastern coastline with expanding eye-wall convection and heavy antecedent rainfall.',
    hotspots: [
      {
        id: 'hs-c1',
        label: 'Estuary Fishing Harbor Landfall',
        x: 52,
        y: 48,
        details: 'Expected primary surge landfall within 6 hours; small craft ban mandatory.',
        evacuationPriority: 'Immediate',
      },
      {
        id: 'hs-c2',
        label: 'District Hospital & Backup Generator Ward',
        x: 41,
        y: 36,
        details: 'Low-lying medical facility at risk of ground floor inundation.',
        evacuationPriority: 'Immediate',
      },
      {
        id: 'hs-c3',
        label: 'Shelter Hub Alpha (Elevated School)',
        x: 32,
        y: 28,
        details: 'Designated cyclone shelter reached 78% capacity; relief supplies confirmed.',
        evacuationPriority: 'Standby',
      },
    ],
    mitigationRecommendation:
      'Enforce mandatory evacuation within 5km coastal strip; pre-stage amphibian rescue units at inland staging depot.',
  },
  {
    id: 'scenario-wildfire',
    name: 'High-Altitude Forest Basin Wildfire Perimeter',
    type: 'wildfire',
    location: 'Northern Mountain Dry Forest Corridor',
    coordinates: '31.1048° N, 77.1734° E',
    severityLevel: 'High',
    affectedPopulationEstimate: '32,500 valley residents & wildlife sanctuary buffer',
    satelliteBands: ['MODIS/VIIRS Active Thermal', 'Sentinel-2 SWIR', 'Wind Vector Profiler'],
    keyRiskIndicator: 'Thermal Fire Radiative Power (FRP) 420 MW · Wind 45 km/h downslope',
    summary:
      'Fast-spreading crown fire fueled by low relative humidity (14%) and gusting valley winds threatens foothill settlements and communications towers.',
    hotspots: [
      {
        id: 'hs-w1',
        label: 'Northern Ridge Active Front',
        x: 62,
        y: 25,
        details: 'Rapid forward advancement rate: 450 meters/hr through pine dry canopy.',
        evacuationPriority: 'Immediate',
      },
      {
        id: 'hs-w2',
        label: 'Valley Power Grid Substation',
        x: 45,
        y: 44,
        details: 'Smoke particle ionization risk; defensible space perimeter established by forestry crews.',
        evacuationPriority: 'Standby',
      },
      {
        id: 'hs-w3',
        label: 'Foothill Settlement Access Road',
        x: 35,
        y: 60,
        details: 'Heavy smoke reducing visibility below 50m; single-lane escort required.',
        evacuationPriority: 'Standby',
      },
    ],
    mitigationRecommendation:
      'Prioritize aerial water drops on western ridge flank to protect valley transit corridor; issue respiratory warning to downstream populations.',
  },
  {
    id: 'scenario-drought',
    name: 'Semi-Arid Agrarian Aquifer Depletion',
    type: 'drought',
    location: 'Central Agricultural Plateau',
    coordinates: '15.3173° N, 75.7139° E',
    severityLevel: 'High',
    affectedPopulationEstimate: '850,000 farmers and livestock dependent households',
    satelliteBands: ['GRACE Gravity Anomaly', 'SMAP Soil Moisture', 'NDVI Vegetation'],
    keyRiskIndicator: 'NDVI anomaly -38% below 10-year mean · Deep soil moisture 18%',
    summary:
      'Sub-normal monsoon precipitation over consecutive seasons has reduced reservoir storage to 22% of capacity, threatening upcoming crop cycles.',
    hotspots: [
      {
        id: 'hs-d1',
        label: 'Critical Irrigation Dam Basin',
        x: 40,
        y: 35,
        details: 'Reservoir surface area contracted 44% compared to baseline year.',
        evacuationPriority: 'Advisory',
      },
      {
        id: 'hs-d2',
        label: 'Rain-Fed Millet Belt',
        x: 58,
        y: 52,
        details: 'Widespread crop withering; fodder deficit emergency threshold triggered.',
        evacuationPriority: 'Advisory',
      },
    ],
    mitigationRecommendation:
      'Activate municipal water rationing protocols and release state drought assistance credits for micro-irrigation systems.',
  },
];
