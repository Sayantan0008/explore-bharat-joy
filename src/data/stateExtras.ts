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
