export interface asset {
  label: string;
  value: number;
}

export interface totalAssets {
  data: asset[];
}

export interface allAssetsData {
  totalAssets: totalAssets[];
}
