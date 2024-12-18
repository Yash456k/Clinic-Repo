import { useEffect, useState } from "react";
import { Heart, Mail, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const App = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    //#9db79e
    <div className="min-h-screen bg-[#8ac38b] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}

      {/* Main Content */}
      <div
        className={`relative text-center space-y-8 transform transition-all duration-1000 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Logo Area */}
        <div className="mb-12 relative">
          <Heart
            size={64}
            className="mx-auto text-yellow-600 transform hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Coming Soon Text */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-gray-800 mb-2 tracking-tight">
            Coming Soon
          </h1>
          <p className="text-2xl text-gray-600 font-light">
            Crafting Excellence and Smiles
          </p>
        </div>

        {/* Contact Card */}
        <Card className="mt-16 p-8 bg-orange-50 border-none shadow-xl max-w-md mx-auto transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Connect With Us
          </h2>
          <div className="space-y-4">
            <Button
              className="bg-gray-800 hover:bg-gray-700 text-orange-50 w-full group relative overflow-hidden"
              onClick={() =>
                (window.location.href = "mailto:akaaydental@gmail.com")
              }
            >
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="relative z-10">akaaydental@gmail.com</span>
            </Button>
            <Button
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-orange-50 w-full group"
              onClick={() => (window.location.href = "tel:+918488071383")}
            >
              <Phone className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              +91 84880 71383
            </Button>
          </div>

          {/* Opening Hours */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-gray-700">
            <div className="flex items-center justify-center mb-2">
              <Clock className="h-4 w-4 mr-2" />
              <span className="font-medium">Working Hours</span>
            </div>
            <div className="text-sm space-y-1">
              <p>Morning: 10:00 AM - 1:30 PM</p>
              <p>Evening: 4:30 PM - 8:30 PM</p>
            </div>
          </div>

          {/* Address */}
          <div className="mt-2 pt-2 border-t border-gray-200 text-gray-700">
            <div className="flex items-center justify-center">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
              <div className="text-sm">
              <div className="flex flex-row">
              <Phone className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              +91 8488071383
              </div>
                106, HR Elanza,
                <br />
                Vikas Gruh Road,
                <br />
                Paldi, Ahmedabad - 07
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer
        className={`mt-16 text-gray-600 text-sm transform transition-all duration-1000 delay-300 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <p className="tracking-wider">© 2024 Akaay Dental Care</p>
      </footer>
    </div>
  );
};

export default App;
