const displayDate = () => {
  const today = new Date();
  const year = today.getFullYear().toString();
  // .getMonth()で取得する月は0から始まるので1を足している
  const month = (today.getMonth() + 1).toString();
  const date = today.getDate().toString();
  console.log(year + "年" + month + "月" + date + "日");
}

displayDate();