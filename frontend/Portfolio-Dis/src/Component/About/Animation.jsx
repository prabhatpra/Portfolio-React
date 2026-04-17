// src/components/About/Animation.js
export const Animation = () => {
  const directions = ["top", "bottom", "left", "right"];
  const dir = directions[Math.floor(Math.random() * directions.length)];
  const rotate = Math.floor(Math.random() * 40) - 20; // -20 to 20 deg
  const scale = Math.random() * 0.4 + 0.8;            // 0.8 - 1.2
  const xShift = (Math.random() - 0.5) * 200;
  const yShift = (Math.random() - 0.5) * 200;

  const variants = {
    top:    { initial: { x: xShift, y: yShift - 300, opacity: 0, scale: scale * 0.5, rotate }, exit: { x: -xShift, y: yShift + 300, opacity: 0, scale: 0.5, rotate: rotate * 2 } },
    bottom: { initial: { x: xShift, y: yShift + 300, opacity: 0, scale: scale * 0.5, rotate }, exit: { x: -xShift, y: yShift - 300, opacity: 0, scale: 0.5, rotate: rotate * 2 } },
    left:   { initial: { x: xShift - 300, y: yShift, opacity: 0, scale: scale * 0.5, rotate }, exit: { x: xShift + 300, y: yShift, opacity: 0, scale: 0.5, rotate: rotate * 2 } },
    right:  { initial: { x: xShift + 300, y: yShift, opacity: 0, scale: scale * 0.5, rotate }, exit: { x: xShift - 300, y: yShift, opacity: 0, scale: 0.5, rotate: rotate * 2 } },
  };

  return { ...variants[dir], animate: { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 } };
};
