export type TCategoruBadge = {
  label: string;
  background_color: "turquoise" | "navy" | "green" | "orange" | "blue";
  text_color: "black" | "white";
  border_radius: number;
};

export type CategoryBadges = Array<TCategoruBadge>;

export const CategoryBadges: CategoryBadges = [
  {
    label: "Yeni",
    background_color: "turquoise",
    text_color: "white",
    border_radius: 15,
  },
  {
    label: "Özel Sayı",
    background_color: "navy",
    text_color: "white",
    border_radius: 15,
  },
  {
    label: "Şehir",
    background_color: "orange",
    text_color: "white",
    border_radius: 8,
  },
];
