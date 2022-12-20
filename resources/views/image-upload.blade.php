<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Image Upload</title>
  <script src="/js/4imageupload.js"></script>
</head>
<body>
  <style>
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      text-align: left;
      background-color: #fff;
    }

    .iu-image-item-style {
      position: relative;
      display: inline-block;
      vertical-align: top;
    }

    *,
    ::after,
    ::before {
      box-sizing: border-box;
    }

    .iu-highlight {
      border: 2px dashed #ff1a1a !important;
    }

    .iu-image-note {
      font-size: 1rem;
      color: black;
      z-index: 9;
      cursor: pointer;
    }

    .iu-image-placeholder {
      margin-bottom: 0px;
      display: block;
      padding: 2px;
      background-clip: content-box;
      position: relative;
    }

    .iu-image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .iu-image-order-number {
      position: absolute;
      top: 2px;
      left: 2px;
      color: white;
      font-size: 1rem;
      background: rgba(0, 0, 0, .3);
      padding: 2px 8px;
    }

    .iu-close-button {
      position: absolute;
      top: 2px;
      right: 2px;
      color: white;
      background: rgba(0, 0, 0, .3);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      font-weight: bold;
      font-size: 1.4rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .iu-close-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: "Times New Roman", Times, serif;
    }

    .iu-close-button:hover {
      background: rgba(0, 0, 0, .5);
    }

    .iu-button {
      display: none;
    }

    @keyframes iu-backgroundColor {
      0% {
        background-color: #c0b3a5;
      }

      50% {
        background-color: #a18d78;
      }

      100% {
        background-color: #c0b3a5;
      }
    }

    .iu-select-number {
      width: 100%;
    }

    .iu-custom-select {
      position: relative;
      padding: 2px;
      margin-top: -4px;
      font-size: 1rem;
    }

    .iu-display-none {
      display: none;
    }

    .iu-select-selected {
      background-color: DodgerBlue;
    }

    .iu-select-selected:after {
      position: absolute;
      content: "";
      top: 50%;
      transform: translate(0, calc(-50% + 3px));
      right: calc(10px + 2px);
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-color: #fff transparent transparent transparent;
    }

    .iu-select-hide {
      display: none;
    }

    .iu-select-selected.iu-select-arrow-active:after {
      border-color: transparent transparent #fff transparent;
      transform: translate(0, calc(-50% - 3px));
    }

    /* style the items (options), including the selected item: */
    .iu-select-items div,
    .iu-select-selected {
      color: #ffffff;
      padding: 5px 10px;
      border: 1px solid transparent;
      border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
      cursor: pointer;
    }

    /* Style items (options): */
    .iu-select-items {
      position: absolute;
      background-color: DodgerBlue;
      left: 0;
      right: 0;
      z-index: 99;
      background-clip: content-box;
      padding: 0 2px;
    }

    .iu-select-items div:hover,
    .iu-same-as-selected {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .iu-image-icon {
      width: 40px;
      margin-right: 10px;
      position: relative;
      top: 8px;
    }

    #iu-image-upload-zone {
      cursor: pointer;
      display: inline-block;
      height: 50px;
      margin-top: 16px;
      margin-right: 10px;
    }

    .iu-image-note {
      padding: 5px;
    }

    .iu-image-note:hover {
      background-color: #e3e0d3;
      border-radius: 10px;
    }

    .iu-progress-bar {
      width: 75%;
      background-color: #8f8877;
      border-radius: 15px;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    .iu-percent-bar {
      width: 0%;
      height: 30px;
      background-color: #4CAF50;
      text-align: center;
      line-height: 30px;
      color: white;
      border-radius: 15px;
      font-size: 1rem;
    }

    .iu-flash-box {
      position: fixed;
      z-index: 2000;
      color: #ffffff;
      background: rgba(37, 34, 74, .9);
    }

    @media (max-width: 450px) {
      .iu-flash-box {
        padding: 20px 20px;
        animation: MoveDown 0.2s linear;
        top: 0px;
        width: 100%;
        border-radius: 0 0 25px 25px;
      }
    }

    @keyframes MoveDown {
      0% {
        margin-top: -54px;
      }

      100% {
        margin-top: 0px;
      }
    }


    @media (min-width: 451px) {
      .iu-flash-box {
        animation: MoveLeft 0.2s linear;
        padding: 10px 30px;
        max-width: 50%;
        bottom: 10px;
        right: 10px;
        border-radius: 30px;
        opacity: 1;
      }
    }

    @keyframes MoveLeft {
      0% {
        margin-right: -50%;
      }

      100% {
        margin-right: 10px;
      }
    }
  </style>
  <div align="center">
    <h1 style="margin: 80px;">Try to Upload some images by clicking "Add Photos" then 
      try to move images by dragging or dropping or change select options.
    </h1>
  </div>
  <style>
    #image-upload-demo {
      width: 100%;
      margin: auto;
    }
  </style>

  <div id="image-upload-demo">
    <div id="iu-gallery"></div>
    <div align="center">
      <div class="" style="display: inline-block; margin-right: 10px;">
        Other stuff
      </div>
      <div id="iu-image-upload-zone"> </div>
      <div class="" style="display: inline-block">
        Other stuff
      </div>
    </div>
  </div>

  <script>
    //Detect Internet Explorer. Show alert to customer.
    if (window.document.documentMode) {
      alert("This website doesn't work on Internet Explorer, you should use modern browsers like Chrome or Safari instead");
    }
    var myImageUpload = new ImageUpload({
      imageUploadZoneId: 'iu-image-upload-zone',
      imageGalleryId: 'iu-gallery',
      sendRequestToServer: false,

      dragAndDropFeature: false,
      dictUploadImageNote: '<img src="/images/add-image-icon.svg" class="iu-image-icon">Add photos',
      showUploadingLoader: function (imagePlaceholder, showUploadedPercentComplete) {
        var progressBar = document.createElement('div');
        progressBar.className = 'iu-progress-bar';
        var percentBar = document.createElement('div');
        percentBar.className = 'iu-percent-bar';
        if (showUploadedPercentComplete === true) {
          percentBar.innerHTML = '0%';
        }
        progressBar.appendChild(percentBar);
        imagePlaceholder.appendChild(progressBar);
      },
      updateUploadingLoader: function (percentComplete, imagePlaceholder, showUploadedPercentComplete) {
        var percentComplete = Math.floor(percentComplete);
        var percentBar = imagePlaceholder.getElementsByClassName('iu-percent-bar')[0];

        if (percentBar != null) {
          percentBar.style.width = percentComplete + "%";
          if (showUploadedPercentComplete === true) {
            percentBar.innerHTML = percentComplete + "%";
          }
        }
      },
      removeUploadingLoader: function (imagePlaceholder, showUploadedPercentComplete) {
        var progressBar = imagePlaceholder.getElementsByClassName('iu-progress-bar')[0];
        var fadeEffect = setInterval(function () {
          if (!progressBar.style.opacity) {
            progressBar.style.opacity = 1;
          }
          if (progressBar.style.opacity > 0) {
            progressBar.style.opacity -= 0.1;
          } else {
            clearInterval(fadeEffect);
            progressBar.remove();
          }
        }, 300);
      },

      addFlashBox: function (showedAlertString, showedTime, backgroundColor) {
        var oldFlashBox = document.getElementsByClassName('iu-flash-box')[0];
        if (oldFlashBox) {
          oldFlashBox.remove();
        }
        var flashBox = document.createElement('div');
        flashBox.className = 'iu-flash-box';
        if (backgroundColor) {
          flashBox.style.backgroundColor = backgroundColor;
        }
        flashBox.innerHTML = showedAlertString;
        document.body.appendChild(flashBox);
        setTimeout(function () {
          fadeEffect(flashBox);
        }, showedTime);

        function fadeEffect(elmnt) {
          var fadeEffect = setInterval(function () {
            if (!elmnt.style.opacity) {
              elmnt.style.opacity = 1;
            }
            if (elmnt.style.opacity > 0) {
              elmnt.style.opacity -= 0.1;
            } else {
              clearInterval(fadeEffect);
              elmnt.remove();
            }
          }, 50);
        }
      },

    });
  </script>
</body>

</html>