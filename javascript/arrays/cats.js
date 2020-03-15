let categories = [
    "House Painting, Interior Painting, 0.9",
    "Handyman, Massage Therapy, 0.1",
    "Handyman, House Painting, 0.5",
    "House Painting, House Cleaning, 0.6",
    "Furniture Assembly, Handyman, 0.8",
    "Furniture Assembly, Massage Therapy, 0.1",
    "Plumbing Drain Repair, Junk Removal, 0.3",
];

let projects = [
    "House Painting",
    "Handyman"
];

const categorySuggestions = (categories, projects, k) => {

}

console.log(categorySuggestions, projects, 3);
// output => [
//     ["House Painting", "Interior Painting", "House Cleaning"],
//     ["Handyman", "House Painting", "Interior Painting"]
// ];

// House Painting | House Painting => 1.0
// House Painting | Interior Painting => 0.9
// House Painting | House Cleaning => 0.6

// Handyman | Handyman => 1.0
// Handyman | House Painting => 0.5
// Handyman | Interior Painting => 0.0