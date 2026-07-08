import { Button } from "./Button";

export function HabitForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 w-full max-w-xl p-1 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800">
      <input
        type="text"
        placeholder="Enter a new habit..."
        className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-800 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-800 dark:text-gray-100 shadow-sm"
      />
      <Button>Add Habit</Button>
    </form>
  );
}
