export interface HeaderType {
  title: string;
  version?: number;
}
export interface Rating {
  id: number;
  rating: number;
  text: string;
  deleteItem(id: number): never;
}