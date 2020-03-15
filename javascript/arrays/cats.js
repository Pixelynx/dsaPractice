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

class CategoryGraph {
    constructor(numOfVerticies = 0) {
        this.numOfVerticies = numOfVerticies;
        this.edges = new Map();
    };

    addVertex = (val) => {
        this.edges.set(val, []);
        this.numOfVerticies++;
    };

    addEdge = (v1, v2) => {
        this.edges.get(v1).push(v2);
        this.edges.get(v2).push(v1);

        return this;
    };

    print = () => {
        let getKeys = this.edges.keys();

        for(let keyVal of getKeys) {
            let getVals = this.edges.get(keyVal);
            let disp = "";

            for(let val of getVals) {
                disp += val + " " 
            };

            return `${keyVal} => ${disp}`;
        };
    }
}

// let verticies = ["House Painting", "Interior Painting", "Handyman", "Massage Therapy", "House Cleaning", "Furniture Assembly", "Plumbing Drain Repair", "Junk Removal"];

// let newGraph = new CategoryGraph();

// for(let i = 0; i < verticies.length; i++) {
//     newGraph.addVertex(verticies[i]);
// }
// newGraph.addEdge("House Painting", "Interior Painting").addEdge("Handyman", "Massage Therapy").addEdge("House Painting", "House Cleaning").addEdge("Furniture Assembly", "Handyman").addEdge("Furniture Assembly", "Massage Therapy").addEdge("Plumbing Drain Repair", "Junk Removal");
// newGraph.print()

const createVerticies = (graph, arr) => {
    let setArr = new Set();
    for(let item of arr) {
        if(!setArr.has(item)) setArr.add(item[0]).add(item[1])
    };
    for(let item of Array.from(setArr)) graph.addVertex(item);

    return graph;
}

const categorySuggestions = (categories, projects, k) => {
    let newGraph = new CategoryGraph();
    let justCategories = categories.map(cat => cat.split(", ").slice(0,-1));
    
    let uniqueCats = createVerticies(newGraph, justCategories)

    console.log(uniqueCats)
};

console.log(categorySuggestions(categories, projects, 3));
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