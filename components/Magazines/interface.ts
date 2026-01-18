import { ReactNode } from "react";

export interface MagazineProps {
  image: string;
  name: string;
  icon: ReactNode;
  date: string;
  badge?: ReactNode;
  bind?: number;
  number?: number;
}
