import { addYears } from "date-fns";

function padZeroMonth(number: number): string {
  return ("00" + number).slice(-2);
}

// NOTE: 01〜12
export const availableMonths = [...Array(12)].map((_, i) => padZeroMonth(i + 1));

// NOTE: 今年〜8年後
export const availableYears = [...Array(8)].map((_, i) => addYears(new Date(), i)
      .getFullYear()
      .toString()
      .slice(-2));