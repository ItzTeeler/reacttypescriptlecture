import Astronaut from "../Interfaces/interface";
const getData = async () => {
    const promise = await fetch('https://astronautapi.azurewebsites.net/');
    const data: Astronaut = await promise.json();
    return data;
}

export default getData;

