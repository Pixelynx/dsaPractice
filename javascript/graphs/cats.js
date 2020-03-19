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
        this.edges.set(val, new Array());
        this.numOfVerticies++;
    };

    addEdge = (v1, v2) => {
        this.edges.get(v1).push(v2);
        this.edges.get(v2).push(v1);
        return this;
    };

    getEdges = (startingNode) => {
        return this.edges.get(startingNode);
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

function createVerticies(graph, arr) {
    let setArr = new Set();
    // create set of unique elements and add them as a vertex to graph
    for(let item of arr) setArr.add(item[0]).add(item[1]);
    for(let item of Array.from(setArr)) graph.addVertex(item);
    return graph;
};

function splitPairs(arr) {
    return arr = arr.reduce((pair, el) => {
        pair.push(el.split(", "));
        return pair;
    }, new Array());
};

function categorySuggestions(categories, projects, k) {
    // split category pairs and order by relevance
    categories = splitPairs(categories).sort((a, b) => b[2]-a[2]);
    console.log("CATEGORIES: ", categories)
    let justCategories = categories.map(cat => cat.slice(0,-1));

    // create graph vertices and add their corresponding edges
    let categoryGraph = new CategoryGraph();
    createVerticies(categoryGraph, justCategories);
    for(pair of justCategories) categoryGraph.addEdge(pair[0], (pair[1]));

    // while projects arr has length, push project into search array
    let kProjects = new Array();
    while(projects.length) {
        let currentProject = projects.shift();
        kProjects.push(new Array(currentProject));
    };

    // search graph for current project and add relavant projects to search array
    for(let i = 0; i < kProjects.length; i++) {
        let currentProject = kProjects[i];
        let relatedProjects = categoryGraph.getEdges(currentProject.toString()).slice(0, k-1)
        kProjects[i].push(...relatedProjects);
    };
    console.log(categoryGraph)
    return kProjects;
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
// Handyman | House Painting => 1.0
// Handyman | Interior Painting => 0.9