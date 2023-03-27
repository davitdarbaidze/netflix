import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { SINGLE_CATEGORY } from "@/graphql/queries";


export default function Category() {

  const router = useRouter();
  const { id } = router.query;

  const { data, error, loading } = useQuery(SINGLE_CATEGORY, {
    variables: { id: id },
  });

  if (loading) return <p>loading....</p>;
  if (error) return <p>{error.message}</p>;


  return (
    <div>
      
      {data.category.data.attributes.reviews.data.map(review => (
          <div key={review.id}>
            {review.attributes.categories.data.map(category => (category.attributes.Name))}
            <div>{review.attributes.rating}</div>
            <div>{review.attributes.title}</div>
            <p>{review.attributes.body}</p>
          </div>
          
        ))}
    </div>
  );
}
