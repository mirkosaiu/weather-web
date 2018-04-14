

const date_sort_asc = function (date1, date2) {
  if (date1 > date2) return 1;
  if (date1 < date2) return -1;
  return 0;
};

const date_sort_desc = function (date1, date2) {
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
};
