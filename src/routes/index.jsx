import LandingPage from "../components/pages/LandingPage";
import MyForm from "../components/pages/form";
import { ColumnPropertiesExample, NestedTables } from "../components/table/nestedTable";
import Pagination from "../components/table/tablePagination";


const routes = [
    { path: '/', element: LandingPage },
    { path: 'home', element: LandingPage },
    { path: 'form', element: MyForm },
    { path: 'nested-table', element: NestedTables },
    { path: 'table', element: ColumnPropertiesExample },
    { path: 'action-table', element: Pagination },

]

export default routes;