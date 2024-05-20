export function setUp() {
    const storedExercises = localStorage.getItem("exercises");
    const storedExercisesArray = JSON.parse(storedExercises);

    if(!storedExercisesArray) {
        localStorage.setItem("exercises", JSON.stringify([]))
        console.log("local storage init");
    } else {
        console.log("local storage already exists");
    }

}
