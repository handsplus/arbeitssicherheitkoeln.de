export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  readingMinutes: number;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "gefaehrdungsbeurteilung-pflicht-unternehmen",
    title: "Gefährdungsbeurteilung: Pflicht für jedes Unternehmen in Köln",
    metaDescription:
      "Warum die Gefährdungsbeurteilung im Arbeitsschutz Pflicht ist, was sie umfasst und wie Unternehmen in Köln rechtssicher vorgehen. Praxis-Tipps für die Umsetzung.",
    date: "2024-03-01",
    readingMinutes: 6,
    sections: [
      {
        paragraphs: [
          "Jeder Arbeitgeber in Deutschland ist nach dem Arbeitsschutzgesetz (ArbSchG) verpflichtet, eine Gefährdungsbeurteilung durchzuführen. Das gilt unabhängig von der Betriebsgröße – auch kleine Unternehmen und Ein-Personen-Betriebe mit Beschäftigten müssen diese Pflicht erfüllen. In Köln und Umgebung unterstützen wir Sie dabei, die Gefährdungsbeurteilung fachgerecht zu erstellen und aktuell zu halten.",
        ],
      },
      {
        heading: "Was ist die Gefährdungsbeurteilung?",
        paragraphs: [
          "Die Gefährdungsbeurteilung ist die systematische Ermittlung und Bewertung aller relevanten Gefährdungen, denen Beschäftigte bei der Arbeit ausgesetzt sein können. Dazu zählen nicht nur Unfallgefahren, sondern auch physische Belastungen, psychische Belastungen, Gefahrstoffe, Lärm, Bildschirmarbeit und organisatorische Faktoren. Ziel ist es, daraus konkrete Maßnahmen abzuleiten und deren Wirksamkeit zu überprüfen.",
          "Ohne eine dokumentierte Gefährdungsbeurteilung können Sie Ihre gesetzlichen Pflichten gegenüber Aufsichtsbehörden und Berufsgenossenschaften nicht nachweisen. Bei Prüfungen oder nach einem Arbeitsunfall kann das zu Beanstandungen und im schlimmsten Fall zu Bußgeldern führen.",
        ],
      },
      {
        heading: "Ablauf und Inhalte in der Praxis",
        paragraphs: [
          "In der Praxis gliedert sich die Gefährdungsbeurteilung typischerweise in folgende Schritte: Arbeitsbereiche und Tätigkeiten erfassen, Gefährdungen ermitteln, Risiken bewerten, Maßnahmen festlegen und umsetzen, Wirksamkeit prüfen und die Beurteilung fortzuschreiben – insbesondere bei neuen Arbeitsmitteln, Verfahren oder Arbeitsabläufen.",
          "Für Unternehmen in Köln und der Region bieten wir die Erstellung und Aktualisierung der Gefährdungsbeurteilung als Teil unserer Arbeitsschutzbetreuung an. So bleiben Sie rechtssicher und haben mehr Zeit für Ihr Kerngeschäft.",
        ],
      },
      {
        heading: "Fazit",
        paragraphs: [
          "Die Gefährdungsbeurteilung ist kein einmaliges Projekt, sondern eine fortlaufende Aufgabe. Mit fachkundiger Unterstützung durch eine externe Fachkraft für Arbeitssicherheit in Köln erfüllen Sie Ihre Pflichten zuverlässig und schaffen eine solide Basis für sicheres Arbeiten in Ihrem Betrieb.",
        ],
      },
    ],
  },
  {
    slug: "unterweisungspflicht-arbeitsschutz-koeln",
    title: "Unterweisungspflicht im Arbeitsschutz: Was Chefs in Köln wissen müssen",
    metaDescription:
      "Unterweisungspflicht nach ArbSchG: Wer muss unterweisen, wie oft und was muss dokumentiert werden? Tipps für Arbeitgeber und Betriebe in Köln.",
    date: "2024-02-15",
    readingMinutes: 5,
    sections: [
      {
        paragraphs: [
          "Als Arbeitgeber sind Sie verpflichtet, Ihre Beschäftigten über Sicherheit und Gesundheit bei der Arbeit zu unterweisen. Diese Unterweisungspflicht ergibt sich aus dem Arbeitsschutzgesetz und zahlreichen weiteren Vorschriften. Wer in Köln und Umgebung Mitarbeiter beschäftigt, muss wissen: Wann, wie oft und worüber unterweisen? Und wie weise ich die Unterweisung nach?",
        ],
      },
      {
        heading: "Wann und wie oft unterweisen?",
        paragraphs: [
          "Unterweisen müssen Sie mindestens einmal jährlich. Zusätzlich ist eine Unterweisung erforderlich bei der Einstellung, bei Versetzung oder Wechsel des Arbeitsbereichs, bei neuen Arbeitsmitteln oder Verfahren und wenn sich die Gefährdungssituation ändert. Bei besonders gefährlichen Tätigkeiten können kürzere Intervalle oder arbeitsbegleitende Unterweisungen nötig sein.",
          "Die Unterweisung muss in einer für die Beschäftigten verständlichen Form und Sprache erfolgen. Sie kann durch eine Fachkraft für Arbeitssicherheit vorbereitet und durchgeführt werden – viele Betriebe in Köln nutzen dafür eine externe SiFa, die die Unterweisungen vor Ort oder in Abstimmung mit dem Arbeitgeber übernimmt.",
        ],
      },
      {
        heading: "Themen und Dokumentation",
        paragraphs: [
          "Inhalt der Unterweisung sind die mit dem Arbeitsplatz verbundenen Gefährdungen und die zu beachtenden Schutzmaßnahmen. Dazu können z. B. Betriebsanweisungen, Fluchtwege, Erste Hilfe, Umgang mit Gefahrstoffen oder arbeitsplatzspezifische Risiken gehören. Die Teilnahme der Beschäftigten ist zu dokumentieren – mit Datum, Thema und Namen der Unterwiesenen. Diese Nachweise sollten Sie aufbewahren; sie werden bei Prüfungen und im Schadensfall verlangt.",
        ],
      },
      {
        heading: "Unterstützung aus Köln",
        paragraphs: [
          "Wir führen für Unternehmen in Köln und Umgebung Sicherheitsunterweisungen durch, erstellen Unterweisungsunterlagen und dokumentieren die Durchführung. So erfüllen Sie Ihre Unterweisungspflicht rechtssicher und entlasten sich von der fachlichen Vorbereitung.",
        ],
      },
    ],
  },
  {
    slug: "externe-sifa-kosten-vorteile",
    title: "Externe Fachkraft für Arbeitssicherheit: Kosten und Vorteile für KMU",
    metaDescription:
      "Externe SiFa: Was kostet die Betreuung? Welche Vorteile haben kleine und mittlere Unternehmen? Überblick für Betriebe in Köln und NRW.",
    date: "2024-02-01",
    readingMinutes: 5,
    sections: [
      {
        paragraphs: [
          "Kleine und mittlere Unternehmen müssen nach dem Arbeitssicherheitsgesetz und der DGUV Vorschrift 2 eine Fachkraft für Arbeitssicherheit (SiFa) und einen Betriebsarzt bestellen. Die wenigsten KMU beschäftigen dafür festes Personal – die externe Betreuung durch eine SiFa ist die übliche und oft sinnvollste Lösung. Was kostet das und welche Vorteile bringt sie?",
        ],
      },
      {
        heading: "Was kostet eine externe SiFa?",
        paragraphs: [
          "Die Kosten für eine externe Fachkraft für Arbeitssicherheit hängen von mehreren Faktoren ab: der Gefährdungsgruppe Ihres Betriebs (nach DGUV Vorschrift 2), der Anzahl der Beschäftigten, dem gewünschten Leistungsumfang (z. B. nur Grundbetreuung oder zusätzlich Gefährdungsbeurteilungen, Unterweisungen, Begehungen) und der regionalen Lage.",
          "Es gibt keine einheitlichen Preise – Anbieter in Köln und NRW rechnen oft mit Pauschalen pro Jahr oder mit Stundensätzen. Ein transparentes Angebot nach einem unverbindlichen Gespräch gibt Ihnen Planungssicherheit. Versteckte Kosten sollten nicht anfallen.",
        ],
      },
      {
        heading: "Vorteile der externen Betreuung",
        paragraphs: [
          "Sie erhalten fachkundige Beratung ohne eigene Personalstelle, flexible Terminabstimmung und einen festen Ansprechpartner, der Ihre betrieblichen Gegebenheiten kennt. Die SiFa übernimmt die fachliche Mitwirkung bei Gefährdungsbeurteilung, Unterweisung und Dokumentation – Sie bleiben als Arbeitgeber in der Verantwortung, werden aber entlastet und rechtssicher begleitet.",
          "Für Unternehmen in Köln bedeutet die Zusammenarbeit mit einer lokalen oder regionalen SiFa zudem kurze Wege für Vor-Ort-Termine, Begehungen und Unterweisungen.",
        ],
      },
      {
        heading: "Kurz zusammengefasst",
        paragraphs: [
          "Die externe SiFa-Betreuung ist für die meisten KMU die passende Lösung. Die Kosten sind planbar und stehen in einem vernünftigen Verhältnis zur entfallenden Eigenleistung und zur erreichten Rechtssicherheit. Gerne erstellen wir Ihnen ein unverbindliches Angebot für Ihre Betriebssituation in Köln oder der Region.",
        ],
      },
    ],
  },
  {
    slug: "arbeitsschutz-handwerksbetrieb-koeln",
    title: "Arbeitsschutz im Handwerksbetrieb: Anforderungen in Köln",
    metaDescription:
      "Arbeitsschutz im Handwerk: Besondere Anforderungen für Handwerksbetriebe in Köln. SiFa, Gefährdungsbeurteilung, Unterweisung und praktische Tipps.",
    date: "2024-01-20",
    readingMinutes: 6,
    sections: [
      {
        paragraphs: [
          "Handwerksbetriebe in Köln und Umgebung sind wie alle Arbeitgeber an das Arbeitsschutzgesetz und die Unfallverhütungsvorschriften der Berufsgenossenschaften gebunden. Durch die typischen Tätigkeiten – von der Werkstatt über die Baustelle bis zum Kundeneinsatz – ergeben sich besondere Gefährdungen und damit spezifische Anforderungen an Gefährdungsbeurteilung, Unterweisung und Betreuung.",
        ],
      },
      {
        heading: "Typische Gefährdungen im Handwerk",
        paragraphs: [
          "Im Handwerk kommen häufig mechanische Gefährdungen (Maschinen, scharfe Kanten, Stolpern), Gefahrstoffe (Lacke, Kleber, Staub), Lärm, elektrische Gefährdungen, körperliche Belastung und bei Außeneinsätzen auch Verkehr und Witterung vor. Die Gefährdungsbeurteilung muss diese Bereiche abdecken und daraus konkrete Maßnahmen ableiten. Betriebsanweisungen für Maschinen und Gefahrstoffe müssen vorliegen und den Beschäftigten zugänglich sein.",
        ],
      },
      {
        heading: "SiFa und Betriebsarzt",
        paragraphs: [
          "Auch Handwerksbetriebe müssen eine Fachkraft für Arbeitssicherheit und einen Betriebsarzt bestellen. In der Regel geschieht das extern: Eine SiFa übernimmt die Betreuung mehrerer Betriebe, der Betriebsarzt wird ebenfalls extern beauftragt. Die Betreuungshäufigkeit richtet sich nach der Gefährdungsgruppe – viele Handwerksbetriebe fallen in eine höhere Gruppe und haben daher mehr Betreuungstage pro Jahr.",
        ],
      },
      {
        heading: "Praktische Unterstützung vor Ort",
        paragraphs: [
          "Wir betreuen Handwerksbetriebe in Köln und der Region mit Gefährdungsbeurteilungen, Unterweisungen, Begehungen und der erforderlichen Dokumentation. So erfüllen Sie Ihre Pflichten und können sich auf Ihr Handwerk konzentrieren.",
        ],
      },
    ],
  },
  {
    slug: "arbeitssicherheit-buero-betriebe-koeln",
    title: "Arbeitssicherheit im Büro: Auch für Bürobetriebe in Köln Pflicht",
    metaDescription:
      "Arbeitsschutz im Büro: Gefährdungsbeurteilung, Bildschirmarbeit, Unterweisung. Was Bürobetriebe in Köln beachten müssen.",
    date: "2024-01-10",
    readingMinutes: 5,
    sections: [
      {
        paragraphs: [
          "„Im Büro passiert doch nichts“ – dieser Gedanke ist weit verbreitet, aber rechtlich irrelevant. Auch reine Bürobetriebe in Köln unterliegen dem Arbeitsschutzgesetz und müssen eine Gefährdungsbeurteilung durchführen, Unterweisungen anbieten und die erforderlichen Betreuungspflichten (SiFa, Betriebsarzt) erfüllen. Die Gefährdungen sind anders als in der Produktion, aber sie existieren.",
        ],
      },
      {
        heading: "Worum geht es im Büro?",
        paragraphs: [
          "Typische Themen sind Bildschirmarbeitsplätze (Bildschirmarbeitsverordnung, Arbeitsstättenverordnung), ergonomische Gestaltung von Tisch und Stuhl, Beleuchtung, Lüftung, Fluchtwege und Brandschutz, psychische Belastung, Evakuierung und Erste Hilfe. Auch wenn keine Maschinen oder Gefahrstoffe im Spiel sind: Die Gefährdungsbeurteilung muss diese Punkte erfassen und bewerten. Daraus folgen oft einfache Maßnahmen wie richtige Einstellung der Möbel, Pausengestaltung oder Unterweisung zu Fluchtwegen.",
        ],
      },
      {
        heading: "Betreuung und Dokumentation",
        paragraphs: [
          "Die Betreuung durch eine externe Fachkraft für Arbeitssicherheit ist auch für Büros sinnvoll: Sie hilft bei der Gefährdungsbeurteilung, bei der Unterweisung der Mitarbeiter und bei der Dokumentation für Prüfungen. Die Betreuungstage sind bei Bürotätigkeiten in der Regel geringer als in produzierenden Betrieben – die Kosten bleiben überschaubar.",
        ],
      },
      {
        heading: "Fazit",
        paragraphs: [
          "Arbeitssicherheit im Büro ist Pflicht und mit der richtigen Unterstützung gut umsetzbar. Wir beraten Bürobetriebe in Köln und Umgebung und sorgen dafür, dass auch „ruhige“ Arbeitsplätze rechtssicher betreut sind.",
        ],
      },
    ],
  },
  {
    slug: "betriebsanweisungen-pflicht-inhalt-koeln",
    title: "Betriebsanweisungen: Pflicht, Inhalt und Aktualisierung in Köln",
    metaDescription:
      "Betriebsanweisungen im Arbeitsschutz: Wann sind sie Pflicht? Was muss drinstehen? Tipps für Betriebe in Köln und Umgebung.",
    date: "2024-01-05",
    readingMinutes: 5,
    sections: [
      {
        paragraphs: [
          "Betriebsanweisungen sind für gefährliche Tätigkeiten und den Umgang mit Arbeitsmitteln und Gefahrstoffen gesetzlich gefordert. Sie müssen für die Beschäftigten verständlich und zugänglich sein und regelmäßig aktualisiert werden. Für Unternehmen in Köln unterstützen wir die Erstellung und Pflege von Betriebsanweisungen im Rahmen der Arbeitsschutzbetreuung.",
        ],
      },
      {
        heading: "Wann brauche ich eine Betriebsanweisung?",
        paragraphs: [
          "Betriebsanweisungen sind u. a. erforderlich für Gefahrstoffe (nach Gefahrstoffverordnung), für Arbeitsmittel mit besonderen Gefahren (z. B. bestimmte Maschinen) und für Tätigkeiten mit erhöhtem Risiko. Die Gefährdungsbeurteilung zeigt, wo welche Betriebsanweisungen nötig sind. Fehlende oder veraltete Betriebsanweisungen können bei Prüfungen beanstandet werden.",
        ],
      },
      {
        heading: "Inhalt und Aufbau",
        paragraphs: [
          "Eine Betriebsanweisung enthält typischerweise Bezeichnung des Arbeitsmittels bzw. Stoffs, Gefahren, Schutzmaßnahmen, Verhalten bei Störungen und im Notfall sowie Hinweise zur Ersten Hilfe. Sie soll kurz, klar und für die Nutzer verständlich sein. Wir erstellen Betriebsanweisungen nach anerkannten Standards und passen sie an Ihre Arbeitsabläufe in Köln an.",
        ],
      },
      {
        heading: "Aktualisierung und Zugänglichkeit",
        paragraphs: [
          "Betriebsanweisungen müssen bei Änderungen der Gefährdung oder der Vorschriften aktualisiert werden. Sie müssen den Beschäftigten am Arbeitsplatz oder in anderer geeigneter Form zugänglich sein – z. B. in Papierform oder digital. Wir unterstützen Sie bei der Pflege und der Dokumentation.",
        ],
      },
    ],
  },
  {
    slug: "sigeko-baustelle-koeln-rab-30",
    title: "SiGeKo auf der Baustelle: Sicherheitskoordination in Köln (RAB 30)",
    metaDescription:
      "Sicherheits- und Gesundheitsschutzkoordination auf Baustellen in Köln: RAB 30, Pflichten und Ablauf. SiGeKo-Leistungen für Bauherren und Planer.",
    date: "2023-12-15",
    readingMinutes: 6,
    sections: [
      {
        paragraphs: [
          "Auf Baustellen mit mehreren Arbeitgebern ist eine Sicherheits- und Gesundheitsschutzkoordination (SiGeKo) vorgeschrieben. Die Regel zum Arbeitsschutz auf Baustellen (RAB 30) und die DGUV Vorschrift 2 legen die Anforderungen fest. In Köln und der Region übernehmen wir die SiGeKo-Funktion für Bauherren und Planer – von der Planungs- bis zur Ausführungsphase.",
        ],
      },
      {
        heading: "Wann ist ein SiGeKo nötig?",
        paragraphs: [
          "Die SiGeKo-Pflicht besteht, wenn auf einer Baustelle mehrere Arbeitgeber (Unternehmer) tätig werden. Dann muss der Bauherr oder ein von ihm Beauftragter einen Koordinator für Sicherheit und Gesundheitsschutz bestellen. Der SiGeKo wirkt in der Planungs- und in der Ausführungsphase mit und erstellt u. a. das Sicherheits- und Gesundheitsschutzplan (SiGe-Plan) und die Unterlage für spätere Arbeiten.",
        ],
      },
      {
        heading: "Leistungen in Planung und Ausführung",
        paragraphs: [
          "In der Planungsphase: Ermittlung und Bewertung der Gefährdungen, Koordination der Schutzmaßnahmen, SiGe-Plan, Unterlage für spätere Arbeiten. In der Ausführungsphase: Koordination der Arbeitgeber, Anpassung bei Änderungen, Überprüfung der Umsetzung. So wird die Baustelle in Köln rechtssicher und sicher koordiniert.",
        ],
      },
      {
        heading: "SiGeKo aus Köln",
        paragraphs: [
          "Wir unterstützen Bauherren, Generalunternehmer und Planer in Köln und Umgebung bei der SiGeKo. Sprechen Sie uns an – gerne bereits in der frühen Planung.",
        ],
      },
    ],
  },
  {
    slug: "pruefung-berufsgenossenschaft-vorbereitung",
    title: "Prüfung durch die Berufsgenossenschaft: So sind Sie in Köln vorbereitet",
    metaDescription:
      "Was prüft die Berufsgenossenschaft? Welche Unterlagen brauchen Sie? Tipps zur Vorbereitung für Betriebe in Köln.",
    date: "2023-12-01",
    readingMinutes: 5,
    sections: [
      {
        paragraphs: [
          "Betriebe können von ihrer Berufsgenossenschaft (BG) geprüft werden – ob anlassbezogen oder im Rahmen einer Schwerpunktaktion. Wer seine Unterlagen in Ordnung hält, ist gut vorbereitet und zeigt, dass der Arbeitsschutz ernst genommen wird. Wir unterstützen Unternehmen in Köln dabei, die erforderlichen Nachweise zu führen.",
        ],
      },
      {
        heading: "Was wird typischerweise verlangt?",
        paragraphs: [
          "Die Prüfer verlangen in der Regel: Bestellung von Fachkraft für Arbeitssicherheit und Betriebsarzt, Gefährdungsbeurteilung (aktuell und vollständig), Unterweisungsnachweise, Betriebsanweisungen wo erforderlich, Dokumentation von Begehungen und Maßnahmen. Je nach Branche und Anlass können weitere Unterlagen gefordert werden.",
        ],
      },
      {
        heading: "Vorbereitung im Alltag",
        paragraphs: [
          "Die beste Vorbereitung ist eine laufend gepflegte Dokumentation: Gefährdungsbeurteilung aktuell halten, Unterweisungen durchführen und dokumentieren, Betriebsanweisungen bereithalten. Eine externe SiFa unterstützt Sie dabei und stellt sicher, dass die Unterlagen den Anforderungen entsprechen. So sind Sie in Köln und überall auf der sicheren Seite.",
        ],
      },
      {
        heading: "Fazit",
        paragraphs: [
          "Mit vollständiger und aktueller Dokumentation meistern Sie eine BG-Prüfung souverän. Wir helfen Ihnen, diese Dokumentation aufzubauen und zu halten.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
