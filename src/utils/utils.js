/**
 * 公共方法
 */
export default {
  secondTommss(s) {
    s = Number(s.toFixed(0));
    if (!s) {
      return '00:00';
    } else {
      let mm = Math.floor(s / 60);
      let ss = s - mm * 60;
      return (mm > 9 ? mm : '0' + mm) + ':' + (ss > 9 ? ss : '0' + ss);
    }
  }
};
