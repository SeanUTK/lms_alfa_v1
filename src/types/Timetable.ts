export interface TimeSlot {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  startTime: string;
  endTime: string;
  classId: string;
  className: string;
  teacher: string;
  room: string;
  color: string;
}

export interface TimetableDay {
  name: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  slots: TimeSlot[];
}

export interface Timetable {
  id: string;
  name: string;
  days: TimetableDay[];
} 