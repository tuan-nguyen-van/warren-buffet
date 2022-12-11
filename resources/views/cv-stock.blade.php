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
      font-family: 'Helvetica', 'Arial';
      font-size: 15px;
      line-height: 1.45;
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

    .dot {
      width: 10px;
      margin-top: 10px;
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

    .sub-div {
      margin-left: 20px;
    }

    li::marker {
      width: 10px;
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
          <td style="width: 32%; background-color: #38464e; padding: 10px;">
            <div class="contact-div">
              <img src="{{url('/images/email-icon.svg')}}" class="contact-icon"> tuan.nv.vina@gmail.com
            </div>
            <div class="contact-div">
              <img src="{{url('/images/phone-call.svg')}}" class="contact-icon"> +84 937 050 700
              <img src="{{url('/images/skype.svg')}}" class="contact-icon">
              <img src="{{url('/images/whatsapp.svg')}}" class="contact-icon">
            </div>
            <div class="contact-div">
              <img src="{{url('/images/location.svg')}}" class="contact-icon"> {{ __('cv.Ho Chi Minh city') }}
            </div>
            <div class="contact-div">
              <img src="{{url('/images/home.svg')}}" class="contact-icon"> {{ __('cv.Hanoi') }}
            </div>
          </td>
          <td style="width: 43%; background-color: #38464e; padding: 10px;">
            <div class="contact-div">
              <img src="{{url('/images/university.svg')}}" class="contact-icon"> {{ __('cv.National University of Civil Engineer') }}
            </div>
            <div class="contact-div">
              <img src="{{url('/images/badge.svg')}}" class="contact-icon"> {{ __('cv.Have scholarship that cover my tuition') }}
            </div>
            <div class="contact-div">
              <img src="{{url('/images/degree.svg')}}" class="contact-icon"> {{ __('cv.Civil Engineer') }}
            </div>
            <div class="contact-div">
              <img src="{{url('/images/english.svg')}}" class="contact-icon"> {{ __('cv.Speak English like native American') }}
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="card" style="margin-top: 15px;">
      <div class="experience-title" style="display: inline-block;">{{ __('cv.Stock Price Calculation Software') }}</div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">{{ __('cv.Aug/22 - Ongoing') }}</span>
      </div>

      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        {{ __('cv.I have 3 years of experience') }}
      </div>
      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        {{ __('cv.I have read multiple books') }}
      </div>
      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        {{ __('cv.So I summarized all my knowledge') }}
      </div>
      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        {{ __('cv.The principle that I follow') }}
      </div>
      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        {{ __('cv.The way I choose stocks') }}
        <br>
        <div class="sub-div">
          <img src="{{url('/images/dot.svg')}}" class="dot">
          {{ __('cv.First visit') }}
          <a href="https://tuannguyen.site/login" target="_blank" class="experience-link">https://tuannguyen.site/login</a>
          {{ __('cv.then press "SIGN IN AS GUEST" button') }}
          <br>
          <img src="{{url('/images/dot.svg')}}" class="dot"> {{ __('cv.Then visit the following links') }}
          <br>
          TLG: <a href="https://tuannguyen.site/edit-stock/49" target="_blank" class="experience-link">https://tuannguyen.site/edit-stock/49</a>
          <br>
          VNM: <a href="https://tuannguyen.site/edit-stock/58" target="_blank" class="experience-link">https://tuannguyen.site/edit-stock/58</a>
          <br>
          MSN: <a href="https://tuannguyen.site/edit-stock/64" target="_blank" class="experience-link">https://tuannguyen.site/edit-stock/64</a>
          <br>
          ACV: <a href="https://tuannguyen.site/edit-stock/37" target="_blank" class="experience-link">https://tuannguyen.site/edit-stock/37</a>
          <br>
          VCB: <a href="https://tuannguyen.site/edit-stock/63" target="_blank" class="experience-link">https://tuannguyen.site/edit-stock/63</a>
          <br>
          <img src="{{url('/images/dot.svg')}}" class="dot">
          {{ __('cv.To fully analyze one stock I need from 1 to 4 weeks.') }}
          <br>
          <img src="{{url('/images/dot.svg')}}" class="dot">
          {{ __('cv.Step 2:') }}
          <br>
          <img src="{{url('/images/dot.svg')}}" class="dot">
          {{ __('cv.Step 3:') }}
          <br>
          <img src="{{url('/images/dot.svg')}}" class="dot">
          {{ __('cv.Step 4:') }}
          <br>
          <img src="{{url('/images/dot.svg')}}" class="dot">
          {{ __('cv.Step 5:') }}
          <br>
          {{ __('cv.I already built an algorithm') }}
          <br>
          <img src="{{url('/images/dot.svg')}}" class="dot">
          {{ __('cv.Step 6:') }} <a href="https://tuannguyen.site/" target="_blank" class="experience-link"> {{ __('cv.home page') }}</a>.
          {{ __('cv.My software automatically summarizes') }}
          <br>
          <img src="{{url('/images/dot.svg')}}" class="dot">
          {{ __('cv.My software still needs to improve') }}
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 15px;">
      <div class="experience-title" style="display: inline-block;">Fullstack Web Developer ({{ __('cv.Remote') }})</div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">{{ __('cv.Jan') }}/22 - {{ __('cv.Aug') }}/22</span>
      </div>
      <div>
        <a href="https://www.tally.co/acquire/uconx" target="_blank" class="experience-link">
          {{ __('cv.Tally Group Australia') }}
        </a>
        <div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            {{ __('cv.Multi-tenant app') }}
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 15px;">
      <div class="experience-title" style="display: inline-block;">Fullstack Web Developer ({{ __('cv.Remote') }})</div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">{{ __('cv.Jun') }}/21 - {{ __('cv.Dec') }}/21</span>
      </div>
      <div>
        <a href="https://www.webtools.ag/" target="_blank" class="experience-link">
          {{ __('cv.Webtools New Zealand') }}
        </a>
        <div class="experience-point">
          <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
          <a href="https://live.alliance.co.nz/" target="_blank" class="experience-link">
            {{ __('cv.A monolith app') }}
          </a>
          {{ __('cv.with both front-end and back-end') }}
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 15px;">
      <div class="experience-title" style="display: inline-block;">Fullstack Web Developer</div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">{{ __('cv.Mar') }}/20 - {{ __('cv.May') }}/21</span>
      </div>
      <div>
        <a href="https://www.linkedin.com/company/texo-design/about/" target="_blank" class="experience-link">
          {{ __('cv.Texo Design') }}
        </a>
        <div class="experience-point">
          <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
          {{ __('cv.An outsourcing company') }}
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 15px;">
      <div class="experience-title" style="display: inline-block;">Founder, Project Manager, Fullstack Developer...
      </div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">{{ __('cv.Mar') }}/18 - {{ __('cv.Dec') }}/19</span>
      </div>
      <div>
        <div style="display: inline-block;">
          {{ __('cv.Real Estate Social Network. (Ho Chi Minh)') }}
        </div>
        <div>
          {{ __('cv.A start-up tried to') }}
          <a href="https://www.zillow.com/" target="_blank" class="experience-link">
            Zillow.com
          </a>
          {{ __('cv.and allowing users') }}
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            {{ __('cv.Designed system, designed database') }}
          </div>
          <div class="experience-point">
            <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
            {{ __('cv.The app reached 10,000 users') }}
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 15px; margin-bottom: 10px;">
      <div class="experience-title" style="display: inline-block;">Real Estate Agent</div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">{{ __('cv.Nov') }}/16 - {{ __('cv.Jan') }}/18</span>
      </div>
      <br>
      <a href="https://thenesthousing.com/" target="_blank" class="experience-link">
        The Nest Real Estate Co.,Ltd
      </a>
      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        {{ __('cv.Real Estate Agent with main responsibility') }}
      </div>
    </div>

    <div class="card" style="margin-top: 15px; margin-bottom: 10px;">
      <div class="experience-title" style="display: inline-block;">{{ __('cv.Civil Engineer') }}</div>
      <div style="float: right;">
        <img src="{{url('/images/calendar.svg')}}" class="calendar">
        <span class="period">{{ __('cv.May') }}/16 - {{ __('cv.Nov') }}/16</span>
      </div>
      <div class="experience-point">
        <img src="{{url('/images/hexagon.svg')}}" class="hexagon">
        <a href="https://coteccons.vn/en/" target="_blank" class="experience-link">
          Coteccons Group
        </a>
        | {{ __('cv.Civil Engineer at') }}
        <a href="https://masterisehomes.com/masteri-thao-dien" target="_blank" class="experience-link">
          {{ __('cv.Masteri Thao Dien project') }}
        </a>
      </div>
    </div>


  </div>
</body>

</html>