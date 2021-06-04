const isEvenNumber = () => {
  const result = [];
  for (let i = 0; i < 50; i++) {
    if (i > 0 && i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
};

isEvenNumber();
