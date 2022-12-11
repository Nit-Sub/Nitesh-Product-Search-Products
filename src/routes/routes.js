import { BrowserRouter , Routes , Route } from "react-router-dom";

import LandingPage from "../landingpage";
import { QueryClient, QueryClientProvider} from 'react-query'



const RouterComponent =()=>{
    const queryClient = new QueryClient();
    return(
        <>
<QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}> </Route>
       
        </Routes>
        </BrowserRouter>
        </QueryClientProvider>
        </>
    )

}

export default RouterComponent;