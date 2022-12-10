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
      font-size: 15px;
      line-height: 1.45;
      letter-spacing: 0.2px;
      background-color: rgb(190, 183, 183);
      color: #0a3454;
    }

    .main {
      width: 830px;
    }

    .header {
      background-color: #283138;
      color: rgb(227, 209, 209);
    }

    #avatar {
      width: 50%;
      border-radius: 50%;
    }

    .contact-icon {
      width: 20px;
      position: relative;
      top: 5px;
      margin-right: 5px;
    }

    .contact-div {
      margin-bottom: 5px;
    }

    .card {
      border: 2px solid gray;
      border-radius: 10px;
      padding: 10px;
      margin: 15px;
      background-color: rgb(155, 149, 149);
      box-shadow: 3px 3px 3px rgb(140, 137, 137);
    }

    .hexagon {
      width: 10px;
    }

    .calendar {
      width: 15px;
      position: relative;
      top: 2px;
    }

    .experience-title {
      font-size: 17px;
      font-weight: 600;
    }

    .period {
      color: #155281;
    }

    .experience-point {
      margin-left: 15px;
      margin-top: 3px;
    }

    .experience-link {
      color: rgb(66, 15, 196);
    }
  </style>
</head>

<body>
  <div class="main">
    <div class="header">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="width: 25%; text-align: center; padding: 10px;">
            <img src="{{url('/images/avatar.jpg')}}" id="avatar">
            <br>
            <span id="name">Tuan Nguyen</span>
            <br>
            <span style="font-size: 15px;">
              05/11/1993
            </span>
          </td>
          <td style="width: 35%; background-color: #38464e; padding: 10px;">
            <div class="contact-div">
              <img src="{{url('/images/email-icon.svg')}}" class="contact-icon"> tuan.nv.vina@gmail.com
            </div>
            <div class="contact-div">
              <img src="{{url('/images/phone-call.svg')}}" class="contact-icon"> +84 937 050 700
              <img src="{{url('/images/skype.svg')}}" class="contact-icon">
              <img src="{{url('/images/whatsapp.svg')}}" class="contact-icon">
            </div>
            <div class="contact-div">
              <img src="{{url('/images/location.svg')}}" class="contact-icon"> Ho Chi Minh city
            </div>
            <div class="contact-div">
              <img src="{{url('/images/home.svg')}}" class="contact-icon"> Hanoi
            </div>
          </td>
          <td style="width: 40%; background-color: #38464e; padding: 10px;">
            <div class="contact-div">
              <img src="{{url('/images/university.svg')}}" class="contact-icon"> National University of Civil Engineer
            </div>
            <div class="contact-div">
              <img src="{{url('/images/badge.svg')}}" class="contact-icon"> Scholarship that cover my tuition
            </div>
            <div class="contact-div">
              <img src="{{url('/images/degree.svg')}}" class="contact-icon"> Civil Engineer
            </div>
            <div class="contact-div">
              <img src="{{url('/images/english.svg')}}" class="contact-icon"> Speak English like native American
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="card" style="margin-top: 15px;">
      <div class="experience-title" style="display: inline-block;">Stock Price Calculation Software</div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">Aug/22 - Ongoing</span>
      </div>

      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        I have 3 years of experience in stock market.
        The year of covid 2020 when the market was going down so low, I massively invested
        and have have 57% return from 2020 to 2021.
        Current time, when market is going down 35%, I'm not even lose money
        for my stock porfolio.
      </div>
      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        I have read multiple books about stock market:
        MONEY Master the Game, The Intelligent Investor, The Warren Buffett Way,
        The Snowball: Warren Buffett and the Business of Life, Margin of safety...
        so more than 90% of my buying or selling decision was turned out to be right.
      </div>
      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        With my senior software engineer skill, I quit my previous job and summarize
        all my knowledge about stock market to
        build my stock calculation software to help me calculate
        intrinsic value of stocks > 1000 times faster than manually.
      </div>
      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        The principle that I follow is "buy 1 dollar for less than 50 cents".
        The way I make buying or selling descision is based on calculated intrinsic value of the stock.
        For example: The calculated intrinsic price of TLG (CTCP Tập đoàn Thiên Long) is 117,864 VND/share
        then I compare with the current stock price is 47,000 VND. So cheap with margin of safety is 60%.
        If we buy one share we get 2.51 shares.
      </div>
      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        The way I choose stocks and calculated intrinsic stock prices will be inside the following linked:
        <br>
        - First visit 
        <a href="https://tuannguyen.site/login" target="_blank">https://tuannguyen.site/login</a>
        then press "SIGN IN AS GUEST" button then press "SIGN IN" button.
        <br>
        - Then visit the following links:
        <br>
        TLG: <a href="https://tuannguyen.site/login" target="_blank">https://tuannguyen.site/edit-stock/49</a>
        <br>
        VNM: <a href="https://tuannguyen.site/login" target="_blank">https://tuannguyen.site/edit-stock/58</a>
        <br>
        MSN: <a href="https://tuannguyen.site/login" target="_blank">https://tuannguyen.site/edit-stock/64</a>
        <br>
        ACV: <a href="https://tuannguyen.site/login" target="_blank">https://tuannguyen.site/edit-stock/37</a>
        <br>
        VCB: <a href="https://tuannguyen.site/login" target="_blank">https://tuannguyen.site/edit-stock/63</a>
      </div>
    </div>

    <div class="card" style="margin-top: 15px;">
      <div class="experience-title" style="display: inline-block;">Fullstack Web Developer (Remote)</div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">Jan/22 - Aug/22</span>
      </div>
      <div>
        <a href="https://www.tally.co/acquire/uconx" target="_blank" class="experience-link">
          Tally Group Australia acquired Webtools Australia (UCONX team, 20 members)
        </a>
        <div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Multi-tenant app with microservice architecture for rent to other energy, gas retailers
            to advertise and set up sales in minutes.
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 15px;">
      <div class="experience-title" style="display: inline-block;">Fullstack Web Developer (Remote)</div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">Jun/21 - Dec/21</span>
      </div>
      <div>
        <a href="https://www.webtools.ag/" target="_blank" class="experience-link">
          Webtools New Zealand (Agriculture team, 10 members)
        </a>
        <div class="experience-point">
          <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
          <a href="https://live.alliance.co.nz/" target="_blank" class="experience-link">
            A monolith app
          </a>
          with both front-end and back-end integrated together to keep track of livestock
          for farmers in New Zealand.
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 15px;">
      <div class="experience-title" style="display: inline-block;">Fullstack Web Developer</div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">Mar/20 - May/21</span>
      </div>
      <div>
        <a href="https://www.linkedin.com/company/texo-design/about/" target="_blank" class="experience-link">
          Texo Design Ho Chi Minh (20 member team)
        </a>
        <div class="experience-point">
          <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
          An outsourcing company that builds all types of products
          for customers by many different technologies.
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 15px;">
      <div class="experience-title" style="display: inline-block;">Founder, Project Manager, Fullstack Developer...
      </div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">Mar/18 - Dec/19</span>
      </div>
      <div>
        <div style="display: inline-block;">
          Real Estate Social Network. (Ho Chi Minh)
        </div>
        <div>
          A start-up tried to solve messy real estate market for Vietnam by copying
          <a href="https://www.zillow.com/" target="_blank" class="experience-link">
            Zillow.com
          </a>
          and allowed users post real estate for free.
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            Designed system, designed database, chose technologies,
            hired 3 developers, SEO, marketing, raise capital...
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            The app reached 10,000 users already after 3 months, but faced many
            challenges, and I didn't sense it was going anywhere
            so I shut it down.
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 15px; margin-bottom: 10px;">
      <div class="experience-title" style="display: inline-block;">Real Estate Agent</div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">Nov/16 - Jan/18</span>
      </div>
      <br>
      <a href="https://thenesthousing.com/" target="_blank" class="experience-link">
        THE NEST REAL ESTATE CO.,LTD
      </a>
      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        Real Estate Agent with main responsibility is to find houses/villas/apartments
        for foreigners in Thao Dien Area
      </div>
    </div>

    <div class="card" style="margin-top: 15px; margin-bottom: 10px;">
      <div class="experience-title" style="display: inline-block;">Civil Engineer</div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">May/16 - Nov/16</span>
      </div>
      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        <a href="https://coteccons.vn/en/" target="_blank" class="experience-link">
          Coteccons Group
        </a>
        | Civil Engineer at
        <a href="https://masterisehomes.com/masteri-thao-dien" target="_blank" class="experience-link">
          Masteri Thao Dien project
        </a>
      </div>
    </div>


  </div>
</body>

</html>