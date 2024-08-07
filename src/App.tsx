import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useDefaultServiceGetPetsInfinite } from "../openapi/queries/infiniteQueries";
import React, { useEffect } from "react";

const queryClient = new QueryClient();

function Root() {
  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    status,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useDefaultServiceGetPetsInfinite({
    limit: 10,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div>
      <h1>Infinite Loading</h1>
      {status === "pending" ? (
        <p>読み込み中...</p>
      ) : status === "error" ? (
        <span>読み込みエラー</span>
      ) : (
        <>
          {data.pages.map((page) => (
            <React.Fragment key={page.nextPage}>
              {page.pets?.map((pet) => (
                <p
                  style={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "10rem 1rem",
                    background: `hsla(${pet.id * 30}, 60%, 80%, 1)`,
                  }}
                  key={pet.id}
                >
                  {pet.name}
                </p>
              ))}
            </React.Fragment>
          ))}
          <div>
            <button
              ref={ref}
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? "読み込み中..."
                : hasNextPage
                ? "さらに読み込む"
                : "読み込み完了"}
            </button>
          </div>
          <div>
            {isFetching && !isFetchingNextPage
              ? "Background Updating..."
              : null}
          </div>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  );
}

export default App;
