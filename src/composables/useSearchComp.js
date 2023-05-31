//useComp.js

//import ref function to define reactive properties

import { useAssetSearch } from '../stores/tables/assetSearch'; // Asset Search Data
import { useClientSearch } from '../stores/tables/clientSearch'; // Client Search Data
import { useGoalSearch } from '../stores/tables/goalSearch'; // Goal Search Data
import { useLeaveAdminSearch } from '../stores/tables/leaveAdminSearch'; // LeaveAdmin Search Data
import { useProjectSearch } from '../stores/tables/projectSearch'; // Project Search Data
import { usePromoteSearch } from '../stores/tables/promoteSearch'; // Promotion Search Data
import { useResignSearch } from '../stores/tables/resignSearch'; // Resignation Search Data
import { useSalarySearch } from '../stores/tables/salarySearch'; // Salary Search Data
import { useTicketSearch } from '../stores/tables/ticketSearch'; // Ticket Search Data
import { useTrainingSearch } from '../stores/tables/trainingSearch'; // Training Search Data
import { useTerminateSearch } from '../stores/tables/terminateSearch'; // Terminate Search Data
import { useUserSearch } from '../stores/tables/userSearch'; // User Search Data

export default function useSearchComp(){

    const assetSearch = useAssetSearch();
    const clientSearch = useClientSearch();
    const goalSearch = useGoalSearch();
    const leaveAdminSearch = useLeaveAdminSearch();
    const projectSearch = useProjectSearch();
    const promoteSearch = usePromoteSearch();
    const resignSearch = useResignSearch();
    const salarySearch = useSalarySearch();
    const ticketSearch = useTicketSearch();
    const trainingSearch = useTrainingSearch();
    const terminateSearch = useTerminateSearch();
    const userSearch = useUserSearch();

    // Return/Export All Properties
    return {
        assetSearch,
        clientSearch,
        goalSearch,
        projectSearch,
        promoteSearch,
        resignSearch,
        salarySearch,
        ticketSearch,
        trainingSearch,
        terminateSearch,
        userSearch,
    }
}