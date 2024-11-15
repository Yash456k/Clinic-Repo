import React, { useEffect, useState } from "react";
import { Heart, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const App = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Main Content */}
      <div
        className={`relative text-center space-y-8 transform transition-all duration-1000 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Logo Area */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 animate-pulse bg-purple-400/20 rounded-full transform scale-150 blur-xl" />
          <Heart
            size={64}
            className="mx-auto text-purple-200 transform hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Coming Soon Text */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-white mb-2 tracking-tight">
            Coming Soon
          </h1>
          <p className="text-2xl text-purple-200 font-light">
            Crafting Excellence in Dental Care
          </p>
        </div>

        {/* Contact Card */}
        <Card className="mt-16 p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl max-w-md mx-auto transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Connect With Us
          </h2>
          <div className="space-y-4">
            <Button
              className="bg-white hover:bg-white text-purple-900 w-full group relative overflow-hidden"
              onClick={() =>
                (window.location.href = "mailto:contact@dentalclinic.com")
              }
            >
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="relative z-10">contact@dentalclinic.com</span>
            </Button>
            <Button
              variant="outline"
              className="border-white/90 text-purple-900 hover:bg-white w-full group"
              onClick={() => (window.location.href = "tel:+1234567890")}
            >
              <Phone className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              (123) 456-7890
            </Button>
          </div>

          {/* Opening Hours */}
          <div className="mt-6 pt-6 border-t border-white/10 text-white/80">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer
        className={`mt-16 text-white/60 text-sm transform transition-all duration-1000 delay-300 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <p className="tracking-wider">
          © 2024 Dental Clinic • Premium Dental Care
        </p>
      </footer>
    </div>
  );
};

export default App;
