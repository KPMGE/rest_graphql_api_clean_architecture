// we're creating this interface to make sure that all controllers in our application
// will implement the same structure.

import { HttpResponse } from "../contracts/http";

// NOTE: It's very impotant to notice that we're not using the Request and Response from
// expres, rather, we've made our own custom response. This is a really nice practice, because
// later on, we can use the same controller not just with express, but with graphql or whatever
// framework we want.

export interface Controller {
  handle: () => Promise<HttpResponse>;
}
