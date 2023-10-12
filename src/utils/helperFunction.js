export function convertCount(num) {
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

export const convertToSearchQuery = (str) => str.split(" ").join("%20");

export const convertToSearchParams = (str) => str.split(" ").join("+");

export function calculateTimeDifferenceToNow(targetDate) {
  const targetDateTime = new Date(targetDate);
  const currentTime = Date.now();
  const differenceInMilliseconds = currentTime - targetDateTime;

  const seconds = Math.floor(differenceInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  const months = Math.floor(days / 30); // Assuming 30 days in a month for simplicity
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return `${seconds} seconds`;
  } else if (minutes < 60) {
    return `${minutes} minutes`;
  } else if (hours < 24) {
    return `${hours} hours`;
  } else if (days < 7) {
    return `${days} days`;
  } else if (weeks < 5) {
    return `${weeks} weeks`;
  } else if (months < 12) {
    return `${months} months`;
  } else return `${years} years`;
}

export const getComment = (item, isReply) => {
  if(isReply){
    const {snippet} = item;
    return snippet;
  }else{
    const {snippet:{topLevelComment:{snippet}}} = item;
    return snippet;
  }
}
