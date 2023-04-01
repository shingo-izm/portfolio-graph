import { totalAssets, allAssetsData } from "../interface/types";

export const testData_totalAssets_1: totalAssets = {
  data: [
    { label: "LabelA", value: 10 },
    { label: "LabelB", value: 20 },
    { label: "LabelC", value: 30 },
    { label: "LabelD", value: 30 },
    { label: "LabelE", value: 30 },
  ],
  date: new Date(2022, 1, 1),
};

export const testData_totalAssets_2: totalAssets = {
  data: [
    { label: "Label1", value: 10 },
    { label: "Label2", value: 20 },
    { label: "Label3", value: 30 },
  ],
  date: new Date(2022, 2, 1),
};

export const testData_totalAssets_3: totalAssets = {
  data: [
    { label: "Labela", value: 10 },
    { label: "Labelb", value: 20 },
    { label: "Labelc", value: 30 },
    { label: "Labeld", value: 10 },
    { label: "Labele", value: 20 },
    { label: "Labelf", value: 30 },
  ],
  date: new Date(2022, 3, 1),
};

export const testData_totalAssets_4: totalAssets = {
  data: [{ label: "Labelあ", value: 10 }],
  date: new Date(2022, 4, 1),
};

export const testData_totalAssets_5: totalAssets = {
  data: [
    { label: "Labelア", value: 10 },
    { label: "Labelイ", value: 20 },
    { label: "Labelウ", value: 30 },
    { label: "Labeldエ", value: 10 },
    { label: "Labeleオ", value: 20 },
    { label: "Labelfカ", value: 30 },
    { label: "Labelキ", value: 10 },
    { label: "Labelク", value: 20 },
    { label: "Labelケ", value: 30 },
    { label: "Labeldコ", value: 10 },
  ],
  date: new Date(2022, 5, 1),
};

export const testData_allAssetsData: allAssetsData = {
  totalAssets: [
    testData_totalAssets_1,
    testData_totalAssets_2,
    testData_totalAssets_3,
    testData_totalAssets_4,
    testData_totalAssets_5,
  ],
};
