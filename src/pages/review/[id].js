import React from "react";
import { useRouter } from "next/router";
import useFetch from "@/hooks/useFetch";
import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
  query getSingle($id: ID!) {
    review(id: $id) {
      data {
        id
        attributes {
          title
          rating
          body
        }
      }
    }
  }
`;

export default function Review() {
  const router = useRouter();
  const { id } = router.query;

  // const { data, error, loading } = useFetch(
  //   `http://localhost:1337/api/reviews/${id}`
  // );

  const { data, error, loading } = useQuery(REVIEW, {
    variables: { id: id },
  });

  if (loading) return <p>loading....</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <div>{data.review.data.attributes.rating}</div>
      <div>{data.review.data.attributes.title}</div>
      <p>{data.review.data.attributes.body}</p>
      review
    </div>
  );
}
