---
title: "Publishing to the API Network"
order: 107
page_id: "add_api_network"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Documenting your API"
    url:  "/docs/publishing-your-api/documenting-your-api/"
  - type: link
    name: "Publishing your docs"
    url: "/docs/publishing-your-api/publishing-your-docs/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Submission guidelines"
    url:  "/docs/publishing-your-api/api-submission-guidelines/"
---

Publishing your documentation to the [API Network](https://explore.postman.com/) connects your API to the Postman community. You can publish docs to the network from any team [collection](/docs/sending-requests/intro-to-collections/). For individual collections that are not published via a team, you can instead add to the Postman [templates](/docs/publishing-your-api/add-templates/).

> For APIs that your team uses internally, you can add to the [private API network](/docs/collaborating-in-postman/adding-private-network/).

Sharing your docs exposes your API to the millions of developers who use Postman, and lets others within the community learn from your projects. By publishing to the API Network, you share your API through a human-readable reference in the form of your docs—and an executable way to interact with your API endpoints inside Postman, via the embedded Run in Postman button.

Your docs can convey detailed guidance on how to make requests to your API endpoints, as well as the workflows required to integrate with your API in general. This provides the information—and actionable data—developers need to get started using your services.

> When you add your API to the network it will be associated with your public team profile listing. You can [set your profile up before publishing](#setting-up-your-team-profile) or Postman will generate one for you during publication and you can optionally customize it later.

## Adding your API

To add an API to the network, you first need to [document and publish a collection](/docs/publishing-your-api/documenting-your-api/). You can share your docs to the API Network during the [publishing process](/docs/publishing-your-api/publishing-your-docs/), by enabling __Collection discovery__ and selecting __Add to API Network__.

![Collection Discovery](https://assets.postman.com/postman-docs/enable-discovery-switch.jpg)

If your collection is already published, you can make it discoverable by opening the published docs, opening the __Published__ drop-down menu, and clicking __Edit Published Documentation__.

> You can access your published docs from Postman (select the collection and click __View in web__), or from the web dashboard (navigate to __Workspace__ &gt; __Collections__ and click the published collection title).

<img alt="Edit Published Docs" src="https://assets.postman.com/postman-docs/edit-published.jpg" width="400px"/>

Click __Allow Collection Discovery__ to set up your network listing.

![Allow Discovery](https://assets.postman.com/postman-docs/allow-discovery.jpg)

Select __Add to API Network__.

### Providing API detail

Include the __API Name__, __Summary__, and __Description__—add the details potential users will need to know in order to find your API and figure out whether they want to use it. Your description can include markdown, and will automatically be populated from any [description you already have included in your collection](/docs/publishing-your-api/authoring-your-documentation/).

![API Network Detail](https://assets.postman.com/postman-docs/api-details-b.jpg)

Select the categories that best describe your API and service. API consumers can choose categories to browse APIs in the network from the left sidebar in Postman and at [explore.postman.com](https://explore.postman.com).

![Network Categories](https://assets.postman.com/postman-docs/API+categories+.jpg)

### Setting up your team profile

When you publish to the API Network, your API will be listed as part of your team profile. If you don't already have a team profile, Postman will automatically generate one when you publish. You can customize your profile at any time before or after publishing your API.

![API Network Publish Settings](https://assets.postman.com/postman-docs/api-network-publish-collection-settings-b.jpg)

Use the __Public Profile Settings__ link or navigate to your [team profile settings](https://go.postman.co/settings/team/general) to enable or customize the details consumers will see when your API is published and visible in the network.

![API Network Publish Settings](https://assets.postman.com/postman-docs/enable-profile-bb.jpg)

Include a team name and description that will appear in your API Network listing. You can customize your profile URL, and add a logo and favicon in your [Settings](https://go.postman.co/settings/team/general).

![Public Profile Settings](https://assets.postman.com/postman-docs/enable-team-profile-b.jpg)

> If you receive an error when uploading your favicon, confirm that it is a square .ico file and no larger than 500KB.

## Publishing to the network

Once your team profile is set up any collection docs you publish will be associated with it. Click __Publish Collection__.

![Public Profile Settings](https://assets.postman.com/postman-docs/publish-network-b.jpg)

When people browse the API Network they will see your team profile listing, along with the APIs and templates you have published.

![team profile display](https://assets.postman.com/postman-docs/api-network-team-profile-display-b.jpg)

> If you choose to disable your team profile, you won't be able to publish any new collections to the Postman API Network or templates, and any previously published collections will be unpublished.

![Network Published](https://assets.postman.com/postman-docs/network-published-b.jpg)

You will see a link to your collection's published listing and team profile. You will also be able to find your listing in Postman using __New__ &gt; __API Network__ or [on the web](https://explore.postman.com).

![Network Listing](https://assets.postman.com/postman-docs/network-listing-app.jpg)

Your team's API Network listing shows the number of imports for each of your APIs, with links to the documentation and __Run in Postman__ button so that people can import your collection templates directly into Postman to begin using your endpoints straight away.

Clicking the title of an API in the web listing of your team profile will open the listing page for that particular collection, showing the description, publisher details, imports, and linking to the documentation alongside __Run in Postman__ for importing the collection directly.

![API Listing](https://assets.postman.com/postman-docs/api-listing-link.jpg)

## Next steps

Check out some [tips for making the most of your network listing](/docs/publishing-your-api/api-submission-guidelines/).
