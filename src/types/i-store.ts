export interface IData {
  coins: number;
  energy: number;
}

export interface IResponseData {
  coins_amount: number;
  energy_amount: number;
}

export interface IStore {
  coins: number;
  max_energy: number;
  current_energy: number;
  load: () => void;
  send: (data: IData) => void;
}