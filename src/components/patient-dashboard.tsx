import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NotificationCard } from "@/components/ui/notification-card";
import { ArrowLeft, Bell, Calendar, Activity, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PatientDashboardProps {
  onBack: () => void;
}

export function PatientDashboard({ onBack }: PatientDashboardProps) {
  // Mock notifications data
  const notifications = [
    {
      id: "1",
      message: "Time for your morning hydration - drink 2 glasses of warm water",
      time: "2 minutes ago",
      sender: "Dr. Sharma",
      priority: "high" as const,
      isRead: false,
    },
    {
      id: "2",
      message: "Please take a 15-minute gentle walk in fresh air",
      time: "1 hour ago",
      sender: "Dr. Sharma",
      priority: "medium" as const,
      isRead: false,
    },
    {
      id: "3",
      message: "Time for your herbal tea preparation - use the provided herbs",
      time: "3 hours ago",
      sender: "Dr. Sharma",
      priority: "medium" as const,
      isRead: true,
    },
    {
      id: "4",
      message: "Complete your breathing exercises - 10 deep breaths",
      time: "5 hours ago",
      sender: "Dr. Sharma",
      priority: "low" as const,
      isRead: true,
    },
  ];

  const todaySchedule = [
    { time: "7:00 AM", activity: "Morning Abhyanga (Oil Massage)", status: "completed" },
    { time: "9:00 AM", activity: "Herbal Steam Therapy", status: "completed" },
    { time: "11:00 AM", activity: "Panchakarma Treatment Session", status: "upcoming" },
    { time: "3:00 PM", activity: "Yoga & Meditation", status: "upcoming" },
    { time: "6:00 PM", activity: "Dietary Consultation", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portal Selection
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Patient Portal
              </Badge>
            </div>
          </div>
          
          <div className="mt-6">
            <h1 className="text-3xl font-bold">Welcome back, John</h1>
            <p className="text-white/80 mt-2">
              Your wellness journey continues today
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Notifications */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    <CardTitle>Recent Notifications</CardTitle>
                  </div>
                  <Badge variant="secondary">
                    {notifications.filter(n => !n.isRead).length} new
                  </Badge>
                </div>
                <CardDescription>
                  Stay updated with your therapy instructions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification) => (
                  <NotificationCard
                    key={notification.id}
                    {...notification}
                  />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-wellness" />
                  <CardTitle className="text-lg">Today's Schedule</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {todaySchedule.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 rounded-lg bg-muted/30">
                    <div className="text-xs font-medium text-muted-foreground min-w-16">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.activity}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {item.status === "completed" ? (
                          <CheckCircle className="h-3 w-3 text-wellness" />
                        ) : (
                          <Activity className="h-3 w-3 text-primary" />
                        )}
                        <span className={`text-xs ${
                          item.status === "completed" ? "text-wellness" : "text-primary"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-wellness text-wellness-foreground shadow-wellness">
              <CardHeader>
                <CardTitle className="text-lg">Today's Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Notifications Read</span>
                  <span className="font-bold">2/4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sessions Completed</span>
                  <span className="font-bold">2/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Wellness Score</span>
                  <span className="font-bold">85%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}