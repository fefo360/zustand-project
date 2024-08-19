import create from "zustand";

interface StoreState {
  count: number;
  increase: () => void;
  decrease: () => void;

  inputValue: string;
  itemList: string[];
  setInputValue: (value: string) => void;
  addItem: (item: string) => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),

  inputValue: "",
  itemList: [],
  setInputValue: (value: string) => set({ inputValue: value }), 

  addItem: (item: string) => set((state) => ({ itemList: [...state.itemList, item]}))

}));

export default useStore;
