function getLocalStoredString(item: string){
  return JSON.parse(localStorage.getItem(item) as string) as string;
}

export { getLocalStoredString };
