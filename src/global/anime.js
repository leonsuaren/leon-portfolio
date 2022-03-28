import anime from 'animejs';

export const paginationAnimation = () => {
  anime({
    targets: '.animation',
    opacity: 1,
    duration: 1000,
    easing: 'easeInQuad'
  });
}