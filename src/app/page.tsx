function createDogService() {
  return {
    async getAll() {
      return [1];
    },
  };
}

const dogService = createDogService();
export default async function Home() {
  const dogs = await dogService.getAll();
  return (  
    <>
      <h1>Hello World</h1>
      {!dogs.length && <p>Get more dogs man, sad face</p>}
    </>
  );
}
