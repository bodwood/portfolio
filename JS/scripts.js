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

function introAProgrammer() {
  const t2 = gsap.timeline({
    defaults: { duration: 3}
  })
  .to("#textName1", { opacity: 0})
  .set("#textName1", {innerText: "a programmer."})
  .to("#textName1", {opacity: 1});
}
intro();
introAProgrammer();