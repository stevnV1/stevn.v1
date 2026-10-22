// Modifie ces textes pour changer le contenu en français ou en anglais.
const traductions = {
  fr: {
    pageTitle: "Steven Vitvitchi — Webdesign, code et IA",
    pageDescription: "Portfolio de Steven Vitvitchi, en recherche d'un stage de 3 mois minimum en développement web, webdesign ou IA.",
    skip: "Aller au contenu",
    homeLink: "Steven Vitvitchi, accueil",
    mainNavigation: "Navigation principale",
    mobileNavigation: "Navigation mobile",
    languageButtonLabel: "Passer le site en anglais",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    navProfile: "Profil",
    navSkills: "Compétences",
    navExperience: "Parcours",
    navEducation: "Formation",
    navContact: "Contact",
    home: "Accueil",
    availability: "Recherche de stage · 3 mois minimum",
    tagline: "Webdesign, code et IA",
    scroll: "Défiler pour découvrir",
    scrollToProfile: "Défiler vers le profil",
    profile: "Profil",
    introduction: "J'ai commencé par intégrer des sites WordPress en agence, puis j'ai creusé ce qu'il y a derrière - HTML, CSS, JavaScript et maintenant C++. Au moment de ce stage, ma dernière année à l'ISEG sera derrière moi, et mes projets auront avancé aussi. Je cherche 3 mois minimum, en France ou au Japon, pour construire des sites et des outils clairs, rapides et utiles.",
    contactMe: "Me contacter",
    skills: "Compétences",
    web: "Web",
    webSkills: "HTML, CSS, JavaScript. PHP et SQL (Code Camp Epitech). C++ en cours d'apprentissage.",
    cmsMarketing: "CMS et marketing",
    cmsSkills: "WordPress, WPML, Rank Math SEO, emailing Brevo.",
    design: "Design",
    designSkills: "Figma, suite Adobe, UX.",
    languages: "Langues",
    spokenLanguages: "Anglais (C1), russe (B1), français et moldave (langues maternelles).",
    experience: "Expériences",
    internshipCagnes: "Stage · Cagnes-sur-Mer",
    karmaTask1: "Maquettes dans Figma : pages et visuels dessinés avant le montage, avec une cohérence graphique entre les supports.",
    karmaTask2: "WordPress : mises à jour des plugins, ajustements de pages, gestion du site multilingue avec WPML.",
    karmaTask3: "SEO : réglage de Rank Math SEO (titres, descriptions, mots-clés).",
    karmaTask4: "HTML, CSS et un peu de JavaScript pour corriger et peaufiner l'affichage.",
    karmaTask5: "Emailing : montage de campagnes sur Brevo.",
    andSmartTouch: "(et Smart Touch)",
    internshipNice: "Stage · Nice",
    catchTask1: "Événementiel : animation d'un événement privé, présence au Salon de l'entrepreneuriat.",
    catchTask2: "Technique : installation et réglage de matériel pour les stands, notamment des écrans.",
    catchTask3: "Photographie et visuels avec la suite Adobe, mise à jour du site sous WordPress.",
    catchTask4: "Vente et accueil du public.",
    education: "Formation",
    intensive: "Intensif",
    epitechDescription: "2 semaines : bases de données avec SQL, PHP côté serveur, CSS.",
    bachelor: "Bachelor Communication et Marketing Digital",
    bachelorDescription: "Marketing stratégique, marketing digital (webdesign, UX, réseaux sociaux), gestion de projets de bout en bout, suite Adobe. Start-up Day avec Epitech (jeu vidéo, pitch devant un jury) et workshop de création d'une marque de mode (Maison Vini).",
    watch: "Veille",
    watchAndPractice: "Veille et pratique personnelle",
    watchDescription: "Cours en ligne et forums sur l'IA, dont le WAICF à Cannes.",
    interest1: "Calisthénie et running",
    interest2: "Code et IA",
    interest3: "Design graphique",
    interest4: "Nouvelles technologies",
    contact: "Contact",
    email: "E-mail",
    backToTop: "Retour en haut",
    footerHome: "Retour en haut",
    letUsTalk: "On en discute",
    writeToMe: "Écrivez-moi",
    personalMessage: "Bonjour {nom}, j'ai préparé cette page pour vous."
  },
  en: {
    pageTitle: "Steven Vitvitchi — Web design, code and AI",
    pageDescription: "Portfolio of Steven Vitvitchi, looking for an internship of at least 3 months in web development, web design or AI.",
    skip: "Skip to content",
    homeLink: "Steven Vitvitchi, home",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    languageButtonLabel: "Switch the site to French",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navProfile: "Profile",
    navSkills: "Skills",
    navExperience: "Experience",
    navContact: "Contact",
    home: "Home",
    availability: "Looking for an internship · at least 3 months",
    tagline: "Web design, code and AI",
    scroll: "Scroll to explore",
    scrollToProfile: "Scroll to the profile",
    profile: "Profile",
    introduction: "I started by building WordPress sites at an agency, then explored what lies behind them: HTML, CSS, JavaScript, and now C++. By the time this internship begins, my final year at ISEG will be behind me, and my projects will have progressed too. I am looking for an internship of at least 3 months, in France or Japan, to build clear, fast and useful websites and tools.",
    contactMe: "Contact me",
    skills: "Skills",
    web: "Web",
    webSkills: "HTML, CSS, JavaScript. PHP and SQL (Epitech Code Camp). Currently learning C++.",
    cmsMarketing: "CMS and marketing",
    cmsSkills: "WordPress, WPML, Rank Math SEO, Brevo email campaigns.",
    design: "Design",
    designSkills: "Figma, Adobe Creative Suite, UX.",
    languages: "Languages",
    spokenLanguages: "English (C1), Russian (B1), French and Moldovan (native languages).",
    experience: "Experience",
    internshipCagnes: "Internship · Cagnes-sur-Mer",
    karmaTask1: "Figma mockups: pages and visuals designed before build, with visual consistency across materials.",
    karmaTask2: "WordPress: plugin updates, page adjustments, and management of the multilingual site with WPML.",
    karmaTask3: "SEO: configuring Rank Math SEO (titles, descriptions, keywords).",
    karmaTask4: "HTML, CSS and a little JavaScript to fix and refine the layout.",
    karmaTask5: "Email campaigns: building campaigns in Brevo.",
    andSmartTouch: "(and Smart Touch)",
    internshipNice: "Internship · Nice",
    catchTask1: "Events: helping run a private event and attending the entrepreneurship fair.",
    catchTask2: "Technical: installing and adjusting equipment for exhibition stands, including screens.",
    catchTask3: "Photography and visuals using Adobe Creative Suite, and updating the WordPress site.",
    catchTask4: "Sales and welcoming visitors.",
    education: "Education",
    intensive: "Intensive course",
    epitechDescription: "2 weeks: databases with SQL, server-side PHP, CSS.",
    bachelor: "Bachelor's degree in Communication and Digital Marketing",
    bachelorDescription: "Strategic marketing, digital marketing (web design, UX, social media), end-to-end project management, Adobe Creative Suite. Start-up Day with Epitech (video game, pitch to a jury) and a fashion brand creation workshop (Maison Vini).",
    watch: "Technology watch",
    watchAndPractice: "Technology watch and personal practice",
    watchDescription: "Online courses and forums about AI, including WAICF in Cannes.",
    interest1: "Calisthenics and running",
    interest2: "Code and AI",
    interest3: "Graphic design",
    interest4: "New technologies",
    contact: "Contact",
    email: "Email",
    backToTop: "Back to top",
    footerHome: "Back to top",
    letUsTalk: "Let's talk",
    writeToMe: "Write to me",
    personalMessage: "Hello {nom}, I prepared this page for you."
  }
};

// Ajoute ici un message spécifique, avec la clé de l'entreprise en minuscules.
const messagesParEntreprise = {
  // Exemple : "entreprise": { fr: "Bonjour {nom} !", en: "Hello {nom}!" }
};

const preferenceMouvementReduit = window.matchMedia("(prefers-reduced-motion: reduce)");
const boutonLangue = document.querySelector("#language-toggle");
const libelleLangue = document.querySelector("#language-label");
const boutonMenu = document.querySelector("#menu-toggle");
const menuMobile = document.querySelector("#mobile-nav");
const messagePersonnalise = document.querySelector("#personal-message");
const barreProgression = document.querySelector("#progression");
let langueActuelle = localStorage.getItem("langue-portfolio") === "en" ? "en" : "fr";
let nomEntreprisePersonnalise = "";

// Le nom est affiché comme du texte, jamais comme du code HTML.
function lireNomEntreprise() {
  const parametres = new URLSearchParams(window.location.search);
  const nomBrut = parametres.get("pour");

  if (!nomBrut) return "";

  return nomBrut
    .replace(/-/g, " ")
    .trim()
    .slice(0, 40)
    .toLocaleLowerCase("fr")
    .replace(/(^|\s)\p{L}/gu, (lettre) => lettre.toLocaleUpperCase("fr"));
}

// Met à jour les textes, les libellés accessibles et la langue de la page.
function appliquerLangue(langue) {
  langueActuelle = langue;
  const textes = traductions[langue];

  document.documentElement.lang = langue;
  document.title = textes.pageTitle;
  document.querySelector('meta[name="description"]').content = textes.pageDescription;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const cle = element.dataset.i18n;
    if (textes[cle]) element.textContent = textes[cle];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const cle = element.dataset.i18nAria;
    if (textes[cle]) element.setAttribute("aria-label", textes[cle]);
  });

  libelleLangue.textContent = langue === "fr" ? "EN" : "FR";
  boutonMenu.setAttribute("aria-label", menuMobile.hidden ? textes.openMenu : textes.closeMenu);
  mettreAJourMessagePersonnalise();
}

// Affiche le message standard ou celui défini pour une entreprise.
function mettreAJourMessagePersonnalise() {
  if (!nomEntreprisePersonnalise) return;

  const cle = nomEntreprisePersonnalise.toLocaleLowerCase("fr").replace(/\s+/g, "-");
  const messageEntreprise = messagesParEntreprise[cle];
  const modele = typeof messageEntreprise === "string"
    ? messageEntreprise
    : messageEntreprise?.[langueActuelle] || traductions[langueActuelle].personalMessage;

  messagePersonnalise.textContent = modele.replaceAll("{nom}", nomEntreprisePersonnalise);
  messagePersonnalise.hidden = false;
}

// Les éléments apparaissent quand ils entrent dans l'écran.
function activerApparitionAuDefilement() {
  const elements = document.querySelectorAll(".reveal");

  if (preferenceMouvementReduit.matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  elements.forEach((element) => {
    const freres = Array.from(element.parentElement.children).filter((enfant) => enfant.classList.contains("reveal"));
    const position = freres.indexOf(element);
    element.style.setProperty("--reveal-delay", `${Math.min(position, 5) * 80}ms`);
  });

  const observateur = new IntersectionObserver((entrees, instance) => {
    entrees.forEach((entree) => {
      if (!entree.isIntersecting) return;
      entree.target.classList.add("is-visible");
      instance.unobserve(entree.target);
    });
  }, { threshold: 0.12 });

  elements.forEach((element) => observateur.observe(element));
  document.documentElement.classList.add("reveal-enabled");
}

// La barre suit la partie de la page déjà parcourue.
function mettreAJourProgression() {
  const hauteurUtile = document.documentElement.scrollHeight - window.innerHeight;
  const progression = hauteurUtile > 0 ? window.scrollY / hauteurUtile : 0;
  barreProgression.style.transform = `scaleX(${Math.min(Math.max(progression, 0), 1)})`;
}

// Le menu mobile se ferme après le choix d'une section.
function initialiserMenu() {
  boutonMenu.addEventListener("click", () => {
    const ouvert = boutonMenu.getAttribute("aria-expanded") === "true";
    boutonMenu.setAttribute("aria-expanded", String(!ouvert));
    boutonMenu.setAttribute("aria-label", ouvert ? traductions[langueActuelle].openMenu : traductions[langueActuelle].closeMenu);
    menuMobile.hidden = ouvert;
  });

  menuMobile.querySelectorAll("a").forEach((lien) => {
    lien.addEventListener("click", () => {
      boutonMenu.setAttribute("aria-expanded", "false");
      boutonMenu.setAttribute("aria-label", traductions[langueActuelle].openMenu);
      menuMobile.hidden = true;
    });
  });
}

// Un léger mouvement du fond suit le pointeur sur ordinateur.
function initialiserFondInteractif() {
  if (preferenceMouvementReduit.matches || !window.matchMedia("(pointer: fine)").matches) return;

  const accueil = document.querySelector(".hero");
  const grille = document.querySelector(".hero-grid");

  accueil.addEventListener("pointermove", (evenement) => {
    const rectangle = accueil.getBoundingClientRect();
    const x = (evenement.clientX - rectangle.left - rectangle.width / 2) * -0.012;
    const y = (evenement.clientY - rectangle.top - rectangle.height / 2) * -0.012;
    grille.style.setProperty("--pointer-x", `${x.toFixed(1)}px`);
    grille.style.setProperty("--pointer-y", `${y.toFixed(1)}px`);
  });
}

nomEntreprisePersonnalise = lireNomEntreprise();
appliquerLangue(langueActuelle);
activerApparitionAuDefilement();
initialiserMenu();
initialiserFondInteractif();
mettreAJourProgression();

boutonLangue.addEventListener("click", () => {
  const nouvelleLangue = langueActuelle === "fr" ? "en" : "fr";
  localStorage.setItem("langue-portfolio", nouvelleLangue);
  appliquerLangue(nouvelleLangue);
});

window.addEventListener("scroll", () => {
  mettreAJourProgression();
}, { passive: true });

window.addEventListener("resize", mettreAJourProgression);