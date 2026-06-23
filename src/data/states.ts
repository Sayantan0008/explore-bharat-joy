import type { State } from "@/content/types";

// 8 showcase states with full content + remaining 20 states + 8 UTs as stubs.
// Images are intentionally empty — SmartImage renders a gradient fallback so
// the app ships without external image dependencies.

const SHOWCASE: State[] = [
  {
    id: "st-rajasthan",
    slug: "rajasthan",
    name: "Rajasthan",
    capital: "Jaipur",
    language: "Hindi, Rajasthani",
    population: "68.5 million",
    area: "342,239 km²",
    bestTimeToVisit: "October – March",
    heroImage: "",
    region: "west",
    isUT: false,
    status: "showcase",
    stats: { attractions: 6, foods: 5, festivals: 4 },
    overview:
      "Rajasthan, the Land of Kings, is India at its most operatic. Sandstone forts crown desert ridges, palaces float on green lakes, and entire cities are painted a single colour — pink in Jaipur, blue in Jodhpur, gold in Jaisalmer. Once carved into proud Rajput princely states, the region preserves a courtly culture of miniature painting, martial ballads and Mughal-influenced cuisine. Beyond the headline cities lie the dunes of the Thar, the Aravalli hills around Mount Abu, and the bird-rich wetlands of Keoladeo. Travel here is unhurried and theatrical: camel fairs at Pushkar, sundowners on a haveli rooftop, qawwali in a fort courtyard.",
    culture:
      "Rajasthani culture revolves around community, hospitality and craft. Folk traditions like Ghoomar dance, Manganiar music and puppet theatre survive in working form, not just as performances for tourists. Bandhej tie-dye, blue pottery, miniature painting and mirror-work embroidery remain household industries. Festivals such as Teej, Gangaur and the Pushkar Camel Fair anchor the calendar, and the Marwari merchant tradition shapes everything from temple architecture to thali courses.",
  },
  {
    id: "st-kerala",
    slug: "kerala",
    name: "Kerala",
    capital: "Thiruvananthapuram",
    language: "Malayalam",
    population: "34.8 million",
    area: "38,852 km²",
    bestTimeToVisit: "September – March",
    heroImage: "",
    region: "south",
    isUT: false,
    status: "showcase",
    stats: { attractions: 6, foods: 5, festivals: 3 },
    overview:
      "Kerala — God's Own Country — is a narrow green strip pressed between the Arabian Sea and the Western Ghats. Backwater canals thread through Kuttanad, tea estates step up the slopes of Munnar, and spice plantations perfume the air around Thekkady. The state has the highest literacy rate in India and a long matrilineal tradition, both of which shape an easy, conversational kind of travel. Days end with a fish curry on a banana leaf, a sunset Kathakali show, or an Ayurvedic massage in a quiet riverside resort.",
    culture:
      "Kerala's culture is layered: Hindu temple festivals with caparisoned elephants, ancient Syrian Christian churches, Jewish heritage in Kochi, and one of India's oldest Muslim communities along the Malabar coast. Performing arts include Kathakali, Mohiniyattam and the martial art Kalaripayattu. Onam, the harvest festival, unites the state with flower carpets, snake-boat races and a multi-course sadya feast served on a banana leaf.",
  },
  {
    id: "st-goa",
    slug: "goa",
    name: "Goa",
    capital: "Panaji",
    language: "Konkani",
    population: "1.5 million",
    area: "3,702 km²",
    bestTimeToVisit: "November – February",
    heroImage: "",
    region: "west",
    isUT: false,
    status: "showcase",
    stats: { attractions: 10, foods: 7, festivals: 5 },
    overview:
      "Goa is India's smallest state by area and easily its most distinctive — a 450-year Portuguese colony that joined the Republic only in 1961. The result is a hybrid coastal culture: whitewashed churches next to Hindu temples, Konkani cuisine flavoured with vinegar and chillies brought from the New World, and a built environment of tiled-roof villas and slow riverside towns. North Goa draws the party crowd, the south is calmer and more curated, and inland the Western Ghats hide waterfalls, spice farms and a handful of wildlife sanctuaries.",
    culture:
      "Goan identity blends Konkani roots with Catholic and Saraswat Brahmin Hindu influences. Music is everywhere — fado-tinged ballads, mando, trance on the beaches — and Carnival in February turns Panaji into a four-day parade. Susegad, the local word for unhurried contentment, is taken seriously: long lunches, longer naps, and a feni nightcap.",
  },
  {
    id: "st-west-bengal",
    slug: "west-bengal",
    name: "West Bengal",
    capital: "Kolkata",
    language: "Bengali",
    population: "99.6 million",
    area: "88,752 km²",
    bestTimeToVisit: "October – March",
    heroImage: "",
    region: "east",
    isUT: false,
    status: "showcase",
    stats: { attractions: 10, foods: 7, festivals: 6 },
    overview:
      "West Bengal stretches from the high Himalayas at Darjeeling down through the Gangetic plains to the tiger-haunted Sundarbans delta. Kolkata, the capital, is India's intellectual and literary heart — a city of coffee houses, second-hand bookshops, art-house cinema and Durga Puja pandals that turn entire neighbourhoods into outdoor galleries every autumn. Beyond the city, narrow-gauge toy trains climb tea estates, Murshidabad and Bishnupur hide nawabi and terracotta-temple histories, and the mangrove forests of the south shelter the world's largest population of Bengal tigers.",
    culture:
      "Bengali culture is famously cerebral — Tagore, Ray, Sen, Bose — and famously sweet-toothed. Durga Puja, recognised by UNESCO, is the social event of the year. Adda (long, meandering conversation) is a near-ritual, and a fish-and-rice lunch is non-negotiable. Bauls in the countryside still sing mystical folk songs that influenced Bob Dylan, among others.",
  },
  {
    id: "st-himachal-pradesh",
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    capital: "Shimla",
    language: "Hindi, Pahari",
    population: "7.5 million",
    area: "55,673 km²",
    bestTimeToVisit: "March – June, September – November",
    heroImage: "",
    region: "north",
    isUT: false,
    status: "showcase",
    stats: { attractions: 6, foods: 4, festivals: 3 },
    overview:
      "Himachal Pradesh is the western Indian Himalaya in miniature — colonial hill stations, apple orchards, glacier-fed valleys and high-altitude Buddhist deserts all within a day's drive of each other. Shimla and Dharamshala carry a Raj-era hangover of half-timbered cottages and pine forests, while Manali, Kasol and the Parvati Valley have become hubs for trekkers, climbers and the long-haul backpacker crowd. Push further north into Spiti and Lahaul and the landscape turns Tibetan: monasteries on cliffs, prayer flags above 4,000 metres, and night skies so dark you can read by starlight.",
    culture:
      "Pahari culture is village-rooted, with deity processions, fairs and seasonal melas marking every turn of the agricultural year. Dharamshala has hosted the Tibetan government-in-exile since 1960, adding monasteries, momos and a strong Buddhist presence. The state is one of India's safest and friendliest for solo and women travellers.",
  },
  {
    id: "st-tamil-nadu",
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    capital: "Chennai",
    language: "Tamil",
    population: "77.8 million",
    area: "130,058 km²",
    bestTimeToVisit: "November – February",
    heroImage: "",
    region: "south",
    isUT: false,
    status: "showcase",
    stats: { attractions: 6, foods: 5, festivals: 4 },
    overview:
      "Tamil Nadu is the custodian of one of the world's oldest continuous cultures. Granite temple towers rise from the plains at Madurai, Thanjavur and Chidambaram; Bharatanatyam dancers still train in courtyards behind those temples; and Sangam-era Tamil poetry from 2,000 years ago is recognisable to a modern speaker. The Coromandel coast at Mahabalipuram preserves Pallava-era rock-cut sculpture, the Nilgiris hide tea estates and toy trains around Ooty, and Pondicherry — strictly a Union Territory — sits within the state as a yellow-walled French enclave.",
    culture:
      "Carnatic music, Bharatanatyam dance and a fiercely vegetarian temple-town tradition coexist with a thriving film industry (Kollywood) and a politically distinct identity. The Tamil filter coffee ritual, served in a steel davara-tumbler, is its own small art form. Pongal in January is the headline festival.",
  },
  {
    id: "st-maharashtra",
    slug: "maharashtra",
    name: "Maharashtra",
    capital: "Mumbai",
    language: "Marathi",
    population: "123.1 million",
    area: "307,713 km²",
    bestTimeToVisit: "October – March",
    heroImage: "",
    region: "west",
    isUT: false,
    status: "showcase",
    stats: { attractions: 5, foods: 4, festivals: 3 },
    overview:
      "Maharashtra contains India's financial capital, its most visited rock-cut caves and a long, dramatic Konkan coastline. Mumbai is the obvious headline — colonial Bombay layered over fishing-village Mumbai, Bollywood, the dabbawalas, Marine Drive at dusk. Inland, the Sahyadri ranges hide hill forts associated with the 17th-century warrior-king Shivaji, the UNESCO-listed Buddhist caves at Ajanta and Ellora, and the cooler Deccan plateau cities of Pune and Nashik. South towards Goa, the Konkan coast is a string of quiet fishing villages, mango orchards and crumbling sea forts.",
    culture:
      "Marathi culture is proud, plain-spoken and devotional — Ganesh Chaturthi turns Mumbai into a 10-day street party, and the Warkari pilgrimage to Pandharpur each year draws hundreds of thousands on foot. The state's food spans coastal Malvani seafood, spicy Kolhapuri thalis and the famously sweet Maharashtrian wedding menu.",
  },
  {
    id: "st-uttar-pradesh",
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    capital: "Lucknow",
    language: "Hindi, Urdu",
    population: "237.9 million",
    area: "240,928 km²",
    bestTimeToVisit: "October – March",
    heroImage: "",
    region: "north",
    isUT: false,
    status: "showcase",
    stats: { attractions: 6, foods: 5, festivals: 3 },
    overview:
      "Uttar Pradesh is India's most populous state and arguably its most historically dense. The Taj Mahal at Agra is only the most famous monument in a Mughal corridor that runs through Fatehpur Sikri, Sikandra and the Agra Fort. Lucknow preserves the elegant tehzeeb of the Nawabi court — chikan embroidery, kebabs, ghazal evenings. Varanasi on the Ganges is the spiritual centre of Hinduism, with cremation ghats and dawn aartis that have continued, more or less unchanged, for two millennia. Buddhists complete a parallel pilgrim trail through Sarnath, where the Buddha gave his first sermon.",
    culture:
      "UP straddles two great cultural streams: the Sanskritic-Hindu heritage of Varanasi, Ayodhya and Mathura, and the Indo-Islamic Awadhi tradition of Lucknow. The result is a kitchen that runs from temple-pure sattvic food to slow-cooked dum biryani, and a musical heritage that gave India both Tulsidas and the Lucknow gharana of Kathak.",
  },
];

const STUBS: State[] = [
  // Remaining 20 states
  { name: "Andhra Pradesh", capital: "Amaravati", region: "south" },
  { name: "Arunachal Pradesh", capital: "Itanagar", region: "northeast" },
  { name: "Assam", capital: "Dispur", region: "northeast" },
  { name: "Bihar", capital: "Patna", region: "east" },
  { name: "Chhattisgarh", capital: "Raipur", region: "central" },
  { name: "Gujarat", capital: "Gandhinagar", region: "west" },
  { name: "Haryana", capital: "Chandigarh", region: "north" },
  { name: "Jharkhand", capital: "Ranchi", region: "east" },
  { name: "Karnataka", capital: "Bengaluru", region: "south" },
  { name: "Madhya Pradesh", capital: "Bhopal", region: "central" },
  { name: "Manipur", capital: "Imphal", region: "northeast" },
  { name: "Meghalaya", capital: "Shillong", region: "northeast" },
  { name: "Mizoram", capital: "Aizawl", region: "northeast" },
  { name: "Nagaland", capital: "Kohima", region: "northeast" },
  { name: "Odisha", capital: "Bhubaneswar", region: "east" },
  { name: "Punjab", capital: "Chandigarh", region: "north" },
  { name: "Sikkim", capital: "Gangtok", region: "northeast" },
  { name: "Telangana", capital: "Hyderabad", region: "south" },
  { name: "Tripura", capital: "Agartala", region: "northeast" },
  { name: "Uttarakhand", capital: "Dehradun", region: "north" },
].map<State>((s) => ({
  id: `st-${slugify(s.name)}`,
  slug: slugify(s.name),
  name: s.name,
  capital: s.capital,
  language: "—",
  population: "—",
  area: "—",
  bestTimeToVisit: "—",
  heroImage: "",
  region: s.region as State["region"],
  isUT: false,
  status: "stub",
  stats: { attractions: 0, foods: 0, festivals: 0 },
  overview: `${s.name} is one of India's most rewarding states to explore. Deep guides for ${s.name} are on the way.`,
  culture: "",
}));

const UTS: State[] = [
  { name: "Andaman and Nicobar Islands", capital: "Port Blair", region: "south" },
  { name: "Chandigarh", capital: "Chandigarh", region: "north" },
  { name: "Dadra and Nagar Haveli and Daman and Diu", capital: "Daman", region: "west" },
  { name: "Delhi", capital: "New Delhi", region: "north" },
  { name: "Jammu and Kashmir", capital: "Srinagar / Jammu", region: "north" },
  { name: "Ladakh", capital: "Leh", region: "north" },
  { name: "Lakshadweep", capital: "Kavaratti", region: "south" },
  { name: "Puducherry", capital: "Puducherry", region: "south" },
].map<State>((s) => ({
  id: `ut-${slugify(s.name)}`,
  slug: slugify(s.name),
  name: s.name,
  capital: s.capital,
  language: "—",
  population: "—",
  area: "—",
  bestTimeToVisit: "—",
  heroImage: "",
  region: s.region as State["region"],
  isUT: true,
  status: "stub",
  stats: { attractions: 0, foods: 0, festivals: 0 },
  overview: `${s.name} is a Union Territory with its own distinct character. A full guide is on the way.`,
  culture: "",
}));

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const STATES: State[] = [...SHOWCASE, ...STUBS, ...UTS].sort((a, b) =>
  a.name.localeCompare(b.name),
);
