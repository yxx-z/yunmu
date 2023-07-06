// 移动端适配
const debounce = (fn: () => void, delay: number) => {
  let timer: number;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      console.log("视口变化了")
      fn();
    }, delay);
  }
};

const cancelDebounce = debounce(() => {
  const rootValue = 16 // 根元素默认字体大小
  const rootWidth = 390 // 设计稿宽度
  const deviceWidth = document.documentElement.clientWidth // 获取用户的屏幕尺寸
  // 动态更改根节点的 font-size
  document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px'
}, 800);


window.addEventListener('resize', cancelDebounce);
