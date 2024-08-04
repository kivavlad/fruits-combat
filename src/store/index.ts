import {create} from "zustand";
import api, {userId} from "../api/api";
import type {IStore, IData, IResponseData} from "../types/i-store";

export const useCoins = create<IStore>((set) => ({
  coins: 0,
  max_energy: 1000,
  current_energy: 0,

  load: async () => {
    const response = await api.get(`/user_entry_check/${userId}`);
    const data = await response.data as IData;
    set({
      current_energy: data.energy,
      coins: data.coins,
    })
  },

  send: async (data: IData) => {
    const response = await api.post(`/user_exit/${userId}?coins=${data.coins}&energy=${data.energy}`);
    const newData = await response.data as IResponseData;
    set({
      current_energy: newData.energy_amount,
      coins: newData.coins_amount,
    })
  }

}))