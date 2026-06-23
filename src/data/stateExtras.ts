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
      { slug: "jaipur", name: "Jaipur", stateSlug: "rajasthan", shortDescription: "The Pink City — palaces, planned bazaars and hilltop forts.", attractionsCount: 8, famousFoods: ["Dal Baati Churma", "Pyaaz Kachori", "Ghewar"], majorFestivals: ["Teej", "Jaipur Literature Festival"], coords: { lat: 26.9124, lng: 75.7873 } },
      { slug: "udaipur", name: "Udaipur", stateSlug: "rajasthan", shortDescription: "City of Lakes with white-marble palaces rising from the water.", attractionsCount: 7, famousFoods: ["Dal Baati", "Laal Maas", "Mawa Kachori"], majorFestivals: ["Mewar Festival", "Gangaur"], coords: { lat: 24.5854, lng: 73.7125 } },
      { slug: "jodhpur", name: "Jodhpur", stateSlug: "rajasthan", shortDescription: "The Blue City beneath the looming Mehrangarh Fort.", attractionsCount: 6, famousFoods: ["Mirchi Vada", "Pyaaz Kachori", "Makhaniya Lassi"], majorFestivals: ["Marwar Festival", "Rajasthan International Folk Festival"], coords: { lat: 26.2389, lng: 73.0243 } },
      { slug: "jaisalmer", name: "Jaisalmer", stateSlug: "rajasthan", shortDescription: "The Golden City — a living fort rising from the Thar desert.", attractionsCount: 5, famousFoods: ["Ker Sangri", "Gatte ki Sabzi"], majorFestivals: ["Desert Festival"], coords: { lat: 26.9157, lng: 70.9083 } },
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
      { slug: "kochi", name: "Kochi", stateSlug: "kerala", shortDescription: "Spice-port heritage on Fort Kochi's waterfront — churches, synagogues, Chinese nets.", attractionsCount: 7, famousFoods: ["Karimeen Pollichathu", "Appam with Stew", "Banana chips"], majorFestivals: ["Kochi-Muziris Biennale", "Cochin Carnival"], coords: { lat: 9.9658, lng: 76.2673 } },
      { slug: "alleppey", name: "Alleppey", stateSlug: "kerala", shortDescription: "Backwater capital — houseboats, lagoons and snake-boat races.", attractionsCount: 5, famousFoods: ["Kerala Sadya", "Toddy & Karimeen", "Prawn Curry"], majorFestivals: ["Nehru Trophy Boat Race", "Onam"], coords: { lat: 9.4981, lng: 76.3388 } },
      { slug: "munnar", name: "Munnar", stateSlug: "kerala", shortDescription: "Tea-estate hill station above 1,600 m in the Western Ghats.", attractionsCount: 6, famousFoods: ["Puttu & Kadala Curry", "Idiyappam", "Cardamom Tea"], majorFestivals: ["Neelakurinji Bloom"], coords: { lat: 10.0889, lng: 77.0595 } },
      { slug: "thiruvananthapuram", name: "Thiruvananthapuram", stateSlug: "kerala", shortDescription: "Quiet coastal capital, gateway to Varkala and Kovalam.", attractionsCount: 5, famousFoods: ["Sadya", "Fish Molee", "Halwa"], majorFestivals: ["Attukal Pongala", "Onam"], coords: { lat: 8.5241, lng: 76.9366 } },
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
      { slug: "shimla", name: "Shimla", stateSlug: "himachal-pradesh", shortDescription: "Former summer capital of British India with Raj-era promenades.", attractionsCount: 6, famousFoods: ["Chana Madra", "Siddu", "Babru"], majorFestivals: ["Summer Festival", "Sipi Fair"], coords: { lat: 31.1048, lng: 77.1734 } },
      { slug: "manali", name: "Manali", stateSlug: "himachal-pradesh", shortDescription: "Mountain town in the Beas valley — gateway to Lahaul and Spiti.", attractionsCount: 7, famousFoods: ["Trout", "Siddu", "Thukpa"], majorFestivals: ["Winter Carnival", "Hadimba Mela"], coords: { lat: 32.2396, lng: 77.1887 } },
      { slug: "dharamshala", name: "Dharamshala", stateSlug: "himachal-pradesh", shortDescription: "Seat of the Dalai Lama, with Tibetan monasteries and cafes.", attractionsCount: 5, famousFoods: ["Momos", "Thukpa", "Tibetan Bread"], majorFestivals: ["Losar", "International Himalayan Festival"], coords: { lat: 32.219, lng: 76.3234 } },
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
      { slug: "chennai", name: "Chennai", stateSlug: "tamil-nadu", shortDescription: "Tamil capital with colonial forts, classical music and Marina Beach.", attractionsCount: 7, famousFoods: ["Dosa", "Idli", "Filter Coffee", "Chettinad Chicken"], majorFestivals: ["Margazhi Music Season", "Pongal"], coords: { lat: 13.0827, lng: 80.2707 } },
      { slug: "madurai", name: "Madurai", stateSlug: "tamil-nadu", shortDescription: "Ancient temple city around the Meenakshi Amman Temple.", attractionsCount: 5, famousFoods: ["Jigarthanda", "Paruthi Paal", "Kari Dosai"], majorFestivals: ["Chithirai Festival", "Float Festival"], coords: { lat: 9.9252, lng: 78.1198 } },
      { slug: "thanjavur", name: "Thanjavur", stateSlug: "tamil-nadu", shortDescription: "Chola capital and home of the UNESCO Brihadeeswarar Temple.", attractionsCount: 4, famousFoods: ["Thanjavur Sadya"], majorFestivals: ["Thyagaraja Aradhana"], coords: { lat: 10.787, lng: 79.1378 } },
      { slug: "pondicherry", name: "Pondicherry", stateSlug: "tamil-nadu", shortDescription: "Former French enclave — yellow walls, cafes and Auroville nearby.", attractionsCount: 5, famousFoods: ["French Pastries", "Creole cuisine"], majorFestivals: ["Bastille Day", "Pondicherry Heritage Festival"], coords: { lat: 11.9416, lng: 79.8083 } },
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
