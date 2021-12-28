# tutruns

Every branch in this repo is a tutorial I'm trying to get through. Public so I can point authors to problems if they come up.

## NextJS / AWS Amplify / Serverless

In this tutrun I'm attempting to use [Aaron Garvey's tutorial entitled "Multi-env Next.js app with AWS Amplify & Serverless"](https://dev.to/aarongarvey/multi-env-next-js-app-with-aws-amplify-serverless-3571) to try and get the best of `Next`, `Amplify`, and `serverless` in a single setup. I'm going to try and make it as feature-complete as possible so that the outcome really runs.

### tutlog

First things first, I have to get my initial setup going. Aaron seems to be building on the established context of his references, so I'll start there. This tutorial is made of tutorials!

### subtut-1

[Getting Started with Amplify / React](https://docs.amplify.aws/start/q/integration/react/)

This AWS tutorial creates a "Todo app" using GraphQL, but doesn't go into very much depth before linking to a very broad set of steps that you can optionally take to enhance your Amplify app. I think I'm going to stop at the basics in the spirit of making progress on the original tutorial, so this branch will only have:

- Amplify infrastructure
- Connected API / DB
- Cognito Auth

Other branches will probably have more detail.

One thing that stood out was the Authentication step - once I ran `aws console` I was introduced to the fact that Amplify Studio is a thing, and kinda went down that rabbit hole for a while. Turns out Amplify is making it so that designers with a little understanding of data relationships can crank out functional websites with fairly performant characteristics without ever involving a developer, and I'm not in love with that concept... still, the tooling is neat. I also ended up making use of the `withAuthenticator` feature this tutorial had me add at the end to create a new User account in my app; the email verification works and I can even add users to groups and have that fact be reflected in app code (as well as RBAC stuff for resource-level control), although the code to do so isn't all that lovely:

```js
const fetchUserGroups = async () => {
  const user = await Auth.currentAuthenticatedUser();
  const userGroups =
    user.signInUserSession.accessToken.payload['cognito:groups'];
  setUserGroups(userGroups);
};
```

`userGroups` will be an array of strings, one for each role the user is in. The problem I have with this is the arcane path and the fact that I had to find this in a github issue comment. This should be more accessible, and actually documented. In any case, the code in this branch is now set up to only show the "Create Todo" button if you're logged in as a user that's been assigned to a group called "admins".

I added the following lines to my `.gitignore` before pushing everything for this branch:

```txt
team-provider-info.json
cli-inputs.json
```

That's due to the fact that the team info file has so many account-specific values in it, and the cli inputs file has fully-qualified paths in it. So, the cli inputs file seems machine-specific, and the team file feels like it belongs in a secrets manager of some kind, where authorized team members are able to access it and get onboarded as project devs.

And that's it! The next subtut will be all about Next.js with no Amplify implications at all (I think), so I'm starting with a fresh branch from `main`.
