export function getLocalStoredString(item: string){
  const storedItem = localStorage.getItem(item);
  return JSON.parse(storedItem as string) as string;
}

