import React from "react";
import { useRouter } from "next/router";
import useFetch from "@/hooks/useFetch";
import { useQuery, gql } from "@apollo/client";

const CATEGORY = gql`
  query getSingleCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          Name
        }
      }
    }
  }
`;

export default function Category() {
  const router = useRouter();
  const { id } = router.query;

  // const { data, error, loading } = useFetch(
  //   `http://localhost:1337/api/reviews/${id}`
  // );

  const { data, error, loading } = useQuery(CATEGORY, {
    variables: { id: id },
  });

  if (loading) return <p>loading....</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <div>{data.category.data.attributes.Name}</div>
      
    </div>
  );
}
