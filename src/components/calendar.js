import { ru } from "date-fns/locale";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  endOfWeek,
  getISODay,
  eachDayOfInterval,
  endOfMonth,
  startOfMonth,
  isSameDay,
  isSameMonth,
} from "date-fns";

export const numberDaysInWeek = 7;

export const daysOfWeek = ["Вс", "Пн", "Ве", "Ср", "Чт", "Пт", "Сб"];

export const equalDays = (firstDate, secondDate) => {
  return isSameDay(firstDate, secondDate);
};
export const getPreviousMonth = (d) => {
  return subMonths(d, 1);
};

export const getNextMonth = (d) => {
  return addMonths(d, 1);
};
export const includeDateInMonth = (dayDate, monthDate) => {
  return isSameMonth(dayDate, monthDate);
};
export const generateMonthWithFullWeek = (d) => {
  const firstDateOfMonth = startOfMonth(d);
  const lastDateOfMonth = endOfMonth(d);
  // Первый день недели, где есть первый день месяца
  const firstDayWeekWithFirstDateOfMonth =
    getFirstDateOfWeekByDate(firstDateOfMonth);

  // Последний день недели, где есть последний день месяца
  const lastDayWeekWithLastDateOfMonth =
    getLastDateOfWeekByDate(lastDateOfMonth);

  // Получить период дней
  const fullMonthDays = getEachDayOfInterval(
    firstDayWeekWithFirstDateOfMonth,
    lastDayWeekWithLastDateOfMonth
  );

  return fullMonthDays;
};

export const SWITCH_TITLES = {
  PREVIOUS: "prev",
  NEXT: "next",
};

export const getMonthYear = (d) => {
  return format(d, "LLLL yyyy", { locale: ru });
};

export const switchCurrentMonth = (d, switchType) => {
  let newValue;
  if (switchType === SWITCH_TITLES.PREVIOUS) {
    newValue = getPreviousMonth(d);
  } else {
    newValue = getNextMonth(d);
  }
  return newValue;
};

export const getFirstDateOfWeekByDate = (d) => {
  return startOfWeek(d, { weekStartsOn: 1 });
};

export const getLastDateOfWeekByDate = (d) => {
  return endOfWeek(d, { weekStartsOn: 1 });
};

export const getEachDayOfInterval = (firstDayOfMonth, lastDayOfMonth) => {
  return eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });
};

export const getNumberOfWeek = (d) => {
  return getISODay(d);
};

export const chunkArray = (arr, chunkSize = 1) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};
