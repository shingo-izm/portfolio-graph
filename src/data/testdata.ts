import { allAssetsData } from "../class/allAssetsData";
import { asset } from "../class/asset";
import { totalAssets } from "../class/totalAssets";

export const testData_totalAssets_1: totalAssets = new totalAssets(
  [
    new asset("LabelA", 10),
    new asset("LabelB", 20),
    new asset("LabelC", 20),
    new asset("LabelD", 20),
    new asset("LabelE", 20),
  ],
  new Date(2022, 1, 1)
);

export const testData_totalAssets_2: totalAssets = new totalAssets(
  [
    new asset("Label1", 10),
    new asset("Label2", 20),
    new asset("Label3", 20),
    new asset("LabelD", 20),
    new asset("LabelE", 20),
  ],
  new Date(2022, 2, 1)
);

export const testData_totalAssets_3: totalAssets = new totalAssets(
  [
    new asset("Labela", 10),
    new asset("Labelb", 20),
    new asset("Labelc", 20),
    new asset("Labeld", 20),
    new asset("Labele", 20),
    new asset("Labelf", 20),
  ],
  new Date(2022, 3, 1)
);

export const testData_totalAssets_4: totalAssets = new totalAssets(
  [new asset("Labelあ", 10)],
  new Date(2022, 4, 1)
);

export const testData_totalAssets_5: totalAssets = new totalAssets(
  [
    new asset("Labelア", 10),
    new asset("Labelイ", 20),
    new asset("Labelウ", 20),
    new asset("Labeldエ", 20),
    new asset("Labeleオ", 20),
    new asset("Labelfカ", 20),
  ],
  new Date(2022, 5, 1)
);

export const testData_allAssetsData: allAssetsData = new allAssetsData([
  testData_totalAssets_1,
  testData_totalAssets_2,
  testData_totalAssets_3,
  testData_totalAssets_4,
  testData_totalAssets_5,
]);
