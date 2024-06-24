import agricultureData from '../data/Manufac _ India Agro Dataset.json';

export const processData = () => {
  const yearWiseData = [];
  const cropWiseData = {};

  agricultureData.forEach(entry => {
    const year = parseInt(entry.Year.match(/\d{4}/)[0]);
    const crop = entry["Crop Name"];
    const production = parseFloat(entry["Crop Production (UOM:t(Tonnes))"]) || 0;
    const yieldPerHa = parseFloat(entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0;
    const area = parseFloat(entry["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0;

    if (!cropWiseData[crop]) {
      cropWiseData[crop] = { totalYield: 0, totalArea: 0, count: 0 };
    }

    cropWiseData[crop].totalYield += yieldPerHa;
    cropWiseData[crop].totalArea += area;
    cropWiseData[crop].count += 1;

    const currentYear = yearWiseData.find(data => data.year === year);
    if (currentYear) {
      if (production > currentYear.maxProductionProduction) {
        currentYear.maxProductionCrop = crop;
        currentYear.maxProductionProduction = production;
      }
      if (production < currentYear.minProductionProduction) {
        currentYear.minProductionCrop = crop;
        currentYear.minProductionProduction = production;
      }
    } else {
      yearWiseData.push({
        year,
        maxProductionCrop: crop,
        maxProductionProduction: production,
        minProductionCrop: crop,
        minProductionProduction: production,
      });
    }
  });

  const formattedyearWiseData = yearWiseData.map(data => ({
    year: data.year,
    maxProductionCrop: data.maxProductionCrop,
    minProductionCrop: data.minProductionCrop
  }));

  const averageData = Object.keys(cropWiseData).map(crop => ({
    crop,
    avgYield: parseFloat((cropWiseData[crop].totalYield / cropWiseData[crop].count).toFixed(3)),
    avgArea: parseFloat((cropWiseData[crop].totalArea / cropWiseData[crop].count).toFixed(3)),
  }));

  return { yearWiseData: formattedyearWiseData, averageData };
};
