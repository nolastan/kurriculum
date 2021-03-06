---
path: html-basics
title: "HTML Part 1: The Basics"
emoji: 🐣
objective: create a static web page including text and images that conforms to
  the HTML5 specification
media:
  - title: HTML & Hypertext
    url: https://player.vimeo.com/video/322701227
    source: Davey Strus
    note: In this first video, we're going to get started with HTML. By the end, you
      should be able to describe the role of HTML in authoring web content, and
      describe the different parts of an HTML element.
    type: Video
  - title: HTML Tags and Attributes
    note: What is HTML? A programming language? No, not a programming language—a
      markup language. Hypertext Markup Language. Markup, because we use tags to
      mark up the content of a document. This is a heading, that's a paragraph,
      and so on. HTML tells the web browser about your document's structure.
    source: Davey Strus
    url: https://player.vimeo.com/video/351431557
    type: Video
  - title: HTML Structure
    url: https://player.vimeo.com/video/351465940
    source: Davey Strus
    note: We understand tags and attributes. Now let's talk about the overall
      structure of an HTML page.
    type: Video
  - title: Marking Up Text
    url: https://player.vimeo.com/video/351686249
    source: Davey Strus
    note: >
      We know that HTML documents have a head, containing metadata and links to
      external files, and a body, where the actual content belongs. Let's look
      at some of the elements we can use to mark up that content.
    type: Video
  - title: Block and Inline Elements
    url: https://player.vimeo.com/video/351701865
    source: Davey Strus
    note: We've been happily nesting elements inside one another, and it's been fine.
    type: Video
  - note: We can do all kinds of fancy things with text now, but it's still just
      text. We want hypertext! For that, we need hyperlinks.
    source: Davey Strus
    url: https://player.vimeo.com/video/352314561
    title: Hyperlinks
    type: Video
  - title: HTML Lists
    url: https://player.vimeo.com/video/352063457
    note: We're making good progress on learning HTML, but our pages are still
      pretty boring, with just headers and paragraphs, with the occasional bold
      or italicized phrase. Let's spice things up with some lists. A mild spice,
      to be sure, but a spice nonetheless.
    source: Davey Strus
    type: Video
  - title: HTML Element/Tag Reference
    url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
    source: Mozilla Developer Network
    note: A useful resource
    type: Article
  - title: HTML 5 Reference
    url: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
    source: Mozilla Developer Network
    note: A useful reference
    type: Article
  - title: The Fundamentals - HTML + CSS
    url: https://syntax.fm/show/158/the-fundamentals-html-css
    source: Syntax.fm
    note: A podcast about HTML
    type: Podcast
  - title: Walkthrough
    url: https://kenzie.zoom.us/rec/play/tJEqcrqrpzg3HdaTuQSDU_MvW9XpKq2sg3MZr_RcxUyzUXALZgD3ZrMUNufIRnp2wP_H8knOphgs9ZeA?continueMode=true&_x_zm_rtaid=uZdXCtwnQGG8ievNp6d14w.1596132496401.eeb1c7d36dbac0098b58ffa077f335c8&_x_zm_rhtaid=82
    source: Randy Cox
    note: Randy's live demo to the July 2020 Cohort
    type: Video
---
# Intro

Let's take a dive into HTML (Hyper Text Markup Language). HTML is the markup language that provides us a structured way to create web pages. When we use the tags available to us through HTML we can control how almost everything is presented to the user via their web browser. Your web browser is what interprets the tags to present what the end user sees.

## HTML and its Tags

HTML is a markup language interpreted by the browser. It uses specific tags or elements to tell the browser how things should look when presented visually to the user. Lets take a look at some concepts behind how these tags work before we dive into actual tags.

***Not all tags in these examples are real HTML tags. They are being used to explain the concepts.***

Tags are surrounded by angle brackets. Notice the closing tag has the `/` character. This lets the browser know that this is the matching closing tag. Tags are almost always followed up with matching closing tags.


      <tag>some content</tag>

Tags can also be nested inside each other.

    <pizza>
        <topping>pineapple</topping>
        <topping>ham</topping>
        <topping>cheese</topping>
    </pizza>

Tags use something called attributes to add additional functionality or describe behavior.

A side note on HTML attributes: some attributes related to styling have been deprecated over time. It's best practices to do styling through CSS (Cascading Style Sheets). Some common attributes like border and align are examples of attributes that have been deprecated to enforce best practices of controlling this with CSS.


      <tag attribute="value">some content</tag>

Some tags are self closing. These tags are usually not intended to wrap content. The `<img>` tag is a common self closing tag. As you can see there is still a `/` at the end of the tag. Notice the use of attributes as well.

    
      <img src="path/to/image/file.jpg" alt="image description" />
# Basic HTML page structure

In this section we will take a look at the structure of an html file. We will discuss the basic tags needed to have a well formed page for display on the web. From this point on we will be speaking in context of HTML5.


## HTML basic example
      <!DOCTYPE html>
      <html>
      <head>
        <title></title>
      </head>
      <body>
      </body>
      </html>

**Lets take a look at some of these tags/elements**

💡 To learn about any HTML tag, enter `mdn.io/tag` in your browser’s URL bar. Replace *tag* with what tag you interested in. For example: [mdn.io/img](http://mdn.io/img) or [mdn.io/title](http://mdn.io/title).


## Doctype
`<!DOCTYPE html>` informs the browser which version of HTML will be used in this document. In this case we are declaring that we will be using HTML5. Doctype is special in that it’s not really considered a tag but a declaration. What you really need to understand about this tag/declaration is that it should be present and the first line in your HTML file.


## Html
`<html>` is the tag that represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element. That being said, notice the matching closing </html> tag on the last line.


## Head
`<head>` is that tag that contains descriptive information about your page like the page’s title `<title>`. This is also where you would include things like <meta> and style sheets. We will get into more of that stuff later in the curriculum. Notice the `<title>` tag has a closing tag, `</title>`, just like the `<html>` tag. 


[Recommended Reading](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)


## Title
`<title>` is the tag that defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text, and any contained tags are ignored. It is followed by the closing `</title>` tag.
## Body 
`<body>` represents the content of an HTML document. There can be only one `<body>` element in an HTML document. This is where the things you want people to see would go. I am going to stop pointing out the closing tags. I think you got it by now.
# Some common tags explained

Let's take some time to cover some of the most common HTML tags you will use when creating web applications. This will be an interactive lesson so we can see the result of using these tags in a browser. We will build a simple travel page for our example.


## Headings
The HTML `<h1>` – `<h6>` tags represent six levels of section headings. `<h1>` is the highest section level and `<h6>` is the lowest.


## Paragraphs
The HTML `<p>` tag represents a paragraph of text.


## Lists
HTML has the ability to display lists. Lists are typically ordered or unordered. `<ol>` represents an ordered and `<ul>` represents an unordered list. Ordered lists are numbered and unordered lists use some type of bullet. List items are represented by the `<li>` tag in both ordered and unordered lists.
    
## Links
Links are represented by the anchor tag ( `<a>`). The anchor tag creates a hyperlink. A hyperlink is a link from one page to another location or file, typically activated by clicking on a highlighted word or image on the screen. A hyperlink can take the user to other web pages, files, locations within the same page, email addresses, or any other URL. The text or element between the opening and closing `<a>` tag is what becomes the link.
    
**Basic anatomy of the anchor tag** `**<a>**`
There several attributes for an `<a>` tag. Let’s go over a few of the common ones.
        - **href** - The URL or destination hyperlink points to.
        - **target** - Specifies where to display the linked URL. Below are the most common values used.
            - **_self:** Load the URL into the same browser window as the current one. This is the default behavior if the target attribute is not used.
            - **_blank:** Load the URL into a new browser window or tab based on how the users browser is configured.

[Further Reading on the `<a>` tag →](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

**Basic anchor examples**

    <!-- external hyperlink opens in a new window -->
    <a href="http://www.google.com" target="_blank">google.com</a>
    
    <!-- external link opens in the same window -->
    <a href="http://www.google.com">google.com</a>
    
    <!-- Email link that opens users default email client -->
    <a href="mailto:user@example.com">Email User</a>
    
    <!-- link to local another file on the same site -->
    <a href="my_html_file.html">go to my_html_file</a>
    
    <!-- links to element on this page with id="page-section" -->
    <a href="#page-section">Link to page section</a>
    
    <!-- External link that opens in a new window/tab -->
    <!-- using an image instead of text -->
    <a href="https://developer.mozilla.org/en-US/" target="_blank">
      <img src="https://mdn.mozillademos.org/files/6851/mdn_logo.png"/>
    </a>


## Divs

The HTML `<div>` element is a generic container for content flow. We are not going to use this in our travel site but you will see it as we go through the curriculum. It is mainly used to group elements for styling and positioning.
The `<div>` is a block-level element. Browsers typically display the block-level element with a newline both before and after the element.
[Further reading on block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)

An example of a basic `<div>`:

        1. <div>
        2.   <p>Any kind of content here. Such as
        3.   <p> or <table> tags. You name it!</p>
        4. </div>


## Spans

The HTML `<span>` element is a generic container for content flow. similar to the `<div>`, we are not going to use this in our travel site but you will see it as we go through the curriculum. It is mainly used for styling purposes.

The `<span>` is an inline element. An inline element occupies only the space bounded by the tags that define the inline element. Basically that means you can wrap it around a word or something similar and it wont add new lines above and below the span. [Further reading on inline tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)

An example of a `<span>` element:

        1.   <p>Any kind of <span>content</span> here.</p>


# Further Reading

Read through [Internetting is Hard: Basic Web Pages](https://www.internetingishard.com/html-and-css/basic-web-pages/).  This will summarize and cover everything we talked about in this reading.


## Vocabulary
| Term                    | Definition                                                                                                                                           |
| ------ | ----- |
| **HTML**                | HyperText Markup Language                                                                                                                            |
| **Tag**                 | A specific type of HTML element with a meaning e.g. <div> <p> etc…                                                                                   |
| **Element**             | An instance of a tag in an HTML document.  This is the basic unit of a piece of HTML                                                                 |
| **href**                | Hypertext REFerence.  A reference to another element or page in hypertext                                                                            |
| <**head>**              | A top level HTML tag intended to contain metadata about the webpage, including the title, scripts, fonts, etc…                                       |
| <**body>**              | The main container element for a webpage.  It should be placed outside of and below the <head>.  All HTML content should live within the <body> tag. |
| <**div>**               | A divided block element.  This creates a full horizontal width container for HTML elements or text.                                                  |
| <**span>**              | An inline container element which by default has no size or formatting.  Used to wrap text or apply styling to a section.                            |
| **inline**              | An inline element occupies only the space bounded by the tags that define it.  Inline elements have no default size or shape.                        |
| <**p>**                 | A paragraph tag                                                                                                                                      |
| <**a href=””>**         | An anchor tag, used to create links to other pages or sections of HTML.<br>The href is the URL or path that you are linking to.                      |
| <**img src=”” alt=””>** | An Image tag, used to load an Image in HTML.  The src is the path or URL to the image.  The alt is the text displayed when you hover over the image. |


