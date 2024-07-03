import {Habit} from "../types";

export const exampleHabits: Habit[] = [
    {
        id: "1",
        frequency: {
            type: "repeat",
            repeatOption: "daily"
        },
        details: {
            mine: {label: "Run 5 km", completed: false},
            partner: {label: "Walk 3 km", completed: true}
        }
    },
    {
        id: "2",
        frequency: {
            type: "repeat",
            repeatOption: "weekly"
        },
        details: {
            mine: {label: "Read 20 pages of a book", completed: true},
            partner: {label: "Discuss the book with a friend", completed: false}
        }
    },
    {
        id: "3",
        frequency: {
            type: "specific days",
            specificDaysOption: {
                "M": true,
                "T": true,
                "W": true,
                "R": true,
                "F": true,
                "S": true,
                "U": true,
            }
        },
        details: {
            mine: {label: "Attend a yoga class", completed: true},
            partner: {label: "Practice yoga at home", completed: false}
        }
    },
    {
        id: "4",
        frequency: {
            type: "specific days",
            specificDaysOption: {
                "M": true,
                "T": true,
                "W": false,
                "R": true,
                "F": false,
                "S": true,
                "U": true,
            }
        },
        details: {
            mine: {label: "Meditate for 20 minutes", completed: true},
            partner: {label: "Share meditation insights", completed: false}
        }
    },
    {
        id: "5",
        frequency: {
            type: "specific days",
            specificDaysOption: {
                "M": false,
                "T": false,
                "W": true,
                "R": false,
                "F": true,
                "S": true,
                "U": false,
            }
        },
        details: {
            mine: {label: "Drink 8 glasses of water", completed: true},
            partner: {label: "Encourage partner to drink water", completed: true}
        }
    },
    {
        id: "6",
        frequency: {
            type: "specific days",
            specificDaysOption: {
                "M": false,
                "T": false,
                "W": false,
                "R": false,
                "F": false,
                "S": false,
                "U": true
            }
        },
        details: {
            mine: {label: "Go for a hike", completed: false},
            partner: {label: "Plan next hiking trip", completed: true}
        }
    },
    {
        id: "7",
        frequency: {
            type: "repeat",
            repeatOption: "weekly"
        },
        details: {
            mine: {label: "Cook a new recipe", completed: true},
            partner: {label: "Rate the new recipe", completed: false}
        }
    },
    {
        id: "8",
        frequency: {
            type: "repeat",
            repeatOption: "daily"
        },
        details: {
            mine: {label: "Write a journal entry", completed: true},
            partner: {label: "Share an entry with partner", completed: false}
        }
    },
    {
        id: "9",
        frequency: {
            type: "repeat",
            repeatOption: "weekly"
        },
        details: {
            mine: {label: "Call parents", completed: true},
            partner: {label: "Discuss family updates", completed: false}
        }
    },
    {
        id: "10",
        frequency: {
            type: "repeat",
            repeatOption: "daily"
        },
        details: {
            mine: {label: "Practice coding for 1 hour", completed: true},
            partner: {label: "Review partner's code", completed: false}
        }
    }
];