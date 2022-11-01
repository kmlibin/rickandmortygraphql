import { gql, useQuery } from "@apollo/client";

//with variables, name the query, follow pattern in gql playground. takes in id (with a $), type must be of ID
const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    //takes in options param, in variables list all variables
    variables: { id },
  });

  return { data, loading, error };
};
