<mark>**Note that this document order from FP4 -> FP1**</mark>

# **FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 

Please sign up for the study at [https://tinyurl.com/pui-study](https://tinyurl.com/pui-study) to allow us to use your submission to create a better GenAI assistant for designers!

## Part 1: Website Description

Describe your website (300 words).

* What is the purpose of your website?   
* Who is the target audience?  
* What information do you convey with your website?   
* How is it interesting and engaging? 

## Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

1. Interaction type. Click on X on page Y / scroll on page X, etc.  
2. 

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. Name of tool1  
   * Why did you choose to use it over other alternatives? (2 sentences max)  
   * How you used it? (2 sentences max)  
   * What does it add to your website? (2 sentences max)  
2. Name of tool2

## Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

## Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max)

## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (a page max, \~500 words).

### ChatGPT Usage
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that …  
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that …  
* I critiqued/evaluated the generated suggestions before incorporation by … For example, this tool once suggested … but I modified/rejected the suggestion because …  
* I accepted the generations when … This tool did/did not influence my final design and implementation plan because … For example, this tool once suggested … and I adjusted my design according to the suggestion because … 
* The pros and cons of using this Generative AI tool: …

***Usage Experiences by Project Aspects***

| Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Usage<sup>1</sup> | \[yes/no\] because … | \[yes/no\] because … | \[yes/no\] because … | \[yes/no\] because … | \[yes/no\] because … |
| Reduce/Improve Productivity<sup>2</sup> | \[rating\] because … | \[rating\] because … | \[rating\] because … | \[rating\] because … | \[rating\] because … |

[1] I used / did not use this tool for X aspect of the project because …  
[2] This tool makes my productivity for X aspect (1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved)

***Prompts and Chat History Links***

Attach all the prompts you’ve used (e.g., for ChatGPT you can anonymously [share](https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq) your chat history).


### Add more subsections for the GenAI tools you've used, e.g., Copilot, etc.

Copy all the content under the [ChatGPT Usage](#chatgpt-usage) section to answer the same questions for this tool.


---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.



## Implementation Plan Updates

- [ ] ...

## Generative AI Use Plan Updates

- [ ] ...

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

## Project Description

Briefly restate your motivation and a short description of your project.

## High-Fi Prototypes

### *Prototype 1*
This is a design for my portfolio. It mainly highlights the projects I have done. The design is aiming for a simplistic approach so the user would not get lost in navigation. There are four main sections: profile, work, resume, and contact. 

![prototype1](./images/old1.PNG)
![prototype2](./images/old2.png)

The first design uses a numerical loading screen and the second design uses a visual, color change, loading screen. The layout of the main page is also slightly different. Although the designs currently look a bit simple, there will be animations that separate each section and interactive elements when the viewer interacts with the page. 


## Usability Test

I scheduled meetings with the participants who were interested in my portfolio. I would ask each participant what they typically want to see in a portfolio. Then, I would start the prototype for them and observe how they could interact with it. Ultimately, I would ask them about their feedback and possible iterations. The feedback they gave was very constructive. Firstly, it was suggested that the resume should be on a separate page because it is usually seen as a separate document. Secondly, they found the Figma demo hard to follow since the sections are not separated. However, this should not be the problem if interactive animations are applied. Thirdly, for the overall layout, they suggested I should use the same font so it is not too overwhelming and shows a uniform design. Fourthly, there should be more visual hints on the main page because they might not know what to do at first. Filthy, for the work section make sure all three sections are in the same hierarchy so they do not look like subcategories. 


## Updated Designs

![updated prototype1](./images/new1.PNG)
![updated prototype2](./images/new2.PNG)
Here is the updated version of my designs. For those designs, the work section was redesigned, the slide bar was included, font sizes were changed, and the resume was moved to another page. 

## Feedback Summary

During the lab, I did not receive much feedback. It was mentioned that the size text is a bit too big and it bit too much. I will consider that feedback in refining my designs. 



## Milestones

Before going straight into codes, I wish to explore the libraries more. I did some research beforehand but there is more to learn. From now until November 15th, I will do more research on the libraries and get started on my HTML. From November 15th to 22nd, I will finish up HTML and CSS, and from November 22nd to December 6th, I will finish Javascript and implement those libraries. Since I am working on a personal portfolio, I am considering mainly using GSAP and ScrollReveal; those libraries would be available to perform most of my functionalities. I also use Anime.js, Three.js, and Pixijs for any missing functionalities. 


### *Implementation Plan*

Before going straight into codes, I wish to explore the libraries more. I did some research beforehand but there is more to learn. From now until November 15th, I will do more research on the libraries and get started on my HTML. From November 15th to 22nd, I will finish up HTML and CSS, and from November 22nd to December 6th, I will finish Javascript and implement those libraries. 


### *Libraries and Other Components*

Since I am working on a personal portfolio, I am considering mainly using GSAP and ScrollReveal; those libraries would be available to perform most of my functionalities. I also use Anime.js, Three.js, and Pixijs for any missing functionalities. 


## Generative AI Use Plan

Generative AI can definitely be helpful when it comes to this project. To start the project, I may use it to search for possible libraries and ways to add them to my code. When I am facing problems adding one, I can use generative AI as a private tutor to teach me step by step. I may also use it to help me debug or give me constructive feedback. However, Generative AI would not be able to help me understand the contents. Since adding libraries is a new concept, I should go over the codes generated and understand them line by line. To use it responsibly, I should always disclose when using AI to generate content or solutions, ensuring others understand the source of information and validate the information provided by AI.

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1*

![Idea 1 sketches](./images/design1.JPG)

This is my first proposal for the portfolio design. It is mainly focused on page transitions and page linking. You will start the portfolio with a loading screen which includes the loading percentage and a brief description of myself. Then it will bring you to the main page which includes a header that stays on the top of the page. In the header you may see that description again and a selection of categories (about, work, resume, and contact). If you click on any of the categories, you will be taken to the related page. If you scroll down on the main page, you can see the vision statement, the About section that introduces my background as a designer, and ways to contact me. When you click on the work section, it will bring you to see the subcategories, current work, and previous work. If clicked, it will bring you to the linked gallery page. The main interaction that takes place in this design is the transition between pages and how one-page links to another. 


### *Idea 2*
![Idea 2 sketches](./images/design2.JPG)

This is my second proposal for the portfolio design. Unlike the first one, this one was simplified into one main page so that users do not have to go through a complex process of navigation. This might be seen as an interactive resume. The site will first start with a loading screen that shows the loading percentage, a description of myself, and my vision statement. Once it is fully loaded, the loading number will turn into a “Start” button that can be clicked to bring it to the main page. On the main page, there will be a header on the top that includes, About, Work, and Contact. On the page, it shows the category information accordingly. For the work section, it will showcase a selection of my highlighted works and subcategories of UI/UX and industrial design. 


### *Idea 3*

![Idea 3 Sketches](./images/design3.JPG)

This is my third design, which takes a more creative and innovative approach to user navigation. The main concept revolves around a scrolling ball that users can control seamlessly using either a trackpad or keyboard shortcuts. This unique feature allows for an engaging and intuitive browsing experience, as users can easily scroll forward and backward through different sections of the site.

The journey begins with the About section, providing a personal introduction that sets the stage for what follows. This is followed by my vision statement, which outlines my goals and aspirations in a compelling manner. The design then transitions to showcase my work, displayed individually and in chronological order. This chronological presentation not only highlights my growth and development over time but also tells a story about my evolving skills and experiences. Finally, users will find my contact information, easily accessible to facilitate communication. This structured yet dynamic flow encourages users to immerse themselves in my narrative while navigating through the content.

## Feedback Summary

From the critique, I have learned the importance of including keyboard shortcuts in my designs. While many users today prefer using a trackpad or a mouse to navigate through websites, it's essential to recognize that the keyboard serves as a vital alternative. This is especially true for elderly users or those with disabilities, for whom keyboard shortcuts can significantly enhance accessibility and overall user experience.

Moreover, I received valuable feedback on my first and second designs, which, while effective, resembled resumes more than engaging web interfaces. To make my designs more captivating, I should consider incorporating a wider array of interactive elements. Interactions don't need to be limited to basic effects, such as pop-outs or color changes upon hovering; there's an opportunity to think creatively about user engagement. For instance, I could explore audio interactions that add another layer of depth, or even consider animating the entire screen in a way that captures users’ attention and makes the experience more immersive. By expanding my approach to interaction design, I can create a more dynamic and inclusive environment that caters to a broader audience.



## Feedback Digestion


After the critique session, I feel much more confident in pursuing my second design idea, as it garnered the most positive feedback from my peers. This response has reinforced my belief that it has the potential to resonate well with users. I plan to incorporate keyboard shortcuts thoughtfully, aligning them with specific functions to enhance usability. For instance, the up and down arrow keys can serve as direct replacements for scrolling with the trackpad, making navigation smoother and more intuitive. Additionally, I can implement number keys to allow users to jump to corresponding sections or pages, further streamlining the browsing experience.

To enrich the design, I will also focus on adding more interactive elements. Color will play a significant role in this approach. For example, if the portfolio's color theme is centered around vibrant orange, I envision an interaction where hovering over a text element triggers an orange background to appear, creating a visually cohesive effect. When a user clicks on that text, the page will transition to a full orange screen before revealing the content, adding a layer of excitement to the navigation.

Furthermore, to make specific sections more engaging, I plan to incorporate animations that relate directly to the content. For instance, when discussing my ski helmet design, I could showcase an animation of a skier gracefully navigating down a slope, visually representing the product in action. Similarly, when I delve into my musical projects, I could include background music that complements the discussion, enriching the overall experience and drawing users deeper into my creative world. These enhancements will not only make my portfolio more dynamic but also create a memorable interaction that highlights my unique style and skills.