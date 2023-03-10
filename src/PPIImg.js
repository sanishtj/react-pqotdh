import React, { useState, useEffect } from 'react';

export default function PPIImg(props) {
  const { objectFit = 'contain', src, alt = '', ...restProps } = props;
  const [base64Src, setBase64Src] = useState('');

  useEffect(() => {
    toDataURL(src, function (dataUrl) {
      setBase64Src(dataUrl);
    });
  }, [src]);

  function toDataURL(src, callback) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
      // Create canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      // Set width and height
      canvas.width = img.width;
      canvas.height = img.height;
      // Draw the image
      ctx?.drawImage(img, 0, 0);
      callback(canvas.toDataURL('image/png'));
    };
    img.src = src;
  }

  return (
    <img
      style={{ maxWidth: '100%', objectFit: objectFit }}
      src={base64Src}
      alt={alt}
      {...restProps}
    />
  );
}
