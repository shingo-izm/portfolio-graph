import { totalAssets } from "./totalAssets";

export class allAssetsData {
  private _totalAssets: totalAssets[];

  constructor(totalAssets: totalAssets[]) {
    this._totalAssets = totalAssets;
  }

  get totalAssets(): totalAssets[] {
    return this._totalAssets;
  }

  set totalAssets(totalAssets: totalAssets[]) {
    this._totalAssets = totalAssets;
  }
}
