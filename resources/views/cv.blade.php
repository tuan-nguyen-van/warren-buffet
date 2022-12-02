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
      height: 1170px;
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
  </style>
</head>

<body>
  <div class="main">
    <div id="left" class="column">
      <div class="card">
        Founder of 2 start-ups and passionate about technology. 5+ years of experience as a software developer.
        Write easy, optimized, maintainable code.
        Hard working (60 hrs/week), fast learner with beginner mind set, result oriented, ability to work under high
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
          decision from 1-2 weeks to 1 day with > 90% chance of being right. Like Google this software automatically crawl
          current
          stock price and other data from
          <a href="https://vietstock.vn/" target="_blank" class="experience-link">
            vietstock.vn
          </a>
          and do the calculation for me.
          <br>
          Have a look at simplified version by visiting <a href="https://tuannguyen.site/login" target="_blank"
            class="experience-link">tuannguyen.site/login</a> then press button "SIGN IN AS GUEST" then press "SIGN IN".
          <a href="https://github.com/tuan-nguyen-van/warren-buffet" target="_blank" class="experience-link">
            Github source code
          </a>
          <a href="https://tuannguyen.site/database-design.pdf" target="_blank" 
            class="experience-link" style="margin-left: 5px;">
            Database design
          </a>
          <hr class="experience-hr">
          <div class="skill-div">
            Tech stack:
            <button class="skill-btn">Laravel(Php)</button>
            <button class="skill-btn">React</button>
            <button class="skill-btn">Typescript</button>
            <button class="skill-btn">MySQL</button>
            <button class="skill-btn">Redux</button>
            <button class="skill-btn">MUI</button>
            <button class="skill-btn">Docker</button>
            <button class="skill-btn">AWS EC2</button>
          </div>
        </div>
      </div>

      <div class="card" style="margin-top: 15px;">
        <div class="experience-title" style="display: inline-block;">Stock Price Calculation software</div>
        <div style="float: right;">
          <img src="{{url('/images/calendar.svg')}}" class="calendar">
          Aug/22 - Ongoing
        </div>
      </div>

    </div>
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
          <button class="skill-btn">MUI</button>
          <button class="skill-btn">Ant Design</button>
          <button class="skill-btn">Bootstrap</button>
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
          <button class="skill-btn">Php</button>
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
          <button class="skill-btn">Php unit</button>
          <button class="skill-btn">Codeception</button>
        </div>

        <div class="skill-div">
          Code Checking:
          <button class="skill-btn">Php Stan</button>
          <button class="skill-btn">Php Cs Fixer</button>
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
          <button class="skill-btn">Data Structures and Algorithms</button>
          <button class="skill-btn">TDD</button>
          <button class="skill-btn">Git</button>
          <button class="skill-btn">Docker</button>
          <button class="skill-btn">Micro Service</button>
          <button class="skill-btn">System Design</button>
          <button class="skill-btn">Apache</button>
          <button class="skill-btn">Nginx</button>
          <button class="skill-btn">Load Balancer</button>
          <button class="skill-btn">CI/CD</button>
          <button class="skill-btn">SEO</button>
          <button class="skill-btn">Jira</button>
          <button class="skill-btn">Slack</button>
        </div>

      </div>
    </div>

  </div>
</body>

</html>