<!-- Convert on https://www.sejda.com/  with "More options" with Width is 810px -->

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Resume</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0px;
      padding: 0px;
      font-family: 'Montserrat', 'Roboto', 'Helvetica', 'Arial';
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.45;
      letter-spacing: 0.2px;
      background-color: rgb(190, 183, 183);
      color: #0a3454;
    }

    .main {
      width: 830px;
      font-size: 14px;
    }

    #left {
      width: 65%;
      height: 100%;
      padding-left: 10px;
      padding-top: 10px;
      font-size: 15px;
      padding-right: 10px;
    }

    #right {
      width: 35%;
      height: 100%;
      color: rgb(227, 209, 209);
    }

    .column {
      float: left;
    }

    #avatar {
      float: right;
      width: 100px;
      border-radius: 50%;
      display: block;
      margin-right: 10px;
    }

    #name {
      font-size: 22px;
      text-align: center;
      margin-left: 10px;
      position: relative;
    }

    p {
      margin-bottom: 15px;
      padding: 0px;
      margin-top: 15px;
    }

    .section-header {
      font-size: 22px;
      font-weight: bold;
      border-bottom: 3px solid rgb(227, 209, 209);
      padding-bottom: 5px;
      margin-top: 20px;
    }

    #right-text {
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 8px;
      padding-bottom: 20px;

    }

    .skill-btn {
      padding: 4px;
      color: rgb(234, 223, 223);
      background-color: #5d7a7a;
      border-radius: 3px;
      font-weight: bold;
      border: 0;
      cursor: pointer;
    }

    .skill-div {
      margin-top: 5px;
      line-height: 30px;
    }

    .hr-skill {
      border-top: 1px solid rgb(227, 209, 209);
    }

    .language-side-title {
      font-size: 19px;
      font-weight: bold;
      text-align: center;
      margin-top: 7px;
    }

    .experience-title {
      font-size: 17px;
      font-weight: 600;
    }

    .contact-icon {
      width: 20px;
      position: relative;
      top: 5px;
      margin-right: 5px;
    }

    .public-link {
      color: rgb(23, 189, 208);
    }

    .experience-link {
      color: rgb(66, 15, 196);
    }

    .card {
      border: 2px solid gray;
      border-radius: 10px;
      padding: 10px;
      background-color: rgb(155, 149, 149);
      box-shadow: 3px 3px 3px rgb(140, 137, 137);
    }

    .calendar {
      width: 15px;
      position: relative;
      top: 2px;
    }

    .experience-hr {
      border: 1px solid rgb(88, 82, 82);
    }

    .hexagon {
      width: 10px;
    }

    .experience-point {
      margin-left: 15px;
      margin-top: 3px;
    }

    .contact-div {
      margin-left: 10px;
      margin-bottom: 5px;
    }
  </style>
</head>

<body>
  <div class="main">
    <div id="left" class="column">
      <div class="card">
        Founder of 2 tech start-ups. 5 years of experience as a software engineer.
        Write easy, optimized, maintainable code. Egoless, result oriented, can work under high
        pressure. Hard-working (70 h/w), fast, passionate learner with curious, beginner mind set.
        Speak English like native American.
        <br>
        Only seeking a remote job, could arrange 5.5 to 8 h/d working with different timezone. 
        Expected net income each month from 2000 USD to 2500 USD. 
      </div>

      <div class="card" style="margin-top: 15px;">
        <div class="experience-title" style="display: inline-block;">Stock Price Calculation Software</div>
        <div style="float: right;">
          <img src="{{url('/images/calendar.svg')}}" class="calendar">
          Aug/22 - Ongoing
        </div>
        <div>
          Side start-up, monolith app to reduce the time from making buying or selling
          decision from 1-2 weeks to 1 day with > 90% chance of being right.
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Like Google, automatically
            crawls current stock price and other data from
            <a href="https://vietstock.vn/" target="_blank" class="experience-link">
              vietstock.vn
            </a>
            and does the calculation for a bunch of stocks with Warren Buffet technique
            to find out the cheapest stock.
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Have a look at a simplified version by visiting
            <a href="https://tuannguyen.site/login" target="_blank" class="experience-link">tuannguyen.site/login
            </a>
            then press button "SIGN IN AS GUEST" then press "SIGN IN".
          </div>
          <div class="experience-point">
            <div class="skill-div">
              <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
              <a href="https://github.com/tuan-nguyen-van/warren-buffet" target="_blank" class="experience-link">
                Github source code
              </a>
              <a href="https://tuannguyen.site/database-design.pdf" target="_blank" class="experience-link"
                style="margin-left: 5px;">
                Database design
              </a>
              <br>
              <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
              Tech Stack:
              <button class="skill-btn">PHP</button>
              <button class="skill-btn">Laravel</button>
              <button class="skill-btn">Javascript</button>
              <button class="skill-btn">React</button>
              <button class="skill-btn">Typescript</button>
              <button class="skill-btn">Recharts</button>
              <button class="skill-btn">MySQL</button>
              <button class="skill-btn">Redux</button>
              <button class="skill-btn">Regex</button>
              <button class="skill-btn">Material UI</button>
              <button class="skill-btn">Docker</button>
              <button class="skill-btn">AWS EC2 Ubuntu</button>
              <button class="skill-btn">Apache</button>
            </div>
          </div>


        </div>
      </div>

      <div class="card" style="margin-top: 15px;">
        <div class="experience-title" style="display: inline-block;">Fullstack Web Developer (Remote)</div>
        <div style="float: right;">
          <img src="{{url('/images/calendar.svg')}}" class="calendar">
          Jan/22 - Aug/22
        </div>
        <div>
          <a href="https://www.tally.co/acquire/uconx" target="_blank" class="experience-link">
            Tally Group Australia acquired Webtools Australia (was transferred here, UCONX team, 20 members)
          </a>
          <div>
            Multi-tenant app with microservice architecture for rent to other energy, gas retailers
            to advertise and set up sales in minutes.
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Refactored messy code base and reduced 80% of database queries
            by: caching, eager loading, optimizing code...
            Made both back-end and front-end apps run 30% faster.
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Wrote solutions for bugs or new features for other devs, reviewed code.
          </div>
          <div class="experience-point">
            <div class="skill-div">
              <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
              Tech Stack:
              <button class="skill-btn">PHP</button>
              <button class="skill-btn">Yii2</button>
              <button class="skill-btn">Codeception</button>
              <button class="skill-btn">MariaDB</button>
              <button class="skill-btn">Javascript</button>
              <button class="skill-btn">Bootstrap3</button>
              <button class="skill-btn">Tailwind</button>
              <button class="skill-btn">Jquery</button>
              <button class="skill-btn">React</button>
              <button class="skill-btn">Redux</button>
              <button class="skill-btn">Material UI</button>
              <button class="skill-btn">Docker</button>
              <button class="skill-btn">CI/CD</button>
            </div>
          </div>
        </div>
      </div>

      <div class="card" style="margin-top: 15px;">
        <div class="experience-title" style="display: inline-block;">Fullstack Web Developer (Remote)</div>
        <div style="float: right;">
          <img src="{{url('/images/calendar.svg')}}" class="calendar">
          Jun/21 - Dec/21
        </div>
        <div>
          <a href="https://www.webtools.ag/" target="_blank" class="experience-link">
            Webtools New Zealand (Agriculture team, 10 members)
          </a>
          <div>
            <a href="https://live.alliance.co.nz/" target="_blank" class="experience-link">
              A monolith app
            </a>
            with both front-end and back-end integrated together to keep track of livestock
            for farmers in New Zealand.
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Maintained, upgraded version, fixed bugs, built new features
            and consulted technical solution for the customer.
          </div>
          <div class="experience-point">
            <div class="skill-div">
              <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
              Tech Stack:
              <button class="skill-btn">PHP</button>
              <button class="skill-btn">Laravel</button>
              <button class="skill-btn">MySQL</button>
              <button class="skill-btn">Javascript</button>
              <button class="skill-btn">Typescript</button>
              <button class="skill-btn">React</button>
              <button class="skill-btn">Jest</button>
              <button class="skill-btn">Ant Design</button>
              <button class="skill-btn">Recharts</button>
              <button class="skill-btn">Docker</button>
              <button class="skill-btn">CI/CD</button>
            </div>
          </div>
        </div>
      </div>

      <div class="card" style="margin-top: 15px;">
        <div class="experience-title" style="display: inline-block;">Fullstack Developer</div>
        <div style="float: right;">
          <img src="{{url('/images/calendar.svg')}}" class="calendar">
          Mar/20 - May/21
        </div>
        <div>
          <a href="https://www.linkedin.com/company/texo-design/about/" target="_blank" class="experience-link">
            Texo Design Ho Chi Minh (20 member team)
          </a>
          <div>
            An outsourcing company that builds all types of products
            for customers by many different technologies.
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Converted designs to HTML: ~50 complicated
            <a href="https://tuannguyen.site/email-template" target="_blank" class="experience-link">
              Email Templates
            </a>
            and 
            <a href="https://tuannguyen.site/banner/index.html" target="_blank" class="experience-link">
              Animation Advertising Banners
            </a>
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Converted designs to 6
            <a href="https://w6digital.com.au/albc22410w/build/1_discover/index.html" target="_blank"
              class="experience-link">
              animation
              applications
            </a>
            that deployed on
            <a href="https://www.veeva.com/" target="_blank" class="experience-link">
              Veeva
            </a>
            for marketing to the customers on iPad Pro.
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Converted designs to 3
            <a href="https://celladore.com.au" target="_blank" class="experience-link">
              websites
            </a>
            using CMS.
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Participated from the beginning, coded, designed databases, chose technologies for multi-tenant,
            micro-service app that allows car retailers to rent web application to sell car devices.
          </div>
          <div class="experience-point">
            <div class="skill-div">
              <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
              Tech Stack:
              <button class="skill-btn">PHP</button>
              <button class="skill-btn">Wordpress</button>
              <button class="skill-btn">Moodle</button>
              <button class="skill-btn">Laravel</button>
              <button class="skill-btn">Ruby on Rails</button>
              <button class="skill-btn">Camaleon CMS</button>
              <button class="skill-btn">PostgreSQL</button>
              <button class="skill-btn">MySQL</button>
              <button class="skill-btn">Javascript</button>
              <button class="skill-btn">Typescript</button>
              <button class="skill-btn">React</button>
              <button class="skill-btn">Nextjs</button>
              <button class="skill-btn">Bootstrap</button>
              <button class="skill-btn">Webpack</button>
              <button class="skill-btn">Gulp</button>
              <button class="skill-btn">AWS</button>
            </div>
          </div>
        </div>
      </div>

      <div class="card" style="margin-top: 15px;">
        <div class="experience-title" style="display: inline-block;">Founder, Project Manager, Fullstack Developer...
        </div>

        <div>
          <div style="display: inline-block;">
            Real Estate Social Network. (Ho Chi Minh)
          </div>
          <div style="float: right;">
            <img src="{{url('/images/calendar.svg')}}" class="calendar">
            Mar/18 - Dec/19
          </div>
          <div>
            A start-up tried to solve messy real estate market for Vietnam by copying
            <a href="https://www.zillow.com/" target="_blank" class="experience-link">
              Zillow.com
            </a>
            and allowed users to post real estate for free.
            <div class="experience-point">
              <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
              Designed system, designed database, chose technologies,
              hired 3 developers, SEO, marketing, raise capital...
            </div>
            <div class="experience-point">
              <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
              All devs could not build some tough features that I required, so I had to
              code them myself like this
              <a href="https://tuannguyen.site/image-upload" target="_blank" class="experience-link">
                uploading image with re-order and re-size features.
              </a>
            </div>
            <div class="experience-point">
              <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
              The app reached 10,000 users already after 3 months, but faced many
              challenges, and I didn't sense it was going anywhere
              so I shut it down.
            </div>
          </div>
        </div>

        <div class="experience-point">
          <div class="skill-div">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Tech Stack:
            <button class="skill-btn">PHP</button>
            <button class="skill-btn">Laravel</button>
            <button class="skill-btn">Javascript</button>
            <button class="skill-btn">Vue</button>
            <button class="skill-btn">Vuex</button>
            <button class="skill-btn">Nuxtjs</button>
            <button class="skill-btn">MySQL</button>
            <button class="skill-btn">MongoDB</button>
            <button class="skill-btn">Redis</button>
            <button class="skill-btn">Bootstrap</button>
            <button class="skill-btn">Nginx</button>
          </div>
        </div>
      </div>

      <div class="card" style="margin-top: 15px; margin-bottom: 10px;">
        <div class="experience-title" style="display: inline-block;">Learn web development for startup</div>
        <div style="float: right;">
          <img src="{{url('/images/calendar.svg')}}" class="calendar">
          Jan/18 - Mar/18
        </div>
        <div>
          Was taught how to code from middle school to university. So it's 
          quite easy for me to learn web development.
        </div>  
      </div>

      <div class="card" style="margin-top: 15px; margin-bottom: 10px;">
        <div class="experience-title" style="display: inline-block;">Real Estate Agent</div>
        <div style="float: right;">
          <img src="{{url('/images/calendar.svg')}}" class="calendar">
          Nov/16 - Dec/17
        </div>
        <br>
        <div class="experience-title" style="display: inline-block;">Civil Engineer</div>
        <div style="float: right;">
          <img src="{{url('/images/calendar.svg')}}" class="calendar">
          May/16 - Nov/16
        </div>
      </div>

    </div>

    <!-- Right section -->
    <div id="right" class="column">
      <div style="background-color: #283138; height: 260px; padding-top: 10px;">
        <div style="height: 120px;">
          <table>
            <tbody>
              <tr>
                <td><span id="name">Tuan Nguyen <br>
                    <span style="font-size: 15px; margin-left: 45px;">05/11/1993</span>
                  </span></td>
                <td><img src="{{url('/images/avatar.jpg')}}" id="avatar"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="contact-div">
          <img src="{{url('/images/email-icon.svg')}}" class="contact-icon"> tuan.nv.vina@gmail.com
        </div>
        <div class="contact-div">
          <img src="{{url('/images/phone-call.svg')}}" class="contact-icon"> +84 937 050 700
          <img src="{{url('/images/skype.svg')}}" class="contact-icon">
          <img src="{{url('/images/whatsapp.svg')}}" class="contact-icon">
        </div>
        <div class="contact-div">
          <img src="{{url('/images/location.svg')}}" class="contact-icon"> Ho Chi Minh city, Vietnam
        </div>
        <div class="contact-div">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td style="width: 33%;">
                  <a href="https://github.com/tuan-nguyen-van" target="_blank" class="public-link">
                    Github
                  </a>
                </td>
                <td style="width: 33%;">
                  <a href="https://www.linkedin.com/in/tuan-nguyen-678097218/" target="_blank" class="public-link">
                    Linked In
                  </a>
                </td>
                <td style="width: 33%;">
                  <a href="https://leetcode.com/TuanNguyen1105/" target="_blank" class="public-link">
                    Leetcode
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="right-text" style="background-color: #38464e;">
        <div class="language-side-title">Back-End</div>
        <div class="skill-div">
          Languages:
          <button class="skill-btn">PHP</button>
          <button class="skill-btn">Nodejs</button>
          <button class="skill-btn">Ruby</button>
        </div>
        <div class="skill-div">
          Frameworks:
          <button class="skill-btn">Laravel</button>
          <button class="skill-btn">Yii2</button>
          <button class="skill-btn">Express</button>
          <button class="skill-btn">Ruby on Rails</button>
        </div>
        <div class="skill-div">
          CMS:
          <button class="skill-btn">Wordpress</button>
          <button class="skill-btn">Camaleon</button>
          <button class="skill-btn">Moodle</button>
        </div>

        <div class="skill-div">
          Testing:
          <button class="skill-btn">PHP Unit</button>
          <button class="skill-btn">Codeception</button>
        </div>

        <div class="skill-div">
          Code Checking:
          <button class="skill-btn">PHP Stan</button>
          <button class="skill-btn">PHP Psalm</button>
          <button class="skill-btn">PHP Cs Fixer</button>
        </div>

        <hr class="hr-skill" />

        <div class="language-side-title">Databases</div>
        <div class="skill-div">
          SQL:
          <button class="skill-btn">MySQL</button>
          <button class="skill-btn">PostgreSQL</button>
          <button class="skill-btn">MariaDB</button>
        </div>
        <div class="skill-div">
          NoSQL:
          <button class="skill-btn">MongoDB</button>
          <button class="skill-btn">Redis</button>
        </div>

        <hr class="hr-skill" />
        <div class="language-side-title">Front-End</div>
        <div class="skill-div">
          Languages:
          <button class="skill-btn">Javascript</button>
          <button class="skill-btn">Typescript</button>
          <button class="skill-btn">HTML</button>
          <button class="skill-btn">CSS</button>
        </div>

        <div class="skill-div">
          Frameworks:
          <button class="skill-btn">React</button>
          <button class="skill-btn">Redux</button>
          <button class="skill-btn">Nextjs</button>
          <button class="skill-btn">Vue</button>
          <button class="skill-btn">VueX</button>
          <button class="skill-btn">Jquery</button>
        </div>

        <div class="skill-div">
          Themes, Libraries:
          <button class="skill-btn">Material UI</button>
          <button class="skill-btn">Ant Design</button>
          <button class="skill-btn">Bootstrap</button>
          <button class="skill-btn">Tailwind</button>
          <button class="skill-btn">Recharts</button>
          <button class="skill-btn">Sass</button>
          <button class="skill-btn">Lodash</button>
          <button class="skill-btn">Webpack</button>
          <button class="skill-btn">Gulp</button>
          <button class="skill-btn">Vite</button>
          <button class="skill-btn">Greensock Animation</button>
        </div>

        <div class="skill-div">
          Testing:
          <button class="skill-btn">Jest</button>
        </div>

        <div class="skill-div">
          Code Checking:
          <button class="skill-btn">Eslint</button>
          <button class="skill-btn">Prettier</button>
        </div>

        <hr class="hr-skill" />
        <div class="language-side-title">Other</div>
        <div class="skill-div">
          <button class="skill-btn">Git</button>
          <button class="skill-btn">Docker</button>
          <button class="skill-btn">AWS</button>
          <button class="skill-btn">Regex</button>
          <button class="skill-btn">RESTful API</button>
          <button class="skill-btn">GraphQL</button>
          <button class="skill-btn">Ubuntu</button>
          <button class="skill-btn">Apache</button>
          <button class="skill-btn">Nginx</button>
          <button class="skill-btn">Load Balancer</button>
          <button class="skill-btn">CI/CD</button>
          <button class="skill-btn">Micro Service</button>
          <button class="skill-btn">System Design</button>
          <button class="skill-btn">Data Structures and Algorithms</button>
          <button class="skill-btn">SEO</button>
          <button class="skill-btn">Jira</button>
          <button class="skill-btn">Slack</button>
          <button class="skill-btn">Harvest</button>
        </div>

        <hr class="hr-skill" />

        <div class="language-side-title">Certificate</div>
        <div style="margin-left: 10px; margin-top: 5px; margin-bottom: 10px;">
          <a href="https://www.udemy.com/certificate/UC-6068576c-b569-4be4-b4a8-7f7213541324/" target="_blank"
            class="public-link">
            Data Structures and Algorithms
          </a>
        </div>
        <div style="margin-left: 10px; margin-top: 5px; margin-bottom: 10px;">
          <a href="https://www.udemy.com/certificate/UC-95437456-9e33-4489-839a-c33b11a98813/" target="_blank"
            class="public-link">
            System Design
          </a>
        </div>
        <div style="margin-left: 10px; margin-top: 5px; margin-bottom: 15px;">
          <a href="https://www.udemy.com/certificate/UC-5feb43c9-3f20-4035-879c-a06518037925/" target="_blank"
            class="public-link">
            Nodejs - MERN stack
          </a>
        </div>


        <hr class="hr-skill" />
        <div class="language-side-title">Education</div>
        <div style="margin-left: 10px;">
          <img src="{{url('/images/university.svg')}}" class="contact-icon"> National University of Civil Engineer
          (Hanoi 2011 - 2016)
        </div>
        <div style="margin-left: 10px;">
          <img src="{{url('/images/badge.svg')}}" class="contact-icon"> Full scholarship that cover my tuition
        </div>
        <div style="margin-left: 10px;">
          <img src="{{url('/images/degree.svg')}}" class="contact-icon"> Civil Engineer
        </div>
      </div>
    </div>

  </div>
</body>

</html>