import type { ImageId } from "../lib/image";

export const SITE = {
  artist: "Guru Smt. Madhumitha",
  institution: "Sri Narthaki Kuchipudi Natyalaya",
  tagline: "Preserving Tradition. Inspiring Excellence.",
  phone: "7358567743",
  phoneIntl: "+91 73585 67743",
  tel: "tel:+917358567743",
  whatsapp: "https://wa.me/917358567743",
  location: "Chennai, Tamil Nadu, India",
  url: "https://parthyk.github.io/guru-madhumitha-kuchipudi-portfolio/",
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "art", label: "The Art" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "achievements", label: "Achievements" },
  { id: "natyalaya", label: "Natyalaya" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
] as const;

export const artConcepts = [
  {
    index: "01",
    title: "Abhinaya",
    subtitle: "The story told in a glance",
    copy: "Expression carries the narrative — a lifted brow, a turn of the hand, a mood held for a single breath.",
  },
  {
    index: "02",
    title: "Rhythm",
    subtitle: "The ground beneath the dance",
    copy: "Intricate footwork and precise rhythmic patterns give the form its pulse, its structure, and its fire.",
  },
  {
    index: "03",
    title: "Grace",
    subtitle: "Technique made luminous",
    copy: "Classical technique becomes art through line, balance, and the quiet control of every movement.",
  },
  {
    index: "04",
    title: "Devotion",
    subtitle: "The quiet centre",
    copy: "At the heart of Kuchipudi is a spiritual and cultural depth — dance offered as prayer, story, and celebration.",
  },
] as const;

export const biography = [
  "I am a dedicated Kuchipudi dancer, choreographer, and Guru with a deep passion for preserving and promoting the rich heritage of Indian classical dance. My journey in Kuchipudi began at the age of 12, and over the years, dance has evolved from a passion into a lifelong commitment to artistic expression, cultural preservation, and teaching.",
  "With experience in over 600 performances across various platforms, including a Guinness World Record performance in 2012 at Gachibowli Stadium, Hyderabad, I have had the privilege of sharing the beauty and spiritual essence of Kuchipudi with diverse audiences.",
  "Through Sri Narthaki Kuchipudi Natyalaya, I strive to nurture young talents and guide aspiring dancers in developing not only their technical skills but also their discipline, confidence, dedication, and respect for our cultural traditions. My teaching approach combines the authenticity of classical techniques with an encouraging environment where every student can discover their unique artistic identity.",
  "Beyond the stage, I believe dance is a powerful medium for self-expression, personal growth, and empowerment. My mission is to inspire the next generation to embrace our traditions, pursue their passion with confidence, and carry forward the timeless beauty of Kuchipudi.",
] as const;

export const aboutFacts = [
  { value: "12", label: "The age her Kuchipudi journey began" },
  { value: "600+", label: "Performances across diverse platforms" },
  { value: "2012", label: "Guinness World Record performance, Hyderabad" },
  { value: "Chennai", label: "Home of Sri Narthaki Kuchipudi Natyalaya" },
] as const;

export const milestones = [
  {
    marker: "Age 12",
    title: "The Beginning",
    copy: "The first steps into Kuchipudi — a childhood introduction that would become a lifelong commitment to the art form.",
    image: "portrait-orange" as ImageId,
  },
  {
    marker: "2012",
    title: "Maha Brinda Natyam",
    copy: "Participation in the Guinness World Records-associated Maha Brinda Natyam performance at Gachibowli Stadium, Hyderabad.",
    image: null,
  },
  {
    marker: "600+",
    title: "A Continuing Journey",
    copy: "A body of work shaped by performances on stage, in temples, and at cultural celebrations across diverse platforms.",
    image: null,
  },
  {
    marker: "Present",
    title: "Founder & Artistic Director",
    copy: "Guiding Sri Narthaki Kuchipudi Natyalaya in Chennai — nurturing technique, discipline, confidence, and cultural pride.",
    image: null,
  },
] as const;

export const achievements = [
  {
    index: "01",
    title: "Guinness World Records",
    tag: "2012",
    copy: "Participation in the largest Kuchipudi dance performance, Maha Brinda Natyam, held at Gachibowli Stadium, Hyderabad.",
    image: "stage-dark" as ImageId,
  },
  {
    index: "02",
    title: "Merit Book of Records",
    tag: "Recognition",
    copy: "Recognition associated with the Cultural Heritage of Tirupati Dance Fest.",
    image: "portrait-green-studio" as ImageId,
  },
  {
    index: "03",
    title: "600+ Performances",
    tag: "A continuing journey",
    copy: "A journey of dedication, artistic expression, and cultural contribution through numerous stage and temple performances.",
    image: "stage-green" as ImageId,
  },
  {
    index: "04",
    title: "Cultural Recognition",
    tag: "Appreciation",
    copy: "Appreciation for commitment to Kuchipudi and the promotion of Indian classical dance.",
    image: "portrait-beige" as ImageId,
  },
  {
    index: "05",
    title: "Temple & Cultural Performances",
    tag: "Devotion in motion",
    copy: "Participation in temple festivals, cultural programmes, and Natyanjali celebrations.",
    image: "portrait-orange" as ImageId,
  },
] as const;

export const venues = [
  "Brihadeeswarar Temple, Thanjavur",
  "Meenakshi Amman Temple, Madurai",
  "Kamakshi Amman Temple, Kanchipuram",
  "Kanaka Durga Temple, Vijayawada",
  "Narasimha Temple, Melattur",
  "Gachibowli Stadium, Hyderabad",
  "Sri Sita Ramachandra Swamy Temple, Bhadrachalam",
  "Kanipakam Vinayaka Temple, Chittoor",
  "Mahati Auditorium and Annamacharya Temple, Tirupati",
  "Nellaiappar Temple, Tirunelveli",
  "Rasika Ranjana Sabha, Tiruchirappalli",
  "Nataraja Temple, Chidambaram",
] as const;

export const programmes = [
  {
    index: "01",
    title: "Kuchipudi Dance Training",
    copy: "Structured training in classical techniques, rhythm, expressions, and graceful movements.",
  },
  {
    index: "02",
    title: "Semi-Classical Dance",
    copy: "Blending classical elegance with contemporary styles to create expressive and captivating performances.",
  },
  {
    index: "03",
    title: "Song Choreography",
    copy: "Creative choreography for songs, special occasions, cultural events, and stage performances.",
  },
  {
    index: "04",
    title: "Classical Dance Performances",
    copy: "Providing opportunities for students to showcase their talent on stage.",
  },
  {
    index: "05",
    title: "Cultural & Temple Festivals",
    copy: "Celebrating our heritage through devotional and traditional performances.",
  },
  {
    index: "06",
    title: "Workshops & Artistic Development",
    copy: "Encouraging creativity, confidence, discipline, and continuous learning.",
  },
] as const;

export const vision =
  "To preserve the rich tradition of Kuchipudi, nurture passionate and disciplined dancers, and inspire future generations to celebrate and carry forward this timeless art form with pride.";

export const mission =
  "To provide quality Kuchipudi training rooted in tradition, devotion, and artistic excellence while empowering students to grow as confident performers and culturally grounded individuals.";

export const galleryImages = [
  {
    id: "portrait-orange" as ImageId,
    title: "A Mood Held",
    alt: "Guru Smt. Madhumitha in an orange and gold Kuchipudi costume, seated in a classical pose with one arm extended.",
  },
  {
    id: "portrait-raised" as ImageId,
    title: "Line & Balance",
    alt: "Guru Smt. Madhumitha in a white and gold Kuchipudi costume, balanced on one leg with one arm raised.",
  },
  {
    id: "portrait-green-studio" as ImageId,
    title: "The Sculpted Pose",
    alt: "Guru Smt. Madhumitha in a green and gold Kuchipudi costume, holding a poised gesture on stage.",
  },
  {
    id: "stage-green" as ImageId,
    title: "Above the Lights",
    alt: "Guru Smt. Madhumitha performing on stage in an orange costume, both hands lifted above her head.",
  },
  {
    id: "portrait-beige" as ImageId,
    title: "Quiet Confidence",
    alt: "Guru Smt. Madhumitha in a burgundy and gold Kuchipudi costume against a warm beige studio backdrop.",
  },
  {
    id: "stage-dark" as ImageId,
    title: "The Stage Awaits",
    alt: "Guru Smt. Madhumitha standing on a softly lit stage in an orange and gold Kuchipudi costume.",
  },
  {
    id: "courtyard" as ImageId,
    title: "Between Rhythms",
    alt: "Guru Smt. Madhumitha in a blue Kuchipudi costume, framed by carved stone pillars and a sunlit courtyard.",
  },
  {
    id: "garden" as ImageId,
    title: "In Full Bloom",
    alt: "Guru Smt. Madhumitha in a white and burgundy Kuchipudi costume, dancing in a garden with a raised arm.",
  },
] as const;

export const interestOptions = [
  "Kuchipudi Dance Training",
  "Semi-Classical Dance",
  "Song Choreography",
  "Classical Dance Performances",
  "Cultural & Temple Festivals",
  "Workshops & Artistic Development",
  "General enquiry",
] as const;
