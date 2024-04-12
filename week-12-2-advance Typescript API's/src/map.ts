interface MapExample {
    id: number,
    name: string
}

const MapUser = new Map<string, MapExample>()
MapUser.set("dssgds", { id: 45, name: "asdada" })
MapUser.set("dssgsdads", { id: 68, name: "asdadkushfsa" })

console.log(MapUser.get("dssgds"));