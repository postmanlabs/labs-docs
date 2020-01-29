---
title: "Billing"
order: 252
page_id: "billing"
tags: 
  - "pro"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Movember's confidence to upgrade"
    url: "https://www.getpostman.com/case-studies/movember.pdf"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Atlassian's journey to Postman Enterprise"
    url: "https://www.youtube.com/watch?v=wYBZrdukack"

---

Postman offers a number of built-in functions to ensure a streamlined, self-serve billing process.

## Contents

* [Billing dashboard](#billing-dashboard)

    * [Viewing account history](#viewing-account-history)

    * [Viewing past invoices](#viewing-past-invoices)

    * [Managing overages](#managing-overages)

* [Payments](#payments)

    * [Managing cards](#managing-cards)

    * [Adding custom information to invoices](#adding-custom-information-to-invoices)

    * [Failed payments](#failed-payments)

* [Team and plan changes](#team-and-plan-changes)

    * [Changing your plan](#changing-your-plan)

    * [Changing billing cycle](#changing-billing-cycle)

    * [Purchasing monitoring blocks](#purchasing-monitoring-blocks)

* [Next steps](#next-steps)

## Billing dashboard

Postman's [billing dashboard](http://go.postman.co/billing) provides a number of ways to manage your team's billing.

### Viewing account history

In your [billing dashboard](http://go.postman.co/billing), select **Account History**. This page allows you to quickly note your team's historical billing activity, as well as the day and time actions took place.

[![account history](https://assets.postman.com/postman-docs/account-history.jpg)](https://assets.postman.com/postman-docs/account-history.jpg)

Items such as updates to your Postman subscription, card changes, payments, and charges are all listed in chronological order for your reference.  

### Viewing past invoices

In your [billing dashboard](http://go.postman.co/billing), select **Invoices**. To get a copy of an invoice, hover over the listing on the page and select **Get Invoice**.

[![invoices](https://assets.postman.com/postman-docs/invoices.jpg)](https://assets.postman.com/postman-docs/invoices.jpg)

To add or edit the information on an invoice, see [adding custom information to invoices](#adding-custom-information-to-invoices).

### Managing overages

In your [billing dashboard](http://go.postman.co/billing), select **Overages**. Check or uncheck the box to enable or disable monitoring overages for your team.

[![monitoring overages](https://assets.postman.com/postman-docs/monitoring-overages.jpg)](https://assets.postman.com/postman-docs/monitoring-overages.jpg)

> If your API development pipeline is dependent on Postman monitoring, disabling overages may cause unintended consequences. To avoid this as well as potentially fluctuating pay-as-you-go charges, check out [pre-paid monitoring blocks](/docs/postman/monitors/intro-monitors/#pricing).

## Payments

Postman offers various payment options dependent on plan type. Postman Pro is card-only, while Postman Enterprise can be purchased via card or invoice.

### Managing cards

In order to add, remove, or set a default card, select **Payment Methods** in your [billing dashboard](http://go.postman.co/billing).

To add, click **Add A New Card**.

To remove, hover over the card in question and select the trash can icon.

To set a card as default, hover over the card and **Set as Default**.

[![payment methods](https://assets.postman.com/postman-docs/payment-methods.jpg)](https://assets.postman.com/postman-docs/payment-methods.jpg)

### Adding custom information to invoices

To add or edit the information on an invoice, navigate to your [billing dashboard](http://go.postman.co/billing) and select **Invoices** > **Edit Invoice Details** > **Billing Details**.

Add or update your billing email, company name, address, and (if applicable) VAT ID, then **Save Changes**. All future [invoices](http://go.postman.co/billing/invoices) will have the updated copy. To modify an existing invoice, [submit a request](https://support.getpostman.com/hc/en-us).

[![billing details](https://assets.postman.com/postman-docs/billing-details.jpg)](https://assets.postman.com/postman-docs/billing-details.jpg)

### Failed payments

If you have a card on file, Postman will automatically attempt 3 times to charge it. If this is unsuccessful, team members with [billing privileges](/docs/admin/billing/) will be notified via email.

[![failed payment email](https://assets.postman.com/postman-docs/failed-payment-email.jpg)](https://assets.postman.com/postman-docs/failed-payment-email.jpg)

If payment is unsuccessful, Postman offers a grace period of 10 days to avoid service disruption. For invoice-based teams, this means 10 days following the due date listed on the invoice.

> All team members are notified in the event of non-payment and subsequent service deactivation in the Postman app.

## Team and plan changes

You can change your team's plan and billing cycle in the [billing dashboard](https://app.postman.co/billing/overview). To upgrade to Postman Enterprise, [email the team](mailto:thepostmanteam@postman.com).

### Changing your plan

To change your plan, navigate to your [billing dashboard](https://app.postman.co/billing/overview), then click **...** > **Change Plan**. Select your desired plan from the drop-down and choose **Annual** or **Monthly** for your billing cycle. Adjust your team size, then **Proceed** to confirm changes.

[![change plan](https://assets.postman.com/postman-docs/change-plan-new.jpg)](https://assets.postman.com/postman-docs/change-plan-new.jpg)

### Changing billing cycle

Monthly teams can switch to an annual plan at any time by navigating to your [billing dashboard](https://go.postman.co/billing/overview) and selecting **...** > **Change Plan**.

[![change plan](https://assets.postman.com/postman-docs/change-plan-new.jpg)](https://assets.postman.com/postman-docs/change-plan-new.jpg)

> Annual teams can switch to a monthly plan at the end of the current billing cycle. The number of days left in your current billing cycle appears under **Upcoming Invoice**.

### Purchasing monitoring blocks

Postman Enterprise teams are allotted 100,000 monitoring calls per month at no extra charge. Postman Pro teams are allotted 10,000 monitoring requests.

Unless monitoring overages are [disabled](/docs/postman-pro/managing-pro/billing#managing-overages), you will be charged on a pay-as-you-go basis. See **Additional monitoring calls** on the [pricing page](https://www.getpostman.com/pricing).

To purchase monitoring blocks, go to [monitoring usage details](http://go.postman.co/usage/monitors) > **Set monitoring block count**.

[![monitoring block purchase](https://assets.postman.com/postman-docs/monitoring-block-purchase.jpg)](https://assets.postman.com/postman-docs/monitoring-block-purchase.jpg)

## Next steps

To find information on team management, see [Managing your team](/docs/postman/collaboration/team-settings/).

To learn more about the billing team role, see [Roles and Permissions](/docs/postman/collaboration/roles-and-permissions/).
