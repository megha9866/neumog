export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamSection {
  headline: string;
  subheading: string;
  roles: Array<{
    label: string;
    description: string;
  }>;
}

