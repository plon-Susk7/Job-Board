import { useEffect, useState } from "react"

export function Searchbar({onSearchInput})
{
    const [query,setQuery]=useState("");
    const [debquery,setdebouncedquery]=useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setdebouncedquery(query);
        }, 500); // Debounce delay: 500ms

        return () => clearTimeout(handler); // Cleanup previous handler
    }, [query]);


    useEffect(()=>{
     onSearchInput(debquery);
    },[debquery,onSearchInput])

    return (

      <form className="max-w-md mx-auto mb-5 mr-2 ">   
       <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-200 px-2 rounded transition-all duration-300 hover:bg-gray-200"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Organizations" required />
      </div>
      </form>

    )
}