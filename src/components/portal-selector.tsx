import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, UserCheck, Stethoscope, Heart } from "lucide-react";

interface PortalSelectorProps {
  onSelectPortal: (portal: "patient" | "doctor") => void;
}

export function PortalSelector({ onSelectPortal }: PortalSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-white" />
            <h1 className="text-4xl font-bold text-white">PanchaHealth</h1>
          </div>
          <p className="text-xl text-white/90">
            Panchakarma Therapy Management Platform
          </p>
          <p className="text-white/70 mt-2">
            Choose your portal to continue
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Patient Portal */}
          <Card className="border-0 shadow-wellness bg-gradient-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Patient Portal</CardTitle>
              <CardDescription className="text-base">
                Access your therapy schedule, receive notifications, and track your wellness journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserCheck className="h-4 w-4 text-wellness" />
                  <span>Receive therapy notifications</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserCheck className="h-4 w-4 text-wellness" />
                  <span>Track your progress</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserCheck className="h-4 w-4 text-wellness" />
                  <span>View treatment schedule</span>
                </div>
              </div>
              <Button 
                onClick={() => onSelectPortal("patient")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Enter Patient Portal
              </Button>
            </CardContent>
          </Card>

          {/* Doctor Portal */}
          <Card className="border-0 shadow-wellness bg-gradient-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-wellness/10 rounded-full flex items-center justify-center">
                <Stethoscope className="h-8 w-8 text-wellness" />
              </div>
              <CardTitle className="text-2xl">Doctor Portal</CardTitle>
              <CardDescription className="text-base">
                Manage patients, send therapy notifications, and monitor treatment progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserCheck className="h-4 w-4 text-wellness" />
                  <span>Send instant notifications</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserCheck className="h-4 w-4 text-wellness" />
                  <span>Manage patient schedules</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserCheck className="h-4 w-4 text-wellness" />
                  <span>Monitor therapy progress</span>
                </div>
              </div>
              <Button 
                onClick={() => onSelectPortal("doctor")}
                className="w-full bg-wellness hover:bg-wellness/90 text-wellness-foreground"
                size="lg"
              >
                Enter Doctor Portal
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            Professional Panchakarma therapy management for better health outcomes
          </p>
        </div>
      </div>
    </div>
  );
}