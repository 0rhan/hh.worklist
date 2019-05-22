const filterVacancy = (vacancyColelction, activeVacancyId) => {
  const arr = vacancyColelction.filter(item => activeVacancyId === item.id);
  const vacancy = arr[0];
  return vacancy;
};

export default filterVacancy;
