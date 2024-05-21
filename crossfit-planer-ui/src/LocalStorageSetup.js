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

export function loadStorage() {
    try {
        return JSON.parse(localStorage.getItem("exercises")) || [];   
    } catch (error) {
        reset();
        return [];
    }
}

export function saveExercises(newExercises) {
    localStorage.setItem("exercises", JSON.stringify(newExercises))
}

export function saveCompletedExercise(completedExercises) {
    
}