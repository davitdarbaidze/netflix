import React from "react";
import Link from "next/link";

import { useQuery, gql } from "@apollo/client";
<<<<<<< HEAD
import Category from "@/pages/category/[id]";
=======
>>>>>>> 20960e917ad2faf9d6d95c2a6a8ee9a64971305e

const CATEGORIES = gql`
  query getCategories {
    categories {
      data {
        id
        attributes {
          Name
        }
      }
    }
  }
`;

export default function SiteHeader() {
  const { data, error, loading } = useQuery(CATEGORIES);

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
          
<<<<<<< HEAD
            <Link key={item.id} href={`/category/${item.id}`}>{item.attributes.Name}</Link>
=======
            <Link href={`/category/${item.id}`}>{item.attributes.Name}</Link>
>>>>>>> 20960e917ad2faf9d6d95c2a6a8ee9a64971305e
          
        ))}
      </nav>
    </div>
  );
}
