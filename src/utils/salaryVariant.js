const salaryVariant = (min, max, currency) => {
  // Если есть минимальная и максимальная зарплата и они не равны друг-другу
  if (min && max && min !== max) {
    return `${min}-${max} ${currency}`;
  }

  // Если указана одинаковая минимальная и максимальная зарплата
  if (max !== null && min !== null && min === max) {
    return `${min} ${currency}`;
  }

  // Если указана только минимальная зарплата
  if (min) {
    return `от ${min} ${currency}`;
  }

  // Если указана только максимальная зарплата
  if (max) {
    return `до ${max} ${currency}`;
  }

  return null;
};

export default salaryVariant;
