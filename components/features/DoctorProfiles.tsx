'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
    availability: 'Mon - Fri',
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80',
    availability: 'Tue - Sat',
  },
  {
    name: 'Dr. Emily Williams',
    specialty: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80',
    availability: 'Mon - Thu',
  },
  {
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80',
    availability: 'Wed - Sun',
  },
];

export function DoctorProfiles() {
  return (
    <section id="doctors" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Expert Doctors</h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet our team of experienced healthcare professionals
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                <p className="mt-1 text-sm text-blue-600">{doctor.specialty}</p>
                <p className="mt-2 text-sm text-gray-600">Available: {doctor.availability}</p>
                <Button className="mt-4 w-full">Book Appointment</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}