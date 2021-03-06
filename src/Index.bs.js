// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ApolloLinks = require("reason-apollo/src/ApolloLinks.bs.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ApolloLink = require("apollo-link");
var OneGraphAuth = require("bs-onegraph-auth/src/OneGraphAuth.bs.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var OnegraphAuth = require("onegraph-auth");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var ReactHooks = require("@apollo/react-hooks");
var ApolloInMemoryCache = require("reason-apollo/src/ApolloInMemoryCache.bs.js");
var Query$ReasonApolloHooks = require("reason-apollo-hooks/src/Query.bs.js");
var Podcast$ReactHooksTemplate = require("./Podcast.bs.js");

var appId = "17f4cb26-3b30-4828-869a-5410a8b3c4ae";

var authConfig = {
  appId: appId,
  oneGraphOrigin: "https://serve.onegraph.io/"
};

var auth = new OnegraphAuth.OneGraphAuth(authConfig);

var inMemoryCache = ApolloInMemoryCache.createInMemoryCache(undefined, undefined, /* () */0);

var httpLink = ApolloLinks.createHttpLink("https://serve.onegraph.com/graphql?app_id=17f4cb26-3b30-4828-869a-5410a8b3c4ae", undefined, undefined, undefined, undefined, undefined, /* () */0);

var headerContextLink = ApolloLinks.createContextLink((function (param) {
        var match = auth.accessToken();
        return {
                headers: {
                  authorization: (match == null) ? "" : "Bearer " + match.accessToken
                }
              };
      }));

var client = ReasonApollo.createApolloClient(ApolloLink.from(/* array */[
          headerContextLink,
          httpLink
        ]), inMemoryCache, undefined, undefined, undefined, undefined, /* () */0);

var Client = /* module */[
  /* authConfig */authConfig,
  /* auth */auth,
  /* inMemoryCache */inMemoryCache,
  /* httpLink */httpLink,
  /* headerContextLink */headerContextLink,
  /* client */client
];

var ppx_printed_query = "query unnamedQuery1  {\nrss  {\nrss2Feed(url: \"https://www.npr.org/rss/podcast.php?id=510289\")  {\nlanguage  \ncopyright  \ntitle  \nlink  \ndescription  \ncloud  {\nuri  \nregisterProcedure  \nprotocol  \n}\n\nitems  {\nauthor  \ncontent  \nsource  {\ndata  \nurl  \n}\n\nlink  \n}\n\n}\n\n}\n\n}\n";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_dict.get(Caml_option.valFromOption(match), "rss");
    var tmp;
    if (match$1 !== undefined) {
      var match$2 = Js_json.decodeObject(Caml_option.valFromOption(match$1));
      if (match$2 !== undefined) {
        var match$3 = Js_dict.get(Caml_option.valFromOption(match$2), "rss2Feed");
        var tmp$1;
        if (match$3 !== undefined) {
          var match$4 = Js_json.decodeObject(Caml_option.valFromOption(match$3));
          if (match$4 !== undefined) {
            var value$1 = Caml_option.valFromOption(match$4);
            var match$5 = Js_dict.get(value$1, "language");
            var tmp$2;
            if (match$5 !== undefined) {
              var value$2 = Caml_option.valFromOption(match$5);
              var match$6 = Js_json.decodeNull(value$2);
              if (match$6 !== undefined) {
                tmp$2 = undefined;
              } else {
                var match$7 = Js_json.decodeString(value$2);
                tmp$2 = match$7 !== undefined ? match$7 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
              }
            } else {
              tmp$2 = undefined;
            }
            var match$8 = Js_dict.get(value$1, "copyright");
            var tmp$3;
            if (match$8 !== undefined) {
              var value$3 = Caml_option.valFromOption(match$8);
              var match$9 = Js_json.decodeNull(value$3);
              if (match$9 !== undefined) {
                tmp$3 = undefined;
              } else {
                var match$10 = Js_json.decodeString(value$3);
                tmp$3 = match$10 !== undefined ? match$10 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
              }
            } else {
              tmp$3 = undefined;
            }
            var match$11 = Js_dict.get(value$1, "title");
            var tmp$4;
            if (match$11 !== undefined) {
              var value$4 = Caml_option.valFromOption(match$11);
              var match$12 = Js_json.decodeString(value$4);
              tmp$4 = match$12 !== undefined ? match$12 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$4));
            } else {
              tmp$4 = Js_exn.raiseError("graphql_ppx: Field title on type Rss2Channel is missing");
            }
            var match$13 = Js_dict.get(value$1, "link");
            var tmp$5;
            if (match$13 !== undefined) {
              var value$5 = Caml_option.valFromOption(match$13);
              var match$14 = Js_json.decodeString(value$5);
              tmp$5 = match$14 !== undefined ? match$14 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$5));
            } else {
              tmp$5 = Js_exn.raiseError("graphql_ppx: Field link on type Rss2Channel is missing");
            }
            var match$15 = Js_dict.get(value$1, "description");
            var tmp$6;
            if (match$15 !== undefined) {
              var value$6 = Caml_option.valFromOption(match$15);
              var match$16 = Js_json.decodeString(value$6);
              tmp$6 = match$16 !== undefined ? match$16 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$6));
            } else {
              tmp$6 = Js_exn.raiseError("graphql_ppx: Field description on type Rss2Channel is missing");
            }
            var match$17 = Js_dict.get(value$1, "cloud");
            var tmp$7;
            if (match$17 !== undefined) {
              var value$7 = Caml_option.valFromOption(match$17);
              var match$18 = Js_json.decodeNull(value$7);
              if (match$18 !== undefined) {
                tmp$7 = undefined;
              } else {
                var match$19 = Js_json.decodeObject(value$7);
                var tmp$8;
                if (match$19 !== undefined) {
                  var value$8 = Caml_option.valFromOption(match$19);
                  var match$20 = Js_dict.get(value$8, "uri");
                  var tmp$9;
                  if (match$20 !== undefined) {
                    var value$9 = Caml_option.valFromOption(match$20);
                    var match$21 = Js_json.decodeString(value$9);
                    tmp$9 = match$21 !== undefined ? match$21 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$9));
                  } else {
                    tmp$9 = Js_exn.raiseError("graphql_ppx: Field uri on type Rss2FeedCloud is missing");
                  }
                  var match$22 = Js_dict.get(value$8, "registerProcedure");
                  var tmp$10;
                  if (match$22 !== undefined) {
                    var value$10 = Caml_option.valFromOption(match$22);
                    var match$23 = Js_json.decodeString(value$10);
                    tmp$10 = match$23 !== undefined ? match$23 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$10));
                  } else {
                    tmp$10 = Js_exn.raiseError("graphql_ppx: Field registerProcedure on type Rss2FeedCloud is missing");
                  }
                  var match$24 = Js_dict.get(value$8, "protocol");
                  var tmp$11;
                  if (match$24 !== undefined) {
                    var value$11 = Caml_option.valFromOption(match$24);
                    var match$25 = Js_json.decodeString(value$11);
                    tmp$11 = match$25 !== undefined ? match$25 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$11));
                  } else {
                    tmp$11 = Js_exn.raiseError("graphql_ppx: Field protocol on type Rss2FeedCloud is missing");
                  }
                  tmp$8 = {
                    uri: tmp$9,
                    registerProcedure: tmp$10,
                    protocol: tmp$11
                  };
                } else {
                  tmp$8 = Js_exn.raiseError("graphql_ppx: Object is not a value");
                }
                tmp$7 = Caml_option.some(tmp$8);
              }
            } else {
              tmp$7 = undefined;
            }
            var match$26 = Js_dict.get(value$1, "items");
            var tmp$12;
            if (match$26 !== undefined) {
              var value$12 = Caml_option.valFromOption(match$26);
              var match$27 = Js_json.decodeArray(value$12);
              tmp$12 = match$27 !== undefined ? match$27.map((function (value) {
                        var match = Js_json.decodeObject(value);
                        if (match !== undefined) {
                          var value$1 = Caml_option.valFromOption(match);
                          var match$1 = Js_dict.get(value$1, "author");
                          var tmp;
                          if (match$1 !== undefined) {
                            var value$2 = Caml_option.valFromOption(match$1);
                            var match$2 = Js_json.decodeNull(value$2);
                            if (match$2 !== undefined) {
                              tmp = undefined;
                            } else {
                              var match$3 = Js_json.decodeString(value$2);
                              tmp = match$3 !== undefined ? match$3 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                            }
                          } else {
                            tmp = undefined;
                          }
                          var match$4 = Js_dict.get(value$1, "content");
                          var tmp$1;
                          if (match$4 !== undefined) {
                            var value$3 = Caml_option.valFromOption(match$4);
                            var match$5 = Js_json.decodeString(value$3);
                            tmp$1 = match$5 !== undefined ? match$5 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                          } else {
                            tmp$1 = Js_exn.raiseError("graphql_ppx: Field content on type Rss2FeedItem is missing");
                          }
                          var match$6 = Js_dict.get(value$1, "source");
                          var tmp$2;
                          if (match$6 !== undefined) {
                            var value$4 = Caml_option.valFromOption(match$6);
                            var match$7 = Js_json.decodeNull(value$4);
                            if (match$7 !== undefined) {
                              tmp$2 = undefined;
                            } else {
                              var match$8 = Js_json.decodeObject(value$4);
                              var tmp$3;
                              if (match$8 !== undefined) {
                                var value$5 = Caml_option.valFromOption(match$8);
                                var match$9 = Js_dict.get(value$5, "data");
                                var tmp$4;
                                if (match$9 !== undefined) {
                                  var value$6 = Caml_option.valFromOption(match$9);
                                  var match$10 = Js_json.decodeString(value$6);
                                  tmp$4 = match$10 !== undefined ? match$10 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$6));
                                } else {
                                  tmp$4 = Js_exn.raiseError("graphql_ppx: Field data on type Rss2Source is missing");
                                }
                                var match$11 = Js_dict.get(value$5, "url");
                                var tmp$5;
                                if (match$11 !== undefined) {
                                  var value$7 = Caml_option.valFromOption(match$11);
                                  var match$12 = Js_json.decodeString(value$7);
                                  tmp$5 = match$12 !== undefined ? match$12 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$7));
                                } else {
                                  tmp$5 = Js_exn.raiseError("graphql_ppx: Field url on type Rss2Source is missing");
                                }
                                tmp$3 = {
                                  data: tmp$4,
                                  url: tmp$5
                                };
                              } else {
                                tmp$3 = Js_exn.raiseError("graphql_ppx: Object is not a value");
                              }
                              tmp$2 = Caml_option.some(tmp$3);
                            }
                          } else {
                            tmp$2 = undefined;
                          }
                          var match$13 = Js_dict.get(value$1, "link");
                          var tmp$6;
                          if (match$13 !== undefined) {
                            var value$8 = Caml_option.valFromOption(match$13);
                            var match$14 = Js_json.decodeNull(value$8);
                            if (match$14 !== undefined) {
                              tmp$6 = undefined;
                            } else {
                              var match$15 = Js_json.decodeString(value$8);
                              tmp$6 = match$15 !== undefined ? match$15 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$8));
                            }
                          } else {
                            tmp$6 = undefined;
                          }
                          return {
                                  author: tmp,
                                  content: tmp$1,
                                  source: tmp$2,
                                  link: tmp$6
                                };
                        } else {
                          return Js_exn.raiseError("graphql_ppx: Object is not a value");
                        }
                      })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(value$12));
            } else {
              tmp$12 = Js_exn.raiseError("graphql_ppx: Field items on type Rss2Channel is missing");
            }
            tmp$1 = {
              language: tmp$2,
              copyright: tmp$3,
              title: tmp$4,
              link: tmp$5,
              description: tmp$6,
              cloud: tmp$7,
              items: tmp$12
            };
          } else {
            tmp$1 = Js_exn.raiseError("graphql_ppx: Object is not a value");
          }
        } else {
          tmp$1 = Js_exn.raiseError("graphql_ppx: Field rss2Feed on type RssQuery is missing");
        }
        tmp = {
          rss2Feed: tmp$1
        };
      } else {
        tmp = Js_exn.raiseError("graphql_ppx: Object is not a value");
      }
    } else {
      tmp = Js_exn.raiseError("graphql_ppx: Field rss on type Query is missing");
    }
    return {
            rss: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function ret_type(f) {
  return /* module */[];
}

var MT_Ret = /* module */[];

var UnnamedQuery1QueryConfig = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var UnnamedQuery1Query = Query$ReasonApolloHooks.Make([
      ppx_printed_query,
      parse
    ]);

var class_tables = [
  0,
  0,
  0
];

function Index$UnnamedQuery1(Props) {
  var variables = make(/* () */0).variables;
  var match = Curry._8(UnnamedQuery1Query[/* use */0], Caml_option.some(variables), undefined, undefined, /* NetworkOnly */2, /* All */2, undefined, undefined, /* () */0);
  var full = match[1];
  if (full[/* loading */1]) {
    return React.createElement("p", undefined, "Loading...");
  } else {
    var refetch = full[/* refetch */3];
    var error = full[/* error */2];
    var jsonify = function (data) {
      return React.createElement("pre", undefined, JSON.stringify(data, null, 2));
    };
    var dataEl = Belt_Option.mapWithDefault(full[/* data */0], "No data", jsonify);
    var errorEl = Belt_Option.mapWithDefault(error, null, jsonify);
    if (!class_tables[0]) {
      var $$class = CamlinternalOO.create_table(0);
      var env = CamlinternalOO.new_variable($$class, "");
      var env_init = function (env$1) {
        var self = CamlinternalOO.create_object_opt(0, $$class);
        self[env] = env$1;
        return self;
      };
      CamlinternalOO.init_class($$class);
      class_tables[0] = env_init;
    }
    return React.createElement("div", undefined, React.createElement(Podcast$ReactHooksTemplate.make, {
                    podcast: Curry._1(class_tables[0], 0)
                  }), dataEl, errorEl, React.createElement("button", {
                    onClick: (function (_event) {
                        var match = OneGraphAuth.findMissingAuthServices(auth, error);
                        if (match) {
                          var serviceName = match[0];
                          var __x = auth.login(serviceName);
                          var __x$1 = __x.then((function (param) {
                                  return auth.isLoggedIn(serviceName);
                                }));
                          __x$1.then((function (loginSuccess) {
                                  if (loginSuccess) {
                                    console.log("Successfully logged into ", serviceName);
                                    return Promise.resolve((Curry._2(refetch, undefined, /* () */0), /* () */0));
                                  } else {
                                    return Promise.resolve((console.log("The user did not grant auth to ", serviceName), /* () */0));
                                  }
                                }));
                          return /* () */0;
                        } else {
                          Curry._2(refetch, undefined, /* () */0);
                          return /* () */0;
                        }
                      })
                  }, "Rerun UnnamedQuery1Query"));
  }
}

var UnnamedQuery1 = /* module */[/* make */Index$UnnamedQuery1];

var container = React.createElement(ReactHooks.ApolloProvider, {
      client: client,
      children: React.createElement(Index$UnnamedQuery1, { })
    });

ReactDOMRe.renderToElementWithId(container, "index1");

exports.appId = appId;
exports.Client = Client;
exports.UnnamedQuery1QueryConfig = UnnamedQuery1QueryConfig;
exports.UnnamedQuery1Query = UnnamedQuery1Query;
exports.UnnamedQuery1 = UnnamedQuery1;
exports.container = container;
/* auth Not a pure module */
