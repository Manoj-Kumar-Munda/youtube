export function viewCount(num) {
    if (num.length < 4) {
      return num;
    } else if (num.length < 7) {
      if (num.length == 4) {
        return (num / 1000).toFixed(1).toString() + "K";
      } else {
        return (num / 1000).toFixed(0).toString() + "K";
      }
    } else if (num.length < 10) {
      if (num.length === 7) {
        return (num / 1000000).toFixed(1).toString() + "M";
      } else {
        return (num / 1000000).toFixed(0).toString() + "M";
      }
    }
  }