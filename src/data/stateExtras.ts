// Extra per-state content used by the State Detail page:
// cities, seasons, travel info, FAQs, gallery seeds, neighbouring states.

export interface CityInfo {
  slug: string;
  name: string;
  stateSlug: string;
  shortDescription: string;
  attractionsCount: number;
  famousFoods: string[];
  majorFestivals: string[];
  coords?: { lat: number; lng: number };
  overview?: string;
  thingsToDo?: string[];
  nearbyAttractionSlugs?: string[];
  travel?: TravelInfo;
  gallerySeeds?: string[];
}

export interface SeasonInfo {
  name: "Spring" | "Summer" | "Monsoon" | "Winter";
  months: string;
  weather: string;
  activities: string[];
  recommended?: boolean;
}

export interface TravelInfo {
  airports: { name: string; code?: string; mapsQuery: string }[];
  railwayStations: { name: string; mapsQuery: string }[];
  roads: string;
  localTransport: string[];
}

export interface FaqItem { q: string; a: string }

export interface StateExtras {
  cities: CityInfo[];
  experiences: { label: string; icon: string; blurb: string }[];
  seasons: SeasonInfo[];
  travel: TravelInfo;
  neighbors: string[];      // state slugs
  gallerySeeds: string[];   // seeds for SmartImage gradient gallery
  faqs: FaqItem[];
}

const GENERIC_EXPERIENCES = [
  { label: "Heritage Walks", icon: "🏛", blurb: "Wander through monuments, old quarters and storied bazaars." },
  { label: "Local Markets", icon: "🛍", blurb: "Hunt for crafts, textiles and souvenirs at lively bazaars." },
  { label: "Cultural Experiences", icon: "🎭", blurb: "Catch a folk performance, workshop or temple ritual." },
  { label: "Food Trails", icon: "🍛", blurb: "Eat your way through regional specialties street-side and at family kitchens." },
];

const STATE_EXTRAS: Record<string, StateExtras> = {
  rajasthan: {
    cities: [
      {
        slug: "jaipur", name: "Jaipur", stateSlug: "rajasthan",
        shortDescription: "The Pink City — palaces, planned bazaars and hilltop forts.",
        overview: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is one of India's earliest planned cities — a grid of pink-washed havelis, bazaars and palaces enclosed by crenellated walls. The City Palace still houses the royal family; Hawa Mahal's honeycomb façade lets the desert breeze through; and Amber Fort watches the city from a ridge to the north.",
        thingsToDo: ["Amber Fort sunrise climb", "Hawa Mahal & City Palace tour", "Jantar Mantar astronomy walk", "Block-print shopping in Bapu Bazaar", "Rooftop dinner in the old city"],
        attractionsCount: 8, famousFoods: ["Dal Baati Churma", "Pyaaz Kachori", "Ghewar"],
        majorFestivals: ["Teej", "Jaipur Literature Festival"],
        nearbyAttractionSlugs: ["jaipur", "pushkar", "ranthambore", "jodhpur"],
        coords: { lat: 26.9124, lng: 75.7873 },
      },
      {
        slug: "udaipur", name: "Udaipur", stateSlug: "rajasthan",
        shortDescription: "City of Lakes with white-marble palaces rising from the water.",
        overview: "Udaipur is Rajasthan at its most romantic — a chain of interconnected lakes reflecting whitewashed palaces, ghats and temples. The vast City Palace complex overlooks Lake Pichola; the Lake Palace floats mid-water; and the Aravalli hills fold gently around the town.",
        thingsToDo: ["Sunset boat ride on Lake Pichola", "City Palace museum tour", "Bagore-ki-Haveli folk dance evening", "Day trip to Kumbhalgarh & Ranakpur", "Cooking class in an old haveli"],
        attractionsCount: 7, famousFoods: ["Dal Baati", "Laal Maas", "Mawa Kachori"],
        majorFestivals: ["Mewar Festival", "Gangaur"],
        nearbyAttractionSlugs: ["udaipur", "jodhpur", "jaipur", "pushkar"],
        coords: { lat: 24.5854, lng: 73.7125 },
      },
      {
        slug: "jodhpur", name: "Jodhpur", stateSlug: "rajasthan",
        shortDescription: "The Blue City beneath the looming Mehrangarh Fort.",
        overview: "Jodhpur is the second-largest city in Rajasthan and the historic capital of Marwar. The old town's indigo-washed houses cluster below Mehrangarh, one of India's largest and best-preserved forts. Ramparts drop 120 metres to the streets below and the fort museum holds some of the finest miniature painting collections in the country.",
        thingsToDo: ["Mehrangarh Fort walk", "Zip-line across the fort ramparts", "Sardar Market & clocktower shopping", "Sunset at Jaswant Thada", "Overnight desert camp at Osian"],
        attractionsCount: 6, famousFoods: ["Mirchi Vada", "Pyaaz Kachori", "Makhaniya Lassi"],
        majorFestivals: ["Marwar Festival", "Rajasthan International Folk Festival"],
        nearbyAttractionSlugs: ["jodhpur", "jaisalmer", "udaipur", "pushkar"],
        coords: { lat: 26.2389, lng: 73.0243 },
      },
      {
        slug: "jaisalmer", name: "Jaisalmer", stateSlug: "rajasthan",
        shortDescription: "The Golden City — a living fort rising from the Thar desert.",
        overview: "Jaisalmer's yellow-sandstone fort is one of the world's few 'living forts' — thousands of people still live inside its walls. Beyond the ramparts, ornate merchant havelis line narrow lanes; beyond the town, camel caravans still cross the dunes of the Sam and Khuri desert.",
        thingsToDo: ["Jaisalmer Fort walk", "Patwon-ki-Haveli tour", "Sunset camel safari at Sam Dunes", "Overnight desert camp under the stars", "Gadisar Lake at dawn"],
        attractionsCount: 5, famousFoods: ["Ker Sangri", "Gatte ki Sabzi"],
        majorFestivals: ["Desert Festival"],
        nearbyAttractionSlugs: ["jaisalmer", "jodhpur", "pushkar"],
        coords: { lat: 26.9157, lng: 70.9083 },
      },
    ],
    experiences: [
      { label: "Heritage Walks", icon: "🏛", blurb: "Walled cities, havelis and royal palaces." },
      { label: "Wildlife Safari", icon: "🐅", blurb: "Tiger tracking in Ranthambore National Park." },
      { label: "Desert Camping", icon: "🐪", blurb: "Camel safaris and dune camps near Jaisalmer." },
      { label: "Local Markets", icon: "🛍", blurb: "Block prints, jewellery and miniature paintings." },
      { label: "Cultural Experiences", icon: "🎭", blurb: "Ghoomar dance, Manganiar music, puppet theatre." },
      { label: "Temple Visits", icon: "🛕", blurb: "Brahma Temple in Pushkar and Jain temples at Ranakpur." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Cool, dry days; cold desert nights.", activities: ["Desert safari", "Fort tours", "Pushkar Camel Fair"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Warm and sunny, comfortable mornings.", activities: ["Holi in Jaipur", "Mewar Festival", "Photography"] },
      { name: "Summer", months: "May – June", weather: "Very hot (40°C+).", activities: ["Mount Abu hill station retreats"] },
      { name: "Monsoon", months: "July – September", weather: "Light rains; landscape briefly green.", activities: ["Teej festival", "Lake Pichola boat rides"] },
    ],
    travel: {
      airports: [
        { name: "Jaipur International Airport", code: "JAI", mapsQuery: "Jaipur International Airport" },
        { name: "Udaipur Maharana Pratap Airport", code: "UDR", mapsQuery: "Udaipur Airport" },
        { name: "Jodhpur Airport", code: "JDH", mapsQuery: "Jodhpur Airport" },
      ],
      railwayStations: [
        { name: "Jaipur Junction", mapsQuery: "Jaipur Junction Railway Station" },
        { name: "Udaipur City", mapsQuery: "Udaipur City Railway Station" },
        { name: "Jodhpur Junction", mapsQuery: "Jodhpur Junction" },
      ],
      roads: "Well-connected via NH-48 (Delhi–Jaipur–Ajmer–Udaipur) and the Golden Quadrilateral. Inter-city Volvo buses by RSRTC.",
      localTransport: ["Auto-rickshaws (negotiate fare)", "App taxis (Ola/Uber)", "Cycle-rickshaws in old cities", "Tuk-tuks and tongas"],
    },
    neighbors: ["gujarat", "madhya-pradesh", "haryana", "punjab", "uttar-pradesh"],
    gallerySeeds: ["raj-1", "raj-2", "raj-3", "raj-4", "raj-5", "raj-6"],
    faqs: [
      { q: "How many days should I spend in Rajasthan?", a: "A classic loop — Jaipur, Pushkar, Jodhpur, Jaisalmer, Udaipur — needs 10–14 days. A first visit can squeeze the Golden Triangle highlights into 5–6 days." },
      { q: "Is Rajasthan family-friendly?", a: "Yes. Forts, palaces, camel rides and folk shows are a hit with all ages. Stick to October–March to avoid extreme heat." },
      { q: "What is the best month to visit Rajasthan?", a: "November to February — clear skies, cool days, and the Pushkar Camel Fair in November." },
      { q: "What are the must-try foods in Rajasthan?", a: "Dal Baati Churma, Laal Maas, Gatte ki Sabzi, Pyaaz Kachori and the icy Makhaniya Lassi of Jodhpur." },
      { q: "What are the top attractions in Rajasthan?", a: "Amber Fort, Mehrangarh, Jaisalmer Fort, Lake Pichola, Ranthambore National Park and the Pushkar Brahma Temple." },
    ],
  },

  kerala: {
    cities: [
      {
        slug: "kochi", name: "Kochi", stateSlug: "kerala",
        shortDescription: "Spice-port heritage on Fort Kochi's waterfront — churches, synagogues, Chinese nets.",
        overview: "Kochi has been a spice-trade port since the 14th century, layered with Portuguese, Dutch, Jewish and Kerala influences. Fort Kochi's leafy lanes hold the oldest European church in India, the Chinese fishing nets on the harbour and the whitewashed synagogue in Mattancherry's Jew Town.",
        thingsToDo: ["Fort Kochi heritage walk", "Sunset at the Chinese fishing nets", "Jew Town antiquing", "Kathakali evening at Kerala Kathakali Centre", "Ferry to Vypin Island"],
        attractionsCount: 7, famousFoods: ["Karimeen Pollichathu", "Appam with Stew", "Banana chips"],
        majorFestivals: ["Kochi-Muziris Biennale", "Cochin Carnival"],
        nearbyAttractionSlugs: ["kochi", "alleppey", "munnar", "thekkady"],
        coords: { lat: 9.9658, lng: 76.2673 },
      },
      {
        slug: "alleppey", name: "Alleppey", stateSlug: "kerala",
        shortDescription: "Backwater capital — houseboats, lagoons and snake-boat races.",
        overview: "Alleppey (Alappuzha) is the gateway to Kerala's backwater country — a labyrinth of canals, lagoons and rice paddies below sea level. Overnight houseboats (kettuvallams) drift out of Alleppey to Kumarakom and Kuttanad, past coir-making villages and toddy shops on the water.",
        thingsToDo: ["Overnight houseboat cruise", "Nehru Trophy Boat Race in August", "Kuttanad village cycle tour", "Marari Beach day trip", "Coir-making workshop"],
        attractionsCount: 5, famousFoods: ["Kerala Sadya", "Toddy & Karimeen", "Prawn Curry"],
        majorFestivals: ["Nehru Trophy Boat Race", "Onam"],
        nearbyAttractionSlugs: ["alleppey", "kochi", "varkala", "thekkady"],
        coords: { lat: 9.4981, lng: 76.3388 },
      },
      {
        slug: "munnar", name: "Munnar", stateSlug: "kerala",
        shortDescription: "Tea-estate hill station above 1,600 m in the Western Ghats.",
        overview: "Munnar sits at 1,600 metres in the Western Ghats, a cool green landscape of endless tea gardens, waterfalls and cardamom hills. The town is small; the appeal is the drive — winding roads to Top Station viewpoint, Eravikulam National Park for the Nilgiri tahr, and the tea museum at Nallathanni.",
        thingsToDo: ["Eravikulam National Park hike", "Tata Tea Museum visit", "Sunrise at Top Station", "Attukad Waterfalls trek", "Cardamom plantation tour"],
        attractionsCount: 6, famousFoods: ["Puttu & Kadala Curry", "Idiyappam", "Cardamom Tea"],
        majorFestivals: ["Neelakurinji Bloom"],
        nearbyAttractionSlugs: ["munnar", "thekkady", "kochi", "alleppey"],
        coords: { lat: 10.0889, lng: 77.0595 },
      },
      {
        slug: "thiruvananthapuram", name: "Thiruvananthapuram", stateSlug: "kerala",
        shortDescription: "Quiet coastal capital, gateway to Varkala and Kovalam.",
        overview: "Kerala's capital is an easy, tree-lined city built around the massive Padmanabhaswamy Temple. It's the natural base for the cliff beaches of Varkala 45 km north and the crescent bay of Kovalam 15 km south, and holds the excellent Napier Museum and Sree Chitra Art Gallery.",
        thingsToDo: ["Padmanabhaswamy Temple darshan", "Napier Museum & zoo", "Day at Kovalam Beach", "Attukal Bhagavathy temple", "Coastal drive to Varkala"],
        attractionsCount: 5, famousFoods: ["Sadya", "Fish Molee", "Halwa"],
        majorFestivals: ["Attukal Pongala", "Onam"],
        nearbyAttractionSlugs: ["varkala", "kochi", "alleppey"],
        coords: { lat: 8.5241, lng: 76.9366 },
      },
    ],
    experiences: [
      { label: "Backwater Cruises", icon: "🛶", blurb: "Houseboats on Vembanad and the Kuttanad canals." },
      { label: "Wildlife Safari", icon: "🐘", blurb: "Boat safaris at Periyar Tiger Reserve." },
      { label: "Beach Activities", icon: "🏖", blurb: "Surf, swim and yoga at Varkala and Marari." },
      { label: "Temple Visits", icon: "🛕", blurb: "Padmanabhaswamy, Guruvayur and Sabarimala." },
      { label: "Ayurveda & Wellness", icon: "🌿", blurb: "Authentic Ayurvedic massage and panchakarma." },
      { label: "Cultural Experiences", icon: "🎭", blurb: "Kathakali, Mohiniyattam and Kalaripayattu shows." },
    ],
    seasons: [
      { name: "Winter", months: "October – February", weather: "Pleasant 22–30°C, low humidity.", activities: ["Backwaters", "Beaches", "Festivals"], recommended: true },
      { name: "Spring", months: "February – April", weather: "Warm and humid.", activities: ["Ayurveda retreats", "Tea estate stays"] },
      { name: "Summer", months: "April – May", weather: "Hot, very humid coast.", activities: ["Munnar hill escapes"] },
      { name: "Monsoon", months: "June – September", weather: "Heavy rain; lush green.", activities: ["Monsoon Ayurveda", "Onam"] },
    ],
    travel: {
      airports: [
        { name: "Cochin International Airport", code: "COK", mapsQuery: "Cochin International Airport" },
        { name: "Trivandrum International Airport", code: "TRV", mapsQuery: "Trivandrum International Airport" },
        { name: "Calicut International Airport", code: "CCJ", mapsQuery: "Calicut International Airport" },
      ],
      railwayStations: [
        { name: "Ernakulam Junction", mapsQuery: "Ernakulam Junction" },
        { name: "Thiruvananthapuram Central", mapsQuery: "Thiruvananthapuram Central" },
        { name: "Alappuzha Railway Station", mapsQuery: "Alappuzha Railway Station" },
      ],
      roads: "NH-66 runs the entire coast; KSRTC buses and self-drive cars are popular.",
      localTransport: ["Auto-rickshaws", "App taxis", "Ferries on the backwaters", "KSRTC city buses"],
    },
    neighbors: ["tamil-nadu", "karnataka", "puducherry", "lakshadweep"],
    gallerySeeds: ["ker-1", "ker-2", "ker-3", "ker-4", "ker-5", "ker-6"],
    faqs: [
      { q: "How many days should I spend in Kerala?", a: "7–10 days covers Kochi, Munnar, Thekkady, Alleppey and a beach. Two weeks lets you add Wayanad or Varkala." },
      { q: "Is Kerala family-friendly?", a: "Very. Houseboats, elephants, beaches and easy logistics make it one of India's smoothest family trips." },
      { q: "What is the best month to visit Kerala?", a: "October to February. December and January are peak; book houseboats early." },
      { q: "What are the must-try foods?", a: "Sadya on a banana leaf, Karimeen Pollichathu, Appam with Stew, Puttu & Kadala, and fresh coconut payasam." },
      { q: "What are the top attractions?", a: "Alleppey backwaters, Fort Kochi, Munnar tea estates, Periyar Wildlife Sanctuary, and Varkala cliffs." },
    ],
  },

  goa: {
    cities: [
      {
        slug: "panaji", name: "Panaji", stateSlug: "goa",
        shortDescription: "Goa's compact capital with the candy-coloured Fontainhas quarter.",
        overview: "Panaji (Panjim) sits where the Mandovi meets the Arabian Sea. The Latin Quarter of Fontainhas, with ochre, blue and lime-green Portuguese houses, is a 15-minute walk that anchors any first visit. Across the river, casino boats glow at night; behind town, the white wedding-cake church of Our Lady of the Immaculate Conception steps down to 18th of June Road.",
        thingsToDo: ["Fontainhas heritage walk", "Mandovi sunset cruise", "Bar-hop along 31st January Road", "Day ferry to Divar Island"],
        attractionsCount: 6,
        famousFoods: ["Pork Vindaloo", "Bebinca", "Prawn Balchão", "Fish Curry Rice"],
        majorFestivals: ["Goa Carnival", "São João", "Feast of St Francis Xavier"],
        nearbyAttractionSlugs: ["panaji", "old-goa", "fort-aguada", "mangueshi-temple", "anjuna"],
        coords: { lat: 15.4909, lng: 73.8278 },
      },
      {
        slug: "old-goa", name: "Old Goa", stateSlug: "goa",
        shortDescription: "UNESCO ensemble of baroque Portuguese-era churches.",
        overview: "Once larger than Lisbon, Old Goa is now a quiet cluster of monumental churches set among coconut groves. The Basilica of Bom Jesus holds the relics of St Francis Xavier; the Sé Cathedral is one of the largest churches in Asia. A morning is enough to see the highlights, ideally before the coach tours arrive.",
        thingsToDo: ["Visit St Francis Xavier's relics", "Cycle between the churches", "Walk to the Viceroy's Arch on the river"],
        attractionsCount: 5,
        famousFoods: ["Sorpotel", "Sannas", "Bebinca"],
        majorFestivals: ["Feast of St Francis Xavier"],
        nearbyAttractionSlugs: ["old-goa", "panaji", "mangueshi-temple"],
        coords: { lat: 15.5031, lng: 73.9116 },
      },
      {
        slug: "margao", name: "Margao", stateSlug: "goa",
        shortDescription: "South Goa's market town and gateway to Palolem and Colva.",
        overview: "Margao (Madgaon) is south Goa's commercial centre and railway gateway. The covered Municipal Market is one of the best in the state for fish, fruit and spices; the Largo de Igreja square preserves an elegant whitewashed Portuguese church and a tight grid of nineteenth-century town houses.",
        thingsToDo: ["Wander the Margao Municipal Market", "Heritage walk through Borda and Fontainhas-style lanes", "Day trip to Palolem or Cola"],
        attractionsCount: 5,
        famousFoods: ["Xacuti", "Fish Curry Rice", "Sorpotel"],
        majorFestivals: ["Goa Carnival", "Christmas"],
        nearbyAttractionSlugs: ["palolem", "cola-beach", "bhagwan-mahaveer-sanctuary", "dudhsagar"],
        coords: { lat: 15.2832, lng: 73.9862 },
      },
      {
        slug: "calangute", name: "Calangute & Baga", stateSlug: "goa",
        shortDescription: "North Goa's beach hub — water sports, beach shacks and the Saturday Night Market nearby.",
        overview: "The five-kilometre stretch from Candolim through Calangute to Baga is north Goa's busiest beach belt. Days revolve around shacks and water sports; nights spread across Tito's Lane, Soro and the open-air clubs at Anjuna and Vagator a short ride away.",
        thingsToDo: ["Parasailing and jet-ski at Baga", "Sunset drinks at Britto's", "Saturday Night Market at Arpora", "Fort Aguada side trip"],
        attractionsCount: 5,
        famousFoods: ["Goan Fish Curry", "Prawn Balchão", "Bebinca"],
        majorFestivals: ["Sunburn Festival", "Goa Carnival"],
        nearbyAttractionSlugs: ["baga-calangute", "fort-aguada", "anjuna"],
        coords: { lat: 15.5439, lng: 73.7553 },
      },
    ],
    experiences: [
      { label: "Beach Activities", icon: "🏖", blurb: "Sunbathe, parasail, paddle-board and surf along the coast." },
      { label: "Heritage Walks", icon: "🏛", blurb: "Portuguese churches, Latin Quarters and forts." },
      { label: "River Cruises", icon: "🚤", blurb: "Sunset cruises on the Mandovi and dolphin spotting." },
      { label: "Local Markets", icon: "🛍", blurb: "Anjuna flea market and Saturday Night Market at Arpora." },
      { label: "Wildlife Safari", icon: "🐅", blurb: "Bhagwan Mahaveer Sanctuary and Dudhsagar Falls." },
      { label: "Cultural Experiences", icon: "🎭", blurb: "Fado evenings, mando and tiatr theatre." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Sunny, 22–32°C — peak beach season.", activities: ["Beaches", "Carnival prep", "Water sports"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Hot and humid.", activities: ["Sho-Igo Easter celebrations"] },
      { name: "Summer", months: "May", weather: "Very hot before monsoon.", activities: ["Off-season hotel deals"] },
      { name: "Monsoon", months: "June – September", weather: "Heavy rain, dramatic waterfalls.", activities: ["Dudhsagar in full flow", "Sao Joao festival"] },
    ],
    travel: {
      airports: [
        { name: "Dabolim Airport", code: "GOI", mapsQuery: "Dabolim Airport Goa" },
        { name: "Manohar International Airport (Mopa)", code: "GOX", mapsQuery: "Manohar International Airport Mopa" },
      ],
      railwayStations: [
        { name: "Madgaon Junction", mapsQuery: "Madgaon Railway Station" },
        { name: "Thivim", mapsQuery: "Thivim Railway Station" },
        { name: "Vasco da Gama", mapsQuery: "Vasco da Gama Railway Station" },
      ],
      roads: "NH-66 runs north-south; well-connected to Mumbai, Mangalore and Bengaluru.",
      localTransport: ["Rented scooters & motorcycles", "App taxis", "Local buses (Kadamba)", "Ferries"],
    },
    neighbors: ["maharashtra", "karnataka"],
    gallerySeeds: ["goa-1", "goa-2", "goa-3", "goa-4", "goa-5", "goa-6"],
    faqs: [
      { q: "How many days should I spend in Goa?", a: "5–7 days is ideal — split between North Goa for the buzz and South Goa for the calm." },
      { q: "Is Goa family-friendly?", a: "Yes — South Goa's quieter beaches, water parks, spice plantations and wildlife trips all work for kids." },
      { q: "What is the best month to visit Goa?", a: "November to February. December peaks with Christmas and New Year; book months ahead." },
      { q: "What are the must-try foods?", a: "Pork Vindaloo, Fish Curry Rice, Prawn Balchão, Sorpotel, Bebinca and feni-based cocktails." },
      { q: "What are the top attractions?", a: "Basilica of Bom Jesus, Anjuna beaches, Fontainhas, Dudhsagar Falls and Palolem." },
    ],
  },

  "west-bengal": {
    cities: [
      {
        slug: "kolkata", name: "Kolkata", stateSlug: "west-bengal",
        shortDescription: "Literary capital — coffee houses, trams, Durga Puja and Park Street.",
        overview: "Kolkata is India's intellectual and literary heart. Yellow Ambassador taxis nose through Esplanade traffic, trams still rumble past Maidan, and the second-hand booksellers of College Street trade in everything from Tagore first editions to medical textbooks. Park Street has been the city's night-out address since the 1960s.",
        thingsToDo: ["Tram ride through central Kolkata", "Walking tour of Kumartuli idol-makers", "Coffee House on College Street", "Dinner crawl down Park Street", "Sunset at Princep Ghat"],
        attractionsCount: 10,
        famousFoods: ["Rosogolla", "Kathi Roll", "Macher Jhol", "Mishti Doi", "Kosha Mangsho"],
        majorFestivals: ["Durga Puja", "Kali Puja", "Poila Boishakh", "Kolkata Book Fair", "Saraswati Puja"],
        nearbyAttractionSlugs: ["kolkata", "belur-math", "sundarbans", "shantiniketan", "bishnupur"],
        coords: { lat: 22.5726, lng: 88.3639 },
      },
      {
        slug: "darjeeling", name: "Darjeeling", stateSlug: "west-bengal",
        shortDescription: "Tea-estate hill town with Kanchenjunga views and a UNESCO toy train.",
        overview: "Darjeeling sits at 2,000 metres looking straight at Kanchenjunga, the world's third-highest peak. The town is built around the Chowrasta promenade, the steam-hauled Darjeeling Himalayan Railway and the tea estates that fan out from Happy Valley. Spring and autumn give the clearest mountain views.",
        thingsToDo: ["Toy-train joy ride to Ghum", "Sunrise at Tiger Hill", "Tea-tasting at Happy Valley Estate", "Padmaja Naidu Himalayan Zoo"],
        attractionsCount: 8,
        famousFoods: ["Momos", "Thukpa", "Darjeeling Tea", "Sel Roti"],
        majorFestivals: ["Tea & Tourism Festival", "Losar"],
        nearbyAttractionSlugs: ["darjeeling", "kalimpong", "gorumara"],
        coords: { lat: 27.041, lng: 88.2627 },
      },
      {
        slug: "shantiniketan", name: "Shantiniketan", stateSlug: "west-bengal",
        shortDescription: "Tagore's UNESCO-listed open-air university campus.",
        overview: "Rabindranath Tagore's Visva-Bharati campus is set in the red-soil Birbhum countryside. Classes are held under the trees, the Kala Bhavana art school is a working museum of murals and sculpture, and the weekly Sonajhuri Haat sells tribal crafts under sal trees.",
        thingsToDo: ["Walk the Visva-Bharati campus", "Saturday Sonajhuri Haat", "Visit Tagore's home Uttarayan", "Catch a Baul performance"],
        attractionsCount: 5,
        famousFoods: ["Mishti", "Pithe", "Khaja"],
        majorFestivals: ["Poush Mela", "Basanta Utsav"],
        nearbyAttractionSlugs: ["shantiniketan", "bishnupur", "kolkata"],
        coords: { lat: 23.6803, lng: 87.685 },
      },
      {
        slug: "kalimpong", name: "Kalimpong", stateSlug: "west-bengal",
        shortDescription: "Quiet Himalayan ridge town of monasteries, orchids and colonial schools.",
        overview: "Between Darjeeling and Sikkim, Kalimpong sits on a long ridge above the Teesta river. The town is famous for Buddhist monasteries (Durpin and Tharpa Choling), colonial-era boarding schools and the cactus and orchid nurseries on the road to Deolo.",
        thingsToDo: ["Paragliding from Deolo Hill", "Visit Durpin Gompa", "Day trip to Lava and Lolegaon", "Tour an orchid nursery"],
        attractionsCount: 5,
        famousFoods: ["Momos", "Thukpa", "Kalimpong Cheese"],
        majorFestivals: ["Losar", "Tea & Tourism Festival"],
        nearbyAttractionSlugs: ["kalimpong", "darjeeling", "gorumara"],
        coords: { lat: 27.0660, lng: 88.4740 },
      },
    ],
    experiences: [
      { label: "Heritage Walks", icon: "🏛", blurb: "Colonial Kolkata, terracotta temples and Tagore's home." },
      { label: "Wildlife Safari", icon: "🐅", blurb: "Bengal tigers in the Sundarbans mangroves." },
      { label: "Toy Train Rides", icon: "🚂", blurb: "Darjeeling Himalayan Railway from Siliguri." },
      { label: "Cultural Experiences", icon: "🎭", blurb: "Baul music, Rabindra Sangeet and Kalighat painting." },
      { label: "Local Markets", icon: "🛍", blurb: "New Market, College Street books and Sonajhuri Haat." },
      { label: "Food Trails", icon: "🍛", blurb: "Bengali sweets, kathi rolls and the great fish-rice lunch." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Cool 12–25°C in plains; cold in the hills.", activities: ["City sightseeing", "Sundarbans", "Darjeeling"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Warm and pleasant.", activities: ["Basanta Utsav at Shantiniketan"] },
      { name: "Summer", months: "May – June", weather: "Hot & humid in Kolkata.", activities: ["Hill stations of Darjeeling & Kalimpong"] },
      { name: "Monsoon", months: "July – September", weather: "Heavy rain, occasional flooding.", activities: ["Durga Puja prep in Kumartuli"] },
    ],
    travel: {
      airports: [
        { name: "Netaji Subhas Chandra Bose International Airport", code: "CCU", mapsQuery: "Kolkata Airport" },
        { name: "Bagdogra Airport", code: "IXB", mapsQuery: "Bagdogra Airport" },
      ],
      railwayStations: [
        { name: "Howrah Junction", mapsQuery: "Howrah Junction Railway Station" },
        { name: "Sealdah", mapsQuery: "Sealdah Railway Station" },
        { name: "New Jalpaiguri", mapsQuery: "New Jalpaiguri Junction" },
      ],
      roads: "NH-12, NH-16, NH-19 connect to neighbouring states. Volvo buses to Sikkim and the north.",
      localTransport: ["Yellow Ambassador taxis", "App taxis", "Kolkata Metro", "Trams", "Cycle rickshaws"],
    },
    neighbors: ["odisha", "jharkhand", "bihar", "sikkim", "assam"],
    gallerySeeds: ["wb-1", "wb-2", "wb-3", "wb-4", "wb-5", "wb-6"],
    faqs: [
      { q: "How many days should I spend in West Bengal?", a: "4 days for Kolkata, 7–10 days if you add Darjeeling and the Sundarbans." },
      { q: "Is West Bengal family-friendly?", a: "Yes. Kolkata's museums, the toy train, and tea-estate stays all work well for families." },
      { q: "What is the best month to visit?", a: "October to February — and Durga Puja in late September / early October is unmissable." },
      { q: "What are the must-try foods?", a: "Macher Jhol, Kosha Mangsho, Kathi Rolls, Rasgulla and Mishti Doi." },
      { q: "What are the top attractions?", a: "Victoria Memorial, Howrah Bridge, Sundarbans, Darjeeling toy train and Shantiniketan." },
    ],
  },

  "himachal-pradesh": {
    cities: [
      {
        slug: "shimla", name: "Shimla", stateSlug: "himachal-pradesh",
        shortDescription: "Former summer capital of British India with Raj-era promenades.",
        overview: "Shimla was the summer capital of British India from 1864 to 1939 and still wears the Raj lightly — half-timbered cottages, Christ Church on the Ridge, and the pedestrian Mall lined with deodars. The UNESCO-listed narrow-gauge toy train from Kalka climbs 96 kilometres through 102 tunnels to reach it.",
        thingsToDo: ["Mall Road & Ridge stroll", "Kalka–Shimla toy train ride", "Jakhu Temple hike", "Viceregal Lodge tour", "Day trip to Kufri or Chail"],
        attractionsCount: 6, famousFoods: ["Chana Madra", "Siddu", "Babru"],
        majorFestivals: ["Summer Festival", "Sipi Fair"],
        nearbyAttractionSlugs: ["shimla", "manali", "kasol"],
        coords: { lat: 31.1048, lng: 77.1734 },
      },
      {
        slug: "manali", name: "Manali", stateSlug: "himachal-pradesh",
        shortDescription: "Mountain town in the Beas valley — gateway to Lahaul and Spiti.",
        overview: "At 2,050 metres on the banks of the Beas, Manali is Himachal's adventure hub — trekking, paragliding and snow-play in Solang Valley, and the launch point for the Rohtang Pass road into Lahaul and Spiti. Old Manali across the river keeps a mellow café-and-guesthouse scene popular with long-stay travellers.",
        thingsToDo: ["Solang Valley snow & paragliding", "Old Manali café crawl", "Hadimba Temple visit", "Vashisht hot springs", "Rohtang Pass day trip (permit required)"],
        attractionsCount: 7, famousFoods: ["Trout", "Siddu", "Thukpa"],
        majorFestivals: ["Winter Carnival", "Hadimba Mela"],
        nearbyAttractionSlugs: ["manali", "kasol", "spiti", "shimla"],
        coords: { lat: 32.2396, lng: 77.1887 },
      },
      {
        slug: "dharamshala", name: "Dharamshala", stateSlug: "himachal-pradesh",
        shortDescription: "Seat of the Dalai Lama, with Tibetan monasteries and cafes.",
        overview: "Dharamshala and its upper suburb McLeod Ganj have hosted the Tibetan government-in-exile since 1960. The Namgyal Monastery, Tsuglagkhang temple complex and Tibet Museum sit within a few walking minutes of each other, and the Dhauladhar range rises straight up from the town.",
        thingsToDo: ["Tsuglagkhang Complex & Dalai Lama teachings", "Triund day trek", "Bhagsu waterfall & café stop", "Norbulingka Institute tour", "Cricket at HPCA Stadium"],
        attractionsCount: 5, famousFoods: ["Momos", "Thukpa", "Tibetan Bread"],
        majorFestivals: ["Losar", "International Himalayan Festival"],
        nearbyAttractionSlugs: ["dharamshala", "manali", "kasol"],
        coords: { lat: 32.219, lng: 76.3234 },
      },
    ],
    experiences: [
      { label: "Trekking", icon: "🥾", blurb: "Hampta Pass, Triund and Pin Parvati." },
      { label: "River Rafting", icon: "🚣", blurb: "White-water on the Beas around Kullu." },
      { label: "Skiing & Snow", icon: "⛷", blurb: "Solang Valley and Kufri in winter." },
      { label: "Temple Visits", icon: "🛕", blurb: "Hidimba Devi, Jakhu and high-altitude monasteries." },
      { label: "Heritage Walks", icon: "🏛", blurb: "Shimla's Mall Road and the toy train." },
      { label: "Local Markets", icon: "🛍", blurb: "Tibetan handicrafts in McLeodganj and Kullu shawls." },
    ],
    seasons: [
      { name: "Spring", months: "March – June", weather: "Cool, blooming orchards.", activities: ["Trekking", "Sightseeing", "Apple blossoms"], recommended: true },
      { name: "Summer", months: "April – June", weather: "Pleasant 15–25°C — escape from plains.", activities: ["Adventure sports", "Camping"] },
      { name: "Monsoon", months: "July – August", weather: "Heavy rain; landslide risk in upper hills.", activities: ["Spiti is rain-shadow and best in this season"] },
      { name: "Winter", months: "December – February", weather: "Snowfall in upper Himachal.", activities: ["Skiing in Solang", "Snow trekking", "Winter Carnival"] },
    ],
    travel: {
      airports: [
        { name: "Bhuntar (Kullu-Manali) Airport", code: "KUU", mapsQuery: "Bhuntar Airport" },
        { name: "Gaggal (Dharamshala) Airport", code: "DHM", mapsQuery: "Gaggal Airport" },
        { name: "Shimla Airport", code: "SLV", mapsQuery: "Shimla Airport" },
      ],
      railwayStations: [
        { name: "Kalka Railway Station", mapsQuery: "Kalka Railway Station" },
        { name: "Shimla (Toy Train)", mapsQuery: "Shimla Railway Station" },
        { name: "Pathankot Junction", mapsQuery: "Pathankot Junction" },
      ],
      roads: "NH-5 and NH-3 connect from Chandigarh. HRTC and Volvo buses run from Delhi.",
      localTransport: ["HRTC buses", "Shared taxis", "Self-drive SUVs", "Cable cars in Solang"],
    },
    neighbors: ["punjab", "haryana", "uttarakhand", "jammu-and-kashmir", "ladakh"],
    gallerySeeds: ["hp-1", "hp-2", "hp-3", "hp-4", "hp-5", "hp-6"],
    faqs: [
      { q: "How many days should I spend in Himachal Pradesh?", a: "7–10 days for Shimla–Manali; 12–14 days if you include Spiti or Dharamshala." },
      { q: "Is Himachal family-friendly?", a: "Yes — Shimla, Manali and Dharamshala are easy. Spiti is best for older kids and adventurous families." },
      { q: "What is the best month to visit?", a: "March–June and September–November. June–August for Spiti; December–February for snow." },
      { q: "What are the must-try foods?", a: "Siddu, Chana Madra, Babru, mountain trout and Tibetan momos and thukpa." },
      { q: "What are the top attractions?", a: "Rohtang Pass, Solang Valley, McLeodganj, Shimla Mall Road and Spiti monasteries." },
    ],
  },

  "tamil-nadu": {
    cities: [
      {
        slug: "chennai", name: "Chennai", stateSlug: "tamil-nadu",
        shortDescription: "Tamil capital with colonial forts, classical music and Marina Beach.",
        overview: "Chennai (Madras) is the cultural capital of south India — Fort St George where the East India Company first landed, the 13-kilometre Marina Beach, the sacred temple town of Mylapore around the Kapaleeshwarar Temple, and a year-round calendar of Bharatanatyam and Carnatic music that peaks in the December Margazhi season.",
        thingsToDo: ["Marina Beach at dawn", "Kapaleeshwarar Temple & Mylapore walk", "Fort St George museum", "Filter coffee at Rayar's Mess", "Day trip to Mahabalipuram"],
        attractionsCount: 7, famousFoods: ["Dosa", "Idli", "Filter Coffee", "Chettinad Chicken"],
        majorFestivals: ["Margazhi Music Season", "Pongal"],
        nearbyAttractionSlugs: ["chennai", "mahabalipuram", "pondicherry"],
        coords: { lat: 13.0827, lng: 80.2707 },
      },
      {
        slug: "madurai", name: "Madurai", stateSlug: "tamil-nadu",
        shortDescription: "Ancient temple city around the Meenakshi Amman Temple.",
        overview: "Madurai is one of the oldest continuously inhabited cities in the world, mentioned in Greco-Roman trade records over two millennia ago. Everything radiates from the vast Meenakshi Amman Temple — 14 gopurams covered in painted sculpture, and the nightly ceremony where an idol of Shiva is carried to Meenakshi's chamber.",
        thingsToDo: ["Meenakshi Temple day & night visit", "Thirumalai Nayakkar Palace sound & light show", "Old bazaar walk around the temple", "Gandhi Memorial Museum", "Jigarthanda at Famous Jigarthanda"],
        attractionsCount: 5, famousFoods: ["Jigarthanda", "Paruthi Paal", "Kari Dosai"],
        majorFestivals: ["Chithirai Festival", "Float Festival"],
        nearbyAttractionSlugs: ["madurai", "thanjavur"],
        coords: { lat: 9.9252, lng: 78.1198 },
      },
      {
        slug: "thanjavur", name: "Thanjavur", stateSlug: "tamil-nadu",
        shortDescription: "Chola capital and home of the UNESCO Brihadeeswarar Temple.",
        overview: "Thanjavur (Tanjore) was the imperial capital of the Chola dynasty. Raja Raja Chola's 11th-century Brihadeeswarar Temple, built entirely of granite in a region with no granite, is the headline monument, but the town also gave the world Tanjore painting, Carnatic music and the Saraswathi Mahal Library.",
        thingsToDo: ["Brihadeeswarar Temple sunrise visit", "Saraswathi Mahal Library & palace museum", "Tanjore-painting workshop", "Day trip to Kumbakonam & Airavatesvara Temple", "Traditional Sadya lunch"],
        attractionsCount: 4, famousFoods: ["Thanjavur Sadya"],
        majorFestivals: ["Thyagaraja Aradhana"],
        nearbyAttractionSlugs: ["thanjavur", "madurai", "pondicherry"],
        coords: { lat: 10.787, lng: 79.1378 },
      },
      {
        slug: "pondicherry", name: "Pondicherry", stateSlug: "tamil-nadu",
        shortDescription: "Former French enclave — yellow walls, cafes and Auroville nearby.",
        overview: "Strictly a Union Territory but geographically enclosed by Tamil Nadu, Pondicherry (Puducherry) was French until 1954. The White Town grid still has mustard-yellow bougainvillea-draped villas, gendarme-blue street signs and boulangeries. Auroville, the experimental township, is 12 kilometres north.",
        thingsToDo: ["White Town heritage walk", "Sri Aurobindo Ashram visit", "Sunrise on the Promenade", "Cycle to Auroville & the Matrimandir", "Paradise Beach boat trip"],
        attractionsCount: 5, famousFoods: ["French Pastries", "Creole cuisine"],
        majorFestivals: ["Bastille Day", "Pondicherry Heritage Festival"],
        nearbyAttractionSlugs: ["pondicherry", "mahabalipuram", "chennai"],
        coords: { lat: 11.9416, lng: 79.8083 },
      },
    ],
    experiences: [
      { label: "Temple Visits", icon: "🛕", blurb: "Granite gopurams at Madurai, Thanjavur and Chidambaram." },
      { label: "Beach Activities", icon: "🏖", blurb: "Marina Beach, Mahabalipuram and Rameswaram." },
      { label: "Heritage Walks", icon: "🏛", blurb: "Chettinad mansions and French Pondicherry." },
      { label: "Hill Retreats", icon: "🏔", blurb: "Ooty, Kodaikanal and Yercaud." },
      { label: "Cultural Experiences", icon: "🎭", blurb: "Bharatanatyam, Carnatic music kutcheris." },
      { label: "Food Trails", icon: "🍛", blurb: "Filter coffee, dosai, Chettinad spice trail." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Mild 20–28°C; pleasant on the coast.", activities: ["Margazhi music", "Temple tours", "Pongal"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Warm before summer.", activities: ["Chithirai Festival"] },
      { name: "Summer", months: "April – June", weather: "Hot & humid; hills are pleasant.", activities: ["Ooty and Kodaikanal retreats"] },
      { name: "Monsoon", months: "October – December", weather: "Northeast monsoon brings heavy rain.", activities: ["Indoor heritage", "Temple festivals"] },
    ],
    travel: {
      airports: [
        { name: "Chennai International Airport", code: "MAA", mapsQuery: "Chennai International Airport" },
        { name: "Madurai Airport", code: "IXM", mapsQuery: "Madurai Airport" },
        { name: "Coimbatore International Airport", code: "CJB", mapsQuery: "Coimbatore Airport" },
      ],
      railwayStations: [
        { name: "Chennai Central", mapsQuery: "MGR Chennai Central" },
        { name: "Madurai Junction", mapsQuery: "Madurai Junction" },
        { name: "Coimbatore Junction", mapsQuery: "Coimbatore Junction" },
      ],
      roads: "NH-44, NH-48 and NH-32 cross the state. TNSTC buses link every town.",
      localTransport: ["Auto-rickshaws", "App taxis", "Chennai Metro & MRTS", "Suburban trains"],
    },
    neighbors: ["kerala", "karnataka", "andhra-pradesh", "puducherry"],
    gallerySeeds: ["tn-1", "tn-2", "tn-3", "tn-4", "tn-5", "tn-6"],
    faqs: [
      { q: "How many days should I spend in Tamil Nadu?", a: "10–14 days lets you cover Chennai, Mahabalipuram, Pondicherry, Thanjavur, Madurai and the Nilgiris." },
      { q: "Is Tamil Nadu family-friendly?", a: "Yes — temples, beaches, hill stations and a strong food culture." },
      { q: "What is the best month to visit?", a: "November to February. Avoid October–early November for cyclonic rain on the coast." },
      { q: "What are the must-try foods?", a: "Filter coffee, Dosa, Idli, Chettinad chicken, Jigarthanda and Pongal." },
      { q: "What are the top attractions?", a: "Meenakshi Temple, Brihadeeswarar Temple, Mahabalipuram, Ooty toy train and Pondicherry." },
    ],
  },

  maharashtra: {
    cities: [
      { slug: "mumbai", name: "Mumbai", stateSlug: "maharashtra", shortDescription: "Financial capital, Bollywood and 26 km of Arabian Sea coastline.", attractionsCount: 9, famousFoods: ["Vada Pav", "Pav Bhaji", "Bombay Duck", "Bhel Puri"], majorFestivals: ["Ganesh Chaturthi", "Mumbai Film Festival"], coords: { lat: 19.076, lng: 72.8777 } },
      { slug: "pune", name: "Pune", stateSlug: "maharashtra", shortDescription: "Cultural and tech city in the Deccan with strong Maratha heritage.", attractionsCount: 6, famousFoods: ["Misal Pav", "Bakarwadi", "Mastani"], majorFestivals: ["Sawai Gandharva", "Ganesh Festival"], coords: { lat: 18.5204, lng: 73.8567 } },
      { slug: "aurangabad", name: "Chhatrapati Sambhajinagar", stateSlug: "maharashtra", shortDescription: "Base for the Ajanta & Ellora caves.", attractionsCount: 5, famousFoods: ["Naan Khaliya", "Tahri"], majorFestivals: ["Ellora-Ajanta Festival"], coords: { lat: 19.8762, lng: 75.3433 } },
    ],
    experiences: [
      { label: "Heritage Walks", icon: "🏛", blurb: "Colonial Bombay, Pune's wadas and hill forts." },
      { label: "Wildlife Safari", icon: "🐅", blurb: "Tadoba-Andhari and Pench tiger reserves." },
      { label: "Cave Visits", icon: "🛕", blurb: "Ajanta, Ellora, Elephanta and Karla caves." },
      { label: "Beach Activities", icon: "🏖", blurb: "Konkan beaches at Tarkarli, Ganpatipule and Alibaug." },
      { label: "Trekking", icon: "🥾", blurb: "Sahyadri fort treks — Rajmachi, Harishchandragad, Kalsubai." },
      { label: "Food Trails", icon: "🍛", blurb: "Misal, vada pav, Malvani thali and Pune street food." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Pleasant 16–28°C; peak travel.", activities: ["Sightseeing", "Beaches", "Wildlife"], recommended: true },
      { name: "Spring", months: "February – April", weather: "Warm and dry.", activities: ["Sahyadri treks", "Heritage tours"] },
      { name: "Summer", months: "April – June", weather: "Hot; humid in Mumbai.", activities: ["Hill stations like Mahabaleshwar"] },
      { name: "Monsoon", months: "June – September", weather: "Heavy rain; waterfalls in full flow.", activities: ["Lonavala, Bhandardara", "Trekking the green Sahyadris"] },
    ],
    travel: {
      airports: [
        { name: "Chhatrapati Shivaji Maharaj International Airport", code: "BOM", mapsQuery: "Mumbai Airport" },
        { name: "Pune International Airport", code: "PNQ", mapsQuery: "Pune Airport" },
        { name: "Aurangabad Airport", code: "IXU", mapsQuery: "Aurangabad Airport" },
      ],
      railwayStations: [
        { name: "Chhatrapati Shivaji Maharaj Terminus", mapsQuery: "Chhatrapati Shivaji Maharaj Terminus" },
        { name: "Pune Junction", mapsQuery: "Pune Junction" },
        { name: "Nagpur Junction", mapsQuery: "Nagpur Junction" },
      ],
      roads: "Mumbai-Pune Expressway, NH-48 and the new Samruddhi Expressway to Nagpur.",
      localTransport: ["Mumbai Local trains", "Metro", "BEST buses", "App taxis", "Auto-rickshaws"],
    },
    neighbors: ["gujarat", "madhya-pradesh", "telangana", "karnataka", "goa", "chhattisgarh"],
    gallerySeeds: ["mh-1", "mh-2", "mh-3", "mh-4", "mh-5", "mh-6"],
    faqs: [
      { q: "How many days should I spend in Maharashtra?", a: "3 days for Mumbai, plus 4–5 more to add Ajanta-Ellora and the Konkan coast." },
      { q: "Is Maharashtra family-friendly?", a: "Yes — Mumbai's attractions, beaches and caves work for all ages." },
      { q: "What is the best month to visit?", a: "November to February. The monsoon (June–September) is magical for the Sahyadris but tough on the coast." },
      { q: "What are the must-try foods?", a: "Vada Pav, Misal Pav, Pav Bhaji, Puran Poli and Malvani seafood." },
      { q: "What are the top attractions?", a: "Gateway of India, Marine Drive, Ajanta & Ellora, Elephanta Caves and Sahyadri forts." },
    ],
  },

  "uttar-pradesh": {
    cities: [
      { slug: "agra", name: "Agra", stateSlug: "uttar-pradesh", shortDescription: "City of the Taj Mahal and the Mughal corridor.", attractionsCount: 6, famousFoods: ["Petha", "Bedai", "Mughlai Kebabs"], majorFestivals: ["Taj Mahotsav"], coords: { lat: 27.1767, lng: 78.0081 } },
      { slug: "varanasi", name: "Varanasi", stateSlug: "uttar-pradesh", shortDescription: "Hinduism's spiritual heart on the ghats of the Ganges.", attractionsCount: 7, famousFoods: ["Banarasi Paan", "Kachori Sabzi", "Malaiyo"], majorFestivals: ["Dev Deepawali", "Ganga Mahotsav"], coords: { lat: 25.3176, lng: 82.9739 } },
      { slug: "lucknow", name: "Lucknow", stateSlug: "uttar-pradesh", shortDescription: "Capital of Nawabi tehzeeb — kebabs, chikan and ghazals.", attractionsCount: 6, famousFoods: ["Galouti Kebab", "Tunday Kebab", "Sheermal"], majorFestivals: ["Lucknow Mahotsav"], coords: { lat: 26.8467, lng: 80.9462 } },
      { slug: "ayodhya", name: "Ayodhya", stateSlug: "uttar-pradesh", shortDescription: "Sacred pilgrimage town on the Sarayu river.", attractionsCount: 4, famousFoods: ["Aloo Tikki", "Rabri"], majorFestivals: ["Ram Navami", "Deepotsav"], coords: { lat: 26.7922, lng: 82.1998 } },
    ],
    experiences: [
      { label: "Heritage Walks", icon: "🏛", blurb: "Mughal Agra, Awadhi Lucknow, the ghats of Varanasi." },
      { label: "Temple Visits", icon: "🛕", blurb: "Kashi Vishwanath, Ram Janmabhoomi and the Krishna circuit at Mathura-Vrindavan." },
      { label: "River Cruises", icon: "🛶", blurb: "Sunrise boat ride on the Ganges at Varanasi." },
      { label: "Cultural Experiences", icon: "🎭", blurb: "Kathak in Lucknow, ghazal evenings and Sufi qawwali." },
      { label: "Food Trails", icon: "🍛", blurb: "Awadhi dum biryani, kebabs and Banarasi street food." },
      { label: "Buddhist Trail", icon: "☸", blurb: "Sarnath, Kushinagar and Shravasti." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Cool 8–22°C; foggy mornings.", activities: ["Taj Mahal at dawn", "Varanasi ghats", "Lucknow Mahotsav"], recommended: true },
      { name: "Spring", months: "February – April", weather: "Warm and pleasant.", activities: ["Holi in Mathura-Vrindavan"] },
      { name: "Summer", months: "May – June", weather: "Very hot (40°C+).", activities: ["Indoor heritage tours"] },
      { name: "Monsoon", months: "July – September", weather: "Humid; intermittent rain.", activities: ["Lush Ramayana trail"] },
    ],
    travel: {
      airports: [
        { name: "Chaudhary Charan Singh International Airport, Lucknow", code: "LKO", mapsQuery: "Lucknow Airport" },
        { name: "Kheria Airport, Agra", code: "AGR", mapsQuery: "Agra Airport" },
        { name: "Lal Bahadur Shastri International Airport, Varanasi", code: "VNS", mapsQuery: "Varanasi Airport" },
      ],
      railwayStations: [
        { name: "Lucknow Charbagh", mapsQuery: "Lucknow Charbagh Railway Station" },
        { name: "Agra Cantt", mapsQuery: "Agra Cantt Railway Station" },
        { name: "Varanasi Junction", mapsQuery: "Varanasi Junction" },
      ],
      roads: "Yamuna Expressway (Delhi–Agra), Agra-Lucknow Expressway, and Purvanchal Expressway connect the major cities.",
      localTransport: ["App taxis", "Auto-rickshaws", "Cycle rickshaws", "Lucknow Metro"],
    },
    neighbors: ["rajasthan", "madhya-pradesh", "bihar", "uttarakhand", "haryana", "delhi"],
    gallerySeeds: ["up-1", "up-2", "up-3", "up-4", "up-5", "up-6"],
    faqs: [
      { q: "How many days should I spend in Uttar Pradesh?", a: "7–10 days to cover Agra, Lucknow and Varanasi at a thoughtful pace." },
      { q: "Is Uttar Pradesh family-friendly?", a: "Yes — the Taj, Mughal monuments and Lucknow's heritage are family classics." },
      { q: "What is the best month to visit?", a: "November to February. Holi at Mathura-Vrindavan is a major draw in March." },
      { q: "What are the must-try foods?", a: "Tunday Kebab, Galouti Kebab, Petha, Banarasi paan, Kachori Sabzi and Awadhi biryani." },
      { q: "What are the top attractions?", a: "Taj Mahal, Agra Fort, Fatehpur Sikri, Varanasi ghats, Sarnath and Lucknow's Bara Imambara." },
    ],
  },

  karnataka: {
    cities: [
      {
        slug: "bengaluru", name: "Bengaluru", stateSlug: "karnataka",
        shortDescription: "India's tech capital — cool climate, garden city and craft-beer scene.",
        overview: "Bengaluru sits at 900 metres on the Deccan plateau — pleasant year-round, leafy around Cubbon Park and Lalbagh, and the anchor of India's software industry. The old cantonment areas (MG Road, Church Street, Shivaji Nagar) sit alongside dense new-tech neighbourhoods like Koramangala and Whitefield.",
        thingsToDo: ["Morning walk in Cubbon Park", "Lalbagh Botanical Garden", "Craft-beer crawl on Church Street", "Bangalore Palace tour", "Weekend trip to Nandi Hills"],
        attractionsCount: 6, famousFoods: ["Masala Dosa", "Bisi Bele Bath", "Filter Coffee"],
        majorFestivals: ["Karaga Festival", "Bengaluru Habba"],
        nearbyAttractionSlugs: ["bengaluru", "mysuru", "coorg", "chikmagalur"],
        coords: { lat: 12.9716, lng: 77.5946 },
      },
      {
        slug: "mysuru", name: "Mysuru", stateSlug: "karnataka",
        shortDescription: "Royal Wodeyar city — palaces, silk and the country's grandest Dasara.",
        overview: "Mysuru (Mysore) was the seat of the Wodeyar dynasty for over 500 years. The Indo-Saracenic Mysore Palace, lit with 97,000 bulbs on Sunday nights and through Dasara, is the headline. The city also gave the world Ashtanga yoga, the Mysore silk sari and the ghee-drenched Mysore Pak.",
        thingsToDo: ["Mysore Palace illumination", "Chamundi Hill drive", "Devaraja Market spice trail", "Brindavan Gardens musical fountain", "Day trip to Srirangapatna & Somnathpur"],
        attractionsCount: 6, famousFoods: ["Mysore Masala Dosa", "Mysore Pak", "Bisi Bele Bath"],
        majorFestivals: ["Mysuru Dasara"],
        nearbyAttractionSlugs: ["mysuru", "coorg", "hampi", "bengaluru"],
        coords: { lat: 12.2958, lng: 76.6394 },
      },
      {
        slug: "hampi", name: "Hampi", stateSlug: "karnataka",
        shortDescription: "UNESCO-listed ruins of the Vijayanagara capital on the Tungabhadra.",
        overview: "Hampi was the capital of the Vijayanagara Empire, the largest city in the world in the 15th century after Beijing. Sacked in 1565, its temples, chariots and royal enclosures still stand across a surreal boulder-strewn plain by the Tungabhadra — a UNESCO World Heritage Site and one of India's most extraordinary landscapes.",
        thingsToDo: ["Virupaksha & Vittala temples", "Sunrise from Matanga Hill", "Coracle ride on the Tungabhadra", "Cycle the ruins circuit", "Sunset at Hemakuta Hill"],
        attractionsCount: 5, famousFoods: ["Jolada Rotti", "Bisi Bele Bath"],
        majorFestivals: ["Hampi Utsava"],
        nearbyAttractionSlugs: ["hampi", "mysuru", "bengaluru"],
        coords: { lat: 15.3350, lng: 76.4600 },
      },
      {
        slug: "coorg", name: "Coorg (Madikeri)", stateSlug: "karnataka",
        shortDescription: "Coffee estates, misty hills and Kaveri riverside homestays.",
        overview: "Coorg (Kodagu) is a small hill district in the Western Ghats known for its rolling coffee and cardamom estates, distinct Kodava culture and mist-cloaked mornings. Madikeri is the base town; homestays on working plantations are the best way to experience the region.",
        thingsToDo: ["Coffee-estate tour and tasting", "Abbey Falls & Raja's Seat", "Dubare Elephant Camp", "Tadiandamol trek", "Talakaveri source of the Kaveri"],
        attractionsCount: 5, famousFoods: ["Pandi Curry", "Akki Roti", "Coorg Coffee"],
        majorFestivals: ["Kail Podh", "Puttari"],
        nearbyAttractionSlugs: ["coorg", "mysuru", "chikmagalur"],
        coords: { lat: 12.4244, lng: 75.7382 },
      },
    ],
    experiences: [
      { label: "Heritage Walks", icon: "🏛", blurb: "Vijayanagara ruins, Hoysala star temples and Mysore palaces." },
      { label: "Wildlife Safari", icon: "🐅", blurb: "Bandipur, Nagarhole and Kabini tiger reserves." },
      { label: "Beach Activities", icon: "🏖", blurb: "Karavali coast beaches at Gokarna and Murudeshwar." },
      { label: "Coffee Trails", icon: "☕", blurb: "Estate stays in Coorg and Chikmagalur." },
      { label: "Trekking", icon: "🥾", blurb: "Mullayanagiri, Tadiandamol and Kudremukh." },
      { label: "Cultural Experiences", icon: "🎭", blurb: "Yakshagana coastal theatre and Carnatic music." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Pleasant 15–28°C — peak season.", activities: ["Hampi", "Coffee estates", "Wildlife"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Warm and dry.", activities: ["Coastal Karnataka", "Yakshagana season"] },
      { name: "Summer", months: "April – June", weather: "Hot in the plains; pleasant in the ghats.", activities: ["Chikmagalur & Coorg hill escapes"] },
      { name: "Monsoon", months: "June – September", weather: "Heavy rain, dramatic waterfalls.", activities: ["Jog Falls in full flow", "Coffee-estate greenery"] },
    ],
    travel: {
      airports: [
        { name: "Kempegowda International Airport, Bengaluru", code: "BLR", mapsQuery: "Bengaluru Airport" },
        { name: "Mysuru Airport", code: "MYQ", mapsQuery: "Mysuru Airport" },
        { name: "Mangaluru International Airport", code: "IXE", mapsQuery: "Mangaluru Airport" },
      ],
      railwayStations: [
        { name: "KSR Bengaluru City", mapsQuery: "KSR Bengaluru City Railway Station" },
        { name: "Mysuru Junction", mapsQuery: "Mysuru Junction" },
        { name: "Hospet Junction (for Hampi)", mapsQuery: "Hospet Junction" },
      ],
      roads: "NH-44, NH-48 and NH-75 cross the state. KSRTC and premium Volvo services connect all major cities.",
      localTransport: ["App taxis", "Auto-rickshaws", "Bengaluru Metro (Namma Metro)", "KSRTC buses"],
    },
    neighbors: ["kerala", "tamil-nadu", "andhra-pradesh", "telangana", "goa", "maharashtra"],
    gallerySeeds: ["ka-1", "ka-2", "ka-3", "ka-4", "ka-5", "ka-6"],
    faqs: [
      { q: "How many days should I spend in Karnataka?", a: "10–14 days for Bengaluru, Mysuru, Coorg, Hampi and the Karavali coast." },
      { q: "Is Karnataka family-friendly?", a: "Very — palaces, wildlife parks, coffee estates and beaches suit every age." },
      { q: "What is the best month to visit?", a: "October to February. Dasara in October at Mysuru is the highlight." },
      { q: "What are the must-try foods?", a: "Mysore Masala Dosa, Bisi Bele Bath, Mangalorean fish curry, Mysore Pak and filter coffee." },
      { q: "What are the top attractions?", a: "Hampi ruins, Mysore Palace, Coorg coffee country, Gokarna beaches and Bandipur." },
    ],
  },

  gujarat: {
    cities: [
      {
        slug: "ahmedabad", name: "Ahmedabad", stateSlug: "gujarat",
        shortDescription: "UNESCO heritage city of carved pols, stepwells and Gandhi's ashram.",
        overview: "Ahmedabad, founded in 1411 by Sultan Ahmad Shah, is India's first UNESCO World Heritage City. The old walled city is a maze of pols — self-contained neighbourhoods with carved wooden houses, chabutras (bird-feeders) and secret gates. Across the Sabarmati sits the ashram from which Gandhi launched the Salt March in 1930.",
        thingsToDo: ["Morning heritage walk through the pols", "Sabarmati Ashram visit", "Adalaj Stepwell day trip", "Calico Museum of Textiles", "Manek Chowk midnight food crawl"],
        attractionsCount: 7, famousFoods: ["Dhokla", "Fafda-Jalebi", "Undhiyu"],
        majorFestivals: ["Uttarayan", "Navratri"],
        nearbyAttractionSlugs: ["ahmedabad", "vadodara", "rann-of-kutch"],
        coords: { lat: 23.0225, lng: 72.5714 },
      },
      {
        slug: "vadodara", name: "Vadodara", stateSlug: "gujarat",
        shortDescription: "Gaekwad royal capital — palaces, art deco and Navratri central.",
        overview: "Vadodara (Baroda) was the seat of the Gaekwad dynasty and remains Gujarat's cultural capital. The Laxmi Vilas Palace is four times the size of Buckingham Palace, the MS University campus is one of India's most beautiful, and the city's Navratri garbas are legendary.",
        thingsToDo: ["Laxmi Vilas Palace & Fatehsingh Museum", "Sayaji Baug garden & zoo", "EME Temple", "Day trip to Champaner-Pavagadh UNESCO site", "Navratri garba nights"],
        attractionsCount: 5, famousFoods: ["Sev Usal", "Undhiyu", "Doodh Pauva"],
        majorFestivals: ["Navratri", "Uttarayan"],
        nearbyAttractionSlugs: ["vadodara", "ahmedabad"],
        coords: { lat: 22.3072, lng: 73.1812 },
      },
      {
        slug: "bhuj", name: "Bhuj", stateSlug: "gujarat",
        shortDescription: "Gateway to Kutch — crafts villages, palaces and the White Rann.",
        overview: "Bhuj is the historic capital of the former princely state of Kutch and today the base for exploring the White Rann, the salt-desert villages and their extraordinary craft traditions — bandhani tie-dye, ajrakh block printing, rogan art (kept alive by a single family in Nirona) and Kutchi embroidery.",
        thingsToDo: ["Aina Mahal & Prag Mahal", "Craft villages loop (Bhujodi, Nirona, Ajrakhpur)", "White Rann sunset & full-moon walk", "Kalo Dungar viewpoint", "Rann Utsav tent city stay"],
        attractionsCount: 5, famousFoods: ["Kutchi Dabeli", "Bajra Rotla", "Kadhi Khichdi"],
        majorFestivals: ["Rann Utsav"],
        nearbyAttractionSlugs: ["rann-of-kutch", "ahmedabad"],
        coords: { lat: 23.2420, lng: 69.6669 },
      },
      {
        slug: "dwarka", name: "Dwarka", stateSlug: "gujarat",
        shortDescription: "Char Dham pilgrim town and mythological kingdom of Krishna.",
        overview: "Dwarka is one of the four sacred Char Dham sites and, in Hindu tradition, the kingdom Krishna built by the sea. The 2,500-year-old Dwarkadhish Temple has a 78-metre spire; Bet Dwarka island lies a short ferry away; and the Nageshwar Jyotirlinga — one of the twelve most sacred Shiva shrines — is 15 km up the coast.",
        thingsToDo: ["Dawn aarti at Dwarkadhish Temple", "Ferry to Bet Dwarka", "Nageshwar Jyotirlinga", "Sudama Setu bridge walk", "Coastal loop to Somnath"],
        attractionsCount: 4, famousFoods: ["Prasad Thali", "Ganthiya"],
        majorFestivals: ["Janmashtami"],
        nearbyAttractionSlugs: ["dwarka", "somnath", "gir"],
        coords: { lat: 22.2394, lng: 68.9678 },
      },
    ],
    experiences: [
      { label: "Heritage Walks", icon: "🏛", blurb: "Pol houses, stepwells and Indo-Islamic mosques of Ahmedabad." },
      { label: "Desert Camping", icon: "🐪", blurb: "Full-moon walks on the White Rann of Kutch." },
      { label: "Wildlife Safari", icon: "🦁", blurb: "The last Asiatic lions at Gir National Park." },
      { label: "Temple Visits", icon: "🛕", blurb: "Dwarka, Somnath and the Sun Temple at Modhera." },
      { label: "Craft Trails", icon: "🧵", blurb: "Bandhani, ajrakh, patola and rogan art in Kutch." },
      { label: "Food Trails", icon: "🍛", blurb: "Vegetarian thalis, farsan and Ahmedabad street food." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Pleasant 15–28°C — peak season and Rann Utsav.", activities: ["Rann of Kutch", "Gir safari", "Heritage walks"], recommended: true },
      { name: "Spring", months: "February – March", weather: "Warm and dry.", activities: ["End of Rann Utsav", "Craft-village trips"] },
      { name: "Summer", months: "April – June", weather: "Very hot (40°C+).", activities: ["Hill escapes to Saputara"] },
      { name: "Monsoon", months: "July – September", weather: "Moderate rain; Kutch turns briefly green.", activities: ["Janmashtami at Dwarka"] },
    ],
    travel: {
      airports: [
        { name: "Sardar Vallabhbhai Patel International Airport, Ahmedabad", code: "AMD", mapsQuery: "Ahmedabad Airport" },
        { name: "Vadodara Airport", code: "BDQ", mapsQuery: "Vadodara Airport" },
        { name: "Bhuj Airport", code: "BHJ", mapsQuery: "Bhuj Airport" },
      ],
      railwayStations: [
        { name: "Ahmedabad Junction", mapsQuery: "Ahmedabad Junction Railway Station" },
        { name: "Vadodara Junction", mapsQuery: "Vadodara Junction" },
        { name: "Bhuj", mapsQuery: "Bhuj Railway Station" },
      ],
      roads: "NH-48 (Delhi–Mumbai) and the Ahmedabad-Vadodara Expressway are the arterial routes. GSRTC runs long-distance buses to every district.",
      localTransport: ["App taxis", "Auto-rickshaws", "Ahmedabad BRTS & Metro", "GSRTC buses"],
    },
    neighbors: ["rajasthan", "madhya-pradesh", "maharashtra", "dadra-and-nagar-haveli-and-daman-and-diu"],
    gallerySeeds: ["gj-1", "gj-2", "gj-3", "gj-4", "gj-5", "gj-6"],
    faqs: [
      { q: "How many days should I spend in Gujarat?", a: "8–12 days to cover Ahmedabad, Vadodara, Kutch and the Saurashtra coast (Somnath, Dwarka, Gir)." },
      { q: "Is Gujarat family-friendly?", a: "Very — the Rann Utsav tent city, Gir safaris and heritage walks all work for families." },
      { q: "What is the best month to visit?", a: "November to February. Rann Utsav runs November through February; Navratri in September/October." },
      { q: "What are the must-try foods?", a: "Dhokla, Fafda-Jalebi, Undhiyu, Methi Thepla and the classic Gujarati thali." },
      { q: "What are the top attractions?", a: "White Rann of Kutch, Sabarmati Ashram, Gir National Park, Dwarka, Somnath and Laxmi Vilas Palace." },
    ],
  },

  assam: {
    cities: [
      {
        slug: "guwahati", name: "Guwahati", stateSlug: "assam",
        shortDescription: "River city below Kamakhya hill and the gateway to the northeast.",
        overview: "Guwahati spreads along the south bank of the Brahmaputra, hemmed in by forested hills. Kamakhya on Nilachal Hill is the busiest tantric shrine in India, and river ferries run out to the tiny Umananda island temple.",
        thingsToDo: ["Kamakhya darshan", "Brahmaputra sunset cruise", "Assam State Museum", "Silk shopping at Sualkuchi"],
        attractionsCount: 6, famousFoods: ["Masor Tenga", "Khar", "Pitha"],
        majorFestivals: ["Bohag Bihu", "Ambubachi Mela"],
        nearbyAttractionSlugs: ["guwahati", "kamakhya-temple", "manas", "kaziranga"],
        coords: { lat: 26.1445, lng: 91.7362 },
      },
      {
        slug: "jorhat", name: "Jorhat", stateSlug: "assam",
        shortDescription: "Tea capital of Assam and the ferry point for Majuli island.",
        overview: "Jorhat is surrounded by some of the oldest tea estates in the world, several of which keep colonial planter bungalows open to guests. Nimati Ghat, 15 km north, is the ferry crossing to Majuli.",
        thingsToDo: ["Tea-estate bungalow stay", "Ferry to Majuli", "Gibbon Wildlife Sanctuary", "Tocklai Tea Research Centre"],
        attractionsCount: 4, famousFoods: ["Assam Tea", "Duck Curry", "Masor Tenga"],
        majorFestivals: ["Bohag Bihu", "Magh Bihu"],
        nearbyAttractionSlugs: ["majuli", "sivasagar", "kaziranga"],
        coords: { lat: 26.7509, lng: 94.2037 },
      },
    ],
    experiences: [
      { label: "Wildlife Safari", icon: "\ud83e\udd8f", blurb: "One-horned rhinos at Kaziranga and golden langurs at Manas." },
      { label: "Tea Trails", icon: "\ud83c\udf75", blurb: "Estate walks and tastings around Jorhat and Dibrugarh." },
      { label: "River Journeys", icon: "\ud83d\udea3", blurb: "Brahmaputra cruises and the ferry to Majuli island." },
      { label: "Temple Visits", icon: "\ud83d\uded5", blurb: "Kamakhya, Umananda and the satras of Majuli." },
      { label: "Craft Trails", icon: "\ud83e\uddf5", blurb: "Muga and Eri silk handlooms at Sualkuchi." },
      { label: "Food Trails", icon: "\ud83c\udf5b", blurb: "Tenga curries, khar and bamboo-cooked pitha." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Cool 10–25°C, clear skies — peak safari season.", activities: ["Kaziranga safaris", "Magh Bihu", "River cruises"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Warm and green; Bohag Bihu falls in mid-April.", activities: ["Bihu celebrations", "Tea gardens"] },
      { name: "Summer", months: "May – June", weather: "Hot and humid; parks begin to close.", activities: ["Ambubachi Mela"] },
      { name: "Monsoon", months: "June – September", weather: "Very heavy rain and Brahmaputra flooding.", activities: ["Indoor heritage", "Tea estate stays"] },
    ],
    travel: {
      airports: [
        { name: "Lokpriya Gopinath Bordoloi International Airport, Guwahati", code: "GAU", mapsQuery: "Guwahati Airport" },
        { name: "Jorhat Airport", code: "JRH", mapsQuery: "Jorhat Airport" },
        { name: "Dibrugarh Airport", code: "DIB", mapsQuery: "Dibrugarh Airport" },
      ],
      railwayStations: [
        { name: "Guwahati Junction", mapsQuery: "Guwahati Railway Station" },
        { name: "Jorhat Town", mapsQuery: "Jorhat Town Railway Station" },
        { name: "Dibrugarh", mapsQuery: "Dibrugarh Railway Station" },
      ],
      roads: "NH-27 runs the length of the Brahmaputra valley; ASTC and private night buses link all major towns.",
      localTransport: ["Auto-rickshaws", "App taxis", "Shared Sumos", "River ferries"],
    },
    neighbors: ["west-bengal", "arunachal-pradesh", "meghalaya", "nagaland", "manipur", "mizoram", "tripura"],
    gallerySeeds: ["as-1", "as-2", "as-3", "as-4", "as-5", "as-6"],
    faqs: [
      { q: "How many days should I spend in Assam?", a: "6–8 days covers Guwahati, Kaziranga, Jorhat's tea estates and Majuli island." },
      { q: "Is Assam family-friendly?", a: "Yes — safaris, river ferries and easy road distances suit families, though park roads can be bumpy." },
      { q: "What is the best month to visit Assam?", a: "November to April. Kaziranga is closed through the monsoon from mid-May to October." },
      { q: "What are the must-try foods?", a: "Masor Tenga, Khar, duck curry with ash gourd, til pitha and a pot of estate-fresh Assam tea." },
      { q: "What are the top attractions?", a: "Kaziranga National Park, Kamakhya Temple, Majuli island, Sivasagar's Ahom monuments and Manas National Park." },
    ],
  },

  bihar: {
    cities: [
      {
        slug: "patna", name: "Patna", stateSlug: "bihar",
        shortDescription: "Ancient Pataliputra on the Ganges — museums, ghats and Patna Sahib.",
        overview: "Patna stretches for kilometres along the south bank of the Ganges. The Bihar Museum is one of India's best new museums, Takht Sri Patna Sahib marks Guru Gobind Singh's birthplace, and the Mauryan ruins at Kumhrar sit within the modern city.",
        thingsToDo: ["Bihar Museum", "Takht Sri Patna Sahib", "Golghar climb", "Ganges ghat sunset"],
        attractionsCount: 5, famousFoods: ["Litti Chokha", "Sattu Sharbat", "Khaja"],
        majorFestivals: ["Chhath Puja", "Sonepur Mela"],
        nearbyAttractionSlugs: ["patna", "vaishali", "nalanda"],
        coords: { lat: 25.5941, lng: 85.1376 },
      },
      {
        slug: "gaya", name: "Gaya & Bodh Gaya", stateSlug: "bihar",
        shortDescription: "Buddhist pilgrimage centre around the Mahabodhi Temple.",
        overview: "Gaya is both a Hindu pind-daan town on the Falgu river and the rail gateway to Bodh Gaya, 13 km away, where the Mahabodhi Temple and a ring of international monasteries draw pilgrims from across the Buddhist world.",
        thingsToDo: ["Mahabodhi Temple", "Monastery circuit", "Vishnupad Temple", "Vipassana courses"],
        attractionsCount: 4, famousFoods: ["Tilkut", "Litti Chokha", "Thekua"],
        majorFestivals: ["Buddha Purnima", "Pitrapaksha Mela"],
        nearbyAttractionSlugs: ["bodh-gaya", "rajgir", "nalanda"],
        coords: { lat: 24.7955, lng: 85.0002 },
      },
    ],
    experiences: [
      { label: "Buddhist Circuit", icon: "\u262f", blurb: "Bodh Gaya, Nalanda, Rajgir and Vaishali in one loop." },
      { label: "Heritage Walks", icon: "\ud83c\udfdb", blurb: "Mauryan ruins at Kumhrar and the excavations of Nalanda." },
      { label: "Temple Visits", icon: "\ud83d\uded5", blurb: "Mahabodhi, Vishnupad and Takht Sri Patna Sahib." },
      { label: "River Rituals", icon: "\ud83c\udf05", blurb: "Chhath arghya on the Ganges ghats at dawn and dusk." },
      { label: "Craft Trails", icon: "\ud83c\udfa8", blurb: "Madhubani painting villages in the Mithila belt." },
      { label: "Food Trails", icon: "\ud83c\udf5b", blurb: "Litti chokha, sattu drinks and Silao khaja." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Cool 8–25°C — the most comfortable season.", activities: ["Buddhist circuit", "Chhath Puja", "Heritage sites"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Warm and dry.", activities: ["Nalanda and Rajgir", "Ramnavami"] },
      { name: "Summer", months: "May – June", weather: "Very hot, often above 40°C.", activities: ["Buddha Purnima", "Early-morning sightseeing"] },
      { name: "Monsoon", months: "July – September", weather: "Humid with river flooding in places.", activities: ["Monastery stays", "Museums"] },
    ],
    travel: {
      airports: [
        { name: "Jay Prakash Narayan International Airport, Patna", code: "PAT", mapsQuery: "Patna Airport" },
        { name: "Gaya International Airport", code: "GAY", mapsQuery: "Gaya Airport" },
      ],
      railwayStations: [
        { name: "Patna Junction", mapsQuery: "Patna Junction" },
        { name: "Gaya Junction", mapsQuery: "Gaya Junction" },
        { name: "Rajgir", mapsQuery: "Rajgir Railway Station" },
      ],
      roads: "NH-19 and NH-31 cross the state; the Buddhist circuit is easiest by hired car from Patna or Gaya.",
      localTransport: ["Auto-rickshaws", "App taxis in Patna", "Shared jeeps", "Tongas in Rajgir"],
    },
    neighbors: ["uttar-pradesh", "jharkhand", "west-bengal"],
    gallerySeeds: ["br-1", "br-2", "br-3", "br-4", "br-5", "br-6"],
    faqs: [
      { q: "How many days should I spend in Bihar?", a: "5–7 days covers Patna, Bodh Gaya, Nalanda, Rajgir and Vaishali at a relaxed pace." },
      { q: "Is Bihar family-friendly?", a: "Yes for the main circuit — Rajgir's ropeway and glass bridge and the Bihar Museum work well with children." },
      { q: "What is the best month to visit Bihar?", a: "October to March. Chhath Puja in November is spectacular but fills every hotel." },
      { q: "What are the must-try foods?", a: "Litti chokha with ghee, sattu sharbat, dal pitha, Silao khaja and thekua." },
      { q: "What are the top attractions?", a: "Mahabodhi Temple at Bodh Gaya, Nalanda ruins, Rajgir, Vaishali's Ashokan pillar and Patna's Bihar Museum." },
    ],
  },

  haryana: {
    cities: [
      {
        slug: "kurukshetra-city", name: "Kurukshetra", stateSlug: "haryana",
        shortDescription: "Mahabharata battlefield and Gita pilgrimage town.",
        overview: "Kurukshetra is built around Brahma Sarovar, a vast sacred tank ringed by ghats and temples. Jyotisar, on the town's edge, marks the spot where Krishna is said to have delivered the Bhagavad Gita.",
        thingsToDo: ["Brahma Sarovar aarti", "Jyotisar light-and-sound show", "Krishna Museum", "Gita Mahotsav"],
        attractionsCount: 4, famousFoods: ["Bajra Khichdi", "Malpua", "Lassi"],
        majorFestivals: ["Gita Mahotsav", "Somvati Amavasya"],
        nearbyAttractionSlugs: ["kurukshetra", "pinjore", "morni-hills"],
        coords: { lat: 29.9695, lng: 76.8783 },
      },
      {
        slug: "gurugram-city", name: "Gurugram", stateSlug: "haryana",
        shortDescription: "Corporate skyline, dining districts and Aravalli trails on Delhi's edge.",
        overview: "Gurugram grew from a farming town into India's densest office district in three decades. Cyber Hub anchors its restaurant scene, and the Aravalli Biodiversity Park and Sultanpur wetlands provide the green counterweight.",
        thingsToDo: ["Cyber Hub dining", "Aravalli Biodiversity Park walk", "Kingdom of Dreams", "Sultanpur birding day trip"],
        attractionsCount: 4, famousFoods: ["Chaach", "Kebabs", "Street chaat"],
        majorFestivals: ["Surajkund Mela", "Teej"],
        nearbyAttractionSlugs: ["gurugram", "sultanpur"],
        coords: { lat: 28.4595, lng: 77.0266 },
      },
    ],
    experiences: [
      { label: "Heritage Walks", icon: "\ud83c\udfdb", blurb: "Mughal gardens at Pinjore and the battlefields of Panipat." },
      { label: "Spiritual Trails", icon: "\ud83d\uded5", blurb: "Brahma Sarovar, Jyotisar and the Gita circuit at Kurukshetra." },
      { label: "Birdwatching", icon: "\ud83e\udda9", blurb: "Winter migrants at Sultanpur National Park." },
      { label: "Hill Escapes", icon: "\u26f0", blurb: "Pine ridges and twin lakes at Morni Hills." },
      { label: "Craft Fairs", icon: "\ud83e\uddf5", blurb: "The Surajkund Crafts Mela each February." },
      { label: "Food Trails", icon: "\ud83c\udf5b", blurb: "Highway dhabas, white butter and bajra khichdi." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Cold 4–20°C with morning fog.", activities: ["Sultanpur birding", "Gita Mahotsav", "Surajkund Mela"], recommended: true },
      { name: "Spring", months: "February – March", weather: "Mild and pleasant.", activities: ["Pinjore Gardens", "Morni Hills"] },
      { name: "Summer", months: "April – June", weather: "Very hot, 40°C+ on the plains.", activities: ["Morni Hills escape"] },
      { name: "Monsoon", months: "July – September", weather: "Moderate rain; the Shivaliks turn green.", activities: ["Teej fairs", "Morni waterfalls"] },
    ],
    travel: {
      airports: [
        { name: "Indira Gandhi International Airport, Delhi", code: "DEL", mapsQuery: "Indira Gandhi International Airport" },
        { name: "Chandigarh International Airport", code: "IXC", mapsQuery: "Chandigarh Airport" },
        { name: "Hisar Airport", code: "HSS", mapsQuery: "Hisar Airport" },
      ],
      railwayStations: [
        { name: "Kurukshetra Junction", mapsQuery: "Kurukshetra Junction" },
        { name: "Ambala Cantt Junction", mapsQuery: "Ambala Cantt Junction" },
        { name: "Gurgaon Railway Station", mapsQuery: "Gurgaon Railway Station" },
      ],
      roads: "NH-44 (Delhi–Chandigarh) and NH-48 cut through the state; Haryana Roadways buses run frequently from Delhi.",
      localTransport: ["Auto-rickshaws", "App taxis", "Delhi Metro to Gurugram", "Haryana Roadways buses"],
    },
    neighbors: ["punjab", "rajasthan", "uttar-pradesh", "himachal-pradesh", "delhi", "chandigarh"],
    gallerySeeds: ["hr-1", "hr-2", "hr-3", "hr-4", "hr-5", "hr-6"],
    faqs: [
      { q: "How many days should I spend in Haryana?", a: "3–4 days is enough for Kurukshetra, Pinjore, Morni Hills and a Sultanpur birding morning." },
      { q: "Is Haryana family-friendly?", a: "Yes — most sites are easy day trips from Delhi or Chandigarh with short driving distances." },
      { q: "What is the best month to visit Haryana?", a: "November to March, when the plains are cool and Sultanpur is full of migratory birds." },
      { q: "What are the must-try foods?", a: "Bajra khichdi with white butter, kachri ki sabzi, hara cholia pulao, malpua and a tumbler of lassi." },
      { q: "What are the top attractions?", a: "Kurukshetra's Brahma Sarovar, Pinjore Gardens, Sultanpur National Park, Morni Hills and Gurugram's Cyber Hub." },
    ],
  },

  delhi: {
    cities: [
      {
        slug: "old-delhi", name: "Old Delhi", stateSlug: "delhi",
        shortDescription: "Shahjahanabad — Red Fort, Jama Masjid and the Chandni Chowk bazaars.",
        overview: "The walled city Shah Jahan founded in 1648 still trades from the same lanes: silver in Dariba Kalan, spices at Khari Baoli, and paratha shops that have run for five generations. The Red Fort and Jama Masjid bracket it at either end.",
        thingsToDo: ["Chandni Chowk food walk", "Red Fort", "Jama Masjid minaret climb", "Sunday Daryaganj book market"],
        attractionsCount: 6, famousFoods: ["Chandni Chowk Paratha", "Kebabs", "Daulat ki Chaat"],
        majorFestivals: ["Ramlila", "Eid at Jama Masjid"],
        nearbyAttractionSlugs: ["red-fort", "chandni-chowk", "india-gate"],
        coords: { lat: 28.6562, lng: 77.2410 },
      },
      {
        slug: "new-delhi", name: "New Delhi", stateSlug: "delhi",
        shortDescription: "Lutyens' avenues, museums and the Nizamuddin heritage belt.",
        overview: "New Delhi is the sandstone capital laid out by Lutyens and Baker in the 1910s — Kartavya Path, Rashtrapati Bhavan and Connaught Place — with Humayun's Tomb, Sunder Nursery and Nizamuddin Dargah just to the south-east.",
        thingsToDo: ["Kartavya Path evening walk", "Humayun's Tomb & Sunder Nursery", "National Museum", "Thursday qawwali at Nizamuddin"],
        attractionsCount: 6, famousFoods: ["Butter Chicken", "Chole Bhature", "Kebabs"],
        majorFestivals: ["Republic Day", "Qutub Festival"],
        nearbyAttractionSlugs: ["humayuns-tomb", "india-gate", "lotus-temple", "qutub-minar"],
        coords: { lat: 28.6139, lng: 77.2090 },
      },
    ],
    experiences: [
      { label: "Heritage Walks", icon: "\ud83c\udfdb", blurb: "Seven historic cities from Mehrauli to Shahjahanabad." },
      { label: "Food Trails", icon: "\ud83c\udf5b", blurb: "Old Delhi kebabs, parathas and winter-only chaat." },
      { label: "Museums & Galleries", icon: "\ud83c\udfa8", blurb: "National Museum, Kiran Nadar and the crafts museum." },
      { label: "Sufi Evenings", icon: "\ud83c\udfb5", blurb: "Thursday qawwali at Nizamuddin Dargah." },
      { label: "Local Markets", icon: "\ud83d\uded8", blurb: "Dilli Haat, Sarojini Nagar and Khari Baoli." },
      { label: "Temple Visits", icon: "\ud83d\uded5", blurb: "Lotus Temple, Akshardham and Bangla Sahib." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Cold 5–20°C with December fog and smog.", activities: ["Monument walks", "Food trails", "Republic Day"], recommended: true },
      { name: "Spring", months: "February – March", weather: "Mild, with gardens in full bloom.", activities: ["Mughal Gardens", "Sunder Nursery", "Holi"] },
      { name: "Summer", months: "April – June", weather: "Extremely hot, up to 45°C.", activities: ["Museums", "Early-morning sightseeing"] },
      { name: "Monsoon", months: "July – September", weather: "Humid with heavy showers.", activities: ["Indoor heritage", "Phool Walon ki Sair"] },
    ],
    travel: {
      airports: [
        { name: "Indira Gandhi International Airport", code: "DEL", mapsQuery: "Indira Gandhi International Airport" },
      ],
      railwayStations: [
        { name: "New Delhi Railway Station", mapsQuery: "New Delhi Railway Station" },
        { name: "Hazrat Nizamuddin", mapsQuery: "Hazrat Nizamuddin Railway Station" },
        { name: "Old Delhi Junction", mapsQuery: "Delhi Junction Railway Station" },
      ],
      roads: "Ringed by NH-44, NH-48 and the Eastern and Western Peripheral Expressways; interstate buses run from Kashmere Gate ISBT.",
      localTransport: ["Delhi Metro", "App taxis", "Auto-rickshaws", "DTC buses", "Cycle rickshaws in Old Delhi"],
    },
    neighbors: ["haryana", "uttar-pradesh", "rajasthan", "punjab"],
    gallerySeeds: ["dl-1", "dl-2", "dl-3", "dl-4", "dl-5", "dl-6"],
    faqs: [
      { q: "How many days should I spend in Delhi?", a: "3–4 days covers Old Delhi, Lutyens' Delhi, the Qutub complex and Humayun's Tomb without rushing." },
      { q: "Is Delhi family-friendly?", a: "Yes — the Metro makes it easy, and the monuments, museums and Dilli Haat all work well with children." },
      { q: "What is the best month to visit Delhi?", a: "October to March. Avoid May and June heat and the worst of the late-autumn smog if you can." },
      { q: "What are the must-try foods?", a: "Butter chicken, chole bhature, Paranthe Wali Gali parathas, seekh kebabs and winter daulat ki chaat." },
      { q: "What are the top attractions?", a: "Red Fort, Qutub Minar, Humayun's Tomb, India Gate, Lotus Temple and Chandni Chowk." },
    ],
  },

  "madhya-pradesh": {
    cities: [
      {
        slug: "bhopal-city", name: "Bhopal", stateSlug: "madhya-pradesh",
        shortDescription: "City of lakes with a Begum-era old town and India's best tribal museum.",
        overview: "Bhopal is split between the old city around Taj-ul-Masajid and the newer hillside suburbs above the Upper Lake. The Begums who ruled here from 1819 to 1926 left mosques, palaces and a distinct Bhopali kitchen; the Museum of Man on Shamla Hills is one of the finest anthropological museums in Asia.",
        thingsToDo: ["Taj-ul-Masajid", "Upper Lake boating", "Museum of Man", "Bharat Bhavan", "Chowk bazaar kebabs"],
        attractionsCount: 5, famousFoods: ["Bhopali Gosht Korma", "Poha Jalebi", "Mawa Bati"],
        majorFestivals: ["Simhastha", "Eid"],
        nearbyAttractionSlugs: ["bhopal", "sanchi", "pachmarhi"],
        coords: { lat: 23.2599, lng: 77.4126 },
      },
      {
        slug: "khajuraho-town", name: "Khajuraho", stateSlug: "madhya-pradesh",
        shortDescription: "Temple town of Chandela sculpture and the February dance festival.",
        overview: "Khajuraho is a small, walkable town built entirely around its UNESCO temple groups. Of the 85 temples raised by the Chandelas, 25 survive, and the Western Group is floodlit each evening for a light-and-sound retelling of the dynasty's history.",
        thingsToDo: ["Western Group tour", "Light-and-sound show", "Eastern Jain temples", "Dance festival in February"],
        attractionsCount: 4, famousFoods: ["Dal Bafla", "Poha", "Mawa Bati"],
        majorFestivals: ["Khajuraho Dance Festival", "Maha Shivaratri"],
        nearbyAttractionSlugs: ["khajuraho", "bandhavgarh"],
        coords: { lat: 24.8318, lng: 79.9199 },
      },
    ],
    experiences: [
      { label: "Tiger Safaris", icon: "\ud83d\udc05", blurb: "Bandhavgarh, Kanha and Pench hold India's densest tiger populations." },
      { label: "Temple Sculpture", icon: "\ud83c\udfdb", blurb: "Khajuraho's Chandela carving and the Ashokan stupa at Sanchi." },
      { label: "Fort Circuits", icon: "\ud83c\udff0", blurb: "Gwalior, Mandu and Orchha \u2014 Rajasthan-scale forts without the crowds." },
      { label: "River & Gorge", icon: "\ud83d\udea3", blurb: "Marble rocks and the Dhuandhar falls on the Narmada at Bhedaghat." },
      { label: "Craft Trails", icon: "\ud83c\udfa8", blurb: "Gond and Bhil painting, Chanderi and Maheshwari handloom." },
      { label: "Food Trails", icon: "\ud83c\udf5b", blurb: "Indore's Sarafa night market and Bhopal's Nawabi kebabs." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Cool 10–27°C with clear skies — ideal for temples and safaris.", activities: ["Tiger safaris", "Khajuraho Dance Festival", "Fort circuits"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Warming quickly but still pleasant in the mornings.", activities: ["Best tiger sightings", "Sanchi and Bhimbetka"] },
      { name: "Summer", months: "May – June", weather: "Very hot, often over 42°C on the plains.", activities: ["Pachmarhi hill air", "Early-morning safaris"] },
      { name: "Monsoon", months: "July – September", weather: "Heavy rain; national parks close for the season.", activities: ["Bhedaghat in spate", "Pachmarhi waterfalls"] },
    ],
    travel: {
      airports: [
        { name: "Raja Bhoj Airport, Bhopal", code: "BHO", mapsQuery: "Bhopal Airport" },
        { name: "Devi Ahilyabai Holkar Airport, Indore", code: "IDR", mapsQuery: "Indore Airport" },
        { name: "Khajuraho Airport", code: "HJR", mapsQuery: "Khajuraho Airport" },
      ],
      railwayStations: [
        { name: "Bhopal Junction", mapsQuery: "Bhopal Junction" },
        { name: "Jabalpur Junction", mapsQuery: "Jabalpur Junction" },
        { name: "Khajuraho", mapsQuery: "Khajuraho Railway Station" },
      ],
      roads: "NH-44 and NH-46 cross the state; national parks are best reached by hired car from Jabalpur or Katni.",
      localTransport: ["Auto-rickshaws", "App taxis in Bhopal and Indore", "Park gypsies", "State buses"],
    },
    neighbors: ["uttar-pradesh", "rajasthan", "gujarat", "maharashtra", "chhattisgarh"],
    gallerySeeds: ["mp-1", "mp-2", "mp-3", "mp-4", "mp-5", "mp-6"],
    faqs: [
      { q: "How many days should I spend in Madhya Pradesh?", a: "8–10 days lets you pair Khajuraho and Sanchi with a tiger reserve and Bhopal or Pachmarhi." },
      { q: "Is Madhya Pradesh family-friendly?", a: "Yes — safaris, boat rides at Bhedaghat and the Bhopal museums all work well with children." },
      { q: "What is the best month to visit Madhya Pradesh?", a: "November to March for comfort; March to May for the best tiger sightings if you can take the heat." },
      { q: "What are the must-try foods?", a: "Indori poha jalebi, bhutte ka kees, dal bafla, Bhopali gosht korma and mawa bati." },
      { q: "What are the top attractions?", a: "Khajuraho temples, Sanchi Stupa, Bandhavgarh and Kanha national parks, Bhopal and Pachmarhi." },
    ],
  },

  punjab: {
    cities: [
      {
        slug: "amritsar-city", name: "Amritsar", stateSlug: "punjab",
        shortDescription: "The Golden Temple city — pilgrimage, history and legendary food.",
        overview: "Amritsar grew around the sacred tank dug by Guru Ram Das in 1577. The walled city's lanes lead to Harmandir Sahib, the Partition Museum and Jallianwala Bagh, and its dhabas serve some of the most confident food in north India.",
        thingsToDo: ["Golden Temple at dawn", "Jallianwala Bagh", "Partition Museum", "Wagah retreat ceremony", "Kulcha and lassi crawl"],
        attractionsCount: 5, famousFoods: ["Amritsari Kulcha", "Amritsari Macchi", "Punjabi Lassi"],
        majorFestivals: ["Baisakhi", "Guru Nanak Gurpurab"],
        nearbyAttractionSlugs: ["amritsar", "golden-temple", "wagah-border"],
        coords: { lat: 31.6340, lng: 74.8723 },
      },
      {
        slug: "chandigarh-capital", name: "Chandigarh", stateSlug: "punjab",
        shortDescription: "Le Corbusier's planned capital of sectors, gardens and Brutalist concrete.",
        overview: "Chandigarh serves as the shared capital of Punjab and Haryana and is India's most orderly city — numbered sectors, wide avenues, a lake on its edge and a UNESCO-listed Capitol Complex, offset by Nek Chand's gloriously chaotic Rock Garden.",
        thingsToDo: ["Rock Garden", "Sukhna Lake", "Capitol Complex tour", "Rose Garden", "Sector 17 shopping"],
        attractionsCount: 5, famousFoods: ["Sarson da Saag", "Butter Chicken", "Pinni"],
        majorFestivals: ["Baisakhi", "Rose Festival"],
        nearbyAttractionSlugs: ["chandigarh-city", "patiala", "anandpur-sahib"],
        coords: { lat: 30.7333, lng: 76.7794 },
      },
    ],
    experiences: [
      { label: "Sikh Pilgrimage", icon: "\ud83d\uded5", blurb: "Harmandir Sahib, Anandpur Sahib and the takht gurdwaras." },
      { label: "Food Trails", icon: "\ud83c\udf5b", blurb: "Kulchas, tandoori dhabas and lassi in steel tumblers." },
      { label: "Heritage Walks", icon: "\ud83c\udfdb", blurb: "Partition Museum, Jallianwala Bagh and Patiala's Qila Mubarak." },
      { label: "Modernist Architecture", icon: "\ud83c\udfd7", blurb: "Le Corbusier's Capitol Complex and the Rock Garden." },
      { label: "Village Life", icon: "\ud83c\udf3e", blurb: "Farm stays in the wheat belt with tractor rides and fresh butter." },
      { label: "Festivals", icon: "\ud83e\udd41", blurb: "Bhangra at Baisakhi and Nihang horsemanship at Hola Mohalla." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Cold 4–20°C with fog on some mornings — saag season.", activities: ["Golden Temple", "Gurpurab", "Winter food"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Mild and green with the wheat harvest.", activities: ["Baisakhi", "Hola Mohalla", "Farm stays"] },
      { name: "Summer", months: "May – June", weather: "Very hot, regularly above 42°C.", activities: ["Early-morning sightseeing", "Sukhna Lake evenings"] },
      { name: "Monsoon", months: "July – September", weather: "Warm and humid with moderate rain.", activities: ["Green countryside drives", "Museums"] },
    ],
    travel: {
      airports: [
        { name: "Sri Guru Ram Dass Jee International Airport, Amritsar", code: "ATQ", mapsQuery: "Amritsar Airport" },
        { name: "Chandigarh International Airport", code: "IXC", mapsQuery: "Chandigarh Airport" },
        { name: "Adampur Airport, Jalandhar", code: "AIP", mapsQuery: "Adampur Airport" },
      ],
      railwayStations: [
        { name: "Amritsar Junction", mapsQuery: "Amritsar Junction" },
        { name: "Ludhiana Junction", mapsQuery: "Ludhiana Junction" },
        { name: "Chandigarh Junction", mapsQuery: "Chandigarh Railway Station" },
      ],
      roads: "NH-44 runs Delhi–Amritsar via Ludhiana and Jalandhar; roads are wide, fast and well maintained.",
      localTransport: ["Auto-rickshaws", "Cycle rickshaws in the walled city", "App taxis", "PRTC buses"],
    },
    neighbors: ["haryana", "himachal-pradesh", "rajasthan", "chandigarh", "jammu-and-kashmir"],
    gallerySeeds: ["pb-1", "pb-2", "pb-3", "pb-4", "pb-5", "pb-6"],
    faqs: [
      { q: "How many days should I spend in Punjab?", a: "4–5 days covers Amritsar and Wagah, Anandpur Sahib and Chandigarh comfortably." },
      { q: "Is Punjab family-friendly?", a: "Very — the Golden Temple, Rock Garden and Wagah ceremony are all easy and memorable with children." },
      { q: "What is the best month to visit Punjab?", a: "October to March. April brings Baisakhi, and winter is the season for sarson da saag." },
      { q: "What are the must-try foods?", a: "Amritsari kulcha, sarson da saag with makki di roti, Amritsari macchi, lassi and pinni." },
      { q: "What are the top attractions?", a: "The Golden Temple, Jallianwala Bagh, Wagah border, Anandpur Sahib, Patiala and Chandigarh's Rock Garden." },
    ],
  },

  jharkhand: {
    cities: [
      {
        slug: "ranchi-city", name: "Ranchi", stateSlug: "jharkhand",
        shortDescription: "Plateau capital ringed by waterfalls and forested hills.",
        overview: "Ranchi sits at 650 m on the Chota Nagpur plateau, which gives it cooler air than the plains below. Hilltop temples, a strong tribal-museum collection and a ring of waterfalls within 45 km make it the natural base for the state.",
        thingsToDo: ["Pahari Mandir", "Hundru and Jonha falls", "Tribal Research Institute Museum", "Tagore Hill", "Kanke Dam boating"],
        attractionsCount: 5, famousFoods: ["Dhuska", "Litti Chokha", "Thekua"],
        majorFestivals: ["Sarhul", "Sohrai"],
        nearbyAttractionSlugs: ["ranchi", "hundru-falls", "netarhat"],
        coords: { lat: 23.3441, lng: 85.3096 },
      },
      {
        slug: "jamshedpur-city", name: "Jamshedpur", stateSlug: "jharkhand",
        shortDescription: "India's first planned industrial city, green and lake-fringed.",
        overview: "Built by the Tatas from 1908 around a steel plant, Jamshedpur was planned with parks, lakes and tree-lined roads from the start. Dimna Lake and the Dalma elephant sanctuary sit just outside the city.",
        thingsToDo: ["Jubilee Park", "Dimna Lake", "Tata Steel Zoological Park", "Dalma sanctuary drive"],
        attractionsCount: 4, famousFoods: ["Dhuska", "Rugra", "Litti Chokha"],
        majorFestivals: ["Sarhul", "Durga Puja"],
        nearbyAttractionSlugs: ["jamshedpur", "ranchi", "deoghar"],
        coords: { lat: 22.8046, lng: 86.2029 },
      },
    ],
    experiences: [
      { label: "Waterfall Trails", icon: "\ud83d\udca7", blurb: "Hundru, Jonha, Dassam and Lodh in full flow after the monsoon." },
      { label: "Tribal Culture", icon: "\ud83e\udd41", blurb: "Sarhul in the sacred groves and Chhau mask dance performances." },
      { label: "Wildlife", icon: "\ud83d\udc18", blurb: "Elephants and gaur at Betla inside the Palamu Tiger Reserve." },
      { label: "Hill Retreats", icon: "\u26f0", blurb: "Sunrise and sunset points on the Netarhat plateau." },
      { label: "Pilgrimage", icon: "\ud83d\uded5", blurb: "Baidyanath Dham at Deoghar and the Shravani Mela walk." },
      { label: "Craft Trails", icon: "\ud83c\udfa8", blurb: "Sohrai and Khovar wall painting, tussar silk and bamboo work." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Cool 8–25°C, crisp on the plateau — the best travel window.", activities: ["Betla safaris", "Netarhat sunrises", "Sohrai season"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Warm and dry with sal forests in new leaf.", activities: ["Sarhul festival", "Waterfall visits"] },
      { name: "Summer", months: "May – June", weather: "Hot on the plains, milder at Netarhat.", activities: ["Netarhat plateau", "Early-morning safaris"] },
      { name: "Monsoon", months: "July – September", weather: "Heavy rain; waterfalls at their most dramatic.", activities: ["Hundru and Lodh falls", "Shravani Mela"] },
    ],
    travel: {
      airports: [
        { name: "Birsa Munda Airport, Ranchi", code: "IXR", mapsQuery: "Ranchi Airport" },
        { name: "Sonari Airport, Jamshedpur", code: "IXW", mapsQuery: "Jamshedpur Airport" },
        { name: "Deoghar Airport", code: "DGH", mapsQuery: "Deoghar Airport" },
      ],
      railwayStations: [
        { name: "Ranchi Junction", mapsQuery: "Ranchi Junction" },
        { name: "Tatanagar Junction", mapsQuery: "Tatanagar Junction" },
        { name: "Jasidih Junction", mapsQuery: "Jasidih Junction" },
      ],
      roads: "NH-33 and NH-20 link Ranchi with Jamshedpur, Daltonganj and Deoghar; hire a car for the forest routes.",
      localTransport: ["Auto-rickshaws", "App taxis in Ranchi", "Shared jeeps", "State buses"],
    },
    neighbors: ["bihar", "west-bengal", "odisha", "chhattisgarh", "uttar-pradesh"],
    gallerySeeds: ["jh-1", "jh-2", "jh-3", "jh-4", "jh-5", "jh-6"],
    faqs: [
      { q: "How many days should I spend in Jharkhand?", a: "5–6 days covers Ranchi's waterfall circuit, Netarhat, Betla National Park and Deoghar." },
      { q: "Is Jharkhand family-friendly?", a: "Yes for the main circuit — waterfalls, Jubilee Park and Betla safaris suit families, though forest roads are rough." },
      { q: "What is the best month to visit Jharkhand?", a: "October to March. September and October give the fullest waterfalls with comfortable weather." },
      { q: "What are the must-try foods?", a: "Dhuska with ghugni, litti chokha, monsoon rugra mushrooms, bamboo shoot curry and thekua." },
      { q: "What are the top attractions?", a: "Hundru Falls, Netarhat, Betla National Park, Baidyanath Dham at Deoghar and Jamshedpur's lakes." },
    ],
  },

  sikkim: {
    cities: [
      {
        slug: "gangtok-city", name: "Gangtok", stateSlug: "sikkim",
        shortDescription: "Ridge-top capital with Khangchendzonga views and a car-free high street.",
        overview: "Gangtok climbs a single long ridge at around 1,650 m. MG Marg at its centre is pedestrianised and spotless, and every north or east Sikkim trip \u2014 Tsomgo, Nathu La, Lachung \u2014 is arranged through agents here.",
        thingsToDo: ["MG Marg evening walk", "Tashi viewpoint sunrise", "Ropeway ride", "Namgyal Institute of Tibetology", "Day trip to Rumtek"],
        attractionsCount: 5, famousFoods: ["Momo", "Thukpa", "Tongba"],
        majorFestivals: ["Losoong", "Saga Dawa"],
        nearbyAttractionSlugs: ["gangtok", "rumtek-monastery", "tsomgo-lake"],
        coords: { lat: 27.3389, lng: 88.6065 },
      },
      {
        slug: "pelling-town", name: "Pelling", stateSlug: "sikkim",
        shortDescription: "West Sikkim viewpoint town below Pemayangtse monastery.",
        overview: "Pelling is really three tiers of hotels strung along a ridge facing Khangchendzonga. Pemayangtse monastery and the ruined royal capital of Rabdentse sit a short walk above, and Khecheopalri Lake is an hour away.",
        thingsToDo: ["Dawn mountain viewing", "Pemayangtse Monastery", "Rabdentse ruins walk", "Sanga Choeling skywalk", "Khecheopalri Lake"],
        attractionsCount: 5, famousFoods: ["Gundruk", "Momo", "Phagshapa"],
        majorFestivals: ["Pang Lhabsol", "Losoong"],
        nearbyAttractionSlugs: ["pelling", "yuksom", "rumtek-monastery"],
        coords: { lat: 27.2167, lng: 88.2167 },
      },
    ],
    experiences: [
      { label: "Mountain Views", icon: "\u26f0", blurb: "Khangchendzonga at dawn from Pelling, Tashi viewpoint and Ravangla." },
      { label: "Monastery Trail", icon: "\ud83d\uded5", blurb: "Rumtek, Pemayangtse, Tashiding and the Cham dance calendar." },
      { label: "Alpine Lakes", icon: "\ud83d\udca7", blurb: "Tsomgo, Khecheopalri and Gurudongmar at 5,400 m." },
      { label: "Trekking", icon: "\ud83e\udd7e", blurb: "Goecha La and Dzongri from Yuksom through rhododendron forest." },
      { label: "Organic Farms", icon: "\ud83c\udf3f", blurb: "Cardamom and orange orchards in India's first fully organic state." },
      { label: "Food Trails", icon: "\ud83e\udd5f", blurb: "Momos, thukpa, fermented gundruk and hot millet tongba." },
    ],
    seasons: [
      { name: "Spring", months: "March – May", weather: "Mild 10–22°C with rhododendrons in full bloom.", activities: ["Yumthang flowers", "Treks from Yuksom", "Saga Dawa"], recommended: true },
      { name: "Summer", months: "June – August", weather: "Warm, wet and cloudy — mountain views are rare.", activities: ["Monastery visits", "Green valley drives"] },
      { name: "Monsoon", months: "June – September", weather: "Heavy rain and frequent landslides on the north roads.", activities: ["Gangtok cafes", "Tibetology museum"] },
      { name: "Winter", months: "October – February", weather: "Cold and very clear — the best Khangchendzonga views.", activities: ["Losoong Cham dances", "Snow at Tsomgo", "Pelling sunrises"], recommended: true },
    ],
    travel: {
      airports: [
        { name: "Pakyong Airport, Gangtok", code: "PYG", mapsQuery: "Pakyong Airport" },
        { name: "Bagdogra Airport, Siliguri", code: "IXB", mapsQuery: "Bagdogra Airport" },
      ],
      railwayStations: [
        { name: "New Jalpaiguri (NJP)", mapsQuery: "New Jalpaiguri Railway Station" },
        { name: "Siliguri Junction", mapsQuery: "Siliguri Junction" },
      ],
      roads: "NH-10 climbs from Siliguri along the Teesta to Gangtok in 4–5 hours; landslides can close it during the monsoon.",
      localTransport: ["Shared jeeps", "Taxis on fixed routes", "Gangtok ropeway", "Walking on MG Marg"],
    },
    neighbors: ["west-bengal"],
    gallerySeeds: ["sk-1", "sk-2", "sk-3", "sk-4", "sk-5", "sk-6"],
    faqs: [
      { q: "How many days should I spend in Sikkim?", a: "7–8 days covers Gangtok, Tsomgo, north Sikkim's Lachung valley and west Sikkim around Pelling and Yuksom." },
      { q: "Do I need a permit for Sikkim?", a: "Indian nationals need permits for Tsomgo, Nathu La and north Sikkim; foreign nationals also need an Inner Line Permit for the state." },
      { q: "What is the best month to visit Sikkim?", a: "March to May for flowers and October to December for the clearest mountain views." },
      { q: "What are the must-try foods?", a: "Pork momos with dalle chutney, thukpa, gundruk soup, phagshapa and millet tongba." },
      { q: "What are the top attractions?", a: "Khangchendzonga views from Pelling, Tsomgo Lake, Rumtek Monastery, Yumthang Valley and Yuksom." },
    ],
  },
  uttarakhand: {
    cities: [
      {
        slug: "dehradun-city", name: "Dehradun", stateSlug: "uttarakhand",
        shortDescription: "Valley capital and the gateway to Mussoorie and the Char Dham roads.",
        overview: "Dehradun sits in the Doon valley between the Shivaliks and the Himalaya, a city of boarding schools, litchi orchards and army institutions. It is the practical base for onward travel to Mussoorie, Rishikesh and the mountain highways.",
        thingsToDo: ["Robber's Cave (Guchhupani)", "Forest Research Institute", "Tapkeshwar Temple", "Paltan Bazaar", "Sahastradhara springs"],
        attractionsCount: 5, famousFoods: ["Kafuli", "Aloo ke Gutke", "Bal Mithai"],
        majorFestivals: ["Harela", "Jhanda Mela"],
        nearbyAttractionSlugs: ["mussoorie", "rishikesh"],
        coords: { lat: 30.3165, lng: 78.0322 },
      },
      {
        slug: "haridwar-city", name: "Haridwar", stateSlug: "uttarakhand",
        shortDescription: "Ganga pilgrim city where the river meets the plains.",
        overview: "Haridwar is one of the seven holiest Hindu cities and the place the Ganga leaves the hills. Har Ki Pauri fills every evening for the Ganga Aarti, and the Kumbh Mela returns here every twelve years.",
        thingsToDo: ["Ganga Aarti at Har Ki Pauri", "Ropeway to Mansa Devi", "Chandi Devi Temple", "Ashram walk in Kankhal"],
        attractionsCount: 4, famousFoods: ["Kachori sabzi", "Aloo puri", "Rabri"],
        majorFestivals: ["Kumbh Mela", "Kanwar Yatra"],
        nearbyAttractionSlugs: ["rishikesh", "mussoorie"],
        coords: { lat: 29.9457, lng: 78.1642 },
      },
      {
        slug: "almora-city", name: "Almora", stateSlug: "uttarakhand",
        shortDescription: "Kumaoni hill town on a horseshoe ridge with long Himalayan views.",
        overview: "Almora was the Chand dynasty capital and keeps stone-paved bazaars, carved wooden shopfronts and a reputation for sweets. Jageshwar's cluster of stone temples and the Binsar sanctuary are short drives away.",
        thingsToDo: ["Lal Bazaar walk", "Jageshwar temple complex", "Kasar Devi ridge", "Binsar zero point sunrise"],
        attractionsCount: 4, famousFoods: ["Bal Mithai", "Singori", "Bhatt ki Churkani"],
        majorFestivals: ["Harela", "Nanda Devi Fair"],
        nearbyAttractionSlugs: ["nainital", "jim-corbett"],
        coords: { lat: 29.5892, lng: 79.6467 },
      },
    ],
    experiences: [
      { label: "Char Dham Pilgrimage", icon: "🛕", blurb: "Yamunotri, Gangotri, Kedarnath and Badrinath on the summer circuit." },
      { label: "River Rafting", icon: "🚣", blurb: "Grade III rapids on the Ganga between Shivpuri and Rishikesh." },
      { label: "Himalayan Treks", icon: "🥾", blurb: "Valley of Flowers, Kuari Pass and Roopkund from Garhwal trailheads." },
      { label: "Tiger Safaris", icon: "🐅", blurb: "Dhikala and Bijrani zones in Jim Corbett, India's oldest park." },
      { label: "Hill Stations", icon: "🏔", blurb: "Mussoorie, Nainital, Ranikhet and Kausani ridges." },
      { label: "Yoga & Ashrams", icon: "🧘", blurb: "Riverside classes and teacher training in Rishikesh." },
    ],
    seasons: [
      { name: "Spring", months: "March – April", weather: "Mild 15–25°C with rhododendron in the hills.", activities: ["Rafting", "Hill station walks", "Corbett safaris"], recommended: true },
      { name: "Summer", months: "May – June", weather: "Warm in the plains, perfect 20–28°C in the hills.", activities: ["Char Dham yatra", "Nainital boating", "High treks"], recommended: true },
      { name: "Monsoon", months: "July – September", weather: "Heavy rain with landslide risk on mountain roads.", activities: ["Valley of Flowers", "Green valley drives"] },
      { name: "Winter", months: "October – February", weather: "Cold and clear; snow above 2,000 m.", activities: ["Snow at Auli", "Clear peak views", "Wildlife safaris"], recommended: true },
    ],
    travel: {
      airports: [
        { name: "Jolly Grant Airport, Dehradun", code: "DED", mapsQuery: "Jolly Grant Airport Dehradun" },
        { name: "Pantnagar Airport", code: "PGH", mapsQuery: "Pantnagar Airport" },
      ],
      railwayStations: [
        { name: "Dehradun Railway Station", mapsQuery: "Dehradun Railway Station" },
        { name: "Haridwar Junction", mapsQuery: "Haridwar Junction Railway Station" },
        { name: "Kathgodam", mapsQuery: "Kathgodam Railway Station" },
      ],
      roads: "NH-7 and NH-334 link Delhi to Dehradun and Haridwar in 6–7 hours; mountain highways to Badrinath and Kedarnath are single-lane and slow.",
      localTransport: ["Shared jeeps", "State buses", "Taxis on fixed hill routes", "Ropeways at Nainital and Mussoorie"],
    },
    neighbors: ["himachal-pradesh", "uttar-pradesh", "haryana"],
    gallerySeeds: ["uk-1", "uk-2", "uk-3", "uk-4", "uk-5", "uk-6"],
    faqs: [
      { q: "How many days should I spend in Uttarakhand?", a: "7–10 days covers Rishikesh, one Garhwal or Kumaon hill circuit and a Corbett safari without rushing the mountain roads." },
      { q: "When is the Char Dham yatra open?", a: "The shrines open around late April or May and close in November; registration is required online before travelling." },
      { q: "What is the best month to visit?", a: "March to June for the hills and pilgrimage, and October to November for the clearest Himalayan views." },
      { q: "What are the must-try foods?", a: "Kafuli, aloo ke gutke with bhang chutney, bhatt ki churkani, singori and Almora's bal mithai." },
      { q: "What are the top attractions?", a: "Rishikesh, Jim Corbett, Nainital, Mussoorie, Badrinath and the Valley of Flowers." },
    ],
  },

  odisha: {
    cities: [
      {
        slug: "bhubaneswar-city", name: "Bhubaneswar", stateSlug: "odisha",
        shortDescription: "Temple city and planned capital with hundreds of Kalinga shrines.",
        overview: "Bhubaneswar pairs a medieval old town of sandstone temples with a modern planned capital laid out after 1948. Lingaraj, Mukteshwar and Rajarani cover four centuries of Kalinga architecture within a few kilometres.",
        thingsToDo: ["Old Town temple trail", "Ekamra Walks on Sunday", "Odisha State Museum", "Dhauli peace pagoda", "Ekamra Haat crafts"],
        attractionsCount: 6, famousFoods: ["Dalma", "Chhena Poda", "Pakhala Bhata"],
        majorFestivals: ["Shivaratri at Lingaraj", "Raja Parba"],
        nearbyAttractionSlugs: ["udayagiri-caves", "konark", "puri"],
        coords: { lat: 20.2961, lng: 85.8245 },
      },
      {
        slug: "puri-city", name: "Puri", stateSlug: "odisha",
        shortDescription: "Char Dham pilgrim town with a long beach and the Rath Yatra.",
        overview: "Puri lives around the Jagannath Temple and its kitchen, said to be the largest in the world. The beach runs east towards Konark, and the craft village of Raghurajpur sits just inland.",
        thingsToDo: ["Grand Road walk", "Sunrise on the beach", "Raghurajpur pattachitra studios", "Gundicha Temple", "Mahaprasad at Anand Bazaar"],
        attractionsCount: 5, famousFoods: ["Mahaprasad", "Khaja", "Macha Besara"],
        majorFestivals: ["Rath Yatra", "Chandan Yatra"],
        nearbyAttractionSlugs: ["puri", "konark", "chilika-lake"],
        coords: { lat: 19.8135, lng: 85.8312 },
      },
      {
        slug: "cuttack-city", name: "Cuttack", stateSlug: "odisha",
        shortDescription: "Old riverine capital famous for silver filigree and Durga Puja.",
        overview: "Cuttack sits between the Mahanadi and Kathajodi and served as Odisha's capital for nearly a thousand years. Its silver filigree workshops and Barabati fort ruins anchor a dense, walkable old city.",
        thingsToDo: ["Silver filigree workshops", "Barabati Fort", "Netaji birthplace museum", "Bali Yatra riverside fair"],
        attractionsCount: 4, famousFoods: ["Dahibara Aludum", "Rasabali", "Chhena Jhili"],
        majorFestivals: ["Bali Yatra", "Durga Puja"],
        nearbyAttractionSlugs: ["bhubaneswar", "udayagiri-caves"],
        coords: { lat: 20.4625, lng: 85.8830 },
      },
    ],
    experiences: [
      { label: "Temple Architecture", icon: "🛕", blurb: "Kalinga-school shrines in Bhubaneswar, Puri and Konark." },
      { label: "Chariot Festival", icon: "🎭", blurb: "Rath Yatra in Puri, the largest procession of its kind in India." },
      { label: "Lagoon Wildlife", icon: "🐬", blurb: "Dolphins and flamingos on Chilika, Asia's largest brackish lake." },
      { label: "Tribal Odisha", icon: "🧵", blurb: "Weekly haats and weaving villages in Koraput and Sambalpur." },
      { label: "Beaches", icon: "🏖", blurb: "Puri, Chandrabhaga, Gopalpur and the quiet Marine Drive coast." },
      { label: "Handicrafts", icon: "🎨", blurb: "Pattachitra at Raghurajpur, Pipili applique and Cuttack filigree." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Dry and pleasant 15–28°C — the best travel window.", activities: ["Temple circuit", "Chilika birding", "Konark Dance Festival"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Warming quickly, humid on the coast.", activities: ["Beach mornings", "Similipal safaris"] },
      { name: "Summer", months: "May – June", weather: "Hot and sticky, often above 38°C.", activities: ["Raja Parba", "Early-morning sightseeing"] },
      { name: "Monsoon", months: "July – September", weather: "Heavy coastal rain with cyclone risk.", activities: ["Rath Yatra", "Green countryside drives"] },
    ],
    travel: {
      airports: [
        { name: "Biju Patnaik International Airport, Bhubaneswar", code: "BBI", mapsQuery: "Biju Patnaik International Airport" },
      ],
      railwayStations: [
        { name: "Bhubaneswar Railway Station", mapsQuery: "Bhubaneswar Railway Station" },
        { name: "Puri Railway Station", mapsQuery: "Puri Railway Station" },
        { name: "Cuttack Junction", mapsQuery: "Cuttack Railway Station" },
      ],
      roads: "NH-16 runs the length of the coast between Kolkata and Visakhapatnam; the Bhubaneswar–Puri–Konark Marine Drive is the best road trip in the state.",
      localTransport: ["Auto-rickshaws", "App taxis", "State buses", "Cycle rickshaws in Puri"],
    },
    neighbors: ["west-bengal", "jharkhand", "chhattisgarh", "andhra-pradesh"],
    gallerySeeds: ["od-1", "od-2", "od-3", "od-4", "od-5", "od-6"],
    faqs: [
      { q: "How many days should I spend in Odisha?", a: "5–6 days covers the Bhubaneswar–Puri–Konark golden triangle with a day at Chilika; add three more for Similipal or the tribal belt." },
      { q: "Can non-Hindus enter the Jagannath Temple?", a: "No — entry is restricted to Hindus, but the Raghunandan Library roof opposite offers a view of the complex." },
      { q: "What is the best month to visit?", a: "November to February; December adds the Konark Dance Festival and peak birdlife at Chilika." },
      { q: "What are the must-try foods?", a: "Dalma, pakhala bhata, macha besara, chhena poda and Cuttack's dahibara aludum." },
      { q: "What are the top attractions?", a: "Konark Sun Temple, Puri's Jagannath Temple, Bhubaneswar's old town, Chilika Lake and Udayagiri caves." },
    ],
  },

  meghalaya: {
    cities: [
      {
        slug: "shillong-city", name: "Shillong", stateSlug: "meghalaya",
        shortDescription: "Pine-ridge capital with India's liveliest small-city music scene.",
        overview: "Shillong spreads across ridges at 1,500 m around Ward's Lake and the Police Bazaar crossroads. It is the base for every trip into the Khasi and Jaintia hills and the best place in the northeast to hear live music.",
        thingsToDo: ["Ward's Lake", "Iewduh market", "Don Bosco Museum", "Laitlum canyons", "Cafe gigs in Laitumkhrah"],
        attractionsCount: 6, famousFoods: ["Jadoh", "Doh Neiiong", "Pukhlein"],
        majorFestivals: ["Shad Suk Mynsiem", "Autumn Festival"],
        nearbyAttractionSlugs: ["shillong", "cherrapunji", "mawlynnong"],
        coords: { lat: 25.5788, lng: 91.8933 },
      },
      {
        slug: "cherrapunji-town", name: "Cherrapunji (Sohra)", stateSlug: "meghalaya",
        shortDescription: "Cliff-edge town of waterfalls, caves and record rainfall.",
        overview: "Sohra looks off the plateau towards Bangladesh, with Nohkalikai and Seven Sisters falls dropping from the escarpment and limestone caves running underneath. It is the trailhead for the Nongriat root bridges.",
        thingsToDo: ["Nohkalikai viewpoint", "Mawsmai Cave", "Arwah Cave", "Trek to Nongriat", "Thangkharang Park"],
        attractionsCount: 5, famousFoods: ["Jadoh", "Tungrymbai", "Pukhlein"],
        majorFestivals: ["Behdienkhlam", "Christmas carols"],
        nearbyAttractionSlugs: ["cherrapunji", "living-root-bridges", "mawsmai-cave"],
        coords: { lat: 25.2702, lng: 91.7323 },
      },
      {
        slug: "tura-city", name: "Tura", stateSlug: "meghalaya",
        shortDescription: "Main town of the Garo hills below Nokrek biosphere reserve.",
        overview: "Tura sits at the foot of Tura Peak in the western Garo hills, a quiet town used as the base for Nokrek National Park, Siju cave and the hundred-drums Wangala festival each November.",
        thingsToDo: ["Tura Peak trek", "Nokrek biosphere reserve", "Siju limestone cave", "Wangala festival grounds"],
        attractionsCount: 4, famousFoods: ["Nakham Bitchi", "Kappa", "Rice beer"],
        majorFestivals: ["Wangala", "Christmas"],
        nearbyAttractionSlugs: ["shillong", "cherrapunji"],
        coords: { lat: 25.5140, lng: 90.2027 },
      },
    ],
    experiences: [
      { label: "Living Root Bridges", icon: "🌉", blurb: "Fig roots trained into walkable bridges at Nongriat and Riwai." },
      { label: "Waterfalls", icon: "💧", blurb: "Nohkalikai, Seven Sisters, Krang Suri and Elephant Falls." },
      { label: "Caving", icon: "🕯", blurb: "Mawsmai, Arwah and the long Jaintia limestone systems." },
      { label: "Clear-Water Boating", icon: "🚤", blurb: "The glass-clear Umngot river at Dawki and Shnongpdeng." },
      { label: "Khasi Food", icon: "🍲", blurb: "Jadoh stalls, doh neiiong and fermented tungrymbai." },
      { label: "Live Music", icon: "🎸", blurb: "Shillong's cafe circuit, gospel choirs and rock festivals." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Cool 5–18°C, dry and clear — the best views and clearest rivers.", activities: ["Dawki boating", "Root bridge treks", "Cliff viewpoints"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Mild with occasional showers and blooming orchids.", activities: ["Shad Suk Mynsiem", "Waterfall visits"], recommended: true },
      { name: "Summer", months: "May", weather: "Warm and increasingly wet as the monsoon builds.", activities: ["Cave visits", "Shillong sightseeing"] },
      { name: "Monsoon", months: "June – September", weather: "Extreme rainfall — the wettest place on earth lives up to it.", activities: ["Waterfalls at full force", "Cloud photography"] },
    ],
    travel: {
      airports: [
        { name: "Shillong Airport, Umroi", code: "SHL", mapsQuery: "Shillong Airport Umroi" },
        { name: "Guwahati International Airport", code: "GAU", mapsQuery: "Lokpriya Gopinath Bordoloi International Airport" },
      ],
      railwayStations: [
        { name: "Guwahati Railway Station", mapsQuery: "Guwahati Railway Station" },
        { name: "Kamakhya Junction", mapsQuery: "Kamakhya Junction" },
      ],
      roads: "NH-6 climbs from Guwahati to Shillong in about 3 hours; onward roads to Sohra, Dawki and the Garo hills are narrow and slow.",
      localTransport: ["Shared sumos", "Local taxis", "Rented cars with driver", "Walking in Shillong centre"],
    },
    neighbors: ["assam"],
    gallerySeeds: ["ml-1", "ml-2", "ml-3", "ml-4", "ml-5", "ml-6"],
    faqs: [
      { q: "How many days should I spend in Meghalaya?", a: "6–7 days covers Shillong, Sohra with the Nongriat trek, Mawlynnong and Dawki at a comfortable pace." },
      { q: "Do I need a permit for Meghalaya?", a: "Indian nationals need no permit; foreign nationals must register with the local police in some districts, and Dawki is a border area where ID is checked." },
      { q: "What is the best month to visit?", a: "October to April — the Umngot river runs clear and the plateau views are open." },
      { q: "What are the must-try foods?", a: "Jadoh, doh neiiong, tungrymbai, pukhlein and Garo nakham bitchi." },
      { q: "What are the top attractions?", a: "The double-decker root bridge, Nohkalikai Falls, Dawki, Mawlynnong and Shillong's markets." },
    ],
  },

  tripura: {
    cities: [
      {
        slug: "agartala-city", name: "Agartala", stateSlug: "tripura",
        shortDescription: "Manikya-era capital on the Bangladesh border.",
        overview: "Agartala grew around the Ujjayanta Palace and remains a compact, easy-going capital where Bengali and Tripuri cultures meet. Most of the state's sights are day trips from here.",
        thingsToDo: ["Ujjayanta Palace museum", "Jagannath Temple", "Heritage Park", "Battala market", "Akhaura border gate"],
        attractionsCount: 5, famousFoods: ["Mui Borok", "Wahan Mosdeng", "Mosdeng Serma"],
        majorFestivals: ["Kharchi Puja", "Durga Puja"],
        nearbyAttractionSlugs: ["agartala", "neermahal", "sepahijala"],
        coords: { lat: 23.8315, lng: 91.2868 },
      },
      {
        slug: "udaipur-tripura", name: "Udaipur", stateSlug: "tripura",
        shortDescription: "Temple town of lakes, home to the Tripura Sundari shrine.",
        overview: "Old Rangamati, now Udaipur, was the Manikya capital before Agartala and is dotted with tanks and temples. Matabari, one of the 51 Shakti Peethas, is its centrepiece.",
        thingsToDo: ["Tripura Sundari Temple", "Bhuvaneswari Temple", "Jagannath Dighi", "Chabimura boat trip"],
        attractionsCount: 4, famousFoods: ["Chakhwi", "Berma curry", "Awan Bangwi"],
        majorFestivals: ["Diwali Mela at Matabari", "Garia Puja"],
        nearbyAttractionSlugs: ["chabimura", "neermahal"],
        coords: { lat: 23.5333, lng: 91.4833 },
      },
      {
        slug: "kailashahar-city", name: "Kailashahar", stateSlug: "tripura",
        shortDescription: "Northern tea town beside the Unakoti rock carvings.",
        overview: "Kailashahar lies on the Manu river amid tea gardens in north Tripura and is the base for visiting the giant rock reliefs at Unakoti a few kilometres away.",
        thingsToDo: ["Unakoti carvings", "Tea garden walks", "Manu river ghats", "Ashokastami mela in April"],
        attractionsCount: 3, famousFoods: ["Mui Borok", "Chakhwi", "Tea"],
        majorFestivals: ["Ashokastami Mela", "Garia Puja"],
        nearbyAttractionSlugs: ["unakoti", "jampui-hills"],
        coords: { lat: 24.3320, lng: 92.0100 },
      },
    ],
    experiences: [
      { label: "Rock Carvings", icon: "🗿", blurb: "Giant Shiva reliefs at Unakoti and riverside panels at Chabimura." },
      { label: "Palaces", icon: "🏰", blurb: "Ujjayanta in Agartala and the Neermahal water palace on Rudrasagar." },
      { label: "Handloom", icon: "🧵", blurb: "Risa and rignai weaving on backstrap looms in hill villages." },
      { label: "Hill Retreats", icon: "🏔", blurb: "Jampui's orange orchards and dawn cloud seas on the Mizoram border." },
      { label: "Wildlife", icon: "🐒", blurb: "Spectacled langurs and clouded leopards at Sepahijala." },
      { label: "Tripuri Food", icon: "🍛", blurb: "Oil-free mui borok cooking built around fermented berma." },
    ],
    seasons: [
      { name: "Winter", months: "November – February", weather: "Cool and dry, 10–26°C — ideal for touring.", activities: ["Unakoti", "Neermahal boating", "Jampui sunrises"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Warm and humid with Garia Puja in the villages.", activities: ["Garia Puja", "Temple towns"] },
      { name: "Summer", months: "May – June", weather: "Hot and sticky above 33°C.", activities: ["Jampui hill escape", "Early-morning sightseeing"] },
      { name: "Monsoon", months: "July – September", weather: "Very heavy rain; rivers and lakes run full.", activities: ["Kharchi Puja", "Green hill drives"] },
    ],
    travel: {
      airports: [
        { name: "Maharaja Bir Bikram Airport, Agartala", code: "IXA", mapsQuery: "Maharaja Bir Bikram Airport Agartala" },
      ],
      railwayStations: [
        { name: "Agartala Railway Station", mapsQuery: "Agartala Railway Station" },
        { name: "Udaipur (Tripura) Railway Station", mapsQuery: "Udaipur Tripura Railway Station" },
      ],
      roads: "NH-8 runs the length of the state from Agartala to the Assam border at Churaibari, a slow but scenic 12-hour drive.",
      localTransport: ["Auto-rickshaws", "Shared sumos", "State buses", "Cycle rickshaws"],
    },
    neighbors: ["assam", "mizoram"],
    gallerySeeds: ["tr-1", "tr-2", "tr-3", "tr-4", "tr-5", "tr-6"],
    faqs: [
      { q: "How many days should I spend in Tripura?", a: "4–5 days covers Agartala, Neermahal, Udaipur's temples and Chabimura; add two more for Unakoti and Jampui." },
      { q: "Is Tripura safe for travellers?", a: "Yes — it is one of the calmest northeastern states, with no permit needed for Indian nationals." },
      { q: "What is the best month to visit?", a: "November to February, when the weather is dry and the Jampui hills are at their clearest." },
      { q: "What are the must-try foods?", a: "Mui borok staples like chakhwi, wahan mosdeng, mosdeng serma and awan bangwi sticky rice." },
      { q: "What are the top attractions?", a: "Neermahal, Unakoti, Ujjayanta Palace, Chabimura and the Jampui hills." },
    ],
  },
  manipur: {
    cities: [
      {
        slug: "imphal-city", name: "Imphal", stateSlug: "manipur",
        shortDescription: "Valley capital of Kangla Fort and the all-women Ima Keithel market.",
        overview: "Imphal sits at the centre of the Manipur valley, built around the royal Kangla Fort and the vast Ima Keithel bazaar run entirely by women. It is the base for Loktak, Moirang and the surrounding hill districts.",
        thingsToDo: ["Kangla Fort", "Ima Keithel", "Manipur State Museum", "Shree Govindajee Temple", "Imphal War Cemetery"],
        attractionsCount: 5, famousFoods: ["Eromba", "Singju", "Chak Hao Kheer"],
        majorFestivals: ["Yaoshang", "Sangai Festival"],
        nearbyAttractionSlugs: ["imphal", "kangla-fort", "loktak-lake"],
        coords: { lat: 24.8170, lng: 93.9368 },
      },
      {
        slug: "moirang-city", name: "Moirang", stateSlug: "manipur",
        shortDescription: "Lakeside town of the INA memorial and the Khamba-Thoibi legend.",
        overview: "Moirang stands on the western shore of Loktak and holds both the INA Memorial, where the tricolour was first raised on Indian soil, and the ancient Thangjing temple.",
        thingsToDo: ["INA Memorial", "Thangjing Temple", "Sendra viewpoint", "Loktak boat rides"],
        attractionsCount: 4, famousFoods: ["Nga Thongba", "Chamthong", "Eromba"],
        majorFestivals: ["Lai Haraoba", "Moirang Kangjei"],
        nearbyAttractionSlugs: ["moirang", "loktak-lake", "keibul-lamjao"],
        coords: { lat: 24.5000, lng: 93.7767 },
      },
      {
        slug: "ukhrul-city", name: "Ukhrul", stateSlug: "manipur",
        shortDescription: "Tangkhul hill town below the Shirui lily slopes.",
        overview: "Ukhrul is the highest hill station in Manipur and the cultural centre of the Tangkhul Naga, best known for the endemic Shirui lily that blooms above the town in early summer.",
        thingsToDo: ["Shirui Kashong trek", "Khangkhui cave", "Shirui Lily Festival", "Tangkhul village visits"],
        attractionsCount: 3, famousFoods: ["Smoked meat", "Bamboo shoot curry", "Local rice beer"],
        majorFestivals: ["Shirui Lily Festival", "Luira Phanit"],
        nearbyAttractionSlugs: ["shirui-hills", "imphal"],
        coords: { lat: 25.1167, lng: 94.3667 },
      },
    ],
    experiences: [
      { label: "Floating Lake", icon: "\ud83d\udee5", blurb: "Phumdi islands and fishermen's huts scattered across Loktak." },
      { label: "Rare Wildlife", icon: "\ud83e\udd8c", blurb: "The sangai deer of Keibul Lamjao, the world's only floating park." },
      { label: "Classical Dance", icon: "\ud83d\udc83", blurb: "Manipuri Ras Leela and the martial art of Thang-Ta." },
      { label: "Women's Market", icon: "\ud83e\uddfa", blurb: "Ima Keithel in Imphal, thousands of stalls run only by women." },
      { label: "Hill Treks", icon: "\u26f0", blurb: "Shirui's endemic lily meadows above Ukhrul." },
      { label: "Meitei Food", icon: "\ud83c\udf5b", blurb: "Ngari-based eromba, singju salads and black rice kheer." },
    ],
    seasons: [
      { name: "Winter", months: "November \u2013 February", weather: "Cool and dry, 4\u201322\u00b0C \u2014 clearest views over the valley.", activities: ["Loktak boating", "Sangai Festival", "Heritage walks"], recommended: true },
      { name: "Spring", months: "March \u2013 April", weather: "Mild with Yaoshang colour and long evenings.", activities: ["Yaoshang", "Hill drives"] },
      { name: "Summer", months: "May \u2013 June", weather: "Warm and humid; Shirui lilies open on the ridges.", activities: ["Shirui lily trek", "Lai Haraoba"] },
      { name: "Monsoon", months: "July \u2013 September", weather: "Heavy rain and landslip risk on hill roads.", activities: ["Green valley views", "Museum visits"] },
    ],
    travel: {
      airports: [
        { name: "Bir Tikendrajit International Airport, Imphal", code: "IMF", mapsQuery: "Imphal International Airport" },
      ],
      railwayStations: [
        { name: "Jiribam Railway Station", mapsQuery: "Jiribam Railway Station" },
        { name: "Dimapur Junction (Nagaland)", mapsQuery: "Dimapur Junction" },
      ],
      roads: "NH-2 links Imphal to Dimapur and NH-37 to Silchar; both are scenic but slow, and hill sections close after heavy rain.",
      localTransport: ["Shared sumos", "Auto-rickshaws", "City buses", "Hired cars with driver"],
    },
    neighbors: ["nagaland", "mizoram", "assam"],
    gallerySeeds: ["mn-1", "mn-2", "mn-3", "mn-4", "mn-5", "mn-6"],
    faqs: [
      { q: "How many days should I spend in Manipur?", a: "4\u20135 days covers Imphal, Loktak, Keibul Lamjao and Moirang; add two more for Ukhrul and Shirui." },
      { q: "Do I need a permit for Manipur?", a: "Indian nationals need no permit; foreign nationals must register with the FRO on arrival." },
      { q: "What is the best month to visit?", a: "November to February for dry weather, or June if you want to see the Shirui lily in bloom." },
      { q: "What are the must-try foods?", a: "Eromba, singju, chamthong, nga thongba and chak hao black-rice kheer." },
      { q: "What are the top attractions?", a: "Loktak Lake, Keibul Lamjao National Park, Kangla Fort, Ima Keithel and the INA memorial at Moirang." },
    ],
  },
  mizoram: {
    cities: [
      {
        slug: "aizawl-city", name: "Aizawl", stateSlug: "mizoram",
        shortDescription: "Ridge-top capital of churches, choirs and steep lanes.",
        overview: "Aizawl runs along a spur at 1,100 m with houses stacked down both slopes. It is the base for Reiek, Tamdil and the long drives east to Champhai.",
        thingsToDo: ["Solomon's Temple", "Bara Bazar", "Mizoram State Museum", "Durtlang viewpoint", "Sunday choir service"],
        attractionsCount: 5, famousFoods: ["Bai", "Sanpiau", "Vawksa Rep"],
        majorFestivals: ["Chapchar Kut", "Christmas"],
        nearbyAttractionSlugs: ["aizawl", "reiek", "tamdil-lake"],
        coords: { lat: 23.7271, lng: 92.7176 },
      },
      {
        slug: "champhai-city", name: "Champhai", stateSlug: "mizoram",
        shortDescription: "Rice bowl and vineyard town on the Myanmar border.",
        overview: "Champhai looks over a wide paddy plain towards Myanmar and is Mizoram's agricultural centre, with vineyards on the surrounding slopes and Murlen National Park to the north.",
        thingsToDo: ["Ridge viewpoints", "Vineyard visits", "Murlen National Park", "Border market"],
        attractionsCount: 4, famousFoods: ["Bai", "Smoked pork", "Local grape wine"],
        majorFestivals: ["Chapchar Kut", "Mim Kut"],
        nearbyAttractionSlugs: ["champhai", "phawngpui"],
        coords: { lat: 23.4564, lng: 93.3295 },
      },
      {
        slug: "lunglei-city", name: "Lunglei", stateSlug: "mizoram",
        shortDescription: "Southern hill town and gateway to Vantawng Falls.",
        overview: "Mizoram's second city sits on a long ridge in the south, a quiet base for Vantawng Falls, Thenzawl's handlooms and the Khawnglung wildlife sanctuary.",
        thingsToDo: ["Vantawng Falls", "Thenzawl handloom units", "Khawnglung sanctuary", "Ridge walks"],
        attractionsCount: 3, famousFoods: ["Koat Pitha", "Bai", "Misa Mach Poora"],
        majorFestivals: ["Chapchar Kut", "Thalfavang Kut"],
        nearbyAttractionSlugs: ["vantawng-falls", "aizawl"],
        coords: { lat: 22.8879, lng: 92.7337 },
      },
    ],
    experiences: [
      { label: "Ridge Towns", icon: "\ud83c\udfd8", blurb: "Aizawl and Lunglei strung along crest lines above cloud-filled valleys." },
      { label: "Blue Mountain", icon: "\u26f0", blurb: "Phawngpui's sacred summit grassland and sheer Thlazuang cliff." },
      { label: "Waterfalls", icon: "\ud83d\udca7", blurb: "Vantawng's 229 m two-stage drop through bamboo forest." },
      { label: "Choral Music", icon: "\ud83c\udfb5", blurb: "Sunday church choirs that fill whole hillsides with harmony." },
      { label: "Handloom", icon: "\ud83e\uddf5", blurb: "Puanchei shawls woven on loin looms at Thenzawl." },
      { label: "Mizo Food", icon: "\ud83c\udf72", blurb: "Bai, smoked pork with bamboo shoot and sanpiau street porridge." },
    ],
    seasons: [
      { name: "Winter", months: "November \u2013 February", weather: "Cool and clear, 8\u201322\u00b0C \u2014 the best touring window.", activities: ["Phawngpui trek", "Reiek sunrise", "Champhai drives"], recommended: true },
      { name: "Spring", months: "March \u2013 April", weather: "Warm days, flowering slopes and Chapchar Kut in Aizawl.", activities: ["Chapchar Kut", "Cheraw dance"] },
      { name: "Summer", months: "May \u2013 June", weather: "Humid with early showers; hills stay comfortable.", activities: ["Village stays", "Forest walks"] },
      { name: "Monsoon", months: "July \u2013 September", weather: "Very heavy rain and frequent landslides on hill roads.", activities: ["Vantawng in full flow", "Aizawl cafes"] },
    ],
    travel: {
      airports: [
        { name: "Lengpui Airport, Aizawl", code: "AJL", mapsQuery: "Lengpui Airport Aizawl" },
      ],
      railwayStations: [
        { name: "Bairabi Railway Station", mapsQuery: "Bairabi Railway Station" },
        { name: "Silchar Railway Station (Assam)", mapsQuery: "Silchar Railway Station" },
      ],
      roads: "NH-306 climbs from Silchar to Aizawl in 7\u20138 hours; roads south to Lunglei and east to Champhai are narrow and slow.",
      localTransport: ["Local taxis", "Shared sumos", "City buses in Aizawl", "Hired cars with driver"],
    },
    neighbors: ["assam", "manipur", "tripura"],
    gallerySeeds: ["mz-1", "mz-2", "mz-3", "mz-4", "mz-5", "mz-6"],
    faqs: [
      { q: "How many days should I spend in Mizoram?", a: "5\u20136 days covers Aizawl, Reiek, Tamdil and Vantawng; add three more for Phawngpui and Champhai." },
      { q: "Do I need a permit for Mizoram?", a: "Indian nationals need an Inner Line Permit, easily obtained online or at Lengpui airport; foreign nationals must register on arrival." },
      { q: "What is the best month to visit?", a: "November to March, when skies are clear and hill roads are dry." },
      { q: "What are the must-try foods?", a: "Bai, vawksa rep smoked pork, sanpiau, misa mach poora and koat pitha." },
      { q: "What are the top attractions?", a: "Aizawl, Phawngpui, Vantawng Falls, Reiek, Champhai and Tamdil Lake." },
    ],
  },
  nagaland: {
    cities: [
      {
        slug: "kohima-city", name: "Kohima", stateSlug: "nagaland",
        shortDescription: "Hill capital of the war cemetery and the Hornbill Festival.",
        overview: "Kohima grew over an old Angami village and is the base for Kisama, Khonoma and the Dzukou valley treks, as well as the site of the 1944 battle memorial.",
        thingsToDo: ["War Cemetery", "State Museum", "Bara Basti", "Naga Bazaar", "Hornbill at Kisama"],
        attractionsCount: 5, famousFoods: ["Smoked pork with axone", "Galho", "Akhuni chutney"],
        majorFestivals: ["Hornbill Festival", "Sekrenyi"],
        nearbyAttractionSlugs: ["kohima", "kisama-heritage-village", "khonoma"],
        coords: { lat: 25.6701, lng: 94.1086 },
      },
      {
        slug: "dimapur-city", name: "Dimapur", stateSlug: "nagaland",
        shortDescription: "Plains gateway with the state's airport and railhead.",
        overview: "Dimapur is Nagaland's commercial centre and its only rail and air gateway, with the Kachari ruins of monolithic pillars at its heart.",
        thingsToDo: ["Kachari Ruins", "Nagaland Zoological Park", "Hong Kong Market", "Diezephe craft village"],
        attractionsCount: 4, famousFoods: ["Bamboo shoot fish", "Naga thali", "Raja mircha pickles"],
        majorFestivals: ["Hornbill satellite events", "Christmas"],
        nearbyAttractionSlugs: ["kohima", "kisama-heritage-village"],
        coords: { lat: 25.9063, lng: 93.7276 },
      },
      {
        slug: "mokokchung-city", name: "Mokokchung", stateSlug: "nagaland",
        shortDescription: "Cultural capital of the Ao hills in the north.",
        overview: "Mokokchung is a busy student town ringed by historic Ao villages such as Ungma and Longkhum, and the home of the Moatsu festival.",
        thingsToDo: ["Ungma village", "Longkhum ridge", "Moatsu festival", "Local craft markets"],
        attractionsCount: 3, famousFoods: ["Anishi", "Smoked pork", "Axone dishes"],
        majorFestivals: ["Moatsu Mong", "Tsungremmong"],
        nearbyAttractionSlugs: ["mokokchung", "kohima"],
        coords: { lat: 26.3220, lng: 94.5150 },
      },
    ],
    experiences: [
      { label: "Hornbill Festival", icon: "\ud83e\udeb6", blurb: "Every tribe under one roof at Kisama each December." },
      { label: "War History", icon: "\ud83c\udf96", blurb: "The Kohima war cemetery and the 1944 tennis-court battlefield." },
      { label: "Green Village", icon: "\ud83c\udf3e", blurb: "Khonoma's alder terraces and community forest conservation." },
      { label: "Valley Treks", icon: "\u26f0", blurb: "Dzukou's grass valley and the climb to Japfu Peak." },
      { label: "Naga Weaves", icon: "\ud83e\uddf6", blurb: "Tribe-specific shawls, cane work and morung wood carving." },
      { label: "Smoked Food", icon: "\ud83e\udd53", blurb: "Axone, anishi and king-chilli cooking in the hills." },
    ],
    seasons: [
      { name: "Winter", months: "November \u2013 February", weather: "Cold and clear, 2\u201320\u00b0C \u2014 Hornbill season.", activities: ["Hornbill Festival", "Khonoma stays", "Kohima sightseeing"], recommended: true },
      { name: "Spring", months: "March \u2013 April", weather: "Mild with rhododendrons on Japfu.", activities: ["Japfu trek", "Village walks"] },
      { name: "Summer", months: "May \u2013 June", weather: "Warm and showery; Moatsu is celebrated in the Ao villages.", activities: ["Moatsu Mong", "Dzukou lilies"] },
      { name: "Monsoon", months: "July \u2013 September", weather: "Heavy rain and rough hill roads.", activities: ["Dzukou lily bloom", "Museum visits"] },
    ],
    travel: {
      airports: [
        { name: "Dimapur Airport", code: "DMU", mapsQuery: "Dimapur Airport" },
      ],
      railwayStations: [
        { name: "Dimapur Junction", mapsQuery: "Dimapur Junction" },
      ],
      roads: "NH-29 climbs from Dimapur to Kohima in about 3 hours; northern routes to Mokokchung and Mon are long and rough.",
      localTransport: ["Shared sumos", "Local taxis", "Town buses", "Hired cars with driver"],
    },
    neighbors: ["assam", "manipur", "arunachal-pradesh"],
    gallerySeeds: ["nl-1", "nl-2", "nl-3", "nl-4", "nl-5", "nl-6"],
    faqs: [
      { q: "How many days should I spend in Nagaland?", a: "5\u20136 days covers Kohima, Kisama, Khonoma and a Dzukou trek; add three more for Mokokchung and the Konyak villages." },
      { q: "Do I need a permit for Nagaland?", a: "Indian nationals need an Inner Line Permit, issued online or at Dimapur and Kohima; foreign nationals must register with local police." },
      { q: "What is the best month to visit?", a: "December for the Hornbill Festival, or October to April for clear trekking weather." },
      { q: "What are the must-try foods?", a: "Smoked pork with axone, anishi, galho, bamboo shoot fish and akhuni chutney." },
      { q: "What are the top attractions?", a: "Kohima War Cemetery, Kisama Heritage Village, Dzukou Valley, Khonoma and Japfu Peak." },
    ],
  },
  telangana: {
    cities: [
      {
        slug: "hyderabad-city", name: "Hyderabad", stateSlug: "telangana",
        shortDescription: "Nizami old city and modern tech capital in one.",
        overview: "Hyderabad pairs the Qutb Shahi and Nizami old city around Charminar with the glass towers of HITEC City, and holds the state's best food, museums and shopping.",
        thingsToDo: ["Charminar", "Golconda Fort", "Chowmahalla Palace", "Salar Jung Museum", "Hussain Sagar"],
        attractionsCount: 6, famousFoods: ["Hyderabadi Biryani", "Haleem", "Double ka Meetha"],
        majorFestivals: ["Bonalu", "Bathukamma"],
        nearbyAttractionSlugs: ["hyderabad", "golconda-fort", "charminar"],
        coords: { lat: 17.3850, lng: 78.4867 },
      },
      {
        slug: "warangal-city", name: "Warangal", stateSlug: "telangana",
        shortDescription: "Kakatiya capital of carved toranas and temple towers.",
        overview: "Warangal keeps the ruins of the Kakatiya fort with its four free-standing gateways, the Thousand Pillar Temple, and the UNESCO-listed Ramappa temple an hour away.",
        thingsToDo: ["Warangal Fort", "Thousand Pillar Temple", "Ramappa Temple", "Bhadrakali Temple", "Pakhal Lake"],
        attractionsCount: 5, famousFoods: ["Sarva Pindi", "Pachi Pulusu", "Telangana thali"],
        majorFestivals: ["Sammakka Saralamma Jatara", "Bathukamma"],
        nearbyAttractionSlugs: ["warangal", "hyderabad"],
        coords: { lat: 17.9689, lng: 79.5941 },
      },
      {
        slug: "nizamabad-city", name: "Nizamabad", stateSlug: "telangana",
        shortDescription: "Northern town of forts, temples and turmeric markets.",
        overview: "Nizamabad on the Godavari belt is known for its hilltop Quilla fort, the Nizam Sagar reservoir and one of India's biggest turmeric markets.",
        thingsToDo: ["Nizamabad Fort", "Nizam Sagar dam", "Ali Sagar reservoir", "Domakonda Fort"],
        attractionsCount: 3, famousFoods: ["Sarva Pindi", "Jonna rotte", "Pachi Pulusu"],
        majorFestivals: ["Bathukamma", "Bonalu"],
        nearbyAttractionSlugs: ["hyderabad", "warangal"],
        coords: { lat: 18.6725, lng: 78.0941 },
      },
    ],
    experiences: [
      { label: "Nizami Heritage", icon: "\ud83d\udd4c", blurb: "Charminar, Chowmahalla and the Qutb Shahi tombs in the old city." },
      { label: "Hill Forts", icon: "\ud83c\udff0", blurb: "Golconda's whispering acoustics and Warangal's carved toranas." },
      { label: "Biryani Trail", icon: "\ud83c\udf5b", blurb: "Dum biryani, haleem in Ramzan and Irani chai at every corner." },
      { label: "Temple Art", icon: "\ud83d\uddff", blurb: "Kakatiya stonework at Ramappa and the Thousand Pillar Temple." },
      { label: "Ikat Weaving", icon: "\ud83e\uddf5", blurb: "Pochampally and Gadwal looms with GI-protected patterns." },
      { label: "Film Studios", icon: "\ud83c\udfac", blurb: "Ramoji Film City, the largest studio complex in the world." },
    ],
    seasons: [
      { name: "Winter", months: "November \u2013 February", weather: "Dry and pleasant, 15\u201329\u00b0C \u2014 the best time for the Deccan.", activities: ["Golconda sunsets", "Warangal temples", "Old-city walks"], recommended: true },
      { name: "Spring", months: "March \u2013 April", weather: "Warming quickly, with dry heat by April.", activities: ["Early-morning sightseeing", "Museum visits"] },
      { name: "Summer", months: "May \u2013 June", weather: "Very hot, often above 40\u00b0C on the plateau.", activities: ["Indoor museums", "Ramoji Film City"] },
      { name: "Monsoon", months: "July \u2013 September", weather: "Moderate rain; lakes and reservoirs fill.", activities: ["Bonalu processions", "Nagarjuna Sagar in spate"] },
    ],
    travel: {
      airports: [
        { name: "Rajiv Gandhi International Airport, Hyderabad", code: "HYD", mapsQuery: "Rajiv Gandhi International Airport Hyderabad" },
      ],
      railwayStations: [
        { name: "Secunderabad Junction", mapsQuery: "Secunderabad Junction" },
        { name: "Warangal Railway Station", mapsQuery: "Warangal Railway Station" },
      ],
      roads: "NH-44 and NH-65 cross the state through Hyderabad, and the Outer Ring Road makes day trips to Ramoji and Nagarjuna Sagar easy.",
      localTransport: ["Hyderabad Metro", "MMTS trains", "App cabs", "Auto-rickshaws", "TSRTC buses"],
    },
    neighbors: ["maharashtra", "karnataka", "andhra-pradesh", "chhattisgarh"],
    gallerySeeds: ["tg-1", "tg-2", "tg-3", "tg-4", "tg-5", "tg-6"],
    faqs: [
      { q: "How many days should I spend in Telangana?", a: "3\u20134 days for Hyderabad and Golconda, plus two more for Warangal, Ramappa and Nagarjuna Sagar." },
      { q: "Is Telangana easy to travel around?", a: "Yes \u2014 Hyderabad has a metro and the best air and rail links in the region, and highways to Warangal and Nagarjuna Sagar are good." },
      { q: "What is the best month to visit?", a: "November to February, when the plateau is dry and comfortable." },
      { q: "What are the must-try foods?", a: "Hyderabadi biryani, haleem in Ramzan, double ka meetha, sarva pindi and pachi pulusu." },
      { q: "What are the top attractions?", a: "Charminar, Golconda Fort, Chowmahalla Palace, Warangal and Ramappa, Ramoji Film City and Nagarjuna Sagar." },
    ],
  },
  "andhra-pradesh": {
    cities: [
      {
        slug: "visakhapatnam", name: "Visakhapatnam", stateSlug: "andhra-pradesh",
        shortDescription: "Beach city between the Eastern Ghats and a natural harbour.",
        overview: "Vizag is Andhra's largest city \u2014 a port and naval base wrapped around a beach road that runs from the fishing harbour past Kailasagiri hill to Rushikonda. It is also the departure point for the Araku railway, one of India's most scenic hill lines.",
        thingsToDo: ["Ropeway to Kailasagiri", "Submarine museum at RK Beach", "Simhachalam Temple", "Seafood at the harbour", "Sunrise on Rushikonda sands"],
        attractionsCount: 6, famousFoods: ["Andhra fish curry", "Pesarattu", "Bamboo chicken"],
        majorFestivals: ["Sankranti", "Visakha Utsav"],
        nearbyAttractionSlugs: ["visakhapatnam", "araku-valley", "srisailam", "tirupati"],
        coords: { lat: 17.6868, lng: 83.2185 },
      },
      {
        slug: "tirupati", name: "Tirupati", stateSlug: "andhra-pradesh",
        shortDescription: "Temple town below the seven hills of Tirumala.",
        overview: "Tirupati exists to serve Tirumala, the most visited shrine on earth. The town itself holds the Padmavathi temple at Tiruchanur, the Govindaraja temple in the bazaar, and the Sri Venkateswara museum \u2014 all within a short ride of the ghat road up the hills.",
        thingsToDo: ["Darshan at Tirumala", "Alipiri footpath climb", "Sri Padmavathi Temple", "Chandragiri Fort day trip", "Talakona waterfall"],
        attractionsCount: 5, famousFoods: ["Tirupati laddu", "Pulihora", "Andhra thali"],
        majorFestivals: ["Brahmotsavam", "Vaikunta Ekadasi"],
        nearbyAttractionSlugs: ["tirupati", "lepakshi", "srisailam"],
        coords: { lat: 13.6288, lng: 79.4192 },
      },
      {
        slug: "amaravati", name: "Amaravati", stateSlug: "andhra-pradesh",
        shortDescription: "The state capital, beside an ancient Buddhist stupa site.",
        overview: "Amaravati on the Krishna river is both the planned capital of Andhra Pradesh and the site of one of the greatest Buddhist stupas of the ancient world, whose carved railings now sit in Chennai and London museums. The Amaralingeswara temple and the Dhyana Buddha statue anchor the old town.",
        thingsToDo: ["Amaravati stupa and museum", "Amaralingeswara Temple", "Dhyana Buddha statue", "Krishna riverfront walk"],
        attractionsCount: 4, famousFoods: ["Gongura pachadi", "Pulihora", "Bobbatlu"],
        majorFestivals: ["Ugadi", "Sankranti"],
        nearbyAttractionSlugs: ["srisailam", "tirupati", "visakhapatnam"],
        coords: { lat: 16.5735, lng: 80.3570 },
      },
    ],
    experiences: [
      { label: "Temple Pilgrimage", icon: "\ud83d\uded5", blurb: "Tirumala, Srisailam and Lepakshi form one of India's densest temple circuits." },
      { label: "Canyon & Caves", icon: "\ud83e\udea8", blurb: "Gandikota's gorge and the million-year-old Borra Caves in the Eastern Ghats." },
      { label: "Coffee Country", icon: "\u2615", blurb: "Cup single-origin arabica on the tribal cooperatives of Araku Valley." },
      { label: "Coastal Trails", icon: "\ud83c\udf0a", blurb: "974 km of coastline from Vizag's beaches down to the Krishna delta." },
    ],
    seasons: [
      { name: "Winter", months: "November \u2013 February", weather: "Warm days, cool evenings; ideal on the coast.", activities: ["Beaches", "Temple circuits", "Gandikota camping"], recommended: true },
      { name: "Summer", months: "March \u2013 May", weather: "Very hot and humid on the plains.", activities: ["Araku Valley", "Early-morning temple visits"] },
      { name: "Monsoon", months: "June \u2013 September", weather: "Heavy rain, occasional cyclones on the coast.", activities: ["Green Eastern Ghats", "Waterfalls"] },
      { name: "Spring", months: "February \u2013 March", weather: "Dry and pleasant before the heat.", activities: ["Ugadi festivities", "Heritage travel"] },
    ],
    travel: {
      airports: [
        { name: "Visakhapatnam International Airport", code: "VTZ", mapsQuery: "Visakhapatnam Airport" },
        { name: "Tirupati International Airport", code: "TIR", mapsQuery: "Tirupati Airport" },
      ],
      railwayStations: [
        { name: "Visakhapatnam Junction", mapsQuery: "Visakhapatnam Junction" },
        { name: "Tirupati Main Station", mapsQuery: "Tirupati Railway Station" },
      ],
      roads: "NH16 runs the length of the coast between Kolkata and Chennai; NH716 and NH40 link the Rayalaseema interior. APSRTC buses connect every district town.",
      localTransport: ["Auto-rickshaws", "App taxis", "APSRTC buses", "TTD free shuttle buses in Tirumala"],
    },
    neighbors: ["telangana", "tamil-nadu", "karnataka", "odisha", "chhattisgarh"],
    gallerySeeds: ["ap-tirumala", "ap-araku", "ap-gandikota", "ap-vizag", "ap-lepakshi", "ap-srisailam"],
    faqs: [
      { q: "How many days should I spend here?", a: "Six to eight days covers Tirupati, the Rayalaseema forts and the Vizag\u2013Araku coast comfortably." },
      { q: "How do I get darshan at Tirumala?", a: "Book Sarva Darshan or special-entry tickets on the official TTD portal weeks ahead; walk-in queues can take many hours." },
      { q: "Is it family-friendly?", a: "Yes \u2014 beaches, the Araku train and temple towns all work well with children." },
      { q: "What is the best month to visit?", a: "November to February; the coast is uncomfortably hot and humid from March." },
      { q: "What are the must-try foods?", a: "Pulihora, gongura mamsam, pesarattu, Tirupati laddu and pootharekulu." },
      { q: "What are the top attractions?", a: "Tirumala, Araku Valley and Borra Caves, Gandikota gorge, Lepakshi, Srisailam and Visakhapatnam's beaches." },
    ],
  },
  "arunachal-pradesh": {
    cities: [
      {
        slug: "itanagar", name: "Itanagar", stateSlug: "arunachal-pradesh",
        shortDescription: "The hill capital, named after the 14th-century Ita Fort.",
        overview: "Itanagar is where almost every Arunachal trip begins \u2014 permits, the state museum's tribal collections and the brick ramparts of Ita Fort threading through the ridges above town. Hollongi airport and the Naharlagun rail link put it within reach of Guwahati.",
        thingsToDo: ["Ita Fort walk", "Jawaharlal Nehru State Museum", "Buddhist gompa hilltop", "Boating at Ganga Lake", "Craft emporium shopping"],
        attractionsCount: 5, famousFoods: ["Thukpa", "Momos", "Bamboo shoot curry"],
        majorFestivals: ["Nyokum Yullo", "Statehood Day"],
        nearbyAttractionSlugs: ["itanagar", "ziro-valley", "bomdila"],
        coords: { lat: 27.0844, lng: 93.6053 },
      },
      {
        slug: "tawang-town", name: "Tawang", stateSlug: "arunachal-pradesh",
        shortDescription: "Monastery town at 3,048 m beyond the Sela Pass.",
        overview: "Tawang is the cultural heart of Monpa Buddhism \u2014 the 400-year-old monastery holds hundreds of monks and an 8-metre gilded Buddha, and the town looks across a deep valley towards the Bhutan and Tibet borders.",
        thingsToDo: ["Tawang Monastery morning prayers", "Madhuri Lake drive", "Jaswant Garh memorial", "Nuranang Falls", "Monpa handicraft centre"],
        attractionsCount: 5, famousFoods: ["Thukpa", "Zan", "Butter tea"],
        majorFestivals: ["Losar", "Torgya"],
        nearbyAttractionSlugs: ["tawang", "sela-pass", "bomdila"],
        coords: { lat: 27.5861, lng: 91.8594 },
      },
      {
        slug: "ziro", name: "Ziro", stateSlug: "arunachal-pradesh",
        shortDescription: "Apatani paddy valley and home of the Ziro music festival.",
        overview: "Ziro's flat valley floor is farmed with a paddy-cum-fish system unique to the Apatani, surrounded by pine ridges and bamboo groves. In September the meadows above town host India's best-known independent music festival.",
        thingsToDo: ["Hong and Hari village walks", "Talley Valley trek", "Kile Pakho ridge sunset", "Rice-beer tasting", "Ziro Festival of Music"],
        attractionsCount: 5, famousFoods: ["Pika Pila", "Apong", "Smoked pork"],
        majorFestivals: ["Myoko", "Ziro Festival of Music"],
        nearbyAttractionSlugs: ["ziro-valley", "itanagar", "namdapha-national-park"],
        coords: { lat: 27.6300, lng: 93.8300 },
      },
    ],
    experiences: [
      { label: "High Passes", icon: "\ud83c\udfd4", blurb: "Cross Sela at 4,170 m on the road to Tawang, snow on the verges most of the year." },
      { label: "Monastery Circuit", icon: "\ud83e\uddd8", blurb: "Tawang, Urgelling and Bomdila gompas keep Monpa Buddhism in daily practice." },
      { label: "Tribal Villages", icon: "\ud83c\udfe1", blurb: "Apatani, Adi and Nyishi villages where weaving, granaries and festivals still run the year." },
      { label: "Rainforest Wildlife", icon: "\ud83d\udc06", blurb: "Namdapha and Eaglenest hold four big cats, hoolock gibbons and 500+ bird species." },
    ],
    seasons: [
      { name: "Winter", months: "November \u2013 February", weather: "Very cold in the west; snow closes higher roads.", activities: ["Namdapha birding", "Lower-valley travel"] },
      { name: "Spring", months: "March \u2013 May", weather: "Clear skies, rhododendron bloom in the high valleys.", activities: ["Tawang", "Sela Pass", "Trekking"], recommended: true },
      { name: "Monsoon", months: "June \u2013 September", weather: "Heavy rain and frequent landslides.", activities: ["Ziro Festival", "Green valley photography"] },
      { name: "Autumn", months: "October \u2013 November", weather: "Crisp and dry with the best mountain views.", activities: ["Tawang circuit", "Village festivals"], recommended: true },
    ],
    travel: {
      airports: [
        { name: "Donyi Polo Airport, Hollongi (Itanagar)", code: "HGI", mapsQuery: "Donyi Polo Airport Hollongi" },
        { name: "Lilabari Airport, North Lakhimpur", code: "IXI", mapsQuery: "Lilabari Airport" },
      ],
      railwayStations: [
        { name: "Naharlagun Railway Station", mapsQuery: "Naharlagun Railway Station" },
        { name: "Tinsukia Junction (for the east)", mapsQuery: "Tinsukia Junction" },
      ],
      roads: "NH13 (the Trans-Arunachal Highway) links the districts; the Tezpur\u2013Bomdila\u2013Tawang road is the main western route. Shared Sumos are the standard hill transport.",
      localTransport: ["Shared Tata Sumo", "Hired 4x4 with driver", "State APST buses"],
    },
    neighbors: ["assam", "nagaland"],
    gallerySeeds: ["ar-tawang", "ar-sela", "ar-ziro", "ar-namdapha", "ar-bomdila", "ar-itanagar"],
    faqs: [
      { q: "Do I need a permit?", a: "Yes \u2014 Indian nationals need an Inner Line Permit (available online); foreign nationals need a Protected Area Permit." },
      { q: "How many days should I spend here?", a: "Allow at least eight days for the Tawang circuit; roads are slow and distances deceptive." },
      { q: "Is it family-friendly?", a: "Yes for Ziro and Bomdila; Tawang's altitude and long drives suit older children better." },
      { q: "What is the best month to visit?", a: "March to May and October to November give the clearest mountain weather." },
      { q: "What are the must-try foods?", a: "Thukpa, momos, zan, bamboo-shoot pickle and home-brewed apong." },
      { q: "What are the top attractions?", a: "Tawang Monastery, Sela Pass, Ziro Valley, Namdapha National Park and Bomdila." },
    ],
  },
  "chhattisgarh": {
    cities: [
      {
        slug: "raipur", name: "Raipur", stateSlug: "chhattisgarh",
        shortDescription: "State capital and the gateway to Bastar and Surguja.",
        overview: "Raipur is Chhattisgarh's transport and business hub, with the state's only major airport and a rail junction on the Mumbai\u2013Howrah trunk. Purkhouti Muktangan's open-air museum and the Mahant Ghasidas collection give a fast introduction to the state's tribal art.",
        thingsToDo: ["Purkhouti Muktangan tribal art park", "Mahant Ghasidas Museum", "Nandan Van safari", "Telibandha lake evening", "Naya Raipur architecture drive"],
        attractionsCount: 5, famousFoods: ["Chila", "Farra", "Dehrori"],
        majorFestivals: ["Hareli", "Rajim Kumbh"],
        nearbyAttractionSlugs: ["raipur", "sirpur", "chitrakote-falls"],
        coords: { lat: 21.2514, lng: 81.6296 },
      },
      {
        slug: "jagdalpur-city", name: "Jagdalpur", stateSlug: "chhattisgarh",
        shortDescription: "Bastar's capital \u2014 base for waterfalls, caves and tribal haats.",
        overview: "Jagdalpur sits on the Bastar plateau within easy reach of Chitrakote, Tirathgarh and the Kanger Valley caves. It is also the stage for the 75-day Bastar Dussehra, when village deities converge on the old palace.",
        thingsToDo: ["Bastar Palace", "Anthropological Museum", "Weekly village haat", "Dhokra workshops at Kondagaon", "Bastar Dussehra chariot"],
        attractionsCount: 5, famousFoods: ["Chapda chutney", "Mahua sweets", "Bamboo chicken"],
        majorFestivals: ["Bastar Dussehra", "Madai"],
        nearbyAttractionSlugs: ["jagdalpur", "chitrakote-falls", "kanger-valley-national-park"],
        coords: { lat: 19.0748, lng: 82.0195 },
      },
      {
        slug: "bilaspur", name: "Bilaspur", stateSlug: "chhattisgarh",
        shortDescription: "Rail city near Achanakmar's tiger forests and Ratanpur.",
        overview: "Bilaspur is a major railway headquarters and the nearest city to Achanakmar Tiger Reserve, the Amarkantak plateau approach and the old Kalachuri capital of Ratanpur with its Mahamaya temple.",
        thingsToDo: ["Ratanpur Mahamaya Temple", "Achanakmar Tiger Reserve", "Kanan Pendari zoo", "Malhar excavations", "Kosa silk shopping"],
        attractionsCount: 4, famousFoods: ["Muthia", "Bafauri", "Aamat"],
        majorFestivals: ["Hareli", "Navratri at Ratanpur"],
        nearbyAttractionSlugs: ["raipur", "mainpat", "sirpur"],
        coords: { lat: 22.0797, lng: 82.1409 },
      },
    ],
    experiences: [
      { label: "Waterfall Country", icon: "\ud83d\udca7", blurb: "Chitrakote, Tirathgarh and Amritdhara fall off the plateau in full monsoon flood." },
      { label: "Cave Systems", icon: "\ud83d\udd26", blurb: "Kutumsar, Kailash and Dandak hold stalactite chambers and blind cave fish." },
      { label: "Bastar Haats", icon: "\ud83e\uddfa", blurb: "Weekly Adivasi markets trading mahua, bell-metal, terracotta and dhokra bronze." },
      { label: "Forest Wildlife", icon: "\ud83d\udc06", blurb: "Achanakmar, Barnawapara and Kanger Valley protect sal forest, bison and leopard." },
    ],
    seasons: [
      { name: "Winter", months: "November \u2013 February", weather: "Cool, dry and comfortable across the state.", activities: ["Caves", "Wildlife", "Bastar travel"], recommended: true },
      { name: "Summer", months: "March \u2013 June", weather: "Hot, often above 42\u00b0C on the plains.", activities: ["Mainpat plateau", "Early-morning safaris"] },
      { name: "Monsoon", months: "July \u2013 September", weather: "Heavy rain; waterfalls at full volume.", activities: ["Chitrakote in flood", "Hareli festival"] },
      { name: "Autumn", months: "October", weather: "Rain eases, forests still green.", activities: ["Bastar Dussehra", "Photography"], recommended: true },
    ],
    travel: {
      airports: [
        { name: "Swami Vivekananda Airport, Raipur", code: "RPR", mapsQuery: "Swami Vivekananda Airport Raipur" },
        { name: "Jagdalpur Airport", code: "JGB", mapsQuery: "Jagdalpur Airport" },
      ],
      railwayStations: [
        { name: "Raipur Junction", mapsQuery: "Raipur Junction" },
        { name: "Bilaspur Junction", mapsQuery: "Bilaspur Junction" },
      ],
      roads: "NH53 crosses the state east\u2013west and NH30 runs south to Jagdalpur; CGSRTC and private buses cover the district towns.",
      localTransport: ["Auto-rickshaws", "App taxis in Raipur", "Hired cars for Bastar", "State buses"],
    },
    neighbors: ["madhya-pradesh", "maharashtra", "telangana", "andhra-pradesh", "odisha", "jharkhand", "uttar-pradesh"],
    gallerySeeds: ["cg-chitrakote", "cg-kanger", "cg-bastar", "cg-sirpur", "cg-mainpat", "cg-raipur"],
    faqs: [
      { q: "How many days should I spend here?", a: "Five to seven days: two around Raipur and Sirpur, three or four in Bastar." },
      { q: "Is Bastar safe for travellers?", a: "The main tourist circuit \u2014 Jagdalpur, Chitrakote, Kanger Valley \u2014 is routinely visited; travel by day and follow local advice on interior routes." },
      { q: "Is it family-friendly?", a: "Yes \u2014 waterfalls, caves and wildlife parks suit all ages, though roads are long." },
      { q: "What is the best month to visit?", a: "October to February; visit in August\u2013September if you want Chitrakote at full flow." },
      { q: "What are the must-try foods?", a: "Chila, farra, muthia, bafauri and dehrori." },
      { q: "What are the top attractions?", a: "Chitrakote Falls, Kanger Valley National Park, Bastar's haats, Sirpur and the Mainpat plateau." },
    ],
  },
  "andaman-and-nicobar-islands": {
    cities: [
      {
        slug: "port-blair-city", name: "Port Blair", stateSlug: "andaman-and-nicobar-islands",
        shortDescription: "Island capital, harbour town and ferry gateway.",
        overview: "Port Blair holds the Cellular Jail, the islands' museums and every arrival point \u2014 Veer Savarkar airport, the mainland ship terminal and the jetties for Havelock and Neil. Aberdeen Bazaar is the centre for seafood, tickets and last-minute supplies.",
        thingsToDo: ["Cellular Jail light-and-sound show", "Samudrika Marine Museum", "Corbyn's Cove sunset", "Chatham Saw Mill", "Ferry to Ross Island"],
        attractionsCount: 6, famousFoods: ["Andaman fish curry", "Chilli crab", "Coconut barfi"],
        majorFestivals: ["Island Tourism Festival", "Subhash Mela"],
        nearbyAttractionSlugs: ["port-blair", "cellular-jail", "ross-island", "mahatma-gandhi-marine-national-park"],
        coords: { lat: 11.6234, lng: 92.7265 },
      },
      {
        slug: "havelock", name: "Swaraj Dweep (Havelock)", stateSlug: "andaman-and-nicobar-islands",
        shortDescription: "The islands' diving capital and home to Radhanagar Beach.",
        overview: "Swaraj Dweep is the busiest island after the capital \u2014 dive schools at Beach No. 3, the long white curve of Radhanagar on the west coast, and the sunrise boulders of Kalapathar on the east.",
        thingsToDo: ["Radhanagar sunset", "Scuba at Nemo Reef", "Elephant Beach snorkelling", "Kalapathar sunrise", "Kayak through the mangroves"],
        attractionsCount: 5, famousFoods: ["Grilled lobster", "Coconut prawn curry", "Fresh tuna steaks"],
        majorFestivals: ["Island Tourism Festival"],
        nearbyAttractionSlugs: ["radhanagar-beach", "neil-island", "port-blair"],
        coords: { lat: 11.9800, lng: 92.9900 },
      },
      {
        slug: "neil", name: "Shaheed Dweep (Neil)", stateSlug: "andaman-and-nicobar-islands",
        shortDescription: "Small, slow island of lagoons, paddy and a natural coral bridge.",
        overview: "Shaheed Dweep is flat, green and cycleable end to end \u2014 Bharatpur's shallow lagoon for glass-bottom boats, Laxmanpur's natural rock bridge at low tide, and Sitapur facing the sunrise.",
        thingsToDo: ["Cycle the island", "Natural bridge at low tide", "Bharatpur snorkelling", "Sitapur sunrise", "Village paddy-field walk"],
        attractionsCount: 4, famousFoods: ["Fish thali", "Coconut water", "Grilled reef fish"],
        majorFestivals: ["Island Tourism Festival"],
        nearbyAttractionSlugs: ["neil-island", "radhanagar-beach", "port-blair"],
        coords: { lat: 11.8300, lng: 93.0500 },
      },
    ],
    experiences: [
      { label: "Scuba & Snorkelling", icon: "\ud83e\udd3f", blurb: "India's clearest reefs \u2014 Havelock's dive sites and the Wandoor marine park." },
      { label: "Colonial History", icon: "\u26d3", blurb: "The Cellular Jail and Ross Island's ruins tell the Kala Pani story." },
      { label: "Island Hopping", icon: "\u26f4", blurb: "Fast catamarans link Port Blair, Swaraj Dweep and Shaheed Dweep daily." },
      { label: "Seafood Kitchens", icon: "\ud83e\udd90", blurb: "Coconut-milk fish curry, chilli crab and beach-grilled lobster." },
    ],
    seasons: [
      { name: "Winter", months: "November \u2013 February", weather: "Dry, calm seas and the best visibility for diving.", activities: ["Diving", "Island hopping", "Beaches"], recommended: true },
      { name: "Spring", months: "March \u2013 April", weather: "Warm and still dry; peak season ends.", activities: ["Snorkelling", "Sea walks"], recommended: true },
      { name: "Summer", months: "May", weather: "Hot and humid as the monsoon approaches.", activities: ["Short beach stays"] },
      { name: "Monsoon", months: "June \u2013 September", weather: "Heavy rain and rough seas; ferries often cancelled.", activities: ["Discounted stays", "Rainforest walks"] },
    ],
    travel: {
      airports: [
        { name: "Veer Savarkar International Airport, Port Blair", code: "IXZ", mapsQuery: "Veer Savarkar International Airport Port Blair" },
      ],
      railwayStations: [],
      roads: "The Andaman Trunk Road runs north from Port Blair through Baratang to Diglipur; islands are otherwise linked by government and private ferries.",
      localTransport: ["Inter-island catamaran ferries", "Auto-rickshaws", "Scooter and cycle hire", "Local buses"],
    },
    neighbors: [],
    gallerySeeds: ["an-radhanagar", "an-neil", "an-cellular-jail", "an-ross", "an-reef", "an-portblair"],
    faqs: [
      { q: "How many days should I spend here?", a: "Six to seven days: two in Port Blair, three on Swaraj Dweep and one or two on Shaheed Dweep." },
      { q: "Do I need a permit?", a: "Indian nationals need none for the main islands; foreign nationals get a 30-day permit on arrival. Tribal reserves are closed to everyone." },
      { q: "Is it family-friendly?", a: "Very \u2014 calm beaches, glass-bottom boats and short ferry hops work well with children." },
      { q: "What is the best month to visit?", a: "November to April; ferries are unreliable during the June\u2013September monsoon." },
      { q: "What are the must-try foods?", a: "Coconut fish curry, grilled lobster, chilli crab and coconut barfi." },
      { q: "What are the top attractions?", a: "Radhanagar Beach, the Cellular Jail, Ross Island, Shaheed Dweep and the Mahatma Gandhi Marine National Park." },
    ],
  },
};

// Default extras used for stub states / UTs so the page never feels empty.
function genericExtras(stateSlug: string, capital: string): StateExtras {
  return {
    cities: [
      {
        slug: slugify(capital),
        name: capital,
        stateSlug,
        shortDescription: `Capital city and the easiest base to start exploring.`,
        attractionsCount: 3,
        famousFoods: ["Regional thali", "Street snacks"],
        majorFestivals: ["Local harvest festival"],
      },
    ],
    experiences: GENERIC_EXPERIENCES,
    seasons: [
      { name: "Winter", months: "November – February", weather: "Cool and pleasant.", activities: ["Sightseeing", "Cultural tours"], recommended: true },
      { name: "Spring", months: "March – April", weather: "Mild and dry.", activities: ["Festivals", "Photography"] },
      { name: "Summer", months: "May – June", weather: "Hot in most areas.", activities: ["Higher altitude getaways"] },
      { name: "Monsoon", months: "July – September", weather: "Rainy; lush landscapes.", activities: ["Waterfalls", "Green countryside"] },
    ],
    travel: {
      airports: [{ name: `${capital} Airport`, mapsQuery: `${capital} Airport` }],
      railwayStations: [{ name: `${capital} Railway Station`, mapsQuery: `${capital} Railway Station` }],
      roads: "Connected to neighbouring states by national highways and state-run buses.",
      localTransport: ["Auto-rickshaws", "App taxis", "Local buses"],
    },
    neighbors: [],
    gallerySeeds: [`${stateSlug}-1`, `${stateSlug}-2`, `${stateSlug}-3`, `${stateSlug}-4`, `${stateSlug}-5`, `${stateSlug}-6`],
    faqs: [
      { q: "How many days should I spend here?", a: "Plan 4–6 days for a relaxed first visit to the headline attractions." },
      { q: "Is it family-friendly?", a: "Yes — most heritage and cultural sites are suitable for all ages." },
      { q: "What is the best month to visit?", a: "October to March is generally the most comfortable season." },
      { q: "What are the must-try foods?", a: "Look out for the local thali and signature regional snacks." },
      { q: "What are the top attractions?", a: "Capital-city monuments, regional temples and natural landscapes." },
    ],
  };
}

function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function getStateExtras(stateSlug: string, capital: string): StateExtras {
  return STATE_EXTRAS[stateSlug] ?? genericExtras(stateSlug, capital);
}

export function getCityBySlug(slug: string): CityInfo | undefined {
  for (const extras of Object.values(STATE_EXTRAS)) {
    const found = extras.cities.find((c) => c.slug === slug);
    if (found) return found;
  }
  return undefined;
}

export function getAllCities(): CityInfo[] {
  return Object.values(STATE_EXTRAS).flatMap((e) => e.cities);
}

export function getCityTravel(city: CityInfo): TravelInfo {
  if (city.travel) return city.travel;
  const stateExtras = STATE_EXTRAS[city.stateSlug];
  if (stateExtras) return stateExtras.travel;
  return {
    airports: [{ name: `${city.name} Airport`, mapsQuery: `${city.name} Airport` }],
    railwayStations: [{ name: `${city.name} Railway Station`, mapsQuery: `${city.name} Railway Station` }],
    roads: "Connected by national highways and state-run buses.",
    localTransport: ["Auto-rickshaws", "App taxis", "Local buses"],
  };
}

export function getCityGallerySeeds(city: CityInfo): string[] {
  if (city.gallerySeeds?.length) return city.gallerySeeds;
  return Array.from({ length: 6 }, (_, i) => `${city.slug}-${i + 1}`);
}
