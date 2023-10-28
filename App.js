import InititalGame from "./views/InitialGame";
import Layout from "./components/Layout";

export default function App() {
  const screen = <InititalGame />;
  return <Layout>{screen}</Layout>;
}
