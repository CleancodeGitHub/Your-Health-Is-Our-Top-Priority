'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Award } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
          alt="Modern medical facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Your Health Is Our Top Priority
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Experience world-class healthcare with our team of expert doctors and state-of-the-art facilities.
          </p>
          <div className="mt-10 flex gap-4">
            <Button size="lg" variant="default">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: Calendar, label: '24/7 Service', value: 'Always Available' },
              { icon: Users, label: 'Active Patients', value: '10,000+' },
              { icon: Award, label: 'Experience', value: '25+ Years' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <stat.icon className="h-8 w-8 text-white" />
                <p className="mt-4 text-sm font-medium text-white/80">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}