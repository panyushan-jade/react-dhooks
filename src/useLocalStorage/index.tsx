export default (url: string, type: string = 'image/png', bgColor: string, quality?: number) => {
  //quality 在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略
  return new Promise((resolve, reject) => {
    const qualityImg = ['image/jpeg', 'image/webp'];
    let image = new Image();
    // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url + '?' + new Date().getTime();
    image.onload = function () {
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      ctx!.fillStyle = bgColor || 'white';
      ctx!.fillRect(0, 0, canvas.width, canvas.height);
      // 将图片插入画布并开始绘制
      ctx!.drawImage(image, 0, 0);
      let result = qualityImg.includes(type)
        ? canvas.toDataURL(type, quality || 0.96)
        : canvas.toDataURL(type);
      resolve(result);
    };
    // 图片加载失败的错误处理
    image.onerror = () => {
      reject(new Error('urlToBase64 error'));
    };
  });
};
