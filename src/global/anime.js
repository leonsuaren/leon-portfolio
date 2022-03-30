import anime from 'animejs';

export const paginationAnimation = () => {
  anime({
    targets: '.animation',
    opacity: 1,
    duration: 1000,
    easing: 'easeInQuad'
  });
}

export const progressiveBarAnimation = () => {
  anime.timeline({
    targets: '.bar-animation',
    width: '100%',
    easing: 'easeInOutQuad',
    duration: 3000
  })
    .add({
      targets: '.bar-animation',
      background: '#4fefaf'
    })
  anime.timeline({
    targets: '.input-percentage',
    value: [0, 100],
    round: 1,
    easing: 'easeInOutQuad',
    duration: 3000
  })
    .add({
      targets: '.input-percentage',
      color: '#4e5060'
    })
    anime.timeline({
      targets: '.bar-english-animation',
      width: '90%',
      easing: 'easeInOutQuad',
      duration: 3000
    })
      .add({
        targets: '.bar-english-animation',
        background: '#93f756'
      })
    anime.timeline({
      targets: '.input-english-percentage',
      value: [0, 90],
      round: 1,
      easing: 'easeInOutQuad',
      duration: 3000
    })
      .add({
        targets: '.input-english-percentage',
        color: '#4e5060'
      })
}