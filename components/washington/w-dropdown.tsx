import * as React from "react";
import { SelectGroup } from "../ui/select";
import { cn } from "@/lib/utils";

export function WDropdown(props: React.ComponentProps<typeof SelectGroup>) {
  return <SelectGroup className={cn("bg-white rounded-md", props.className)} {...props} />;
}
