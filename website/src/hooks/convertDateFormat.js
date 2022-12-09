export const dateFormat = (inputDate) => {
  let day = inputDate.getDate();
  let month = inputDate.getMonth();
  let year = inputDate.getFullYear();
  return year + "-" + month + "-" + day;
};
