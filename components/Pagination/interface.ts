export interface IPaginationButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isDisabled?: boolean;
}

export interface IPaginationProps {
  innerPage?: number;
  pageChange?: (page: number) => void;
}
