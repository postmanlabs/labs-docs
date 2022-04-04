---
title: "Billing"
order: 123
updated: 2022-03-17
page_id: "billing"
tags:
  - "pro"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: link
    name: "Postman Pricing"
    url: "https://www.postman.com/pricing/"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Announcing updated Postman plans and pricing"
    url: "https://blog.postman.com/announcing-updated-postman-plans-and-pricing/"

---

Postman provides a self-serve billing process. Refer to the following sections for guidance on managing your account, plan, and payment.

Contact Postman's support team for help with any account or billing issues. Navigate to Postman's [Support Center](https://www.postman.com/support/) and select **Submit a Request**.

> Check out [Postman's Help Center](https://support.postman.com/hc/en-us) for [Postman billing and payment FAQs](https://support.postman.com/hc/en-us/categories/115000609205-Billing-and-Payment).

## Contents

* [Billing dashboard](#billing-dashboard)

    * [Viewing billing overview](#viewing-billing-overview)

    * [Managing add-ons](#managing-add-ons)

    * [Viewing account history](#viewing-account-history)

    * [Viewing past invoices](#viewing-past-invoices)

* [Payments](#payments)

    * [Managing cards](#managing-cards)

    * [Using the Pay Now option](#using-the-pay-now-option)

    * [Paying by invoice](#paying-by-invoice)

    * [Adding custom information to invoices](#adding-custom-information-to-invoices)

    * [Failed payments](#failed-payments)

* [Team and plan changes](#team-and-plan-changes)

    * [Changing your plan](#changing-your-plan)

    * [Setting instructions for next billing cycle](#setting-instructions-for-next-billing-cycle)

    * [Changing billing cycle](#changing-billing-cycle)

    * [Purchasing add-ons](#purchasing-add-ons)

    * [Utilizing auto-flex](#utilizing-auto-flex)

        * [Opting in to auto-flex](#opting-in-to-auto-flex)

        * [Billing for auto-flex](#billing-for-auto-flex)

* [Next steps](#next-steps)

## Billing dashboard

The Postman [billing dashboard](http://go.postman.co/billing) enables you to manage your team's billing.

### Viewing billing overview

When navigating to your [billing dashboard](http://go.postman.co/billing), you will first see your billing overview. You can view the details of your Postman plan, including your subscription cycle and a calculation of your expected cost upon renewal.

<img alt="Billing overview" src="https://assets.postman.com/postman-docs/billing-plan-and-payments-dash-v9.1.jpg" />

### Managing add-ons

In your [billing dashboard](http://go.postman.co/billing), select **Resource usage** on the left to view your team's usage of mock servers, monitoring, custom domains, the Postman API, serverless requests, integrations, and the cloud agent.

<img alt="Add-ons usage and purchase" src="https://assets.postman.com/postman-docs/resource-usage-9.13.jpg" />

> Select **View detailed usage** next to **Monitoring Usage** to view your team's active monitors and their impact on your team's overall usage during the current billing period.

You can opt to allow or disallow overages for mock server and monitor usage by selecting the icon to the right of each item. If enabled, you will be charged on a pay-as-you-go basis.

You can also [Purchase Add-ons](#purchasing-add-ons).

> If your API development pipeline is dependent on Postman monitoring, disabling overages may cause unintended consequences. To avoid this as well as potentially fluctuating pay-as-you-go charges, consider adding [pre-paid monitoring blocks](#purchasing-add-ons) to your team plan.

### Viewing account history

In your [billing dashboard](http://go.postman.co/billing), select **Plan and payments** on the left, then **History**.

<img alt="Account history view" src="https://assets.postman.com/postman-docs/billing-history-v9.1.jpg" />

Items such as updates to your Postman subscription, card changes, payments, and charges are all listed in chronological order.

### Viewing past invoices

In your [billing dashboard](http://go.postman.co/billing), select **Plan and payments** on the left, then **Invoices**. You can get a copy of your past invoices by selecting the download icon to the right of the invoice you would like to retrieve.

<img alt="Invoices view" src="https://assets.postman.com/postman-docs/billing-invoices-v9.1.jpg" />

To add or edit the information on an invoice, see [adding custom information to invoices](#adding-custom-information-to-invoices).

## Payments

Postman offers various payment options dependent on your plan type.

### Managing cards

In your [billing dashboard](http://go.postman.co/billing), select **Plan and payments** on the left, then **Payment methods**.

To add, select **Add Payment Method**.

To remove, hover over the card in question and select **Delete Payment Method**.

To set a card as your primary, hover over the card and **Set as Primary**.

<img alt="Payment methods view" src="https://assets.postman.com/postman-docs/payment-methods-page.jpg" />

### Using the Pay Now option

In some circumstances, including an overdue or [failed payment](#failed-payments), you may receive an invoice for your Postman payment. From the invoice, select **Pay Now** to pay immediately using [your card](#managing-cards) or Apple Pay or Google Pay (if supported).

### Paying by invoice

> Invoicing is available for Postman Enterprise teams only. If you are a new Enterprise customer, contact the [Postman Sales team](https://www.postman.com/pricing/get-started-postman-plans/) to get started. You will receive a response within three business days. If you are an existing Enterprise customer, submit a request to the [Postman Support team](https://support.postman.com/hc/en-us) to be invoiced instead of automatically charged.

You can pay invoices online, via ACH, or via wire transfer. Postman sends invoices to the billing email address listed in your [billing details](http://go.postman.co/settings/team/billing-details). The invoice includes offline payment instructions. View your pending payments in your [billing dashboard](http://go.postman.co/billing).

### Adding custom information to invoices

In your [billing dashboard](http://go.postman.co/billing), select **Plan and payments** on the left, then **Invoices**. Select **Edit billing information**.

Add or update your company name, billing email, address, and your VAT ID if applicable, then select **Save**. All future [invoices](https://go.postman.co/billing/invoices) will have the updated copy. To modify an existing invoice, submit a request to [Postman support](https://support.postman.com/hc/en-us).

<img alt="Edit billing details" src="https://assets.postman.com/postman-docs/update-billing-details-v9.jpg" width="500px"/>

### Failed payments

If you have a card on file, Postman will automatically attempt three times to charge it. If this is unsuccessful, team members with billing privileges receive an email notification. Use the link in the email to access and pay for your [invoice](#using-the-pay-now-option).

<img alt="Failed payment email" src="https://assets.postman.com/postman-docs/billing-email-payment-declined-v9.1.jpg" width="400px"/>

If payment is unsuccessful, Postman offers a grace period of 21 days to avoid service disruption. For invoice-based teams, this means 21 days following the due date listed on the invoice.

> All team members receive a notification in the event of non-payment and service deactivation in Postman.

## Team and plan changes

You can change your team's plan and billing cycle in your [billing dashboard](https://go.postman.co/billing/overview).

### Changing your plan

To change your plan right away, navigate to your [billing dashboard](https://go.postman.co/billing/overview) and select **Edit Plan** on the right.

<img alt="Edit plan page" src="https://assets.postman.com/postman-docs/billing-edit-plan-v9.1.jpg"/>

You can opt to apply changes right away or on renewal. You can adjust your team size, billing frequency, and plan type. Select **Next** to adjust your team's add-ons, including monitoring blocks, mock server blocks, and custom domains. Select **Next** to then **Confirm Changes**.

The cost of your new plan and any new seats, if applicable, are prorated based on the time left in your team's billing cycle.

> To upgrade to Postman Enterprise, [contact Postman's sales team](mailto:sales@postman.com).

<!-- -->

> Certain changes can only be applied to your team upon renewal. If you make adjustments to your plan that can't be applied right away, and have **Immediately** selected, you will see a prompt to switch your selection to **On renewal**.

### Setting instructions for next billing cycle

To set instructions about what will happen at the end of your current billing cycle, navigate to your [billing dashboard](https://go.postman.co/billing/overview) and select **Set instructions** on the right under your subtotal.

<img alt="Set instructions in billing dashboard" src="https://assets.postman.com/postman-docs/billing-overview-set-instructions-v9.1.jpg"/>

You can view your current plan and opt to **Edit Standing Instructions**. Select your preferred option from the drop-down menu, then select **Proceed** to move forward with your plan changes.

<img alt="Set instructions for next cycle" src="https://assets.postman.com/postman-docs/billing-set-instructions-v9.1.jpg" width="400px"/>

> You can change your standing instructions at any time before the end of your current billing cycle.

### Changing billing cycle

Monthly teams can switch to an annual plan at any time by navigating to the [billing dashboard](https://go.postman.co/billing/overview) and selecting **Edit Plan** on the right.

Select to pay **Monthly** or **Annual** and confirm your changes. Note that annual teams can only switch to a monthly plan at the end of their current billing cycle. You can find the end date of your current billing cycle under **Overview**.

<img alt="Edit plan billing frequency" src="https://assets.postman.com/postman-docs/billing-dashboard-edit-plan-billing-frequency-v9.1.jpg" width="400px"/>

### Purchasing add-ons

The base number of monitoring requests, mock server calls, and custom domains included in your plan depends on your [plan type](https://www.postman.com/pricing). You can allow or disallow overages for monitoring and mock server calls by [managing your team's add-ons](#managing-add-ons). If enabled, you will be charged on a pay-as-you-go basis.

You can purchase more blocks of monitoring requests, mock server calls, and custom domains by navigating to your [billing dashboard](http://go.postman.co/billing), selecting **Resource usage** on the left, then **Purchase Add-ons** on the right.

<img alt="Add-ons purchase form" src="https://assets.postman.com/postman-docs/billing-edit-plan-add-ons-v9.1.jpg"/>

Update the number of monitoring blocks, mock server blocks, and custom domains you would like to have included in your team plan, then select **Next** to confirm your changes.

### Utilizing auto-flex

[Auto-flex](https://learning.postman.com/auto-flex-policy/) is a flexible billing feature available to Postman teams. With auto-flex enabled, your team admins can add users without having to pay in advance for more seats. Instead, you can use auto-flex to see the value of adding users to your Postman team, and opt to retain or remove them before being [billed](#billing-for-auto-flex).

> Auto-flex is automatically enabled for all Postman Basic and Professional plans purchased after April 8, 2021. Teams created before this date can opt in by enabling auto-flex via their [billing dashboard](http://go.postman.co/billing). All teams will have auto-flex automatically enabled when their plan first renews after July 1, 2021.

#### Opting in to auto-flex

You can enable auto-flex for your team by navigating to your [billing dashboard](http://go.postman.co/billing).

<img alt="Auto-flex opt in early notification" src="https://assets.postman.com/postman-docs/auto-flex-opt-in-notification-v9.1.jpg" />

Select **Get Early Access**.

<img alt="Auto-flex opt in confirmation" src="https://assets.postman.com/postman-docs/opt-in-to-auto-flex-modal.jpg" width="400px"/>

Select to **Agree to Auto-Flex's terms and conditions**, then select **Get Early Access**.

> View [Postman's auto-flex team policy](https://learning.postman.com/auto-flex-policy/).

#### Billing for auto-flex

Your auto-flex billing cycle is dependent on your team's plan:

* Monthly plans are charged for newly added users on a monthly basis.

* Annual plans are charged for newly added users on a quarterly basis.

At any time during your auto-flex billing cycle, team admins can add users to your team regardless of available seats.

Before your auto-flex billing cycle renews, all billing and admin team members receive a notification about any new users you added during that time period.

> Annual plans receive a notification two weeks before their quarterly cycle renews, and monthly plans receive a notification one week before their monthly cycle renews.

You can use this reminder to make any necessary changes to your team before the end of your current auto-flex cycle, when you will be billed for any newly added users.

> If you have already been billed for the users you added and retained in an earlier auto-flex cycle, you can't remove those slots until your plan renews.

You won't be billed if the number of users has remained unchanged during your auto-flex cycle, or if you remove any additional users prior to auto-flex billing.

> If your team incurs any overages and you have an auto-flex bill for that cycle, your invoice will combine your overage charges with your auto-flex charges.

<img alt="Auto-flex email notification" src="https://assets.postman.com/postman-docs/auto-flex-email-notification-9.13.jpg" width="400px"/>

In your [billing dashboard](http://go.postman.co/billing), you can view:

* Your current number of additional team members
* How much you will be billed at the end of your cycle (unless you add or remove team members in the interim)
* Additional information about your auto-flex and regular billing cycles

<img alt="Billing overview with auto flex" src="https://assets.postman.com/postman-docs/auto-flex-dash-9.13.jpg" />

> [Contact Postman support](https://www.postman.com/support/) with any questions about auto-flex.

## Next steps

For information on team management, see [Managing your team](/docs/administration/managing-your-team/managing-your-team/).

To learn more about the billing team role, see [Roles and Permissions](/docs/collaborating-in-postman/roles-and-permissions/).
