export const techStacks = {
  astro: {
    label: "Astro",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg",
  },
  javascript: {
    label: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  html: {
    label: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  css: {
    label: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  figma: {
    label: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  tailwind: {
    label: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  photoshop: {
    label: "Photoshop",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
  },
  premiere: {
    label: "Premiere Pro",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
  },
};

export const webProjects = [
  {
    title: "Portfolio Website",
    type: "Personal Website",
    year: "2026",
    image: "https://cdn.dribbble.com/userupload/43857095/file/original-6db74b69344fed62ba7f88046b070a60.png?resize=900x675",
    description: "Portfolio modern dengan struktur responsive, section personal branding, dan visual yang konsisten.",
    tech: [techStacks.astro, techStacks.javascript, techStacks.css, techStacks.figma],
  },
  {
    title: "Weather Dashboard",
    type: "Web App",
    year: "2026",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=900&q=85",
    description: "Dashboard cuaca dengan komposisi card yang bersih, visual state, dan informasi cepat dibaca.",
    tech: [techStacks.javascript, techStacks.html, techStacks.css, techStacks.figma],
  },
  {
    title: "Digital Agency",
    type: "Landing Page",
    year: "2026",
    image: "https://cdn.dribbble.com/userupload/13801613/file/original-5e6f8e2cf7a2d47b31dbb6608d68969e.png?resize=900x675",
    description: "Landing page premium untuk jasa digital dengan hierarchy teks kuat dan call-to-action jelas.",
    tech: [techStacks.astro, techStacks.tailwind, techStacks.javascript, techStacks.figma],
  },
  {
    title: "Auth System UI",
    type: "Interface",
    year: "2026",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=85",
    description: "Konsep login dan register dengan layout ringan, form rapi, dan flow yang mudah dipahami.",
    tech: [techStacks.html, techStacks.css, techStacks.javascript, techStacks.figma],
  },
  {
    title: "Task Manager",
    type: "Productivity App",
    year: "2026",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=85",
    description: "Interface manajemen tugas untuk mencatat, memantau, dan mengelompokkan pekerjaan harian.",
    tech: [techStacks.javascript, techStacks.css, techStacks.figma],
  },
  {
    title: "QR Scanner",
    type: "Utility App",
    year: "2026",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=900&q=85",
    description: "Tampilan scanner QR berbasis mobile-first dengan area scan fokus dan hasil yang jelas.",
    tech: [techStacks.html, techStacks.javascript, techStacks.css, techStacks.figma],
  },
];

export const photoProjects = [
  {
    title: "Urban Motion",
    type: "Street Photography",
    year: "2026",
    layout: "wide",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=85",
    description: "Eksplorasi ritme kota melalui cahaya malam, garis jalan, dan gerak kendaraan.",
    tech: [techStacks.photoshop, techStacks.premiere, techStacks.figma],
  },
  {
    title: "Warm Portrait",
    type: "Portrait",
    year: "2026",
    layout: "tall",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
    description: "Portrait dengan tone hangat, fokus ekspresi, dan pendekatan pencahayaan yang natural.",
    tech: [techStacks.photoshop, techStacks.figma],
  },
  {
    title: "Alpine Frame",
    type: "Landscape",
    year: "2026",
    layout: "large",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
    description: "Landscape alam dengan komposisi luas, warna natural, dan kedalaman visual yang tenang.",
    tech: [techStacks.photoshop, techStacks.premiere],
  },
  {
    title: "Creative Desk",
    type: "Product",
    year: "2026",
    layout: "normal",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    description: "Visual detail workspace kreatif dengan styling bersih dan komposisi editorial.",
    tech: [techStacks.photoshop, techStacks.figma],
  },
  {
    title: "Quiet Street",
    type: "Travel",
    year: "2026",
    layout: "wide",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=85",
    description: "Dokumentasi perjalanan dengan suasana candid, warna lembut, dan ruang yang bercerita.",
    tech: [techStacks.photoshop, techStacks.premiere],
  },
  {
    title: "Studio Details",
    type: "Commercial",
    year: "2026",
    layout: "normal",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=85",
    description: "Foto komersial minimalis yang menonjolkan bentuk, material, dan detail objek.",
    tech: [techStacks.photoshop, techStacks.figma, techStacks.premiere],
  },
];
