import { getAllPeople } from '../queries/person.queries';

export const handleGetAllPeople = async () => {
  return getAllPeople();
};