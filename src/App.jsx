import SearchForm from "./components/SearchForm";
import DevPortfolio from "./components/DevPortfolio";

export default function App() {
  return (
    <main className="app-wrapper">
      <header>
        <h1>devlooker</h1>
      </header>

      <SearchForm />
      <DevPortfolio />
    </main>
  );
}
