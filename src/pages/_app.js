import SiteHeader from "@/components/SiteHeader";
import { UserProvider } from "@/lib/authContext";
import "@/styles/globals.scss";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { DataProvider } from "@/lib/dataContext";

export default function App({ user, userLoading = false, Component, pageProps }) {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_PORT}/graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <UserProvider value={{user, userLoading}}>
      <DataProvider>
      {/* <SiteHeader/> */}
      <Component {...pageProps} />
      </DataProvider>
      </UserProvider>
    </ApolloProvider>
  );
}
