---
title: "Postman API"
order: 146
page_id: "intro_api"
search_keyword: "postman-api-key, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to the Postman API | Postman Level Up"
    url: "https://www.youtube.com/watch?v=iEtsp6o4AJg"
  - type: link
    name: "User Info from the Postman API | Postman Level Up"
    url: "https://www.youtube.com/watch?v=k2bvdqxDcsU"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Filtering and Sorting APIs Using the Postman API"
    url: "https://blog.postman.com/filtering-and-sorting-apis-using-the-postman-api/"
  - type: subtitle
    name: "Next Steps"
  - type: link
    name: "Continuous Integration"
    url: "/docs/running-collections/using-newman-cli/continuous-integration/"

warning: false

---

The [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) endpoints enable you to integrate Postman within your development toolchain.

You can add new collections, update existing collections, update environments, and add and run monitors directly through the API. This enables you to programmatically access data stored in your Postman account.

You can get started with the API by forking its collection. For more details, see the [Postman API documentation](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a).

You will need an [API key](#generating-a-postman-api-key) to access the Postman API.

> The Postman API is [rate limited](#rate-limits).

## Generating a Postman API key

You need a valid API Key to send requests to the Postman API. To generate an API key:

1. Navigate to your [Postman API Keys page](https://go.postman.co/settings/me/api-keys). Select your avatar in the upper-right corner > **Account Settings**. Then select **Postman API keys**.

1. If you do not have any keys yet you will be prompted to create one. Select __Generate API Key__.

   <img alt="Generate API Key" src="https://assets.postman.com/postman-docs/no-api-keys-generate-v9.0.jpg" width="400px"/>

1. Enter a name for your key and select __Generate API Key__.

1. Copy your key, then __Close__.

<img src="https://assets.postman.com/postman-docs/copy-your-api-key-v9.jpg" alt="Copy your API key" width="600px"/>

Once you have API keys generated you can manage them within your workspace. Select **...** next to a key to regenerate or delete it.

<img src="https://assets.postman.com/postman-docs/api-keys-regenerate-delete-v9.jpg" alt="View your API keys"/>

Use __API Key Settings__ to specify expiration periods for your keys.

<img src="https://assets.postman.com/postman-docs/postman-api-key-settings.jpg" width="400px" alt="API key settings"/>

### Authentication

You will need to authenticate your requests to the Postman API by sending your API Key in the `X-Api-Key` header of every request you make.

You can also send the key as an `apikey` URL query parameter. An API key sent as part of the header has a higher priority in case you send the key using both request header and query parameter.

Your API Key provides access to any Postman data you have permissions for.

You can store your API key in a [variable](/docs/sending-requests/variables/). If you name it `postman_api_key`, the Postman API collection will use it automatically

## Rate Limits

API access rate limits are applied at a per-key basis in unit time.

Access to the API using a key is limited to **300 requests per minute**. Every API response includes the following set of headers to identify the status of your consumption.

| Header                | Description   |
| ---                   | ---           |
| `X-RateLimit-Limit`   | The maximum number of requests that the consumer is permitted to make per minute. |
| `X-RateLimit-Remaining`| The number of requests remaining in the current rate limit window. |
| `X-RateLimit-Reset`   | The time at which the current rate limit window resets in UTC epoch seconds. |

### Free API calls with your Postman account

Your Postman account gives you a limited number of free Postman API calls per month. You can check your usage limits through the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) itself or the [account usage page](https://go.pstmn.io/postman-account-limits).

## Next steps

You can [combine the Postman API with Newman](/docs/running-collections/using-newman-cli/continuous-integration/) to integrate Postman with your CI/CD workflow.
