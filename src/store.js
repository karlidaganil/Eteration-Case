import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import sortByEnum from "./enums/sortByEnum";

const useStore = create(
  persist(
    (set, get) => ({
      globalFilter: {
        searchKey: "",
        brands: "",
        models: "",
        sortBy: sortByEnum.NEWEST,
      },
      setGlobalFilter: (globalFilter) =>
        set({ globalFilter: { ...get().globalFilter, ...globalFilter } }),
      productList: [],
      setProductList: (productList) => set({ productList }),
      chartList: [],
      addToChart: (product) => {
        const chartList = [...get().chartList];
        const maxOrder =
          chartList.length === 0
            ? 0
            : Math.max(...chartList.map((p) => p.order));
        chartList.push({ ...product, order: maxOrder + 1 });
        set({ chartList });
      },
      incrementQuantity: (id) => {
        const chartList = [...get().chartList];
        const product = chartList.find((product) => product.id === id);
        chartList.push(product);
        set({ chartList });
      },
      decrementQuantity: (id) => {
        const chartList = [...get().chartList];
        const product = chartList.find((product) => product.id === id);
        // remove product from chartList
        chartList.splice(chartList.indexOf(product), 1);
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
