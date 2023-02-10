export interface list {
  name?: string;
  cost?: number;
  id: number;
}

export interface JsxElement {
  children: JSX.Element | JSX.Element[];
}

export interface ModalAction {
  type: string;
}

export interface ExpenseCtx {
  list: list[];
  showModal: string;
  id: number;
  budget: number;
  deleteModal: boolean;
  searchedList: list[];
  setList: React.Dispatch<React.SetStateAction<list[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
  dispatchFn: React.Dispatch<ModalAction>;
  setSearchedList: React.Dispatch<React.SetStateAction<list[]>>;
}
