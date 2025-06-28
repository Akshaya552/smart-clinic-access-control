
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Users, 
  Calendar, 
  FileText, 
  Bell, 
  Settings, 
  LogOut,
  TrendingUp,
  Clock,
  Shield,
  Heart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserData {
  email: string;
  loginTime: string;
}

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("smartclinic_user");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    
    try {
      const user = JSON.parse(storedUser) as UserData;
      setUserData(user);
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("smartclinic_user");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  const dashboardStats = [
    {
      title: "Active Patients",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Today's Appointments",
      value: "156",
      change: "+5%",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      title: "Staff On Duty",
      value: "89",
      change: "+2%",
      icon: Shield,
      color: "text-purple-600"
    },
    {
      title: "System Health",
      value: "99.9%",
      change: "stable",
      icon: Heart,
      color: "text-red-600"
    }
  ];

  const recentActivities = [
    { id: 1, action: "New patient registration", user: "Dr. Smith", time: "2 minutes ago" },
    { id: 2, action: "Lab results uploaded", user: "Lab Tech", time: "5 minutes ago" },
    { id: 3, action: "Appointment scheduled", user: "Reception", time: "8 minutes ago" },
    { id: 4, action: "Medical record updated", user: "Nurse Johnson", time: "12 minutes ago" },
    { id: 5, action: "Security access granted", user: "Admin", time: "15 minutes ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Activity className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">SmartClinic Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back, {userData.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Good Morning!</h2>
          <p className="text-gray-600">Here's what's happening at your clinic today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">{stat.change}</span>
                  <span className="text-xs text-gray-500 ml-1">from last week</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Frequently used functions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Patient Registration
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Appointment
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                View Medical Records
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Shield className="h-4 w-4 mr-2" />
                Access Control
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Latest system activities and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">by {activity.user}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {activity.time}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              System Status
            </CardTitle>
            <CardDescription>
              Real-time monitoring of clinic systems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-green-900">Database</p>
                  <p className="text-xs text-green-600">All systems operational</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Online</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-blue-900">Security</p>
                  <p className="text-xs text-blue-600">Access controls active</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Secure</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-purple-900">Backup</p>
                  <p className="text-xs text-purple-600">Last sync: 2 hours ago</p>
                </div>
                <Badge className="bg-purple-100 text-purple-800">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Home;
