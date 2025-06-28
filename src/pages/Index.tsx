
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Shield, Users, FileText } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">SmartClinic</h1>
            </div>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate("/login")}
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Login
              </Button>
              <Button 
                onClick={() => navigate("/register")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Clinic Access Control System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure, efficient, and user-friendly healthcare management platform designed for modern medical facilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-blue-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle className="text-blue-900">Secure Access</CardTitle>
              <CardDescription>
                Advanced security protocols to protect patient data and ensure HIPAA compliance.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-green-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-green-600 mb-2" />
              <CardTitle className="text-green-900">Staff Management</CardTitle>
              <CardDescription>
                Comprehensive staff access control with role-based permissions and monitoring.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="h-12 w-12 text-purple-600 mb-2" />
              <CardTitle className="text-purple-900">Digital Records</CardTitle>
              <CardDescription>
                Streamlined digital record management with real-time updates and backup.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">Join thousands of healthcare professionals using SmartClinic.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate("/register")}
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Create Account
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/login")}
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Sign In
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
