import { HabitForm } from "./components/HabitForm";
import { HabitList } from "./components/HabitList";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col gap-4 min-h-screen dark:bg-slate-950 p-10 text-white">
      <Header />
      <HabitForm />
      <HabitList />
    </div>
  );
}
