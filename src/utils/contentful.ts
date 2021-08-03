import { createClient } from "contentful";
export const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "ifsiy2xurv40",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "ThmEQDURWMEx8GvPNh7gAmyLyfqZnOrpY7e_q7b4TNw",
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// client
//   .getEntry("5PeGS2SoZGSa4GuiQsigQu")
//   .then(entry => console.log(entry))
//   .catch(err => console.log(err));
