import * as React from "react";
import { SelectItem } from "../ui/select";
import { cn } from "@/lib/utils";
import { WLeadingVisual } from "./w-leading-visual";

export interface WDropdownItemProps extends React.ComponentProps<typeof SelectItem> {
  icon?: React.ReactNode;
  label: string;
  description?: string;
  selected?: boolean;
}

export function WDropdownItem({ icon, label, description, children, selected, ...props }: WDropdownItemProps) {
  const [hovered, setHovered] = React.useState(false);
  const selectState = selected ? 'selected' : hovered ? 'hover' : 'normal';

  const rowBg =
    selectState === 'hover'
      ? 'bg-[var(--bg-lighter)]'
      : selectState === 'selected'
      ? 'bg-[var(--brand-silent)]'
      : '';

  return (
    <SelectItem
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(rowBg, props.className)}
    >
      <div className="flex items-center w-full min-w-0 gap-2">
        {icon && (
          <span className="w-[28px] h-[28px] flex items-center justify-center rounded bg-[var(--brand-muted)] flex-shrink-0">
            <WLeadingVisual color="var(--brand-primary)">
              {React.isValidElement(icon) ? React.cloneElement(icon) : icon}
            </WLeadingVisual>
          </span>
        )}
        <div className="flex flex-col min-w-0">
          <span className="text-[14px] leading-[20px] text-[var(--fg-primary)] truncate">{label}</span>
          {description && (
            <span className="text-[12px] leading-[16px] text-[var(--fg-secondary)] truncate">{description}</span>
          )}
        </div>
      </div>
      {children}
    </SelectItem>
  );
}
