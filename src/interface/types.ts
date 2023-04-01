export interface asset {
  label: string;
  value: number;
}

export interface totalAssets {
  data: asset[];
  date: Date;
}

export interface allAssetsData {
  totalAssets: totalAssets[];
}
