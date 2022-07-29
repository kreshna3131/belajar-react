import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Path from "./route/route";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Path />
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
