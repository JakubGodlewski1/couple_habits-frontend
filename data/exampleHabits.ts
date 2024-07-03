import {Habit} from "../types";

export const exampleHabits: Habit[] = [
    {
        id: "1",
        frequency: "daily",
        details: {
            mine: {label: "Run 5 km", completed: false},
            partner: {label: "Walk 3 km", completed: true}
        }
    },
    {
        id: "2",
        frequency: ["M", "W", "S"],
        details: {
            mine: {label: "Read 20 pages of a book", completed: true},
            partner: {label: "Discuss the book with a friend", completed: false}
        }
    },
    {
        id: "3",
        frequency: "weekly",
        details: {
            mine: {label: "Attend a yoga class", completed: true},
            partner: {label: "Practice yoga at home", completed: false}
        }
    },
    {
        id: "4",
        frequency: ["T", "R"],
        details: {
            mine: {label: "Meditate for 20 minutes", completed: true},
            partner: {label: "Share meditation insights", completed: false}
        }
    },
    {
        id: "5",
        frequency: "daily",
        details: {
            mine: {label: "Drink 8 glasses of water", completed: true},
            partner: {label: "Encourage partner to drink water", completed: true}
        }
    },
    {
        id: "6",
        frequency: "weekly",
        details: {
            mine: {label: "Go for a hike", completed: false},
            partner: {label: "Plan next hiking trip", completed: true}
        }
    },
    {
        id: "7",
        frequency: ["S"],
        details: {
            mine: {label: "Cook a new recipe", completed: true},
            partner: {label: "Rate the new recipe", completed: false}
        }
    },
    {
        id: "8",
        frequency: "daily",
        details: {
            mine: {label: "Write a journal entry", completed: true},
            partner: {label: "Share an entry with partner", completed: false}
        }
    },
    {
        id: "9",
        frequency: ["S", "U"],
        details: {
            mine: {label: "Call parents", completed: true},
            partner: {label: "Discuss family updates", completed: false}
        }
    },
    {
        id: "10",
        frequency: "daily",
        details: {
            mine: {label: "Practice coding for 1 hour", completed: true},
            partner: {label: "Review partner's code", completed: false}
        }
    }
];