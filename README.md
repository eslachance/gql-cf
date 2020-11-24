### GraphQL Conditional Fields

If you've stumbled upon this randomly... well you're probably in the wrong neighborhood, to be honest.

In attempting to consolidate queries shared between 6 different repositories, but with very slight variations
on the queries themselves (added or missing fields, etc), I came upon the idea of making these things conditional.

Now, if you're a fervent user of GraphQL you might recoil in horror at the thought of conditional queries, since the entire
point of GraphQL is for queries to be individual, but, for our purposes, it works fine. 

## Currently not really useable
I mean, honestly, this is harcoded with a Typescript definition for the data we're sending to it, which means, *you* probably can't use it as-is. But... well, stay tuned for a more generic version sooner or later (probably later, lots to do lots to do!)

## Usage

Start by installing this thing: 
```
npm i gql-cf
or
yarn add gql-cf
```

Then, initialize it with the required values. This should be done in your index.js or app.js, as close to the top as possible,
before any components *using* it load up.

```ts
import { ConditionalField } from 'gql-cf'

ConditionalField.init({
  web: true,
  resident: true
})
```

With that being done, you can now call queries in a dynamic fashion. This is done by using the `cf` template literal tag,
and inserting functions within the template literal to conditionally add fields. I'm not sure how to actually describe this
in technical terms, my brain is mush right now, but here's an example of what I mean: 

```ts
import { gql } from '@apollo/client'
import { ConditionalField } from 'gql-cf'
const { cf } = ConditionalField

export const USER_FIELDS = cf`
  id
  username
  firstName
  lastName
  ${t => t.web && `
  lastLogin
  avatar
  `}
  ${t => t.mobile && `
  tinyAvatar
  lastMobileLogin
  `}
  ${t => t.manager && `
  passwordStrength
  email
  signupDate
  payment {
    method
    price
    lastPayment
  }
  `}
`
```

How's this useful? Well, for each of our project we just define the context, then use this context to filter out the fields we need.

Marvelous. And, again, I cannot stress this enough: probably useless to you right now and maybe ever. So... uhm... don't... use it? I guess?
