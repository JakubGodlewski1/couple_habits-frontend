import {Habit, Specific_days} from "../../types";

const daysOfTheWeekMap: Record<number, keyof Specific_days> = {
    0: "U",
    1: "M",
    2: "T",
    3: "W",
    4: "R",
    5: "F",
    6: "S"
};

// Get today's day index once to avoid multiple calls
const getToday = () => new Date().getDay();

// Helper function to check if a habit is scheduled for today
const isScheduledForToday = (habit: Habit, today: number): boolean => {
    const {frequency} = habit;
    return (
        (frequency.type === "repeat" && frequency.repeatOption === "daily") ||
        (frequency.type === "specific days" && frequency.specificDaysOption[daysOfTheWeekMap[today]])
    );
};

// Helper function to check if both mine and partner have completed the habit
const isCompleted = (habit: Habit): boolean =>
    habit.details.mine.completed && habit.details.partner.completed;

// Check if the habit should be done today
const allToday = (habit: Habit) => isScheduledForToday(habit, getToday());

// Check if the habit is completed today
const completedToday = (habit: Habit) => {
    const today = getToday();
    return isScheduledForToday(habit, today) && isCompleted(habit);
};

// Check if the habit is not completed today
const notCompletedToday = (habit: Habit) => {
    const today = getToday();
    return isScheduledForToday(habit, today) && !isCompleted(habit);
};

// Check if the habit is completed
const completed = (habit: Habit) => isCompleted(habit);

// Check if the habit is not completed
const notCompleted = (habit: Habit) => !isCompleted(habit);

// Check if the habit is scheduled for this week
const allThisWeek = (habit: Habit) =>
    habit.frequency.type === "repeat" && habit.frequency.repeatOption === "weekly";

// Check if the habit is completed this week
const completedThisWeek = (habit: Habit) =>
    allThisWeek(habit) && isCompleted(habit);

// Check if the habit is not completed this week
const notCompletedThisWeek = (habit: Habit) =>
    allThisWeek(habit) && !isCompleted(habit);

export const habitFilters = {
    notCompleted,
    completed,
    allThisWeek,
    completedToday,
    notCompletedToday,
    allToday,
    completedThisWeek,
    notCompletedThisWeek
};
