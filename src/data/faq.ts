import type { FAQItem } from "@/types/faq";

export const homeFAQ: FAQItem[] = [
  {
    question: "Was kostet eine externe Fachkraft für Arbeitssicherheit in Köln?",
    answer:
      "Die Kosten hängen von Betriebsgröße, Gefährdungsbeurteilung und gewünschtem Leistungsumfang ab. Wir erstellen Ihnen nach einem unverbindlichen Erstgespräch ein transparentes Angebot – ohne versteckte Kosten.",
  },
  {
    question: "Für welche Unternehmen ist eine externe SiFa-Betreuung sinnvoll?",
    answer:
      "Besonders kleine und mittlere Unternehmen ohne eigene Fachkraft für Arbeitssicherheit profitieren von einer externen Betreuung. Auch Betriebe, die ihre bestehende Betreuung wechseln oder ergänzen möchten, sind bei uns richtig.",
  },
  {
    question: "Wie oft kommt die Fachkraft für Arbeitssicherheit in den Betrieb?",
    answer:
      "Die Häufigkeit der Betreuung richtet sich nach den gesetzlichen Vorgaben (u. a. DGUV Vorschrift 2) und Ihrer betrieblichen Situation. Wir passen Termine und Umfang an Ihre Branche und Größe an.",
  },
  {
    question: "Übernehmen Sie auch Gefährdungsbeurteilungen und Unterweisungen?",
    answer:
      "Ja. Unser Leistungsspektrum umfasst die Erstellung und Aktualisierung von Gefährdungsbeurteilungen, Sicherheitsunterweisungen, Betriebsanweisungen, Begehungen sowie die vollständige Dokumentation für Behörden und Berufsgenossenschaften.",
  },
  {
    question: "Betreuen Sie nur Unternehmen in Köln?",
    answer:
      "Unser Schwerpunkt liegt in Köln und dem Umland. Gerne betreuen wir auch Betriebe in den angrenzenden Kreisen und Städten – sprechen Sie uns an.",
  },
];

export const faqPageFAQ: FAQItem[] = [
  ...homeFAQ,
  {
    question: "Was ist eine Gefährdungsbeurteilung und warum brauche ich sie?",
    answer:
      "Die Gefährdungsbeurteilung ist die systematische Ermittlung und Bewertung von Gefährdungen am Arbeitsplatz. Sie ist gesetzlich gefordert (ArbSchG) und bildet die Grundlage für alle weiteren Arbeitsschutzmaßnahmen. Ohne sie können Sie Ihre Pflichten nicht nachweisen.",
  },
  {
    question: "Wie lange dauert es, bis die Betreuung startet?",
    answer:
      "Nach Ihrer Kontaktaufnahme vereinbaren wir zeitnah ein erstes Gespräch. Sobald der Vertrag geschlossen ist, können wir die Betreuung in der Regel innerhalb weniger Wochen aufnehmen.",
  },
  {
    question: "Kann ich die Betreuung jederzeit kündigen?",
    answer:
      "Die Vertragslaufzeit und Kündigungsfristen legen wir gemeinsam im Vertrag fest. Wir legen Wert auf faire Konditionen und transparente Regelungen.",
  },
  {
    question: "Was ist die DGUV Vorschrift 2?",
    answer:
      "Die DGUV Vorschrift 2 regelt die Bestellung von Fachkräften für Arbeitssicherheit und Betriebsärzten. Sie legt u. a. fest, wie viele Betreuungstage pro Jahr je nach Gefährdungsgruppe und Beschäftigtenzahl erforderlich sind. Wir orientieren uns an diesen Vorgaben und passen die Betreuung entsprechend an.",
  },
  {
    question: "Brauche ich auch einen Betriebsarzt?",
    answer:
      "Ja. Neben der Fachkraft für Arbeitssicherheit (SiFa) muss jeder Arbeitgeber einen Betriebsarzt bestellen. Viele Betriebe beauftragen dafür einen externen arbeitsmedizinischen Dienst. Wir arbeiten mit Betrieben zusammen, die bereits einen Betriebsarzt haben, und koordinieren uns bei Bedarf mit diesem.",
  },
  {
    question: "Was passiert bei einer Prüfung durch die Berufsgenossenschaft?",
    answer:
      "Bei einer Prüfung werden u. a. Gefährdungsbeurteilung, Unterweisungsnachweise, Betriebsanweisungen und die Bestellung von SiFa und Betriebsarzt verlangt. Mit einer vollständigen und aktuellen Dokumentation sind Sie gut vorbereitet. Wir unterstützen Sie dabei, diese Nachweise ordnungsgemäß zu führen.",
  },
  {
    question: "Betreuen Sie auch Betriebe außerhalb von Köln?",
    answer:
      "Unser Schwerpunkt liegt in Köln und dem näheren Umland (z. B. Rhein-Erft-Kreis, Rhein-Sieg-Kreis, Leverkusen, Bonn). Für Betriebe in etwas größerer Entfernung prüfen wir im Einzelfall, ob eine Betreuung möglich ist – sprechen Sie uns an.",
  },
  {
    question: "Was ist der Unterschied zwischen SiFa und SiGeKo?",
    answer:
      "Die SiFa (Fachkraft für Arbeitssicherheit) berät den Arbeitgeber in allen Fragen des Arbeitsschutzes im Betrieb. Die SiGeKo (Sicherheits- und Gesundheitsschutzkoordinator) ist speziell für den Arbeitsschutz auf Baustellen tätig (z. B. nach RAB 30). Beide Funktionen können von qualifizierten Personen übernommen werden – teils von derselben Person, teils getrennt.",
  },
];
