import { Routes, Route } from "react-router-dom";
import { HomePage } from "../components/Home.page";
import { RQSuperHeroesPage } from "../components/RQSuperHeroes.page";
import { SuperHeroesPage } from "../components/SuperHeroes.page";
// import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuperHeroPage } from "../components/RQSuperHero.page";
import { ParallelQueriesPage } from "../components/ParallelQueries.page";
import { DynamicParallelPage } from "../components/DynamicParallel.page";
import { DependentQueriesPage } from "../components/DependentQueries.page";
import { PaginatedQueriesPage } from "../components/PaginatedQueries.page";
import { InfiniteQueriesPage } from "../components/InfiniteQueries.page";

function path() {
  return (
    <Routes>
      <Route path="/rq-infinite" element={<InfiniteQueriesPage />} />
      <Route path="/rq-paginated" element={<PaginatedQueriesPage />} />
      <Route path="/rq-dependent" element={<DependentQueriesPage email="drumerdunia31@gmail.com" />} />
      <Route path="/rq-dynamic-parallel" element={<DynamicParallelPage heroIds={[1, 3]} />} />
      <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
      <Route path="rq-super-heroes/:heroId" element={<RQSuperHeroPage />} />
      <Route path="super-heroes" element={<SuperHeroesPage />} />
      <Route path="rq-super-heroes" element={<RQSuperHeroesPage />} />
      <Route index element={<HomePage />} />
    </Routes>
  );
}

export default path;
