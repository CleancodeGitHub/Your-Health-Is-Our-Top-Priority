'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

export function AppointmentForm() {
  const [date, setDate] = useState<Date>();

  return (
    <section id="appointment" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Book an Appointment</h2>
          <p className="mt-4 text-lg text-gray-600">
            Schedule your visit with our healthcare professionals
          </p>
        </div>

        <div className="mt-16 max-w-xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" type="text" required />
              </div>
              <div>
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" type="text" required />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required />
            </div>

            <div>
              <Label>Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button type="submit" className="w-full">
              Schedule Appointment
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}