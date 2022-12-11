import { BrowserRouter , Routes , Route } from "react-router-dom";

import LandingPage from "../landingpage";
import { QueryClient, QueryClientProvider} from 'react-query'
import DetailPage from "../detailPage/detailPage";


const RouterComponent =()=>{
    const queryClient = new QueryClient();
    return(
        <>
<QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}> </Route>
            <Route path="/detail" element={<DetailPage/>}/>
        </Routes>
        </BrowserRouter>
        </QueryClientProvider>
        </>
    )

}

export default RouterComponent;