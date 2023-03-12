import React from "react";
import Link from "next/link";

import { useQuery, gql } from "@apollo/client";
import {ALL_CATEGORIES} from "@/graphql/queries";


export default function SiteHeader() {
  const { data, error, loading } = useQuery(ALL_CATEGORIES);

  if (loading) return <p>loading....</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="site-header">
      <Link href="/">
        <h1>Reviews</h1>
      </Link>
      <nav className="categories">
        <span>Filter by category: </span>
        {data.categories.data.map((item) => (
          
            <Link key={item.id} href={`/category/${item.id}`}>{item.attributes.Name}</Link>
          
        ))}
      </nav>
    </div>
  );
}
