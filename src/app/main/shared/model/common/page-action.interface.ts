export interface IPageAction {
  name?: string;
  disabled?: boolean;
  caption: string;
  icon?: string;
  class?: string;
  action?: () => void;
}