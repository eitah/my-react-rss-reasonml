let style = ReactDOMRe.Style.make;

ReactDOMRe.renderToElementWithId(
  <ReasonApolloHooks.ApolloProvider client=Client.client>
    <App greeting="Hello, ReasonConf Dojo" />
  </ReasonApolloHooks.ApolloProvider>,
  "index1",
);
