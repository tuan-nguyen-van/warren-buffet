declare namespace App {
  export interface Tenets {
    business_tenet: Tenet[];
    financial_tenet: Tenet[];
    management_tenet: Tenet[];
    market_tenet: Tenet[];
  }

  export interface Tenet {
    id: number;
    description: string;
    type: string;
  }

  export type TenetTypes = {
    business_tenet: string;
    management_tenet: string;
    financial_tenet: string;
    market_tenet: string;
  };
}
