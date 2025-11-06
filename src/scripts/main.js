'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const aboutWall = wall.getBoundingClientRect();
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  const topY = aboutWall.top + wall.clientTop;
  const bottomY = topY + wall.clientHeight;

  const leftX = aboutWall.left + wall.clientLeft;
  const rightX = leftX + wall.clientWidth;

  let centerX = e.clientX - leftX - spider.clientWidth / 2;
  let centerY = e.clientY - topY - spider.clientHeight / 2;

  if (e.clientX - leftX < spider.clientWidth / 2) {
    centerX = 0;
  }

  if (e.clientY - topY < spider.clientHeight / 2) {
    centerY = 0;
  }

  if (e.clientX > rightX - spider.clientWidth) {
    centerX = wall.clientWidth - spider.clientWidth;
  }

  if (e.clientY > bottomY - spider.clientHeight) {
    centerY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
});
