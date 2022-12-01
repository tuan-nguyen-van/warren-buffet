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
      width: 830px;
      height: 1170px;
      font-family: 'Montserrat', 'Roboto', 'Helvetica', 'Arial';
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5;
      letter-spacing: 0.00938em;
    }

    .main {
      font-size: 16px;
    }

    #left {
      width: 65%;
      height: 100%;
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
      width: 180px;
      border-radius: 50%;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }

    #name {
      font-size: 22px;
      text-align: center;
    }

    p {
      margin-bottom: 15px;
      padding: 0px;
      margin-top: 15px;
    }
  </style>
</head>

<body>
  <div class="main">
    <div id="left" class="column">
      <p>Hello</p>
    </div>
    <div id="right" class="column" style="background-color: #38464e;">
      <div style="background-color: #283138; height: 250px; padding-top: 20px;">
        <img src="{{url('/images/avatar.jpg')}}" id="avatar">
        <p id="name">Tuan Nguyen</p>
      </div>
    </div>
  </div>
</body>

</html>