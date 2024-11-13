import { dogService } from "./instance";

export async function Dogs() {
  const dogs = await dogService.getAll();
  return !dogs.length && <p>Get more dogs man, sad face</p>;
}
