import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  FileText, 
  Heart, 
  Clock,
  Pill,
  Activity,
  Phone,
  User
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import AppointmentBookingModal from "./AppointmentBookingModal";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [upcomingAppointments, setUpcomingAppointments] = useState([
    { id: 1, doctor: "Dr. Sarah Wilson", date: "Mar 15, 2024", time: "10:00 AM", type: "General Checkup" },
    { id: 2, doctor: "Dr. Michael Chen", date: "Mar 22, 2024", time: "02:30 PM", type: "Cardiology" },
    { id: 3, doctor: "Dr. Emma Johnson", date: "Apr 5, 2024", time: "11:15 AM", type: "Follow-up" }
  ]);

  const handleAction = (action: string) => {
    if (action === "Book Appointment") {
      setIsBookingModalOpen(true);
      return;
    }
    
    toast({
      title: "Feature Access",
      description: `Opening ${action}...`,
    });
    console.log(`Patient action: ${action}`);
  };

  const handleCall = (doctor: string) => {
    toast({
      title: "Calling Doctor",
      description: `Connecting you with ${doctor}...`,
    });
  };

  const handleBookingComplete = (newAppointment: any) => {
    setUpcomingAppointments(prev => [newAppointment, ...prev]);
    console.log("New appointment booked:", newAppointment);
  };

  const patientStats = [
    {
      title: "Next Appointment",
      value: "Mar 15",
      change: "2 days",
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      title: "Active Prescriptions",
      value: "3",
      change: "medications",
      icon: Pill,
      color: "text-green-600"
    },
    {
      title: "Test Results",
      value: "2",
      change: "pending",
      icon: FileText,
      color: "text-orange-600"
    },
    {
      title: "Health Score",
      value: "Good",
      change: "stable",
      icon: Heart,
      color: "text-red-600"
    }
  ];

  const recentResults = [
    { id: 1, test: "Blood Test", date: "Mar 10, 2024", status: "Normal", doctor: "Dr. Wilson" },
    { id: 2, test: "X-Ray Chest", date: "Mar 8, 2024", status: "Pending", doctor: "Dr. Chen" },
    { id: 3, test: "ECG", date: "Mar 5, 2024", status: "Normal", doctor: "Dr. Johnson" }
  ];

  const medications = [
    { id: 1, name: "Lisinopril 10mg", frequency: "Once daily", remaining: "15 days" },
    { id: 2, name: "Metformin 500mg", frequency: "Twice daily", remaining: "8 days" },
    { id: 3, name: "Atorvastatin 20mg", frequency: "Once daily", remaining: "22 days" }
  ];

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Patient Portal</h2>
            <p className="text-gray-600">Your health information and appointments</p>
          </div>
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => handleAction("Book Appointment")}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Book Appointment
          </Button>
        </div>

        {/* Patient Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {patientStats.map((stat, index) => (
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
          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                Upcoming Appointments
              </CardTitle>
              <CardDescription>Your scheduled medical appointments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{appointment.doctor}</p>
                    <p className="text-xs text-gray-500">{appointment.date} at {appointment.time}</p>
                    <p className="text-xs text-blue-600">{appointment.type}</p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleCall(appointment.doctor)}
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Test Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-500" />
                Recent Test Results
              </CardTitle>
              <CardDescription>Latest medical test results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentResults.map((result) => (
                <div key={result.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{result.test}</p>
                    <p className="text-xs text-gray-500">{result.date} - {result.doctor}</p>
                  </div>
                  <Badge variant={result.status === 'Normal' ? 'default' : 'secondary'}>
                    {result.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Medications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5 text-purple-500" />
                Current Medications
              </CardTitle>
              <CardDescription>Your active prescriptions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {medications.map((med) => (
                <div key={med.id} className="p-3 bg-purple-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{med.name}</p>
                      <p className="text-xs text-gray-500">{med.frequency}</p>
                    </div>
                    <span className="text-xs text-purple-600">{med.remaining}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>Common patient tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => handleAction("Schedule Appointment")}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Appointment
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => handleAction("View Medical Records")}
              >
                <FileText className="h-4 w-4 mr-2" />
                View Medical Records
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => handleAction("Request Prescription Refill")}
              >
                <Pill className="h-4 w-4 mr-2" />
                Request Prescription Refill
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => handleAction("Contact Doctor")}
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact Doctor
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <AppointmentBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onBookingComplete={handleBookingComplete}
      />
    </>
  );
};

export default PatientDashboard;
