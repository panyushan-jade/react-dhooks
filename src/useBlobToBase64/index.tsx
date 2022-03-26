import React from 'react';

// const blobToBase64 = (blob) => {
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.onload = (e) => {
//         resolve(e.target.result);
//       };
//       fileReader.readAsDataURL(blob);
//       fileReader.onerror = () => {
//         reject(new Error('blobToBase64 error'));
//       };
//     });
//   };

export default (blob: Blob | File) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      resolve(e.target!.result);
    };
    fileReader.readAsDataURL(blob);
    fileReader.onerror = () => {
      reject(new Error('useBlobToBase64 error'));
    };
  });
};
