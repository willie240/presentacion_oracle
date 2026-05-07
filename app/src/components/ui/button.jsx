import * as React from "react"

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Button = React.forwardRef(({ className, variant = "default", ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
      variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
      className
    )}
    {...props}
  />
))
Button.displayName = "Button"

export { Button }
