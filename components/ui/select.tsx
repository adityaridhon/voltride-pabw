import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  buttonClassName?: string;
}

const Select = (
  { className, placeholder, options, value, onChange, buttonClassName }: SelectProps
) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);
    
    const selectedOption = options.find((opt) => opt.value === value);
    const displayLabel = selectedOption?.label || placeholder;

    React.useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div ref={containerRef} className={cn("relative w-full", className)}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "relative w-full border-2 border-zinc-200 bg-white text-left text-sm font-medium outline-none transition-all duration-200 flex items-center justify-between",
              "hover:border-primary/40",
              isOpen && "border-primary focus:ring-4 focus:ring-primary/10",
              !selectedOption && "text-zinc-500",
              // default spacing if caller doesn't override
              buttonClassName ?? "rounded-2xl py-3 pl-4 pr-12",
              // subtle shadow when open
              isOpen && "focus:shadow-lg",
              !isOpen && "hover:shadow-md"
            )}
          >
          <span>{displayLabel}</span>
          <ChevronDown
            className={cn(
              "size-5 text-zinc-400 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-50 mt-2 rounded-2xl border-2 border-zinc-200 bg-white shadow-lg">
            <div className="max-h-64 overflow-y-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange?.(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-150 flex items-center justify-between",
                    "hover:bg-primary/10",
                    value === option.value && "bg-primary/10 text-primary"
                  )}
                >
                  <span>{option.label}</span>
                  {value === option.value && (
                    <Check className="size-4 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
};
Select.displayName = "Select";

export { Select };
