gsap.registerPlugin(ScrollTrigger);

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
      defaults: {
        duration: 2
      }
    })
    .to("#textName1", {
      opacity: 0
    })
    .set("#textName1", {
      innerText: "Software Developer."
    })
    .to("#textName1", {
      opacity: 1
    });
}

function showArrow() {
  const t2 = gsap.timeline({
      repeat: -1,
    })
    .to(".arrows", {
      opacity: 0,
      duration: 1
    })
    .to(".arrows", {
      opacity: 1,
      duration: 1
    }).to(".arrows", {
      opacity: 0,
      duration: 1
    });
}

function stopShake(){
  const shakingDiv = document.getElementById('shake');
  shakingDiv.addEventListener('mouseover', (e) => {
    shakingDiv.removeAttribute("id", "shake");
  } );
}






intro();
introAProgrammer();
showArrow();
stopShake();

