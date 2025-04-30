export interface Card {
    title: string;
    text: string;
  }
  
  export interface Stat {
    percent: number;
    text: string;
  }
  
  export interface Section {
    title: string;
    text: string;
    cards: Card[];
    stats: Stat[];
  }
  
  export interface CasesData {
    individuals: Section[];
    business: Section[];
  }
  