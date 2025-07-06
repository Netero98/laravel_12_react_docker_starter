export type LayoutItem = {
    w: number;
    h: number;
    x: number;
    y: number;
    i: string;
    minW: number;
    minH: number;
    moved: boolean;
    static: boolean;
};

export type Breakpoint = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

export type AllLayoutsData = {
    [key in Breakpoint]: LayoutItem[];
};

export const layouts: AllLayoutsData = {
    "lg": [
        {
            "w": 2,
            "h": 1,
            "x": 4,
            "y": 0,
            "i": "balance",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 2,
            "h": 2,
            "x": 0,
            "y": 0,
            "i": "wallet",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 2,
            "h": 3,
            "x": 4,
            "y": 1,
            "i": "expenses",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 2,
            "h": 2,
            "x": 2,
            "y": 0,
            "i": "income",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 4,
            "h": 2,
            "x": 0,
            "y": 2,
            "i": "history",
            "minW": 2,
            "minH": 1,
            "moved": false,
            "static": false
        }
    ],
    "md": [
        {
            "w": 2,
            "h": 1,
            "x": 0,
            "y": 0,
            "i": "balance",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 2,
            "h": 2,
            "x": 2,
            "y": 0,
            "i": "wallet",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 2,
            "h": 3,
            "x": 0,
            "y": 1,
            "i": "expenses",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 2,
            "h": 2,
            "x": 2,
            "y": 2,
            "i": "income",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 4,
            "h": 2,
            "x": 0,
            "y": 4,
            "i": "history",
            "minW": 2,
            "minH": 1,
            "moved": false,
            "static": false
        }
    ],
    "sm": [
        {
            "w": 1,
            "h": 1,
            "x": 0,
            "y": 0,
            "i": "balance",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 1,
            "h": 2,
            "x": 1,
            "y": 0,
            "i": "wallet",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 1,
            "h": 3,
            "x": 0,
            "y": 1,
            "i": "expenses",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 1,
            "h": 2,
            "x": 1,
            "y": 2,
            "i": "income",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 2,
            "h": 2,
            "x": 0,
            "y": 4,
            "i": "history",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        }
    ],
    "xs": [
        {
            "w": 1,
            "h": 1,
            "x": 0,
            "y": 0,
            "i": "balance",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 1,
            "h": 2,
            "x": 0,
            "y": 1,
            "i": "wallet",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 1,
            "h": 3,
            "x": 1,
            "y": 0,
            "i": "expenses",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 1,
            "h": 2,
            "x": 1,
            "y": 3,
            "i": "income",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 1,
            "h": 2,
            "x": 0,
            "y": 3,
            "i": "history",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        }
    ],
    "xxs": [
        {
            "w": 2,
            "h": 1,
            "x": 0,
            "y": 0,
            "i": "balance",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 2,
            "h": 2,
            "x": 0,
            "y": 1,
            "i": "wallet",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 2,
            "h": 2,
            "x": 0,
            "y": 3,
            "i": "expenses",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 2,
            "h": 2,
            "x": 0,
            "y": 5,
            "i": "income",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        },
        {
            "w": 2,
            "h": 2,
            "x": 0,
            "y": 7,
            "i": "history",
            "minW": 1,
            "minH": 1,
            "moved": false,
            "static": false
        }
    ]
};
