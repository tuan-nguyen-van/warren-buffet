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
    order: number;
  }

  export type TenetTypes = {
    business_tenet: string;
    management_tenet: string;
    financial_tenet: string;
    market_tenet: string;
  };
  export interface StockHasTenet {
    id: number;
    note: string | null;
    stock_id: number;
    tenet_id: number;
    value: 1 | 0;
    updated_at: string;
    created_at: string;
  }

  export interface FinancialMetrics {
    EPS: number;
    ROEA: string;
    created_at: string;
    id: number;
    money_dividend: number;
    profit: string;
    stock_dividend: string;
    stock_id: number;
    updated_at: string;
    year: string;
  }

  namespace GrowthRate {
    export interface TableData {
      id: number;
      stock_id: number;
      year: number;
      EPS: number;
      money_dividend: number;
      stock_dividend: number;
      profit: number;
      ROEA: number;
      created_at?: string;
      updated_at?: string;
    }

    export interface ChosenData {
      chosen: number;
      created_at: string;
      id: number;
      stock_id: number;
      updated_at: string;
      value: string;
      year_from: string;
      year_to: string;
    }
  }

  namespace RetainedEarning {
    export interface ChosenYears {
      created_at: string;
      id: number;
      stock_id: number;
      updated_at: string;
      value: number;
      year_from: string;
      year_to: string;
    }
  }

  namespace AssumedOption {
    export interface GrowthData {
      id: number;
      next_10_to_20_years: string;
      next_10_years: string;
      option: number;
      stock_id: number;
      updated_at: string;
      created_at: string;
    }
  }

  namespace AddStock.Calculation {
    export interface DataValue {
      [index: string]:
        | {
            discounted_value?: number;
            future_value?: number;
            intrinsic_value: number;
            growth_rate?: number;
          }
        | number
        | string;
      total_pe: number;
      total_remained_years: { intrinsic_value: number };
      intrinsic_price: number;
      option: number;
      next_10_years: string;
      next_10_to_20_years: string;
      chosen_eps: number;
    }
  }

  namespace Quotes {
    export interface Data {
      id: number;
      author: string;
      description: string;
      created_at: string;
      updated_at: string;
    }
  }

  namespace intrinsicValueCalculation {
    export interface intrinsicValueCalculation {
      id: number;
      calculation_step: string;
      discount_rate: string;
      stock_id: number;
      updated_at: string;
      created_at: string;
    }

    export type CalculationStep = AddStock.Calculation.DataValue;
  }

  namespace Stocks {
    export interface StockData {
      id: number;
      company_name: string;
      intrinsic_value_caculations?: intrinsicValueCalculation.intrinsicValueCalculation;
      growth_assumptions?: AssumedOption.GrowthData[];
      stock_has_tenets?: App.StockHasTenet[];
      financial_metrics?: App.FinancialMetrics[];
      ticker_symbol: string;
      website: string;
      current_market_price: number;
      current_year_stock_dividend: string;
      stock_note: string;
      status: 'Unfinished' | 'Followed' | 'Unfollowed';
      vietstock_crawl_link: string;
      updated_at: string;
      created_at: string;
    }

    export interface OrderStock extends StockData {
      marginOfSafetyOpt1?: number;
    }

    export interface SearchStock {
      id: number;
      title: string;
    }
  }

  namespace User {
    export interface User {
      id: number;
      email: string;
      email_verified_at: string;
      name: string;
      role: string;
      created_at: string;
      updated_at: string;
    }
  }

  namespace AddStock {
    export interface CompanyInfoErrors {
      company_name?: string[];
      ticker_symbol?: string[];
      vietstock_crawl_link?: string[];
      website?: string[];
    }
  }
}
