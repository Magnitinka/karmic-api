function toArcane(num) {
  if (num === 0) return 22;
  let result = num;
  while (result > 22) result -= 22;
  while (result < 1) result += 22;
  return result;
}

function digitSum(num) {
  return Math.abs(num).toString().split('').reduce((s, d) => s + parseInt(d, 10), 0);
}

function toSingleDigit(num) {
  let result = num;
  while (result > 9) {
    result = result.toString().split('').reduce((s, d) => s + parseInt(d, 10), 0);
  }
  return result;
}

function calcIndividual(birthDate, firstName) {
  if (!birthDate) return null;
  const parts = birthDate.split('-').map(Number);
  const year = parts[0], month = parts[1], day = parts[2];
  if (isNaN(day) || isNaN(month) || isNaN(year)) return null;

  const da = toArcane(day);
  const ma = toArcane(month);
  const ga = toArcane(digitSum(year));
  const ja = toArcane(digitSum(day) + digitSum(month) + digitSum(year));
  const soulNumber = toSingleDigit(day);
  const destinyNumber = toSingleDigit(digitSum(day) + digitSum(month) + digitSum(year));
  const tp = toArcane(da + ma);

  return { da, ma, ga, ja, soulNumber, destinyNumber, tp };
}

function calcPair(manDate, womanDate) {
  // Заглушка
  return { manDa: 1, womanDa: 2, da3: 3, ma3: 4 };
}

function calcProfession(birthDate, firstName, work, city) {
  // Заглушка
  return { opv: 5, workArcane: 6, cityArcane: 7 };
}

function calcAstromagia(symptoms) {
  // Заглушка
  return { planets: ['Солнце', 'Марс'], group: 'Солнце + Марс' };
}

module.exports = {
  calcIndividual,
  calcPair,
  calcProfession,
  calcAstromagia
};
