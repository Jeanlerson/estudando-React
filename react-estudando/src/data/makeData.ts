export type Data = {
    id: number;
    task: string;
    cost: number;
    deadline: number;
    // outros campos...
  };
  
  export const fakeData: Data[] = [
    {
      id: 1,
      task: 'Varrer',
      cost: 10,
      deadline: 2024
    }
  ];