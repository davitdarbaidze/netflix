import React from "react";
import { useRouter } from "next/router";
import useFetch from "@/hooks/useFetch";
import { useQuery, gql } from "@apollo/client";
import { SINGLE_REVIEW } from "@/graphql/queries";


export default function Review() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, loading } = useQuery(SINGLE_REVIEW, {
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
