import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      productList: [],
      setProductList: (productList) => set({ productList }),
      chartList: [],
      addToChart: (product) => {
        const chartList = [...get().chartList];
        chartList.push(product);
        set({ chartList });
      },
      removeFromChart: (id) => {
        const chartList = [...get().chartList];
        const index = chartList.findIndex((product) => product.id === id);
        chartList.splice(index, 1);
        set({ chartList });
      },
      clearChart: () => set({ chartList: [] }),
      getTotaPriceOfChart: () => {
        const chartList = [...get().chartList];
        return chartList.reduce(
          (acc, product) => acc + parseFloat(product.price),
          0
        );
      },
    }),
    {
      name: "anil-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useStore;
