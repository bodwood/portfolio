function intro() {
  let tl = gsap.timeline({
    ease: 'power1.in'
  });
  tl.to('#textName', {
    y: '0%',
    duration: 2,
    onComplete: () => {
      document.querySelector('#textIntro').style.overflow = 'visible';
    }
  });
}
intro();