---
path: states
title: States
emoji: 🇺🇸
objective: ""
media:
  - url: https://www.youtube.com/watch?v=_lc97wTdd6M
    title: Designing Empty States
    type: Video
    source: UXClub
    note: Stop at 3:30, as the host starts to go off topic.

---

----------
![](https://paper-attachments.dropbox.com/s_F2D296587EDE698E68159655DF26C22688312CBD9817DF1852E353AAC8048E6C_1585593021641_Details_Intro.png)

# 👋🏾 Welcome to Details

It took us over twenty lessons to get to the *details* section of the Foundation Project. Why did we wait so long? David Holmgren explains in [*Permaculture Principles*](http://permacultureprinciples.com/principles/_7/) that "by stepping back, we can observe **patterns** in nature and society. These can form the backbone of our designs, with the **details** filled in as we go.” While Holmgren is referring to sustainable agriculture, this observation neatly applies to UX design. 


----------

In this lesson, we’ll consider some common states that a user might experience while using an app.

# Ideal State
![](https://imgr.whimsical.com/TYVUd9AcgEWyi1sMnXaFxp/png?objects=Ugqp6n4dXpRLAxs7tp24PN%2CW35idF3crNrFHc6gVtKroX%2CPmTzuyu2qpvePibzYnf7nE%2CAWCmM9qrovij9WpXCu3HxP%2CFWYmYpfbWZDmo3P5FLZA9R&scale=2&stag=548)


When we talk about *key screens* and the *happy path*, we’re generally talking about an ideal state. In *The Making of a Product Designer,* [*Chapter 6: Designing contextual states*](http://get.invisionapp.com/chapter-6-of-making-a-product-designer)*,* Scott Hurff suggests that “all UI states lead to the ideal state” so it makes sense to “start with this first, and let all of the other states fall into place as your designs get closer to solving your customer’s problem.” In other words, don’t get too distracted by the other states too early on. 

As usual, a designer’s life consists of striking a balance—in this case, when to pay attention to various levels of detail. 

# Empty State
## Initial Interactions

We’ve already discussed *onboarding*, but we were mostly concerned with ushering the user through initial steps critical to using the app. Onboarding is an ongoing process, though. Any time a user enters a new section of the app—a different tab in a navigation, for example—there is an onboarding opportunity in the form of an empty state. We call these moments *initial interactions*.

![](https://paper-attachments.dropbox.com/s_AD9225ECD4E5FE73B66C09AF552CBDFDBFDBF91DFA130587A63FE61DBBBD0C3F_1572132526285_image.png)


Moses Kim, in [Downplaying Empty States in Design](https://uxplanet.org/downplaying-empty-states-in-design-fc367212b493), suggests that "downplayed empty states are wasted opportunities.” Indeed, the empty state is a rare opportunity where as a designer you have lots of empty screen real estate to work with, with the goal of guiding the user along the intended path. This could take the form of a big ole arrow pointing at a “+” button, an example of what the screen will look like after some activity, or simply some helpful micro-copy.


## User-Cleared Data

The app you’re designing might have an opportunity for the user to clear a list. For example, an email inbox will be empty when the user has archived, deleted, or organized all of their emails. A grocery shopping app might have an empty list after the user purchases everything on their list.

In both of these examples, the user is highly engaged. This is an opportunity to “keep them in the flows your product has in place by doing the work for them,” according to Hurff. Rather than leaving “the onus on your customer to make the next leap,” guide them along. Kim adds that “A nicely placed encouragement can boost user confidence tremendously and also help work out user’s expectation for what’s coming.”

![](https://paper-attachments.dropbox.com/s_AD9225ECD4E5FE73B66C09AF552CBDFDBFDBF91DFA130587A63FE61DBBBD0C3F_1572132468885_image.png)


The grocery shopping app, for example, might suggest a recipe based on the purchased items or simply display an encouraging message, like “Bon Appetit!”


## No Results

We considered the *no results* state in the *Search & Filter* lesson. For a refresher, review [20 Best Practices for Mobile App Search](https://www.raywenderlich.com/726-20-best-practices-for-mobile-app-search).


# Error State
![](https://imgr.whimsical.com/TYVUd9AcgEWyi1sMnXaFxp/png?objects=W35idF3crNrFHc6gVtKroX%2C6ekUBRwf8nNQWAyu26VLfi%2CAWCmM9qrovij9WpXCu3HxP%2CFWYmYpfbWZDmo3P5FLZA9R%2CXBascWPvZEf1tF6hYsQgk8%2CUgqp6n4dXpRLAxs7tp24PN%2CPmTzuyu2qpvePibzYnf7nE&scale=2&stag=555)


You may recall from *Intro to UX* that [one of Nielson](https://en.wikipedia.org/wiki/Heuristic_evaluation#Nielsen)’[s nine heuristics for UI design](https://en.wikipedia.org/wiki/Heuristic_evaluation#Nielsen) is "Help users recognize, diagnose, and recover from errors.” In two upcoming lessons, *Forms* and *UX Writing*, we’ll consider error states in specific contexts.

For the most part, we won’t concern ourselves with error states too much in the Foundation Project. However, as a professional designer it will be your responsibility to consider error states. If you don’t, the engineers might be forced to patch together a less-than-ideal solution—or worse, neglect it altogether.


# Loading State

This is one of many areas where understanding both design and front-end engineering come in handy. Designers often neglect to include loading states in their designs, because we’re usually testing in contrived environments and using pre-loaded data. 

There are many ways to approach loading—including the classics like a spinner or progress bar. But there are also more effective solutions.

To help its California-based product teams better empathize with a global userbase, Facebook launched [2G Tuesdays](https://www.nbcnews.com/tech/social-media/facebooks-2g-tuesdays-slow-down-internet-employees-n452466). Employees can opt-in to experiencing what it’s like for users on slower connections to use the Internet. Perhaps it’s out of this experience that PMs prioritized a couple clever techniques to make load times *seem* faster:


## Skeleton screens

Luke Wroblewski, who coined the term in his blog post [Mobile Design Details: Avoid The Spinner](https://www.lukew.com/ff/entry.asp?1797), describes a skeleton screen as "a blank version of a page into which information is gradually loaded.” The logic here is that it “creates the sense that things are happening immediately as information is incrementally displayed on the screen.”


![](https://paper-attachments.dropbox.com/s_AD9225ECD4E5FE73B66C09AF552CBDFDBFDBF91DFA130587A63FE61DBBBD0C3F_1572480100934_image.png)


In the screenshot above, Facebook is showing a hint of what is loading in the main feed. This screenshot is taken from [Everything you need to know about skeleton screens](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a), which includes many examples and some helpful key takeaways.


## Optimistic Interaction

When you click the like button on Facebook, it may take a second or longer for your like to save to the database, and then for your browser to receive the successful response. A second is probably longer than the average Facebook user’s attention span, so clearly that won’t work.

The solution: optimism 😄 

According to Denys Mishunov in [True Lies Of Optimistic User Interfaces](https://www.smashingmagazine.com/2016/11/true-lies-of-optimistic-user-interfaces/), “Facebook updates the counter instantly, together with success color of the button, without waiting for the server’s response.” The result is that “the user does not perceive any wait time.” 

But what if it fails? Well, it’s just a “like,” after all. We should probably avoid optimistic interactions in more important scenarios, like sending a payment.


# Partial State

Not to be confused with the loading state, a partial state is on the path to the ideal state, but not there quite yet. For example, we might design a products page containing many products—but what if there’s only one?


![](https://paper-attachments.dropbox.com/s_AD9225ECD4E5FE73B66C09AF552CBDFDBFDBF91DFA130587A63FE61DBBBD0C3F_1572479287163_image.png)


Shane Doyle, in [From Designing for different states in the UI](https://uxdesign.cc/designing-for-different-ui-states-87d60130f85f), describes three questions to ask when designing partial states:


1. *"What does the screen look like if the user has only begun interacting with it?”*
2. *“What does the screen look like after the user has added only a single item to it?”*
3. *“How can we encourage the user to interact more?”*

Perhaps a more memorable way to approach partial states is to think about “One, Some, and Too Many,” which Vince Speelman lists as separate states in [The Nine States of Design](https://medium.com/swlh/the-nine-states-of-design-5bfe9b3d6d85).

# Practice

For these practice activities, either annotate a screenshot or create a wireframe.

## 1. Empty States

Find an empty state in your myKenzie portal, and redesign it to be more fun or useful.

## 2. Partial States

Have you ever thought you sent an email, only to find it was sitting in your *Drafts*? Most email clients neglect to design the *partial state* of having written an email, but never having sent it. Design this partial state for your favorite email app.


----------

