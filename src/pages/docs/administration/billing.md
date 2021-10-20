---
title: "Billing"
order: 123
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
    name: "Related Blog Posts"
  - type: link
    name: "Announcing updated Postman plans and pricing"
    url: "https://blog.postman.com/announcing-updated-postman-plans-and-pricing/"

---

Postman provides a self-serve billing process. Refer to the following sections for guidance on managing your account, plan, and payment.

You can contact Postman's support team for assistance if you encounter any account or billing issues. Navigate to Postman's [Support Center](https://www.postman.com/support/) and select **Submit a Request**.

> Check out [Postman's Help Center](https://support.postman.com/hc/en-us) for [Postman billing and payment FAQs](https://support.postman.com/hc/en-us/categories/115000609205-Billing-and-Payment).

## Contents

* [Billing dashboard](#billing-dashboard)

    * [Viewing billing overview](#viewing-billing-overview)

    * [Managing add-ons](#managing-add-ons)

    * [Viewing account history](#viewing-account-history)

    * [Viewing past invoices](#viewing-past-invoices)

* [Payments](#payments)

    * [Managing cards](#managing-cards)

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

The Postman [billing dashboard](http://go.postman.co/billing) allows you to manage your team's billing.

### Viewing billing overview

When navigating to your [billing dashboard](http://go.postman.co/billing), you will first see your billing overview. You can view the details of your Postman plan, including your subscription cycle and a calculation of your expected cost upon renewal.

<img alt="Billing overview" src="https://assets.postman.com/postman-docs/billing-dashboard-overview-v9.1.0.jpg" />

### Managing add-ons

In your [billing dashboard](http://go.postman.co/billing), select **Resource usage** on the left to view your team's additional features and their usage during your monthly billing period. These features include mock servers, monitoring, public documentation, the Postman API, custom domains, and integrations.

<img alt="Add-ons usage and purchase" src="https://assets.postman.com/postman-docs/resource-usage-page-v87.jpg" />

> Select **View detailed usage** next to **Monitoring Usage** to view your team's active monitors and their impact on your team's overall usage during the current billing period.

You can opt to allow or disable overages for mock server and monitor usage by selecting the icon to the right of each item. If enabled, you will be charged on a pay-as-you-go basis.

You can also [Purchase Add-ons](#purchasing-add-ons).

> If your API development pipeline is dependent on Postman monitoring, disabling overages may cause unintended consequences. To avoid this as well as potentially fluctuating pay-as-you-go charges, consider adding [pre-paid monitoring blocks](#purchasing-add-ons) to your team plan.

### Viewing account history

In your [billing dashboard](http://go.postman.co/billing), select **Plan and payments** on the left, then **History**.

<img alt="Account history view" src="https://assets.postman.com/postman-docs/plan-and-payments-history.jpg" />

Items such as updates to your Postman subscription, card changes, payments, and charges are all listed in chronological order.

### Viewing past invoices

In your [billing dashboard](http://go.postman.co/billing), select **Plan and payments** on the left, then **Invoices**. You can get a copy of your past invoices by selecting the download icon to the right of the invoice you would like to retrieve.

<img alt="Invoices view" src="https://assets.postman.com/postman-docs/plan-and-payments-invoices.jpg" />

To add or edit the information on an invoice, see [adding custom information to invoices](#adding-custom-information-to-invoices).

## Payments

Postman offers various payment options dependent on your plan type.

### Managing cards

In your [billing dashboard](http://go.postman.co/billing), select **Plan and payments** on the left, then **Payment methods**.

To add, select **Add Payment Method**.

To remove, hover over the card in question and select **Delete Payment Method**.

To set a card as your primary, hover over the card and **Set as Primary**.

<img alt="Payment methods view" src="https://assets.postman.com/postman-docs/payment-methods-page.jpg" />

### Paying by invoice

Invoicing is available for Postman Enterprise teams only. New customers can [contact the Postman Sales team](https://www.postman.com/pricing/get-started-postman-plans/) to get started and will receive a response within 3 business days. Existing Enterprise customers can [submit a request](https://support.postman.com/hc/en-us) to be invoiced instead of automatically charged.

You can pay invoices online, via ACH, or via wire-transfer. Invoices will be sent to your team's billing email address found in your [billing details](http://go.postman.co/settings/team/billing-details), and will include offline payment instructions. Pending payments can be found in your [billing dashboard](http://go.postman.co/billing).

### Adding custom information to invoices

In your [billing dashboard](http://go.postman.co/billing), select **Plan and payments** on the left, then **Invoices**. Select **Edit Billing Information**.

Add or update your billing email, company name, address, and (if applicable) VAT ID, then **Save**. All future [invoices](https://go.postman.co/billing/invoices) will have the updated copy. To modify an existing invoice, [submit a request](https://support.postman.com/hc/en-us).

<img alt="Edit billing details" src="https://assets.postman.com/postman-docs/update-billing-details-ex.jpg" width="550px"/>

### Failed payments

If you have a card on file, Postman will automatically attempt 3 times to charge it. If this is unsuccessful, team members with billing privileges will be notified via email.

<img alt="Failed payment email" src="https://assets.postman.com/postman-docs/failed-payment-email.jpg" width="500px"/>

If payment is unsuccessful, Postman offers a grace period of 10 days to avoid service disruption. For invoice-based teams, this means 10 days following the due date listed on the invoice.

> All team members are notified in the event of non-payment and subsequent service deactivation in Postman.

## Team and plan changes

You can change your team's plan and billing cycle in your [billing dashboard](https://go.postman.co/billing/overview).

### Changing your plan

To change your plan immediately, navigate to your [billing dashboard](https://go.postman.co/billing/overview) and select **Edit Plan** on the right.

<img alt="Edit plan page" src="https://assets.postman.com/postman-docs/billing-edit-plan-add-members-v9.1.0.jpg"/>

You can opt to apply changes immediately or on renewal. You can adjust your team size, billing frequency, and plan type. Select **Next** to adjust your team's add-ons, including monitoring blocks, mock server blocks, and custom domains. Select **Next** to then **Confirm Changes**.

The cost of your new plan and/or additional seats will be prorated based on the time left in your team's billing cycle.

> To upgrade to Postman Enterprise, [contact Postman's sales team](mailto:sales@postman.com).

<!-- -->

> Certain changes can only be applied to your team upon renewal. If you make adjustments to your plan that cannot be applied immediately, and have **Immediately** selected, you will be prompted to switch your selection to **On renewal**.

### Setting instructions for next billing cycle

To set instructions to determine what will happen at the end of your current billing cycle, navigate to your [billing dashboard](https://go.postman.co/billing/overview) and select **Set instructions** on the right under your subtotal.

<img alt="Set instructions in billing dashboard" src="https://assets.postman.com/postman-docs/billing-dashboard-set-instructions-v9.1.0.jpg"/>

You can view your current plan and opt to **Edit Standing Instructions**. Select your preferred option from the drop-down menu, then select **Proceed** to move forward with your plan changes.

<img alt="Set instructions for next cycle" src="https://assets.postman.com/postman-docs/billing-set-instructions-for-next-billing-cycle-v9.1.0.jpg" width="400px"/>

> You can change your standing instructions at any time before the end of your current billing cycle.

### Changing billing cycle

Monthly teams can switch to an annual plan at any time by navigating to the [billing dashboard](https://go.postman.co/billing/overview) and selecting **Edit Plan** on the right.

Select to pay **Monthly** or **Annual** and confirm your changes. Note that annual teams can only switch to a monthly plan at the end of their current billing cycle. You can find the end date of your current billing cycle under **Overview**.

<img alt="Edit plan billing frequency" src="https://assets.postman.com/postman-docs/billing-dashboard-edit-plan-billing-frequency-v9.1.jpg" width="400px"/>

### Purchasing add-ons

The base number of monitoring requests, mock server calls, and custom domains included in your plan depends on your [plan type](https://www.postman.com/pricing). You can enable or disable overages for monitoring and mock server calls by [managing your team's add-ons](#managing-add-ons). If enabled, you will be charged on a pay-as-you-go basis.

You can purchase additional blocks of monitoring requests, mock server calls, and custom domains by navigating to your [billing dashboard](http://go.postman.co/billing), selecting **Resource usage** on the left, then **Purchase Add-ons** on the right.

<img alt="Add-ons purchase form" src="https://assets.postman.com/postman-docs/billing-dashboard-edit-plan-add-ons-v9.1.0.jpg"/>

Update the number of monitoring blocks, mock server blocks, and custom domains you would like to have included in your team plan, then select **Next** to confirm your changes.

### Utilizing auto-flex

[Auto-flex](https://learning.postman.com/auto-flex-policy/) is a flexible billing feature available to Postman teams. With auto-flex enabled, your team admins can add users without having to pay in advance for additional seats. Instead, you can utilize auto-flex to determine the value of adding users to your Postman team, and opt to retain or remove them prior to being [billed](#billing-for-auto-flex).

> Auto-flex is automatically enabled for all Postman Team and Business plans purchased after April 8, 2021. Teams created before this date can opt in immediately by enabling auto-flex via their [billing dashboard](http://go.postman.co/billing). All teams will have auto-flex automatically enabled when their plan first renews after July 1, 2021.

#### Opting in to auto-flex

You can enable auto-flex for your team by navigating to your [billing dashboard](http://go.postman.co/billing).

<img alt="Auto-flex opt in early notification" src="https://assets.postman.com/postman-docs/auto-flex-opt-in-early-notification.jpg" />

Select **Get Early Access**.

<img alt="Auto-flex opt in confirmation" src="https://assets.postman.com/postman-docs/opt-in-to-auto-flex-modal.jpg" width="400px"/>

Select to **Agree to Auto-Flex's terms and conditions**, then select **Get Early Access**.

> View [Postman's auto-flex team policy](https://learning.postman.com/auto-flex-policy/).

#### Billing for auto-flex

Your auto-flex billing cycle is dependent on your team's plan:

* Monthly plans are charged for additional users on a monthly basis.

* Annual plans are charged for additional users on a quarterly basis.

At any time during your auto-flex billing cycle, team admins can add users to your team regardless of available seats.

Prior to your auto-flex billing cycle renewing, all billing and admin team members will be notified of any additional users you have added during that time period.

> Annual plans will be notified two weeks prior to their quarterly cycle renewing, and monthly plans will be notified one week prior to their monthly cycle renewing.

You can use this reminder to make any necessary changes to your team prior to the end of your current auto-flex cycle, which is when you will be billed for any additional users.

> If you have already been billed for the users you added and retained in a previous auto-flex cycle, you cannot remove those slots until your plan renews.

You will not be billed if the number of users has remained unchanged during your auto-flex cycle, or if you remove any additional users prior to auto-flex billing.

> If your team has incurred any overages and you have an auto-flex bill for that cycle, your overage charges will be combined with your auto-flex charges in your invoice.

<img alt="Auto-flex email notification" src="https://assets.postman.com/postman-docs/auto-flex-email-notification.jpg" width="500px"/>

You can view your current number of additional team members, how much you will be billed at the end of your cycle (unless you add or remove team members in the interim), and additional information about your auto-flex and regular billing cycles at any time in your [billing dashboard](http://go.postman.co/billing).

<img alt="Billing overview" src="https://assets.postman.com/postman-docs/billing-dashboard-overview-v9.1.0.jpg" />

> [Contact Postman support](https://www.postman.com/support/) with any questions regarding auto-flex.

## Next steps

For information on team management, see [Managing your team](/docs/administration/managing-your-team/managing-your-team/).

To learn more about the billing team role, see [Roles and Permissions](/docs/collaborating-in-postman/roles-and-permissions/).
