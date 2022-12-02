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
      line-height: 1.5;
      letter-spacing: 0.00938em;
    }

    .main {
      width: 830px;
      height: 2100px;
      font-size: 14px;
    }

    #left {
      width: 65%;
      height: 100%;
      background-color: rgb(190, 183, 183);
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
      margin-left: 10px;
      margin-right: 10px;
    }

    .skill-btn {
      padding: 4px;
      color: #fff;
      background-color: #a9cece;
      background-image: radial-gradient(93% 87% at 87% 89%, rgba(0, 0, 0, 0.23) 0%, transparent 86.18%), radial-gradient(66% 66% at 26% 20%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%);
      box-shadow: inset -3px -3px 9px rgba(255, 255, 255, 0.25), inset 0px 3px 9px rgba(255, 255, 255, 0.3), inset 0px 1px 1px rgba(255, 255, 255, 0.6), inset 0px -8px 36px rgba(0, 0, 0, 0.3), inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      font-weight: bold;
      border: 0;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
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
  </style>
</head>

<body>
  <div class="main">
    <div id="left" class="column">
      <div class="card">
        Founder of 2 start-ups and passionate about technology. 5+ years of experience as a software developer.
        Write easy, optimized, maintainable code.
        Hard working, fast learner with beginner mind set, result oriented, ability to work under high
        pressure with can do attitude.
      </div>

      <div class="card" style="margin-top: 15px;">
        <div class="experience-title" style="display: inline-block;">Stock Price Calculation software</div>
        <div style="float: right;">
          <img src="{{url('/images/calendar.svg')}}" class="calendar">
          Aug/22 - Ongoing
        </div>
        <div>
          I built this software as a side start-up to reduce
          the time from making buying or selling
          decision from 1-2 weeks to 1 day with > 90% chance of being right.
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Like Google this software automatically
            crawl current stock price and other data from
            <a href="https://vietstock.vn/" target="_blank" class="experience-link">
              vietstock.vn
            </a>
            and do the calculation.
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Have a look at a simplified version by visiting <a href="https://tuannguyen.site/login" target="_blank"
              class="experience-link">tuannguyen.site/login</a> then press button "SIGN IN AS GUEST" then press "SIGN
            IN".
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
              <button class="skill-btn">AWS EC2</button>
            </div>
          </div>


        </div>
      </div>

      <div class="card" style="margin-top: 15px;">
        <div class="experience-title" style="display: inline-block;">Fullstack web developer (Remote)</div>
        <div style="float: right;">
          <img src="{{url('/images/calendar.svg')}}" class="calendar">
          Jan/22 - July/22
        </div>
        <div>
          <a href="https://www.tally.co/acquire/uconx" target="_blank" class="experience-link">
            Tally Group Australia (UCONX team, 20 members)
          </a>
          <div>
            Uconx is multi-tenant app with micro-service architecture for rent to other energy, gas, internet retailers
            to advertise
            and set up sales in mintutes.
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Refactored messy code base and reduced 80% of database queries
            by: caching, eager loading, optimizing code...
            Made both backend and frontend apps run 30% faster.
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Wrote solutions for bugs or new features for other devs, reviewed code.
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Build new features for both backend and frontend app.
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
            </div>
          </div>
        </div>
      </div>

      <div class="card" style="margin-top: 15px;">
        <div class="experience-title" style="display: inline-block;">Fullstack web developer (Remote)</div>
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
              Monolith app
            </a>
            with both frontend and backend integrated together to keep track of livestock
            for farmers in New Zealand.
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Maintained, upgraded version, fixed bugs, built new features
            and consulted technical solution for customer.
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
            </div>
          </div>
        </div>
      </div>

      <div class="card" style="margin-top: 15px;">
        <div class="experience-title" style="display: inline-block;">Fullstack developer</div>
        <div style="float: right;">
          <img src="{{url('/images/calendar.svg')}}" class="calendar">
          Mar/20 - May/21
        </div>
        <div>
          <a href="https://www.linkedin.com/company/texo-design/about/" target="_blank" class="experience-link">
            Texo Design (20 member team)
          </a>
          <div>
            Outsourcing company that build all types of products
            for customers by many different technologies.
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Converted designs to HTML: ~50 complicated
            <a href="https://tuannguyen.site/email-template" target="_blank" class="experience-link">
              Email Templates
            </a>
            that work across multiple devices and sent by
            <a href="https://www.salesforce.com/" target="_blank" class="experience-link">
              Saleforce
            </a>
            or
            <a href="https://mailchimp.com/" target="_blank" class="experience-link">
              Mailchimp
            </a>
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Converted designs and animation videos to 6
            <a href="https://w6digital.com.au/albc22410w/build/1_discover/index.html" target="_blank"
              class="experience-link">
              Applications
            </a>
            that deployed on
            <a href="https://www.veeva.com/" target="_blank" class="experience-link">
              Veeva
            </a>
            for marketing to customer on iPad Pro
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Converted designs to 3
            <a href="https://celladore.com.au" target="_blank" class="experience-link">
              websites
            </a>
            using CMS
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Participated from the beginning, coded, designed databases, chose technologies for multi-tenant, micro
            service app that allows car retailers to rent web application to sell car devices.
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
        <div class="experience-title" style="display: inline-block;">Founder, Project Manager, Fullstack developer...
        </div>
        <div>
          <div style="display: inline-block;">
            Real Estate Social Network start up
          </div>
          <div style="float: right;">
            <img src="{{url('/images/calendar.svg')}}" class="calendar">
              Mar/18 - Dec/20
          </div>
          <div>
            Tried to solve messy real estate market for Vietnam by copying
            <a href="https://www.zillow.com/" target="_blank" class="experience-link">
              Zillow.com
            </a>
            and allowed user post real estate for free. 
            <div class="experience-point">
              <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
              Designed system, designed database, chose technologies, 
              hired 3 developers, SEO, marketing, raise capital...  
            </div>
            <div class="experience-point">
              <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
              All devs could not build some tough features that I required, so I had to
              learn tech and build them myself like this 
              <a href="https://tuannguyen.site/image-upload" target="_blank" class="experience-link">
                upload image feature.
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
          </div>
        </div>
      </div>
    
    </div>

    <!-- Right section -->
    <div id="right" class="column" style="background-color: #38464e;">
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

        <div style="margin-left: 10px;">
          <img src="{{url('/images/email-icon.svg')}}" class="contact-icon"> tuan.nv.vina@gmail.com
        </div>
        <div style="margin-left: 10px;">
          <img src="{{url('/images/phone-call.svg')}}" class="contact-icon"> +84 937 050 700
          <img src="{{url('/images/skype.svg')}}" class="contact-icon">
          <img src="{{url('/images/whatsapp.svg')}}" class="contact-icon">
        </div>
        <div style="margin-left: 10px;">
          <img src="{{url('/images/location.svg')}}" class="contact-icon"> Ho Chi Minh city, Vietnam
        </div>
        <div style="margin-left: 10px; padding-top: 10px;">
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

      <div id="right-text">
        <div class="language-side-title">Front End</div>
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

        <div class="language-side-title">Back End</div>
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
        <div class="language-side-title">Other</div>
        <div class="skill-div">
          <button class="skill-btn">Git</button>
          <button class="skill-btn">Docker</button>
          <button class="skill-btn">AWS</button>
          <button class="skill-btn">Micro Service</button>
          <button class="skill-btn">System Design</button>
          <button class="skill-btn">Regex</button>
          <button class="skill-btn">Apache</button>
          <button class="skill-btn">Nginx</button>
          <button class="skill-btn">Load Balancer</button>
          <button class="skill-btn">CI/CD</button>
          <button class="skill-btn">SEO</button>
          <button class="skill-btn">Jira</button>
          <button class="skill-btn">Slack</button>
          <button class="skill-btn">Harvest</button>
        </div>

      </div>
    </div>

  </div>
</body>

</html>