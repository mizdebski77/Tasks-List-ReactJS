
export const getExampleTasks = async () => {
    const response = await fetch("/Tasks-List-ReactJS/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();

}