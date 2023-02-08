// expenseAdd
export interface Gettinglist {
  name: string | undefined;
  cost: number | undefined;
  id: number;
}

// context
export interface JsxElement {
  children: JSX.Element | JSX.Element[];
}

interface list {
  name: string;
  cost: number;
  id: number;
}

export interface ExpenseCtx {
  list: Array<list>;
  showModal: string;
  id: number;
  setList: (a: Array<list>) => void;
  setShowModal: (a: string) => void;
  setId: (a: number) => void;
}
