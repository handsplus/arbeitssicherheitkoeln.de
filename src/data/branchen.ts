export type Branch = {
  id: string;
  title: string;
  short: string;
  metaDescription: string;
  content: string[];
  highlights: string[];
};

export const branches: Branch[] = [
  {
    id: "handwerk",
    title: "Arbeitssicherheit für Handwerksbetriebe in Köln",
    short: "Schreinerei, Metallbau, Elektro, KFZ, Sanitär, Maler und mehr",
    metaDescription:
      "Arbeitsschutz und SiFa-Betreuung für Handwerk in Köln: Gefährdungsbeurteilung, Unterweisungen, Betriebsanweisungen. Für Schreinerei, Metallbau, Elektro und mehr.",
    highlights: [
      "Maschinen und Betriebsanweisungen",
      "Gefahrstoffe (Lacke, Kleber, Staub)",
      "Lärm und körperliche Belastung",
      "Wechselnde Arbeitsorte und Baustellen",
    ],
    content: [
      "Handwerksbetriebe in Köln und Umgebung haben besondere Anforderungen an den Arbeitsschutz: Maschinen, Gefahrstoffe, Lärm, körperliche Belastung und oft wechselnde Arbeitsorte. Die Gefährdungsbeurteilung muss diese Bereiche abdecken, Unterweisungen müssen branchenspezifisch und verständlich sein.",
      "Wir betreuen Handwerksbetriebe mit der passenden Gefährdungsgruppe nach DGUV Vorschrift 2, unterstützen bei Betriebsanweisungen für Maschinen und Gefahrstoffe und führen Unterweisungen und Begehungen vor Ort durch. So erfüllen Sie Ihre Pflichten und behalten den Fokus auf Ihr Handwerk.",
      "Ob Schreinerei, Metallbau, Elektro, KFZ, Sanitär, Maler oder anderes Gewerbe: Wir kennen die typischen Gefährdungen und die Anforderungen Ihrer Berufsgenossenschaft. Die Betreuung ist auf Ihre Betriebsgröße und Ihre Arbeitsabläufe zugeschnitten.",
    ],
  },
  {
    id: "buero-dienstleistung",
    title: "Arbeitssicherheit für Büro & Dienstleistung in Köln",
    short: "Büros, Beratung, Agenturen, Verwaltung",
    metaDescription:
      "Arbeitsschutz für Bürobetriebe in Köln: Gefährdungsbeurteilung, Bildschirmarbeit, Unterweisung. Günstige Betreuung für Büros und Dienstleister.",
    highlights: [
      "Bildschirmarbeitsplätze und Ergonomie",
      "Fluchtwege und Brandschutz",
      "Psychische Belastung",
      "Unterweisung und Dokumentation",
    ],
    content: [
      "Auch in reinen Büro- und Dienstleistungsbetrieben gilt das Arbeitsschutzgesetz. Themen sind hier vor allem Bildschirmarbeitsplätze (Bildschirmarbeitsverordnung), Ergonomie, Fluchtwege, Brandschutz und psychische Belastung. Die Gefährdungsbeurteilung ist oft weniger umfangreich als in der Produktion, aber keineswegs optional.",
      "Wir unterstützen Bürobetriebe in Köln bei der Gefährdungsbeurteilung, bei der Unterweisung der Mitarbeiter und bei der Dokumentation. Die Betreuungstage sind in der Regel gering – die Kosten bleiben überschaubar.",
      "Viele Agenturen, Beratungsunternehmen und Verwaltungen in Köln nutzen eine externe Fachkraft für Arbeitssicherheit, um die gesetzlichen Pflichten ohne eigenen Aufwand zu erfüllen. Wir liefern die passende Betreuung und klare Absprachen.",
    ],
  },
  {
    id: "produktion-industrie",
    title: "Arbeitssicherheit für Produktion & Industrie in Köln",
    short: "Fertigung, Lager, Maschinen, Gefahrstoffe",
    metaDescription:
      "Arbeitsschutz für produzierende Betriebe in Köln: Gefährdungsbeurteilung, SiFa-Betreuung, Unterweisungen. Für Fertigung und Industrie.",
    highlights: [
      "Maschinen und Anlagen",
      "Gefahrstoffe und Lagerung",
      "Lärm, Heben und Tragen",
      "Schichtarbeit und Dokumentation",
    ],
    content: [
      "In produzierenden Betrieben kommen viele Gefährdungen zusammen: Maschinen, Anlagen, Gefahrstoffe, Lärm, Heben und Tragen, oft Schichtarbeit. Die Gefährdungsbeurteilung muss systematisch alle Arbeitsbereiche und Tätigkeiten erfassen; die Betreuung durch SiFa und Betriebsarzt ist in der Regel intensiver als im Büro.",
      "Wir begleiten Produktionsbetriebe in Köln und der Region mit Gefährdungsbeurteilungen, Unterweisungen, Begehungen und der erforderlichen Dokumentation – abgestimmt auf Ihre Prozesse und die Vorgaben der Berufsgenossenschaft.",
      "Die Gefährdungsgruppe und damit die Anzahl der Betreuungstage richten sich nach Ihrer Branche und Beschäftigtenzahl. Wir erstellen Ihnen ein transparentes Angebot und sorgen dafür, dass Sie für Prüfungen und Audits bestens vorbereitet sind.",
    ],
  },
  {
    id: "handel-lager",
    title: "Arbeitssicherheit für Handel & Lager in Köln",
    short: "Einzelhandel, Großhandel, Logistik, Lager",
    metaDescription:
      "Arbeitsschutz für Handel und Logistik in Köln: Stapler, Fluchtwege, manuelle Lasten. SiFa-Betreuung für Handels- und Lagerbetriebe.",
    highlights: [
      "Fluchtwege und Brandschutz",
      "Stapler und Fördermittel",
      "Manuelle Handhabung von Lasten",
      "Bildschirmarbeit (Kasse, Büro)",
    ],
    content: [
      "Im Handel und in Lagern stehen Themen wie Fluchtwege, Brandschutz, Stapler und Fördermittel, manuelle Handhabung von Lasten und oft Bildschirmarbeit im Vordergrund. Die Gefährdungsbeurteilung und Unterweisung müssen diese Bereiche abdecken.",
      "Wir unterstützen Handels- und Logistikbetriebe in Köln bei der rechtssicheren Umsetzung des Arbeitsschutzes und der Dokumentation für Behörden und Audits. Die Betreuung wird an Ihre Betriebsgröße und Gefährdungslage angepasst.",
      "Ob Einzelhandel, Großhandel oder Logistik: Wir helfen Ihnen, alle Pflichten zu erfüllen und Ihre Mitarbeiter sicher zu unterweisen.",
    ],
  },
  {
    id: "gesundheit-soziales",
    title: "Arbeitssicherheit für Gesundheit & Soziale Dienste in Köln",
    short: "Praxen, Pflege, soziale Einrichtungen",
    metaDescription:
      "Arbeitsschutz für Gesundheitswesen und soziale Einrichtungen in Köln: Gefährdungsbeurteilung, Hygiene, psychische Belastung.",
    highlights: [
      "Biologische Gefährdungen und Hygiene",
      "Heben und Tragen von Menschen",
      "Psychische Belastung",
      "Arbeitszeiten und Dokumentation",
    ],
    content: [
      "In Gesundheits- und Sozialberufen spielen biologische Gefährdungen, Hygiene, Heben und Tragen von Menschen, psychische Belastung und oft besondere Arbeitszeiten eine Rolle. Die Gefährdungsbeurteilung und Betreuung müssen diese Besonderheiten berücksichtigen.",
      "Wir beraten Einrichtungen in Köln und Umgebung bei der Gefährdungsbeurteilung, Unterweisung und Dokumentation im Einklang mit den Anforderungen des Arbeitsschutzes und der jeweiligen Träger. Die Betreuung ist auf Pflege, Praxen und soziale Dienste zugeschnitten.",
      "Auch wenn spezielle Vorschriften (z. B. Biostoffverordnung) gelten: Eine erfahrene Fachkraft für Arbeitssicherheit unterstützt Sie dabei, alle Anforderungen zu bündeln und rechtssicher umzusetzen.",
    ],
  },
];

export function getBranchById(id: string): Branch | undefined {
  return branches.find((b) => b.id === id);
}

export function getAllBranchIds(): string[] {
  return branches.map((b) => b.id);
}
