export interface IPaginationProps {
  isPageSelection?: boolean;
  isItemsPerPage?: boolean;
  currentPage: number;
  itemsPerPage: number;
  handlePageChange: (currentPage: number) => void;
  handleSelectChange?: (newValue: unknown, actionMeta: unknown) => void;
  leftArrow?: React.ReactNode;
  rightArrow?: React.ReactNode;
  siblingCount?: number;
  totalRecords: number;
  selectedOptions?: { id: number; label: string; value: number };
}
