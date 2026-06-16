import type { CatalogMobil } from "@/app/product/product-catalog";  


export function getBookedDateMap(mobil: CatalogMobil) {
  const map = new Map<string, number>();

  mobil.bookings.forEach((booking) => {
    getDateKeysBetween(
      booking.startDate,
      booking.endDate
    ).forEach((dateKey) => {
      map.set(dateKey, (map.get(dateKey) ?? 0) + 1);
    });
  });

  return map;
}

export function isDateBooked(
  dateKey: string,
  bookedDates: Map<string, number>
) {
  return bookedDates.has(dateKey);
}

export function rangeHasBookedDate(
  startDate: string,
  endDate: string,
  bookedDates: Map<string, number>
) {
  return getDateKeysBetween(startDate, endDate).some((dateKey) =>
    isDateBooked(dateKey, bookedDates)
  );
}

export function getCalendarDays(month: Date) {
  const firstDay = new Date(
    month.getFullYear(),
    month.getMonth(),
    1
  );

  const lastDay = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0
  );

  const days: Array<Date | null> = Array.from(
    { length: firstDay.getDay() },
    () => null
  );

  for (let day = 1; day <= lastDay.getDate(); day++) {
    days.push(
      new Date(
        month.getFullYear(),
        month.getMonth(),
        day
      )
    );
  }

  return days;
}

export function getDateKeysBetween(
  startDate: string,
  endDate: string
) {
  const dates: string[] = [];

  const current = parseDate(startDate);
  const end = parseDate(endDate);

  while (current <= end) {
    dates.push(toDateKey(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

export function getTotalDays(
  startDate: string,
  endDate: string
) {
  return (
    Math.floor(
      (parseDate(endDate).getTime() -
        parseDate(startDate).getTime()) /
        86400000
    ) + 1
  );
}

export function parseDate(dateKey: string) {
  const [y, m, d] = dateKey.split("-").map(Number);

  return new Date(y, m - 1, d);
}

export function toDateKey(date: Date) {
  return `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}