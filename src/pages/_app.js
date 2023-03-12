import SiteHeader from "@/components/SiteHeader";
import "@/styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <SiteHeader/>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
