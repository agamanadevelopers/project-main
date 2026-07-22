import { cn } from "@/lib/utils";

/** Editorial max-width container with responsive gutters. */
export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[80rem] px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}
