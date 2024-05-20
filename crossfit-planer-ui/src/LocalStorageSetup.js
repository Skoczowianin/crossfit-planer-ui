export function setUp() {
    try {
        const storedExercises = localStorage.getItem("exercises");
        const storedExercisesArray = JSON.parse(storedExercises);

        if(!storedExercisesArray) {
            reset();
            console.log("local storage init");
        } else {
            console.log("local storage already exists");
        }
    } catch (error) {
            reset();
            console.log("Local storage parse error")
    }
    

    

}
    function reset() {
        localStorage.setItem("exercises", JSON.stringify([]));
        console.log("Local storage restarted")
    }
