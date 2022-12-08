gsap.config({
  nullTargetWarn: false,
});
var tlFirst = gsap.timeline({ repeat: 0, repeatDelay: 1 });
tlFirst
  .to('#ten', { duration: 0.5, opacity: 1 })
  .addLabel('yearsAgo')
  .to('#wave', { opacity: 1 })
  .to('#wave', { duration: 1, width: '80px' }, 'yearsAgo')
  .to('#years-ago', { duration: 1, opacity: 1 }, 'yearsAgo')
  .addLabel('firstFrame')
  .to('#first-frame', { duration: 0.5, opacity: 0 }, 'firstFrame')
  .to(
    '#the-aristotle, #in-patient',
    { duration: 0.5, opacity: 1 },
    'firstFrame'
  )
  .to('#the-aristotle', { duration: 2.2 })
  .addLabel('thirdFrame1')
  .to('#second-frame', { duration: 0.7, top: '-300px' }, 'thirdFrame1')
  .to('#photo-frame3', { opacity: 1 }, 'thirdFrame1')
  .to('#frame1-background', { duration: 0.7, top: '-394px' }, 'thirdFrame1')
  .to('#photo-frame3', { duration: 0.7, top: '15px' }, 'thirdFrame1')
  .to('#hypothetical', { opacity: 1 })
  .addLabel('thirdFrame2')
  .to(
    '#frame1-background',
    {
      duration: 0.7,
      top: '-72px',
      left: '0px',
      width: '300px',
      height: '322px',
    },
    'thirdFrame2'
  )
  .to(
    '#photo-frame3',
    {
      duration: 0.7,
      top: '103px',
      left: '33px',
      width: '141px',
      height: '148px',
    },
    'thirdFrame2'
  )
  .to('#photo-frame3', { duration: 1 })
  .to('#celebrating-text', { duration: 0.5, opacity: 1 }, 'thirdFrame3')
  .to('#photo-frame3', { duration: 0.7, rotation: 90, left: '-200px' }, '+=1')
  .addLabel('thirdFrame4')
  .to('#frame1-background', { duration: 1, top: 0 }, 'thirdFrame4')
  .to('#celebrating-text', { duration: 0.7, opacity: 0 }, 'thirdFrame4')
  .to('#eliquis, #wave-2', { duration: 0.7, opacity: 1 })
  .to('#wave-2', { duration: 0.2, width: '81px' })
  .to('#wave-2', { duration: 1 })
  .addLabel('forthFrame')
  .to('#third-frame', { duration: 0.7, opacity: 0 }, 'forthFrame')
  .to(
    '#fifth-frame-img',
    { duration: 0.5, opacity: 1, zIndex: 4 },
    'forthFrame'
  )
  .to('#fifth-frame-img', { duration: 1 })
  .addLabel('fifthFrame')
  .to(
    '#frame1-background',
    { duration: 0, top: '-72px', left: 0, width: '600px', height: '644px' },
    'fifthFrame'
  )
  .to('#hypothetical', { duration: 0, opacity: 0 }, 'fifthFrame')
  .to(
    '#eliquis, #wave-2, #third-frame',
    { duration: 0, opacity: 1 },
    'fifthFrame'
  )
  .to('#eliquis', { duration: 0, top: '70px' }, 'fifthFrame')
  .to('#wave-2', { duration: 0, top: '55px' }, 'fifthFrame')
  .to('#fifth-frame-img', { duration: 1, opacity: 0, zIndex: 2 });
console.log(tlFirst.duration());
