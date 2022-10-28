import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DownloadsList from "./components/DownloadList/index";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "antd/dist/antd.min.css";

export default {
  title: "Extension/DownloadsList",
  component: DownloadsList,
} as ComponentMeta<typeof DownloadsList>;

const Template: ComponentStory<typeof DownloadsList> = () => {
  const client = new ApolloClient({
    uri: "http://127.0.0.1:4000/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div style={{ width: "400px" }}>
        <DownloadsList />
      </div>
    </ApolloProvider>
  );
};

export const Standard = Template.bind({});
Standard.args = {};
