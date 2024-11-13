export default async function Home() {
  const dogs = await [];
  return (
    <>
      <h1>Hello World</h1>
      {!dogs.length && <p>Get more dogs man, sad face</p>}
    </>
  );
}
