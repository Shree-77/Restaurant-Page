import { loadHome } from "./pages/homePage";

const ContentDiv = document.getElementById('content');

const Home = loadHome();

ContentDiv.appendChild(Home);


