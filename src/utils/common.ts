function getRandomArrayElement<T>(items: T[]){
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

export {getRandomArrayElement};
