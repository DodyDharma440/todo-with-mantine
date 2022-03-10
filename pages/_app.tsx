import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import defaultTheme from "@styles/theme/default";
import "@styles/css/reset.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          ...defaultTheme,
          colorScheme: "dark",
        }}
      >
        <NotificationsProvider position="top-right" zIndex={2000} limit={3}>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
};

export default App;
