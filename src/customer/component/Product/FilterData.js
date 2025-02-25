export const color=[
    "white",
    "Black",
    "Red",
    "Marun",
    "Yellow",
    "Green",
    "Blue",
    "Pink",
    "Being"
];

export const filters=[
    
    {
        id:"color",
        name:"Color",
        option:[
            {value:"white",label:"White"},
            {value:"beige",label:"Begie"},
            {value:"black",label:"Black"},
            {value:"red",label:"Red"},
            {value:"marun",label:"Marun"},
            {value:"yellow",label:"Yellow"},
            {value:"green",label:"Green"},
            {value:"blue",label:"Blue"},
            {value:"pink",label:"Pink"},
            {value:"being",label:"Being"}

        ],
    },
    {
        id:"size",
        name:"Size",
        option:[
            {value:"S",label:"S"},
            {value:"M",label:"M"},
            {value:"L",label:"L"},
        ],
    },

];

export const singlefilter=[
    {
        id:"price",
        name:"Price",
        option:[
            {value:"159-399",label:"₹159-₹399"},
            {value:"399-999",label:"₹399-₹999"},
            {value:"999-1999",label:"₹999-₹1999"},
            {value:"1999-2999",label:"₹1999-₹2999"},
            {value:"3999-4999",label:"₹3999-₹4999"}
            ],

        
    },
    {
        id:"discount",
        name:"Discount Range",
        option:[
            {value:"20",label:"20% And Above"},
            {value:"30",label:"30% And Above"},
            {value:"40",label:"40% And Above"},
            {value:"50",label:"50% And Above"},
            {value:"60",label:"60% And Above"},
            {value:"70",label:"70% And Above"},
            {value:"80",label:"80% And Above"},
        ],

    },
    {
        id:"stock",
        name:"Availability",
        option:[
            {value:"inStock",label:"In Stock"},
            {value:"outOfStock",label:"Out of Stock"},

        ],

    },
];
