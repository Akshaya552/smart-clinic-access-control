import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  UserCheck, 
  Settings, 
  Shield, 
  Activity,
  FileText,
  Database,
  AlertTriangle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: "Feature Access",
      description: `Opening ${action}...`,
    });
    // You can add specific navigation logic here for each action
    console.log(`Admin action: ${action}`);
  };

  const adminStats = [
    {
      title: "Total Users",
      value: "1,247",
      change: "+18%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Doctors",
      value: "89",
      change: "+5%",
      icon: UserCheck,
      color: "text-green-600"
    },
    {
      title: "System Health",
      value: "99.9%",
      change: "stable",
      icon: Shield,
      color: "text-purple-600"
    },
    {
      title: "Data Backup",
      value: "Complete",
      change: "2h ago",
      icon: Database,
      color: "text-orange-600"
    }
  ];

  const systemAlerts = [
    { id: 1, message: "User registration spike detected", severity: "info", time: "5 min ago" },
    { id: 2, message: "Database maintenance scheduled", severity: "warning", time: "1 hour" },
    { id: 3, message: "License renewal required", severity: "high", time: "3 days" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
          <p className="text-gray-600">System administration and management</p>
        </div>
        <Button 
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => handleAction("System Settings")}
        >
          <Settings className="h-4 w-4 mr-2" />
          System Settings
        </Button>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStats.map((stat, index) => (
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
        {/* System Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              System Alerts
            </CardTitle>
            <CardDescription>Important notifications and warnings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemAlerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.time}</p>
                </div>
                <Badge variant={alert.severity === 'high' ? 'destructive' : 'secondary'}>
                  {alert.severity}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Admin Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Admin Actions
            </CardTitle>
            <CardDescription>System management tools</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              className="w-full justify-start" 
              variant="outline"
              onClick={() => handleAction("User Management")}
            >
              <Users className="h-4 w-4 mr-2" />
              Manage Users
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="outline"
              onClick={() => handleAction("Security Settings")}
            >
              <Shield className="h-4 w-4 mr-2" />
              Security Settings
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="outline"
              onClick={() => handleAction("System Reports")}
            >
              <FileText className="h-4 w-4 mr-2" />
              System Reports
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="outline"
              onClick={() => handleAction("Database Management")}
            >
              <Database className="h-4 w-4 mr-2" />
              Database Management
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
