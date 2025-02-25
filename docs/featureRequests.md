Overview
---

We have recently signed a supplier of conjured items. This requires an update to our system.  Please read the [Gilded Rose specification first](./gildedRose.md) and then come back here for further requirements.

* You have been hired as software engineer working to add features to a legacy production system.  
* You will need to maintain existing functionality while adding features and improving maintainability.
* It is okay to consult Google, documentation, etc to do your job.
* You are not required to use Typescript.  A previous developer started the conversion, but did not finish before they left.
* Feel free to make any changes and improvements you wish and add any new code as long as everything
still works correctly.


## Discount section support:

* If the Quality or SellIn Date reaches zero, remove it from the on-sale section, and show it in the discount section.
* Add a numeric count of the On Sale and Discount Items to the tab headers using components from our chosen component library.

## Conjured item support:

* "Conjured" items degrade in Quality twice as fast as normal items
* An item can never have its Quality increase above 50, however "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.


## Technical Debt Log

* Our data is currently stored in the React component state.  We need a plan for implementing a more feature-rich 
datastore so we can add more functionality in the future.
