<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

![MIT License][license-shield]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/FurikakeOishi/comparableSummaries">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">OpenAI vs Wikipedia</h3>

  <p align="center">
   Comparing 2 Perspectives based off of the same data !
    <br />
    <br />
    <br />
   · <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
  </p>
</div>
 <br />
    



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]]

As most people, I find many topics peculiar & interesting and as a result I want to read more about them. Many of them have a Wikipedia article that covers the information regarding it but some articles do not cover the topic very well and just overcomplicate it.

This main goal of this app is to understand if theres a better way to summarize an article using OpenAI in coparison to Wikipedia's human-written summary.

<br />

### The process:
1. Enter an article or Randomize one from Wikipedia.
2. The app receives the main image and summary from Wikipedia.
3. The app generates an OpenAI prompt & an image based off the article.
4. In the lower section of the page it shows how similar the two articles are based on <a href="https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient">Dice's coefficient</a>. 

<br />

#### Sørensen–Dice coefficient

Dice's coefficient, as it's commonly known, is a similarity indexing method which compares 2 sets of data. In this case, it compares two sets of strings based on the number of common words, and the overall size of the sets.

It's formula is as follows given data sets A and B: 
```
Index = (2 * |A ∩ B|) / (|A| + |B|)

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## This project was built using:

 [![React][React.js]][React-url]

 [![Nest][Nest.js]][Nest-url]



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Examples

#### Check out some examples:


<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- GETTING STARTED -->
## Getting Started




### Installation

_To get a local copy up and running follow these simple steps:_

1. Get an API Key from [OpenAI's API](https://openai.com/blog/openai-api)
2. Clone the repo
   ```sh
   git clone https://github.com/FurikakeOishi/comparableSummaries.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.ENV`
   ```js
    API_KEY = 'YOUR API KEY HERE';
   ```
   
### Run the app
To run the app open two tabs.

1. In the first one run the command:  ```npm start```

2. In the second tab run the command:  ```npm run start:dev```


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License.




<!-- CONTACT -->
## Contact

Yan Zeltser- [Linkedin](https://www.linkedin.com/in/yan-zeltser/) - janikzeltser@gmail.com

Project Link: [https://github.com/FurikakeOishi/comparableSummaries](https://github.com/FurikakeOishi/comparableSummaries)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/yan-zeltser/
[product-screenshot]: images/screenshot.png


[Nest.js]: https://img.shields.io/static/v1?style=for-the-badge&message=NestJS&color=E0234E&logo=NestJS&logoColor=White
[Nest-url]: https://nestjs.com/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
