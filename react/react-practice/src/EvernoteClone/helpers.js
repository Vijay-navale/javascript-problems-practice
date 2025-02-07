// export default function debounce(a, b, c) {
//   var d, e;
//   return function () {
//     function h() {
//       d = null;
//       c || (e = a.apply(f, g));
//     }
//     var f = this,
//       g = arguments;
//     return (
//       clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
//     );
//   };
// }
export const debounce = (func, wait) => {
  let timeout;

  return function excutedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
export function removeHTMLTags(str) {
  return str.replace(/<[^>]*>?/gm, "");
}
