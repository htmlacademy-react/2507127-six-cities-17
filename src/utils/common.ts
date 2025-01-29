function getRandomArrayElement<T>(items: T[]){
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function getCapitalizedWord(word: string): string{
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export {getRandomArrayElement, getCapitalizedWord};
