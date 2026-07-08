import { Button } from "./Button";

export function HabitList() {
  const habits = [
    {
      id: 1,
      name: "Hi",
    },
    {
      id: 2,
      name: "Bye",
    },
  ];

  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits yet. Add one above to get started
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  );
}

type HabitItemProps = {
  habit: { id: string; name: string };
};

function HabitItem({ habit }: HabitItemProps) {
  const visibleDates = [new Date()];
  return (
    <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <span className="font-medium">{habit.name}</span>
          <span className="text-sm text-amber-400">🔥 3</span>
        </div>
        <div>
          <Button>Delete</Button>
        </div>
      </div>
    </div>
  );
}
