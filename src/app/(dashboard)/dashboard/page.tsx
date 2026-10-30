import { redirect } from 'next/navigation';

// /dashboard opens the leads – the first section of the staff area
export default function DashboardPage() {
  redirect('/dashboard/leads');
}
