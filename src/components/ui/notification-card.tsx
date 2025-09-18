import { cn } from "@/lib/utils";
import { Clock, User } from "lucide-react";

interface NotificationCardProps {
  id: string;
  message: string;
  time: string;
  sender?: string;
  priority?: "low" | "medium" | "high";
  isRead?: boolean;
  className?: string;
}

export function NotificationCard({
  message,
  time,
  sender,
  priority = "medium",
  isRead = false,
  className,
}: NotificationCardProps) {
  const priorityStyles = {
    low: "border-l-muted",
    medium: "border-l-primary",
    high: "border-l-destructive",
  };

  return (
    <div
      className={cn(
        "relative rounded-lg border-l-4 bg-gradient-card p-4 shadow-soft transition-all hover:shadow-lg",
        priorityStyles[priority],
        !isRead && "bg-primary/5",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 space-y-2">
          <p className={cn(
            "text-sm leading-relaxed",
            !isRead && "font-medium"
          )}>
            {message}
          </p>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{time}</span>
            </div>
            {sender && (
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{sender}</span>
              </div>
            )}
          </div>
        </div>
        
        {!isRead && (
          <div className="h-2 w-2 rounded-full bg-primary"></div>
        )}
      </div>
    </div>
  );
}