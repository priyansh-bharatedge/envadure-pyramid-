/* ==========================================================================
   PYRAMID WATERPROOFING SERVICES & ENVADURE™
   Project Data Catalog & Technical Specifications Matrix
   ========================================================================== */

const PROJECTS_DATA = [
  // --- RESIDENTIAL PROJECTS (Slide 30) ---
  {
    id: 'oberoi-360-west',
    name: 'Oberoi 360 West',
    city: 'Mumbai',
    category: 'residential',
    categoryLabel: 'Premium Residential',
    img: 'extracted_assets/images/image20.png',
    scope: 'Subterranean Basements, Sky Decks & Podiums',
    specs: 'Pre-applied fully bonded HDPE membranes & multi-tier elastomeric protection',
    summary: 'Ultra-luxury twin tower skyscraper in Worli, Mumbai. One of the tallest and most prestigious residential addresses in India, demanding zero-leakage subterranean basement envelopes and terrace wind-driven rain protection.'
  },
  {
    id: 'lodha-park',
    name: 'Lodha Park',
    city: 'Mumbai',
    category: 'residential',
    categoryLabel: 'Premium Residential',
    img: 'extracted_assets/images/image21.png',
    scope: '17-Acre Master Podium & Deep Basements',
    specs: 'Heavy-duty root-resistant podium landscape membranes & water retaining systems',
    summary: 'Sprawling master-planned residential enclave with active multi-level car parks and extensive elevated green podium gardens requiring fit-for-purpose waterproofing and root barrier shields.'
  },
  {
    id: 'godrej-planet',
    name: 'Godrej Planet',
    city: 'Mumbai',
    category: 'residential',
    categoryLabel: 'Premium Residential',
    img: 'extracted_assets/images/image22.png',
    scope: 'High-Rise Envelopes, Terraces & Wet Areas',
    specs: 'Crack-bridging high-elasticity polymer modified coatings',
    summary: 'Award-winning high-rise residential towers in Mahalaxmi, Mumbai, engineered with specialized envelope systems to withstand high coastal wind, intense monsoon humidity, and thermal expansion cycles.'
  },
  {
    id: 'aparna-sarovar',
    name: 'Aparna Sarovar',
    city: 'Hyderabad',
    category: 'residential',
    categoryLabel: 'Premium Residential',
    img: 'extracted_assets/images/image23.png',
    scope: 'Basements, Driveways & Lake-Adjacent Foundations',
    specs: 'Subterranean hydrostatic barriers and drainage composites',
    summary: 'High-density luxury gated community located adjacent to Nallagandla Lake, requiring engineered subterranean water barriers resistant to fluctuating water tables and soil moisture.'
  },
  {
    id: 'lodha-world-one',
    name: 'Lodha World One',
    city: 'Mumbai',
    category: 'residential',
    categoryLabel: 'Premium Residential',
    img: 'extracted_assets/images/image24.png',
    scope: 'Supertall Tower Basements, Parapets & Wet Areas',
    specs: 'Type A & Type B multi-tier redundant barrier protection',
    summary: 'Iconic 280+ meter supertall skyscraper in Central Mumbai, requiring advanced structural joint waterproofing, expansion joint seals, and high-altitude terrace barrier technologies.'
  },

  // --- COMMERCIAL PROJECTS (Slide 31 & 32) ---
  {
    id: 'surat-diamond-bourse',
    name: 'Surat Diamond Bourse (SDB)',
    city: 'Surat',
    category: 'commercial',
    categoryLabel: 'Commercial Mega-Project',
    img: 'extracted_assets/images/image33.png',
    scope: '35-Acre Subterranean Basement & Interconnected Podiums',
    specs: 'Heavy-duty synthetic polymer membranes & monolithic joint seals',
    summary: 'The world\'s largest office building complex spanning over 35 acres and 7 million sq ft. Required an unprecedented scale of engineered basement waterproofing and interconnecting podium driveways.'
  },
  {
    id: 'amazon-hyd',
    name: 'Amazon Global HQ Campus',
    city: 'Hyderabad',
    category: 'commercial',
    categoryLabel: 'Commercial Tech Campus',
    img: 'extracted_assets/images/image32.png',
    scope: 'Mission-Critical Basements, Data Rooms & Roof Envelopes',
    specs: 'Grade 3 Habitable Dry-Envelope barrier and cold-applied spray elastomeric membranes',
    summary: 'Amazon\'s largest company-owned campus in the world, housing mission-critical server vaults, deep underground parking, and modern architectural terraces with zero water ingress tolerance.'
  },
  {
    id: 'godrej-bkc',
    name: 'Godrej BKC',
    city: 'Mumbai',
    category: 'commercial',
    categoryLabel: 'Commercial Grade-A',
    img: 'extracted_assets/images/image28.png',
    scope: 'Multi-Tier Coastal Basements & Roof Plazas',
    specs: 'Sulfate/chloride resistant membranes & high solar reflective coatings',
    summary: 'Premier LEED Platinum corporate headquarters at Bandra-Kurla Complex with high saline groundwater dynamics and rigorous energy-saving cool roof requirements.'
  },
  {
    id: 'tcs-hinjewadi',
    name: 'TCS Tech Hub Hinjewadi',
    city: 'Pune',
    category: 'commercial',
    categoryLabel: 'Commercial Campus',
    img: 'extracted_assets/images/image27.png',
    scope: 'Multi-Phase Basements, Retaining Walls & Wet Utilities',
    specs: 'Crystalline admixtures, preformed PVC waterstops & spray membranes',
    summary: 'Expansive multi-phase IT campus with heavy retaining walls, extensive underground service networks, and multi-deck vehicular driveways.'
  },
  {
    id: 'mindspace-hyd',
    name: 'Mindspace Cyberabad IT Park',
    city: 'Hyderabad',
    category: 'commercial',
    categoryLabel: 'Commercial IT Park',
    img: 'extracted_assets/images/image30.png',
    scope: 'Integrated Basements, Walkways & Sky Bridges',
    specs: 'Elastomeric liquid membranes & trafficable podium coatings',
    summary: 'Major corporate IT agglomeration comprising multiple high-rise tech towers, deep basement carparks, and high-load commercial vehicle circulation plazas.'
  },
  {
    id: 'mindspace-mumbai',
    name: 'Mindspace Airoli & Malad',
    city: 'Mumbai',
    category: 'commercial',
    categoryLabel: 'Commercial IT Park',
    img: 'extracted_assets/images/image29.png',
    scope: 'Coastal Subterranean Basements & Podiums',
    specs: 'High chemical resistance subterranean sheet membranes',
    summary: 'Large-scale commercial tech parks situated along the creek zone in Mumbai MMR, engineered to combat extreme perched water tables and saline soil conditions.'
  },
  {
    id: 'inorbit-malls',
    name: 'Inorbit Malls (Malad & Vashi)',
    city: 'Mumbai',
    category: 'commercial',
    categoryLabel: 'Commercial Retail',
    img: 'extracted_assets/images/image31.png',
    scope: 'Retail Terraces, Food Court Wet Areas & Basements',
    specs: 'Multi-layer polyurethane liquid membranes & anti-slip waterproofing',
    summary: 'Premier retail and entertainment hubs with massive continuous footfalls, extensive food court plumbing, and high-span roof structures.'
  },
  {
    id: 'candor-techspace',
    name: 'Candor Techspace',
    city: 'Kolkata',
    category: 'commercial',
    categoryLabel: 'Commercial SEZ',
    img: 'extracted_assets/images/image34.png',
    scope: 'Deep Subterranean Foundations & Water Reservoirs',
    specs: 'Subterranean bonded membranes with high alluvial chemical resistance',
    summary: 'Major IT/ITES Special Economic Zone campus in New Town, Kolkata, engineered for high groundwater levels and expansive clay soil profiles.'
  },
  {
    id: 'ongc-delhi',
    name: 'ONGC Corporate Headquarters',
    city: 'New Delhi',
    category: 'commercial',
    categoryLabel: 'Commercial PSU',
    img: 'extracted_assets/images/image36.png',
    scope: '50-Year Structural Lifespan Basements & Terrace Gardens',
    specs: 'Fully bonded composite waterproofing conforming to BIS standards',
    summary: 'Flagship green corporate building for India\'s premier energy PSU, designed for 50+ year design longevity with zero structural remediation requirements.'
  },
  {
    id: 'brigade-magnum',
    name: 'Brigade Magnum',
    city: 'Bengaluru',
    category: 'commercial',
    categoryLabel: 'Commercial Grade-A',
    img: 'extracted_assets/images/image35.png',
    scope: 'Multi-Level Basements & High-Exposure Terraces',
    specs: 'LEED-compliant VOC-free waterproofing systems',
    summary: 'Grade-A tech commercial landmark in Hebbal, Bengaluru, engineered to balance rapid construction sequencing with long-term dry performance.'
  },

  // --- HOSPITALITY PROJECTS (Slide 33) ---
  {
    id: 'itc-grand-chola',
    name: 'ITC Grand Chola',
    city: 'Chennai',
    category: 'hospitality',
    categoryLabel: 'Luxury Hospitality',
    img: 'extracted_assets/images/image38.png',
    scope: 'Swimming Pools, Water Bodies, Luxury Spas & Basements',
    specs: 'Epoxy-polysulphide coatings & chemical resistant pool membranes',
    summary: 'One of the world\'s largest LEED Zero Carbon luxury hotels. Encompasses opulent outdoor water pavilions, high-capacity banquet facilities, and subterranean services.'
  },
  {
    id: 'oberoi-trident',
    name: 'The Oberoi Trident',
    city: 'Mumbai',
    category: 'hospitality',
    categoryLabel: 'Luxury Hospitality',
    img: 'extracted_assets/images/image40.png',
    scope: 'Seafront Basements, Marine Facades & Terraces',
    specs: 'High-salinity marine barrier membranes & elastomeric facade sealants',
    summary: 'Legendary seafront luxury hotel at Marine Drive/Nariman Point, continuously exposed to aggressive Arabian Sea salt sprays, tidal surges, and monsoonal winds.'
  },
  {
    id: 'jw-marriott',
    name: 'JW Marriott Juhu',
    city: 'Mumbai',
    category: 'hospitality',
    categoryLabel: 'Luxury Hospitality',
    img: 'extracted_assets/images/image39.png',
    scope: 'Beachfront Pools, Wet Envelopes & Basement Infrastructure',
    specs: 'Advanced waterborne liquid rubber & flexible cementitious coatings',
    summary: 'Iconic 5-star beachfront resort in Juhu, demanding resilient waterproofing solutions for multi-level lagoon pools, beachside gardens, and kitchen operations.'
  },
  {
    id: 'westin-powai',
    name: 'The Westin Powai Lake',
    city: 'Mumbai',
    category: 'hospitality',
    categoryLabel: 'Luxury Hospitality',
    img: 'extracted_assets/images/image37.png',
    scope: 'Lakeside Podiums, Landscaped Waterways & Ballrooms',
    specs: 'Root barrier drainage composites & continuous membrane waterproofing',
    summary: 'Sprawling lakeside resort hotel featuring complex outdoor tiered landscape podiums, water features, and large underground event banquets.'
  },
  {
    id: 'itc-one-colombo',
    name: 'ITC One & Ratnadipa',
    city: 'Colombo, Sri Lanka',
    category: 'hospitality',
    categoryLabel: 'Overseas Hospitality',
    img: 'extracted_assets/images/image41.png',
    scope: 'Oceanfront High-Rise Basements, Sky Pools & Podiums',
    specs: 'International specification grade membranes engineered for Indian Ocean conditions',
    summary: 'Landmark twin-tower overseas luxury hospitality project on Galle Face Green, Colombo, featuring high-wind elevated infinity pools and deep seaside subterranean foundations.'
  },

  // --- HEALTHCARE PROJECTS (Slide 34) ---
  {
    id: 'medanta-patna',
    name: 'Medanta Hospital',
    city: 'Patna',
    category: 'healthcare',
    categoryLabel: 'Healthcare Multi-Specialty',
    img: 'extracted_assets/images/image45.png',
    scope: 'Zero-Tolerance Diagnostic Bunkers & Critical OT Terraces',
    specs: 'Grade 3 dry-envelope barrier specification with triple redundancy',
    summary: 'Super-specialty medical institute with high-sensitivity linear accelerator bunkers, radiology suites, and ICUs located subterranean where even vapor transmission is prohibited.'
  },
  {
    id: 'medanta-lucknow',
    name: 'Medanta Hospital',
    city: 'Lucknow',
    category: 'healthcare',
    categoryLabel: 'Healthcare Multi-Specialty',
    img: 'extracted_assets/images/image42.png',
    scope: '1000-Bed Medical Campus Basements, Helipad & Service Trenches',
    specs: 'Crack-bridging trafficable coatings & fully bonded foundation barriers',
    summary: 'Large 1000-bed hospital complex with heavy MEP service trenches, emergency ambulance bays, and rooftop helipad requiring specialized waterproofing.'
  },
  {
    id: 'kokilaben-ambani',
    name: 'Kokilaben Dhirubhai Ambani Hospital',
    city: 'Mumbai',
    category: 'healthcare',
    categoryLabel: 'Healthcare Multi-Specialty',
    img: 'extracted_assets/images/image43.png',
    scope: 'Medical Basements, Sterile Suites & Roof Envelopes',
    specs: 'Anti-microbial waterproofing membranes and hygienic joint treatments',
    summary: 'World-class healthcare facility in Andheri, Mumbai, engineered for continuous leak-free hospital operations across sterile operating theatres and subterranean imaging centers.'
  },
  {
    id: 'hinduja-hospital',
    name: 'P.D. Hinduja National Hospital',
    city: 'Mumbai',
    category: 'healthcare',
    categoryLabel: 'Healthcare Multi-Specialty',
    img: 'extracted_assets/images/image44.png',
    scope: 'Coastal Medical Wing Basements & High-Humidity Wet Utilities',
    specs: 'Salt-resistant crystalline systems and high-build elastomeric coatings',
    summary: 'Pioneering healthcare campus located near the Mahim seashore, demanding high chemical and moisture resistance to preserve critical diagnostic equipment.'
  },
  {
    id: 'jupiter-hospital',
    name: 'Jupiter Hospital',
    city: 'Pune',
    category: 'healthcare',
    categoryLabel: 'Healthcare Multi-Specialty',
    img: 'extracted_assets/images/image46.png',
    scope: 'Diagnostic Basements, Terraces & Central Utility Tanks',
    specs: 'Potable water certified tank coatings & basement moisture barriers',
    summary: 'Multi-specialty tertiary care hospital with deep underground diagnostic floors, sterile pharmaceutical storage, and central hospital water reservoirs.'
  },

  // --- INDUSTRIAL PROJECTS (Slide 35) ---
  {
    id: 'serum-institute',
    name: 'Serum Institute of India',
    city: 'Pune',
    category: 'industrial',
    categoryLabel: 'Biotech & Pharma',
    img: 'extracted_assets/images/image51.png',
    scope: 'Vaccine Production Facilities, Cold Rooms & Effluent Tanks',
    specs: 'High chemical resistance coatings & seamless cleanroom moisture barriers',
    summary: 'The world\'s largest vaccine manufacturer by volume. Demanded zero contamination risk, seamless hygiene waterproofing, and chemical-resistant industrial drainage.'
  },
  {
    id: 'biocon-bengaluru',
    name: 'Biocon Park & Research Labs',
    city: 'Bengaluru',
    category: 'industrial',
    categoryLabel: 'Biotech & Pharma',
    img: 'extracted_assets/images/image49.png',
    scope: 'Biopharmaceutical Cleanrooms, Terraces & Secondary Containment',
    specs: 'Heavy-duty polyurea and epoxy resin containment liners',
    summary: 'State-of-the-art biopharmaceutical manufacturing and research center requiring strict VOC compliance, chemical barrier resistance, and sterile environment protection.'
  },
  {
    id: 'samsung-ncr',
    name: 'Samsung Mobile Megaplant',
    city: 'Noida / NCR',
    category: 'industrial',
    categoryLabel: 'Hi-Tech Manufacturing',
    img: 'extracted_assets/images/image50.png',
    scope: 'Massive Industrial Single-Ply Roofs & Vibration-Damped Floors',
    specs: 'Mechanically fastened TPO/PVC membranes & industrial joint systems',
    summary: 'The world\'s largest mobile phone manufacturing facility, demanding rapid installation of extensive industrial roofs and subterranean vibration-isolated foundations.'
  },
  {
    id: 'tata-motors',
    name: 'Tata Motors Manufacturing Plants',
    city: 'Multiple Locations',
    category: 'industrial',
    categoryLabel: 'Automotive Industrial',
    img: 'extracted_assets/images/image47.png',
    scope: 'Vehicle Testing Pits, Paint Shop Basements & Assembly Roofs',
    specs: 'Heavy-duty oil-resistant coatings and expansion joint sealants',
    summary: 'Major automotive manufacturing plants across India requiring heavy-duty floor waterproofing, paint shop water-containment trenches, and robust industrial roof drainage.'
  },
  {
    id: 'tata-cummins',
    name: 'Tata Cummins Engine Plant',
    city: 'Pune',
    category: 'industrial',
    categoryLabel: 'Automotive Industrial',
    img: 'extracted_assets/images/image52.png',
    scope: 'Engine Testing Trenches, Foundations & Roof Envelopes',
    specs: 'Chemical-resistant crystalline and elastomeric protective coatings',
    summary: 'Precision engine manufacturing plant requiring specialized foundation barriers against hydrocarbon ingress, industrial vibration, and roof water egress.'
  },
  {
    id: 'usv-ltd',
    name: 'USV Pharma Facilities',
    city: 'Multiple Locations',
    category: 'industrial',
    categoryLabel: 'Biotech & Pharma',
    img: 'extracted_assets/images/image48.png',
    scope: 'USFDA-Compliant Cleanrooms & Sterile Production Floors',
    specs: 'Solvent-free non-toxic membranes and cleanroom wall waterproofing',
    summary: 'Pharmaceutical manufacturing plants adhering to stringent international USFDA/WHO cGMP hygiene standards for zero moisture migration and fungal resistance.'
  },

  // --- SPORTS & EDUCATION PROJECTS (Slide 36) ---
  {
    id: 'mca-stadium',
    name: 'MCA International Cricket Stadium',
    city: 'Pune',
    category: 'sports',
    categoryLabel: 'Sports Infrastructure',
    img: 'extracted_assets/images/image53.png',
    scope: '37,000-Seat Grandstand Tiers, Player Tunnels & Corporate Boxes',
    specs: 'UV-resistant trafficable elastomeric coatings & movement joint systems',
    summary: 'World-class international cricket stadium with curved grandstand tiers, subterranean player tunnels, and expansive hospitality boxes exposed to extreme seasonal weathering.'
  },
  {
    id: 'iim-nagpur',
    name: 'IIM Nagpur Academic Campus',
    city: 'Nagpur',
    category: 'sports',
    categoryLabel: 'Educational Campus',
    img: 'extracted_assets/images/image55.png',
    scope: '132-Acre Academic Complex, Hostels & Central Library',
    specs: 'Cool-roof reflective thermal membranes & structural podium waterproofing',
    summary: 'National institute campus situated in Central India\'s extreme 48°C heat zone, engineered with thermal synergy cool-roof coatings and sustainable groundwater protection.'
  },
  {
    id: 'mcgm-pool',
    name: 'MCGM Olympic Swimming Complex',
    city: 'Mumbai',
    category: 'sports',
    categoryLabel: 'Sports Infrastructure',
    img: 'extracted_assets/images/image54.png',
    scope: 'Olympic Swimming Pools, Diving Wells & Plant Rooms',
    specs: 'High-build continuous crystalline and chemical-resistant flexible membranes',
    summary: 'Public Olympic-standard aquatic center holding millions of liters of treated chlorinated water under continuous hydrostatic head.'
  },
  {
    id: 'iit-hyderabad',
    name: 'IIT Hyderabad Campus',
    city: 'Hyderabad',
    category: 'sports',
    categoryLabel: 'Educational Campus',
    img: 'extracted_assets/images/image56.png',
    scope: 'Futuristic Academic Blocks, Laboratories & Deep Basements',
    specs: 'Pre-applied bonded membranes and elastomeric expansion joint seals',
    summary: 'Nationally acclaimed campus known for its avant-garde architecture, requiring tailored waterproofing details for complex geometrical cantilevers and underground research halls.'
  }
];

const SEVEN_D_MATRIX_DATA = [
  {
    id: 'dim-1',
    num: '1',
    title: 'Geography & Geotechnical Profile',
    science: 'Analysis of soil geochemistry (pH levels, sulfate /chloride concentrations, etc and hydrological dynamics (static hydraulic pressure vs. dynamic perched water tables).',
    specImpact: 'Choosing a membrane that can withstand high chemical attacks without depolymerizing.'
  },
  {
    id: 'dim-2',
    num: '2',
    title: 'Structural & Asset Usage',
    science: 'Tailoring the dry-envelope requirement based on interior usage classes (e.g., Grade 1 for basements with open parking structures vs. Grade 3 for hyper-sensitive data centers or habitable basements with offices or shops ).',
    specImpact: 'Designing multi-tier redundant barrier systems (Type A barrier + Type B integral + Type C drained protection) for critical zones.'
  },
  {
    id: 'dim-3',
    num: '3',
    title: 'Climate & Microclimate Dynamics',
    science: 'Designing for solar exposure, UV degradation rates, temperature fluctuations, wind-driven rain vectors, and thermal expansion-contraction cycles.',
    specImpact: 'Specifying high-elasticity, crack-bridging liquid membranes in high-thermal fluctuation zones vs. robust sheet membranes for subterranean, temperature-stable basements.'
  },
  {
    id: 'dim-4',
    num: '4',
    title: 'Energy Efficiency & Thermal Synergy',
    science: 'Aligning the waterproofing barrier with insulation components (value requirements) and vapor control layers to prevent interstitial condensation.',
    specImpact: 'Specifying cool-roof, highly reflective waterproofing coatings to lower building HVAC energy consumption.'
  },
  {
    id: 'dim-5',
    num: '5',
    title: 'Value Engineering',
    science: 'Optimizing initial capital expenditure versus long-term operational and remedial maintenance expenditures.',
    specImpact: 'Recommending a hybrid system—spending premium dollars on inaccessible, critical below-grade areas while utilizing highly cost-effective, easily repairable systems for above-grade podiums.'
  },
  {
    id: 'dim-6',
    num: '6',
    title: 'Sustainability & Environmental Footprint',
    science: 'Reducing VOC emissions, utilizing recycled polymer content, and optimizing the carbon footprint of the waterproofing system over its lifetime.',
    specImpact: 'Prioritizing solvent-free, non-toxic, and LEED-compliant systems that do not contaminate local groundwater systems.'
  },
  {
    id: 'dim-7',
    num: '7',
    title: 'Long-Term Durability Criteria',
    science: 'Matching the service life expectancy of the waterproofing system with the design life of the structural concrete',
    specImpact: 'Eliminating materials with a high rate of early-onset oxidation or embrittlement to prevent premature structural decay.'
  }
];
