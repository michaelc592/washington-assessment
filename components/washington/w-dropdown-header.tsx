import * as React from "react";
import { SelectLabel } from "../ui/select";

export function WDropdownHeader(props: React.ComponentProps<typeof SelectLabel>) {
  return <SelectLabel style = {{color: 'var(--fg-secondary)'}} {...props} />;
}
