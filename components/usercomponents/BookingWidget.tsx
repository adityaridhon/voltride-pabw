"use client";

import * as React from "react";
import { useActionState } from "react";
import { CalendarDays, Send } from "lucide-react";
import {
  getBookedDateMap,
  getTotalDays,
  isDateBooked,
  parseDate,
  rangeHasBookedDate,
} from "@/lib/booking-utils";
import { CalendarGrid } from "@/app/product/product-catalog";  


import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { createBookingAction } from "@/actions/booking.actions";

interface BookingWidgetProps {
  mobil: any;
}

export default function BookingWidget({
  mobil,
}: BookingWidgetProps) {
  const [month, setMonth] = React.useState(new Date());

  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const [state, formAction, isPending] = useActionState(
    createBookingAction,
    {
      ok: false,
      message: "",
    }
  );

  const formRef = React.useRef<HTMLFormElement>(null);

  const bookedDates = React.useMemo(
    () => getBookedDateMap(mobil),
    [mobil]
  );

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  const dateFormatter = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const totalDays =
    startDate && endDate
      ? getTotalDays(startDate, endDate)
      : 0;

  const totalPrice =
    totalDays > 0
      ? totalDays * mobil.pricePerDay
      : 0;

  return (
    <>
      <div className="sticky top-24 rounded-[32px] border border-zinc-100 bg-white p-6 shadow-lg">

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-primary mb-2">
            <CalendarDays className="size-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Booking Calendar
            </span>
          </div>

          <h3 className="text-2xl font-bold">
            {mobil.name}
          </h3>

          <p className="text-zinc-500 text-sm">
            Choose your rental dates and book your ride today!
          </p>
        </div>

        {/* Harga */}
        <div className="mb-6 rounded-2xl bg-zinc-50 p-4">
          <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
            Rental Price
          </p>

          <p className="text-3xl font-bold text-primary mt-1">
            Rp{mobil.pricePerDay.toLocaleString()}
          </p>

          <p className="text-xs text-zinc-500">
            /day
          </p>
        </div>

        {/* Calendar */}
        <CalendarGrid
          month={month}
          bookedDates={bookedDates}
          startDate={startDate}
          endDate={endDate}
          onPrevious={() =>
            setMonth(
              (v) =>
                new Date(
                  v.getFullYear(),
                  v.getMonth() - 1,
                  1
                )
            )
          }
          onNext={() =>
            setMonth(
              (v) =>
                new Date(
                  v.getFullYear(),
                  v.getMonth() + 1,
                  1
                )
            )
          }
          onDateClick={(dateKey) => {
            if (isDateBooked(dateKey, bookedDates)) {
              return;
            }

            if (
              !startDate ||
              (startDate && endDate) ||
              dateKey < startDate
            ) {
              setStartDate(dateKey);
              setEndDate("");
              return;
            }

            if (
              rangeHasBookedDate(
                startDate,
                dateKey,
                bookedDates
              )
            ) {
              return;
            }

            setEndDate(dateKey);
          }}
        />

        {/* Summary */}
        <div className="mt-6 space-y-3 rounded-2xl bg-zinc-50 p-4">

          <SummaryRow
            label="Start Date"
            value={
              startDate
                ? dateFormatter.format(
                    parseDate(startDate)
                  )
                : "-"
            }
          />

          <SummaryRow
            label="End Date"
            value={
              endDate
                ? dateFormatter.format(
                    parseDate(endDate)
                  )
                : "-"
            }
          />

          <SummaryRow
            label="Duration"
            value={
              totalDays > 0
                ? `${totalDays} Days`
                : "-"
            }
          />

          <SummaryRow
            label="Total"
            value={
              totalPrice > 0
                ? `Rp ${totalPrice.toLocaleString()}`
                : "-"
            }
            strong
          />
        </div>

        {/* Form */}
        <form
          ref={formRef}
          action={formAction}
          className="mt-6 space-y-3"
        >
          <input
            type="hidden"
            name="mobilId"
            value={mobil.id}
          />

          <input
            type="hidden"
            name="startDate"
            value={startDate}
          />

          <input
            type="hidden"
            name="endDate"
            value={endDate}
          />

          <Button
            type="button"
            size="lg"
            className="w-full"
            disabled={
              !startDate ||
              !endDate ||
              isPending
            }
            onClick={() =>
              setConfirmOpen(true)
            }
          >
            <Send className="size-4" />

            {isPending
              ? "Processing..."
              : "Booking Now"}
          </Button>

          {state.message && (
            <div
              className={`rounded-xl px-4 py-3 text-sm ${
                state.ok
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {state.message}
            </div>
          )}
        </form>
      </div>

      {/* Confirmation Dialog */}
      <Dialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
      >
        <DialogContent>

          <DialogHeader>
            <DialogTitle>
              Booking Confirmation
            </DialogTitle>

            <DialogDescription>
              Are you sure you want to book{" "}:
              <span className="block mt-2 font-bold text-primary text-lg">
                Rp{totalPrice.toLocaleString()}
              </span>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>

            <Button
              variant="outline"
              onClick={() =>
                setConfirmOpen(false)
              }
            >
              Cancel
            </Button>

            <Button
              onClick={() => {
                setConfirmOpen(false);
                formRef.current?.requestSubmit();
              }}
            >
              Yes, Book
            </Button>

          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function SummaryRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-zinc-500">
        {label}
      </span>

      <span
        className={
          strong
            ? "font-bold text-primary"
            : "font-medium"
        }
      >
        {value}
      </span>
    </div>
  );
}