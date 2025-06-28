import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Users, 
  FileText, 
  Clock,
  Stethoscope,
  Heart,
  Activity,
  UserPlus
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: "Feature Access",
      description: `Opening ${action}...`,
    });
    console.log(`Doctor action: ${action}`);
  };

  const doctorStats = [
    {
      title: "Today's Patients",
      value: "12",
      change: "+2",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Appointments",
      value: "8",
      change: "scheduled",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      title: "Pending Reports",
      value: "5",
      change: "urgent",
      icon: FileText,
      color: "text-orange-600"
    },
    {
      title: "Active Cases",
      value: "23",
      change: "ongoing",
      icon: Heart,
      color: "text-red-600"
    }
  ];

  const todayAppointments = [
    { id: 1, patient: "Sarah Johnson", time: "09:00 AM", type: "Consultation", status: "confirmed" },
    { id: 2, patient: "Mike Chen", time: "10:30 AM", type: "Follow-up", status: "pending" },
    { id: 3, patient: "Emma Davis", time: "02:00 PM", type: "Check-up", status: "confirmed" },
    { id: 4, patient: "John Smith", time: "03:30 PM", type: "Consultation", status: "confirmed" }
  ];

  const recentPatients = [
    { id: 1, name: "Alice Brown", condition: "Hypertension", lastVisit: "2 days ago" },
    { id: 2, name: "Robert Wilson", condition: "Diabetes Type 2", lastVisit: "1 week ago" },
    { id: 3, name: "Maria Garcia", condition: "Arthritis", lastVisit: "3 days ago" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Doctor Dashboard</h2>
          <p className="text-gray-600">Patient care and medical management</p>
        </div>
        <Button 
          className="bg-green-600 hover:bg-green-700"
          onClick={() => handleAction("New Patient Registration")}
        >
          <UserPlus className="h-4 w-4 mr-2" />
          New Patient
        </Button>
      </div>

      {/* Doctor Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctorStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              Today's Appointments
            </CardTitle>
            <CardDescription>Scheduled appointments for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium">{appointment.patient}</p>
                  <p className="text-xs text-gray-500">{appointment.time} - {appointment.type}</p>
                </div>
                <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                  {appointment.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Patients */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-green-500" />
              Recent Patients
            </CardTitle>
            <CardDescription>Recently treated patients</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPatients.map((patient) => (
              <div key={patient.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium">{patient.name}</p>
                  <p className="text-xs text-gray-500">{patient.condition}</p>
                </div>
                <span className="text-xs text-gray-500">{patient.lastVisit}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>Common medical tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              className="justify-start" 
              variant="outline"
              onClick={() => handleAction("Write Prescription")}
            >
              <FileText className="h-4 w-4 mr-2" />
              Write Prescription
            </Button>
            <Button 
              className="justify-start" 
              variant="outline"
              onClick={() => handleAction("Patient Records")}
            >
              <Users className="h-4 w-4 mr-2" />
              Patient Records
            </Button>
            <Button 
              className="justify-start" 
              variant="outline"
              onClick={() => handleAction("Schedule Appointment")}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Appointment
            </Button>
            <Button 
              className="justify-start" 
              variant="outline"
              onClick={() => handleAction("Lab Results")}
            >
              <Heart className="h-4 w-4 mr-2" />
              Lab Results
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorDashboard;
