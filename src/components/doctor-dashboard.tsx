import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Send, Users, Bell, Activity, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface DoctorDashboardProps {
  onBack: () => void;
}

export function DoctorDashboard({ onBack }: DoctorDashboardProps) {
  const [selectedPatient, setSelectedPatient] = useState("");
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState("medium");
  const { toast } = useToast();

  // Mock patients data
  const patients = [
    { id: "1", name: "John Doe", status: "active", lastNotification: "2 hours ago" },
    { id: "2", name: "Sarah Smith", status: "active", lastNotification: "30 minutes ago" },
    { id: "3", name: "Mike Johnson", status: "active", lastNotification: "1 hour ago" },
    { id: "4", name: "Lisa Brown", status: "active", lastNotification: "3 hours ago" },
  ];

  const quickMessages = [
    "Time for your morning hydration - drink 2 glasses of warm water",
    "Please take a 15-minute gentle walk in fresh air",
    "Complete your breathing exercises - 10 deep breaths",
    "Time for your herbal tea preparation",
    "Please rest for 20 minutes after your meal",
  ];

  const handleSendNotification = () => {
    if (!selectedPatient || !message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please select a patient and enter a message.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the notification via your backend
    toast({
      title: "Notification Sent!",
      description: `Message sent to ${patients.find(p => p.id === selectedPatient)?.name}`,
    });

    // Reset form
    setMessage("");
    setSelectedPatient("");
    setPriority("medium");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-wellness text-wellness-foreground p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="text-wellness-foreground hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portal Selection
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-wellness-foreground border-white/30">
                Doctor Portal
              </Badge>
            </div>
          </div>
          
          <div className="mt-6">
            <h1 className="text-3xl font-bold">Dr. Sharma's Dashboard</h1>
            <p className="text-wellness-foreground/80 mt-2">
              Manage your patients and send therapy notifications
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Send Notification */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  <CardTitle>Send Notification</CardTitle>
                </div>
                <CardDescription>
                  Send instant therapy instructions to your patients
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient">Select Patient</Label>
                    <Select value={selectedPatient} onValueChange={setSelectedPatient}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a patient" />
                      </SelectTrigger>
                      <SelectContent>
                        {patients.map((patient) => (
                          <SelectItem key={patient.id} value={patient.id}>
                            {patient.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select value={priority} onValueChange={setPriority}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your therapy instruction..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Quick Messages</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {quickMessages.map((quickMsg, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="justify-start text-left h-auto p-3"
                        onClick={() => setMessage(quickMsg)}
                      >
                        {quickMsg}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button onClick={handleSendNotification} className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Notification
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Patients */}
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-wellness" />
                  <CardTitle className="text-lg">Active Patients</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {patients.map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                    <div>
                      <p className="text-sm font-medium">{patient.name}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {patient.lastNotification}
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {patient.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Today's Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active Patients</span>
                  <span className="font-bold">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Notifications Sent</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sessions Today</span>
                  <span className="font-bold">8</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-xs text-muted-foreground">
                  <p>• Sent notification to John Doe - 2 min ago</p>
                  <p>• Updated Sarah Smith's schedule - 15 min ago</p>
                  <p>• Session completed with Mike Johnson - 1h ago</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}