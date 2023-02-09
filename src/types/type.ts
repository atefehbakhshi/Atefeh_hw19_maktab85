// expenseAdd
export interface Gettinglist {
  name: string | undefined;
  cost: number | undefined;
  id: number;
}

export interface JsxElement {
  children: JSX.Element | JSX.Element[];
}

export interface list {
  name: string;
  cost: number;
  id: number;
}

export interface ModalAction {
  type: string;
}

export interface ExpenseCtx {
  list: Array<list>;
  showModal: string;
  id: number;
  budget: number;
  deleteModal: boolean;
  searchedList: Array<list>;
  setList: (a: Array<list>) => void;
  setShowModal: (a: string) => void;
  setId: (a: number) => void;
  setBudget: (a: number) => void;
  dispatchFn: (a: ModalAction) => void;
  setSearchedList: (a: []) => void;
}
