import * as React from "react";

export function WLeadingVisual({ children, color }: { children: React.ReactNode; color?: string }) {
  if (React.isValidElement(children)) {
    // Always enforce 18x18 size and color if provided
    return React.cloneElement(children as React.ReactElement<any, any>, {
      style: {
        width: "18px",
        height: "18px",
        ...(children.props && (children.props as any).style ? (children.props as any).style : {}),
        color,
      },
    });
  }
  return <>{children}</>;
}
