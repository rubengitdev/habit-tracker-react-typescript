import { isSameDay } from 'date-fns';
import { type ReactNode } from 'react';
import { HabitContext, type Habit } from './useHabits';
import { useLocalStorage } from '../hooks/useLocalStorage';

type HabitProviderProps = {
    children: ReactNode;
};

export function HabitProvider({ children }: HabitProviderProps) {
    const [habits, setHabits] = useLocalStorage<Habit[]>('Habits', []);

    function addHabit(name: string) {
        const alreadyExists = habits.some(
            (habit) =>
                habit.name.trim().toLowerCase() === name.trim().toLowerCase(),
        );
        if (alreadyExists) {
            return false;
        }
        setHabits((curr) => [
            ...curr,
            { id: crypto.randomUUID(), name, completions: [] },
        ]);
        return true;
    }

    function deleteHabit(id: string) {
        setHabits((curr) => curr.filter((h) => h.id !== id));
    }

    function toggleHabit(id: string, date: Date) {
        setHabits((curr) =>
            curr.map((h) => {
                if (h.id !== id) return h;

                const alreadyDone = h.completions.some((c) =>
                    isSameDay(c, date),
                );
                const completions = alreadyDone
                    ? h.completions.filter((c) => !isSameDay(c, date))
                    : [...h.completions, date];

                return { ...h, completions };
            }),
        );
    }

    return (
        <HabitContext value={{ habits, addHabit, toggleHabit, deleteHabit }}>
            {children}
        </HabitContext>
    );
}
