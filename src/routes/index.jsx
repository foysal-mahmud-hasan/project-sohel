import LandingPage from "../components/pages/LandingPage";
import MyForm from "../components/pages/form";
import { NestedTables } from "../components/table/nestedTable";

const routes = [
    { path: '/', element: LandingPage },
    { path: 'home', element: LandingPage },
    { path: 'form', element: MyForm },
    { path: 'nested-table', element: NestedTables },


]

export default routes;