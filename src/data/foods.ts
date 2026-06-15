import type { Food } from "@/content/types";

export const FOODS: Food[] = [
  // Rajasthan
  { id: "f-dal-baati", slug: "dal-baati-churma", name: "Dal Baati Churma", stateSlug: "rajasthan", category: "Main", image: "", vegetarian: true, featured: true,
    description: "The Rajasthani thali centrepiece — baked wheat balls (baati) drowned in ghee and eaten with five-lentil dal and crumbled sweet churma." },
  { id: "f-laal-maas", slug: "laal-maas", name: "Laal Maas", stateSlug: "rajasthan", category: "Main", image: "", vegetarian: false,
    description: "A fiery red mutton curry coloured by Mathania chillies, traditionally cooked over a wood fire by Rajput hunters." },
  { id: "f-gatte-ki-sabzi", slug: "gatte-ki-sabzi", name: "Gatte ki Sabzi", stateSlug: "rajasthan", category: "Main", image: "", vegetarian: true,
    description: "Steamed gram-flour dumplings in a tangy yoghurt curry — born of Rajasthan's water-scarce vegetarian kitchen." },
  { id: "f-pyaaz-kachori", slug: "pyaaz-kachori", name: "Pyaaz Kachori", stateSlug: "rajasthan", category: "Snack", image: "", vegetarian: true,
    description: "A flaky onion-stuffed pastry, best eaten hot from the famous Rawat sweet shops of Jaipur." },
  { id: "f-ghewar", slug: "ghewar", name: "Ghewar", stateSlug: "rajasthan", category: "Sweet", image: "", vegetarian: true,
    description: "A disc-shaped honeycomb sweet soaked in sugar syrup and crowned with rabri, made for the monsoon festival of Teej." },

  // Kerala
  { id: "f-sadya", slug: "sadya", name: "Onam Sadya", stateSlug: "kerala", category: "Main", image: "", vegetarian: true, featured: true,
    description: "A 26-dish vegetarian feast served on a banana leaf — Kerala's most elaborate food ritual, reaching its peak during Onam." },
  { id: "f-appam-stew", slug: "appam-stew", name: "Appam with Stew", stateSlug: "kerala", category: "Main", image: "", vegetarian: false,
    description: "Lacy fermented rice pancakes paired with a mild coconut-milk stew of chicken, mutton or vegetables — a Syrian Christian classic." },
  { id: "f-karimeen-pollichathu", slug: "karimeen-pollichathu", name: "Karimeen Pollichathu", stateSlug: "kerala", category: "Main", image: "", vegetarian: false,
    description: "Pearl spot fish marinated in chilli and curry leaves, wrapped in banana leaf and pan-grilled — the dish of the backwaters." },
  { id: "f-puttu-kadala", slug: "puttu-kadala", name: "Puttu & Kadala Curry", stateSlug: "kerala", category: "Breakfast", image: "", vegetarian: true,
    description: "Steamed cylinders of rice flour and coconut, eaten with a spicy black-chickpea curry. A standard Kerala breakfast." },
  { id: "f-payasam", slug: "payasam", name: "Payasam", stateSlug: "kerala", category: "Sweet", image: "", vegetarian: true,
    description: "Rice or vermicelli simmered in jaggery and coconut milk — the closing course of any temple sadya." },

  // Goa
  { id: "f-fish-curry-rice", slug: "fish-curry-rice", name: "Fish Curry Rice", stateSlug: "goa", category: "Main", image: "", vegetarian: false, featured: true,
    description: "The daily meal of Hindu Goa — kingfish or mackerel simmered in a tamarind-coconut curry, eaten with par-boiled red rice." },
  { id: "f-vindaloo", slug: "vindaloo", name: "Pork Vindaloo", stateSlug: "goa", category: "Main", image: "", vegetarian: false,
    description: "Goa's most famous export — pork marinated in vinegar, garlic and Kashmiri chillies, a recipe inherited from Portuguese carne de vinha d'alhos." },
  { id: "f-xacuti", slug: "xacuti", name: "Chicken Xacuti", stateSlug: "goa", category: "Main", image: "", vegetarian: false,
    description: "A dark, deeply spiced curry made with a freshly roasted blend of coconut, poppy seeds and dried chillies." },
  { id: "f-bebinca", slug: "bebinca", name: "Bebinca", stateSlug: "goa", category: "Sweet", image: "", vegetarian: true,
    description: "A 7-to-16-layer Goan-Portuguese cake of coconut milk, egg yolks and ghee, baked one layer at a time. A Christmas table fixture." },

  // West Bengal
  { id: "f-machher-jhol", slug: "machher-jhol", name: "Machher Jhol", stateSlug: "west-bengal", category: "Main", image: "", vegetarian: false, featured: true,
    description: "A light, lemony fish curry — usually rohu or hilsa — eaten with a mound of steamed rice. The Bengali everyday lunch." },
  { id: "f-kosha-mangsho", slug: "kosha-mangsho", name: "Kosha Mangsho", stateSlug: "west-bengal", category: "Main", image: "", vegetarian: false,
    description: "Slow-cooked mutton in a dark, intensely spiced gravy — Sunday lunch in many Kolkata households." },
  { id: "f-shorshe-ilish", slug: "shorshe-ilish", name: "Shorshe Ilish", stateSlug: "west-bengal", category: "Main", image: "", vegetarian: false,
    description: "Hilsa fish in a sharp mustard-paste sauce, cooked en papillote in banana leaf. The dish of monsoon." },
  { id: "f-rosogolla", slug: "rosogolla", name: "Rosogolla", stateSlug: "west-bengal", category: "Sweet", image: "", vegetarian: true,
    description: "Spongy chhena balls in light sugar syrup — geographically tagged to West Bengal and an emotional issue." },
  { id: "f-mishti-doi", slug: "mishti-doi", name: "Mishti Doi", stateSlug: "west-bengal", category: "Sweet", image: "", vegetarian: true,
    description: "Set yoghurt sweetened with caramelised palm sugar and served in unfired clay pots." },

  // Himachal Pradesh
  { id: "f-siddu", slug: "siddu", name: "Siddu", stateSlug: "himachal-pradesh", category: "Main", image: "", vegetarian: true, featured: true,
    description: "A steamed wheat-flour bun stuffed with poppy seeds, walnuts or dal — eaten with ghee and chutney in the Kullu valley." },
  { id: "f-thukpa", slug: "thukpa", name: "Thukpa", stateSlug: "himachal-pradesh", category: "Main", image: "", vegetarian: false,
    description: "A Tibetan noodle soup that has become a Himachali staple, especially in Dharamshala and Spiti." },
  { id: "f-chha-gosht", slug: "chha-gosht", name: "Chha Gosht", stateSlug: "himachal-pradesh", category: "Main", image: "", vegetarian: false,
    description: "Mutton cooked slowly in yoghurt and gram flour — part of the formal Pahari Dham feast." },
  { id: "f-babru", slug: "babru", name: "Babru", stateSlug: "himachal-pradesh", category: "Snack", image: "", vegetarian: true,
    description: "Black-gram-stuffed fried bread, a Himachali cousin of the kachori, served with tamarind chutney." },

  // Tamil Nadu
  { id: "f-dosa", slug: "masala-dosa", name: "Masala Dosa", stateSlug: "tamil-nadu", category: "Breakfast", image: "", vegetarian: true, featured: true,
    description: "Crisp fermented-rice crepe folded around a spiced potato filling, served with sambar and coconut chutney." },
  { id: "f-chettinad-chicken", slug: "chettinad-chicken", name: "Chettinad Chicken", stateSlug: "tamil-nadu", category: "Main", image: "", vegetarian: false,
    description: "A complex, pepper-forward chicken curry from the Chettiar merchant community — one of South India's most distinctive non-veg traditions." },
  { id: "f-pongal", slug: "pongal", name: "Ven Pongal", stateSlug: "tamil-nadu", category: "Breakfast", image: "", vegetarian: true,
    description: "Rice and split mung-bean porridge tempered with peppercorns, cumin and curry leaves — the breakfast of temple towns." },
  { id: "f-meen-kuzhambu", slug: "meen-kuzhambu", name: "Meen Kuzhambu", stateSlug: "tamil-nadu", category: "Main", image: "", vegetarian: false,
    description: "A tangy tamarind-based fish curry, traditionally cooked in a clay pot for a deeper flavour the next day." },
  { id: "f-filter-coffee", slug: "filter-coffee", name: "Madras Filter Coffee", stateSlug: "tamil-nadu", category: "Drink", image: "", vegetarian: true,
    description: "Chicory-blended coffee brewed in a brass filter and served frothing between a steel davara and tumbler." },

  // Maharashtra
  { id: "f-vada-pav", slug: "vada-pav", name: "Vada Pav", stateSlug: "maharashtra", category: "Snack", image: "", vegetarian: true, featured: true,
    description: "Mumbai's working-class burger — a spiced potato fritter inside a buttered bun with green chutney and a fried chilli." },
  { id: "f-misal-pav", slug: "misal-pav", name: "Misal Pav", stateSlug: "maharashtra", category: "Breakfast", image: "", vegetarian: true,
    description: "Sprouted-bean curry topped with farsan, onions and lime — eaten with pav for breakfast, especially in Pune and Nashik." },
  { id: "f-puran-poli", slug: "puran-poli", name: "Puran Poli", stateSlug: "maharashtra", category: "Sweet", image: "", vegetarian: true,
    description: "A flat, ghee-rich flatbread stuffed with sweetened chana dal — made for every Maharashtrian festival." },
  { id: "f-pav-bhaji", slug: "pav-bhaji", name: "Pav Bhaji", stateSlug: "maharashtra", category: "Snack", image: "", vegetarian: true,
    description: "A spiced, butter-glossed mixed-vegetable mash eaten with toasted pav — invented by Mumbai's textile-mill canteens." },

  // Uttar Pradesh
  { id: "f-galouti-kebab", slug: "galouti-kebab", name: "Galouti Kebab", stateSlug: "uttar-pradesh", category: "Snack", image: "", vegetarian: false, featured: true,
    description: "Melt-in-the-mouth minced-meat patties invented for a toothless nawab — Lucknow's signature kebab." },
  { id: "f-tunday-biryani", slug: "lucknowi-biryani", name: "Lucknowi (Awadhi) Biryani", stateSlug: "uttar-pradesh", category: "Main", image: "", vegetarian: false,
    description: "A fragrant, lightly-spiced dum biryani layered with saffron and kewra — closer to Persian pulao than its Hyderabadi cousin." },
  { id: "f-litti-chokha", slug: "litti-chokha", name: "Litti Chokha", stateSlug: "uttar-pradesh", category: "Main", image: "", vegetarian: true,
    description: "Wheat balls stuffed with roasted sattu, dunked in ghee, and eaten with smoky mashed brinjal and tomato." },
  { id: "f-petha", slug: "petha", name: "Petha", stateSlug: "uttar-pradesh", category: "Sweet", image: "", vegetarian: true,
    description: "Translucent ash-gourd candy from Agra — sold in dozens of varieties around the lanes near the Taj." },
  { id: "f-kachori-sabzi", slug: "kachori-sabzi", name: "Kachori Sabzi", stateSlug: "uttar-pradesh", category: "Breakfast", image: "", vegetarian: true,
    description: "Banarasi-style flaky kachoris with a spiced potato curry — the classic Varanasi street breakfast." },
];
