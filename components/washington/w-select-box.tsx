import * as React from "react";
import { cn } from "@/lib/utils";
import { WLeadingVisual } from "./w-leading-visual";

export interface WSelectBoxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  selectState?: 'empty' | 'hover' | 'expanded-empty' | 'expanded-filled' | 'filled' | 'disabled' | 'error';
  className?: string;
}

export function WSelectBox({
  icon,
  placeholder,
  label,
  disabled,
  selectState,
  className,
  ...props
}: WSelectBoxProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        "flex items-center w-full min-w-0 gap-2",
        className,
      )}
      {...props}
    >
      {icon && (
        <WLeadingVisual
          color={
            selectState === "error"
              ? "var(--destructive)"
              : selectState === "expanded-filled" || selectState === "filled"
                ? "var(--brand-primary)"
                : selectState === "hover" || selectState === "expanded-empty"
                  ? "var(--fg-hushed)"
                  : "var(--bg-dark)"
          }
        >
          {icon}
        </WLeadingVisual>
      )}
      <span
        className={cn(
          "flex flex-col items-start min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[14px] leading-[20px]",
          {
            "text-[var(--destructive)]": selectState === "error",
            "text-[var(--brand-primary)]":
              selectState === "expanded-filled" || selectState === "filled",
            "text-[var(--fg-hushed)]":
              selectState === "hover" || selectState === "expanded-empty",
            "text-[var(--bg-dark)]": selectState === "disabled",
          },
        )}
      >
        {label || placeholder}
      </span>
    </button>
  );
}


