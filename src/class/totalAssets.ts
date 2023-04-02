import { asset } from "./asset";

export class totalAssets {
  private _assetData: asset[];
  private _registrationDate: Date;
  private _totalAmount: number;

  constructor(assetData: asset[], registrationDate: Date) {
    this._assetData = assetData;
    this._registrationDate = registrationDate;
    this._totalAmount = this.sumAssetValue(assetData);
  }

  get assetData(): asset[] {
    return this._assetData;
  }

  set assetData(assetData: asset[]) {
    this._assetData = assetData;
  }

  get registrationDate(): Date {
    return this._registrationDate;
  }

  set registrationDate(registrationDate: Date) {
    this._registrationDate = registrationDate;
  }

  get totalAmount(): number {
    return this._totalAmount;
  }

  set totalAmount(totalAmount: number) {
    this._totalAmount = totalAmount;
  }

  private sumAssetValue = (assetData: asset[]) => {
    let sum = 0;
    for (const data of assetData) {
      sum += data.value;
    }
    return sum;
  };
}
