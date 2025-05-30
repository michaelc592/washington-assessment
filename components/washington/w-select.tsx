"use client";
import * as React from "react";
import { Select, SelectContent, SelectTrigger } from "../ui/select";
import { WSelectBox } from "./w-select-box";
import { WDropdown } from "./w-dropdown";
import { WDropdownItem } from "./w-dropdown-item";
import { WDropdownHeader } from "./w-dropdown-header";
import { cn } from "@/lib/utils";

export interface WSelectItem {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  group?: string;
}

export interface WSelectProps {
  items: WSelectItem[];
  value?: string; 
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  widthClassName?: string; // Optional width override
}

export function WSelect({ items, value: valueProp, onChange: onChangeProp, placeholder = "Select an option", disabled, error, widthClassName }: WSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  const [internalValue, setInternalValue] = React.useState<string | undefined>(valueProp);
  const isControlled = valueProp !== undefined && onChangeProp !== undefined;
  const value = isControlled ? valueProp : internalValue;
  const onChange = isControlled ? onChangeProp : setInternalValue;

  const groups: Record<string, WSelectItem[]> = {};
  for (const item of items) {
    const group = item.group || "";
    if (!groups[group]) groups[group] = [];
    groups[group].push(item);
  }

  const selected = items.find(i => i.value === value);
  const isEmpty = !selected;
  let selectState: 'empty' | 'hover' | 'expanded-empty' | 'expanded-filled' | 'filled' | 'disabled' | 'error';
  if (disabled) {
    selectState = 'disabled';
  } else if (error) {
    selectState = 'error';
  } else if (open) {
    selectState = isEmpty ? 'expanded-empty' : 'expanded-filled';
  } else if (hover) {
    selectState = 'hover';
  } else {
    selectState = isEmpty ? 'empty' : 'filled';
  }

  return (
    <Select
      value={value}
      onValueChange={onChange}
      disabled={disabled}
      onOpenChange={setOpen}
    >
      <SelectTrigger
        asChild
        className={cn(
          "border w-full", 
          widthClassName, 
          selectState === 'disabled' && "border-[var(--fg-muted)] cursor-not-allowed bg-[var(--bg-lighter)]",
          selectState === 'error' && "border-[var(--destructive)]",
          selectState === 'expanded-empty' && "border-[var(--brand-primary)]",
          selectState === 'expanded-filled' && "border-[var(--brand-primary)]",
          selectState === 'hover' && "border-[var(--fg-secondary)]",
          selectState === 'empty' && "border-[var(--fg-muted)]",
          selectState === 'filled' && "border-[var(--fg-tertiary)]"
        )}
        chevronColor={
          selectState === 'expanded-empty' || selectState === 'expanded-filled'
            ? 'var(--brand-primary)'
            : selectState === 'empty' || selectState === 'hover' || selectState === 'filled'
              ? 'var(--fg-secondary)'
              : selectState === 'disabled'
                ? 'var(--bg-dark)'
                : 'var(--destructive)'
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <WSelectBox
          placeholder={placeholder}
          icon={selected?.icon}
          label={selected ? selected.label : undefined}
          selectState={selectState}
        />
      </SelectTrigger>
      <SelectContent className={widthClassName}>
        <WDropdown>
          {Object.entries(groups).map(([group, groupItems]) => (
            <React.Fragment key={group || 'default'}>
              {group && <WDropdownHeader>{group}</WDropdownHeader>}
              {groupItems.map(item => (
                <WDropdownItem
                  key={item.value}
                  value={item.value}
                  icon={item.icon}
                  label={item.label}
                  description={item.description}
                  selected={item.value === value}
                />
              ))}
            </React.Fragment>
          ))}
        </WDropdown>
      </SelectContent>
    </Select>
  );
}

