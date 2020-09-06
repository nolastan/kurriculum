---
path: forms
date: 2020-09-06T15:08:19.470Z
title: Forms
---
# 📋 Forms

*As a result of completing the Forms lesson, students will be able to design accessible and engaging forms, and choose the appropriate field for collecting various types of information.*



[📺](https://www.youtube.com/watch?v=z9H7p1_iI14) [You Suck at Form Design](https://www.youtube.com/watch?v=z9H7p1_iI14) [](https://www.youtube.com/watch?v=z9H7p1_iI14) [((Probably))](https://www.youtube.com/watch?v=z9H7p1_iI14)



Forms are the primary way users provide information.

# Form Fields

![](https://paper-attachments.dropbox.com/s_384961FBBBD46E6F8BD319E69057F39099099AD0C8B590484353B51FDFEB8B0B_1598560203588_Unknown.png)

Forms consist of one or more *fields*. In a traditional, paper-based form, we might refer to fields as *boxes* or *blanks,* as in“check all the boxes” or “fill in the blanks.” When talking to web developers, we refer to fields as *inputs*, as in “the user inputs information.”



## Text Field

![](https://paper-attachments.dropbox.com/s_384961FBBBD46E6F8BD319E69057F39099099AD0C8B590484353B51FDFEB8B0B_1598560589851_image.png)

A text field is the most basic type of input. In HTML, the <input> tag defaults to a text field. Text fields are ideal for short, free-form text. *Free-form* here means that the user can type anything into the box.



![whimsical](https://paper-attachments.dropbox.com/s_7747184B7AC92FD1C6AF8A3A30DD37BC3D00981766077810C219AF88B185337C_1551369362483_whims.jpg "whimsical") In Whimsical, you can quickly insert a text field with the keyboard shortcut **P**.



If a keyboard user presses enter or return while focused on a text field, the form will submit. To enable multiple lines or paragraphs, use a text area.



## Text Area

![](https://paper-attachments.dropbox.com/s_384961FBBBD46E6F8BD319E69057F39099099AD0C8B590484353B51FDFEB8B0B_1598560546713_image.png)

Text areas are similar to text fields, except they allow for multiple lines of text. On Mac OS, users can resize text fields by clicking and dragging the diagonal lines at the bottom-right. With some assistance from JavaScript, developers can dynamically resize a text area based on how much text is entered. Text areas are ideal for long, free-form text.



Keyboard users can create new lines or paragraphs by pressing enter or return while focused on a text area, without the form submitting.



## Checkboxes

![](https://paper-attachments.dropbox.com/s_384961FBBBD46E6F8BD319E69057F39099099AD0C8B590484353B51FDFEB8B0B_1598562259671_checks.gif)

Checkboxes allow users to select one or more items from a list. Each checkbox should be accompanied by text.



A single checkbox (plus text) can exist on its own:

![](https://paper-attachments.dropbox.com/s_384961FBBBD46E6F8BD319E69057F39099099AD0C8B590484353B51FDFEB8B0B_1598561164879_image.png)



## Radio Buttons

![](https://paper-attachments.dropbox.com/s_384961FBBBD46E6F8BD319E69057F39099099AD0C8B590484353B51FDFEB8B0B_1598562478553_image.png)

Radio buttons might just look like round checkboxes, but there is a key difference: a user can only select one radio button from a list. In the physical world, radio buttons are sometimes called *bubbles.* Bubbles can be found on voting ballots and standardized tests such as the SAT and ACT.



## Dropdown

![](https://paper-attachments.dropbox.com/s_384961FBBBD46E6F8BD319E69057F39099099AD0C8B590484353B51FDFEB8B0B_1598572637124_image.png)

Dropdowns (or *select fields* in HTML) are functionally similar to radio buttons in that the user can select one item from a list. The user experience is slightly different because the options are only revealed upon activating the dropdown.



[Research from CXL](https://cxl.com/research-study/form-field-usability-buttons/) suggests that radio buttons are more efficient than dropdowns. Andrew Coyle, in [Design Better Forms](https://medium.com/nextux/design-better-forms-96fadca0f49c), suggests using a dropdown when you have more than 5 options. For more research-driven tips, read [Simple Rules for Designing Web & Mobile Forms](http://subtract.design/entry/forms/).



![whimsical](https://paper-attachments.dropbox.com/s_7747184B7AC92FD1C6AF8A3A30DD37BC3D00981766077810C219AF88B185337C_1551369362483_whims.jpg "whimsical") In Whimsical, you can quickly create additional dropdown options, checkboxes, or radio buttons using the return or enter key.



## Toggle

![](https://paper-attachments.dropbox.com/s_384961FBBBD46E6F8BD319E69057F39099099AD0C8B590484353B51FDFEB8B0B_1598627912550_image.png)

Functionally, a toggle is similar to a checkbox. You might think of them as “on and off switches.” Unlike the fields mentioned above, toggles are not available “out of the box” in HTML. Toggles require custom implementation by a web developer.



# Field States

In the previous lesson, we explored states in the context of screens. Each form field also has its own state.

![](https://paper-attachments.dropbox.com/s_384961FBBBD46E6F8BD319E69057F39099099AD0C8B590484353B51FDFEB8B0B_1598637631859_image.png)

**Try this:** in Whimsical, create a text field. In the context menu that appears when you select the field, select the *State* dropdown. Select each state, and observe how the text field changes.



# Labels & Placeholders

Labels and placeholders are often used interchangeably. This is unfortunate, because there are critical differences that impact accessibility and usability.

![](https://paper-attachments.dropbox.com/s_384961FBBBD46E6F8BD319E69057F39099099AD0C8B590484353B51FDFEB8B0B_1598638940644_image.png)

## Labels

The goal of a label is to communicate to the user what information they need to provide. In left-to-right languages such as English, labels can be placed above or to the left of a field. Labels can be accompanied by *help text* to provide further context.



![whimsical](https://paper-attachments.dropbox.com/s_7747184B7AC92FD1C6AF8A3A30DD37BC3D00981766077810C219AF88B185337C_1551369362483_whims.jpg "whimsical") In Whimsical, you can add a label from the context menu:

![](https://paper-attachments.dropbox.com/s_384961FBBBD46E6F8BD319E69057F39099099AD0C8B590484353B51FDFEB8B0B_1598639277348_20200828142747383.gif)



## Placeholders

Placeholders can be useful for indicating to the user what kind of information should be entered into the field. However, because placeholders disappear once text is entered, some experts advise against ever using placeholders.



* “Placeholder text within a form field makes it difficult for people to remember what information belongs in a field, and to check for and fix errors. It also poses additional burdens for users with visual and cognitive impairments.” — [Placeholders in Form Fields Are Harmful](https://www.nngroup.com/articles/form-design-placeholders/) from Nielson Norman Group



# Design Better Forms

It is hard to imagine that anyone actually *enjoys* filling out forms. Rather, they are viewed as a necessary evil. As a UX Designer, your goal should be to create apps that people *want* to use. How do we reconcile the necessity of forms with desirable user experience?



This is where creativity comes in. Many form fields could be presented in more engaging formats. Visuals, such as icons and illustrations, can communicate what is being asked while injecting a bit of fun.



Consider the example below. Compare it to the examples above for radio buttons and dropdowns. Which is more engaging?

![](https://paper-attachments.dropbox.com/s_384961FBBBD46E6F8BD319E69057F39099099AD0C8B590484353B51FDFEB8B0B_1598639986503_image.png)

For an in-depth look at a design team that iterated on their forms to make them more engaging, read [Beyond Likert scales: How a team made form-filling more fun](https://www.invisionapp.com/inside-design/beyond-likert-scales).

# Practice

![](https://paper-attachments.dropbox.com/s_384961FBBBD46E6F8BD319E69057F39099099AD0C8B590484353B51FDFEB8B0B_1598640867963_image.png)

1. Choose a sample form from [Elbowspace](https://www.elbowspace.com/FRHformexamples).
2. In a new Whimsical Wireframe, insert the URL of the sample using the Link tool (**K**) for reference.
3. Redesign the form in Whimsical.
4. Review the form, and consider how you can make it more engaging.