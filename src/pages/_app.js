import SiteHeader from "@/components/SiteHeader";
import { UserProvider } from "@/lib/authContext";
import "@/styles/globals.scss";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ user, userLoading = false, Component, pageProps }) {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <UserProvider value={{user, userLoading}}>
      <SiteHeader/>
      <Component {...pageProps} />
      </UserProvider>
    </ApolloProvider>
  );
}
