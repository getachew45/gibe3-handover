const SUPABASE_URL="YOUR_SUPABASE_URL";
const SUPABASE_KEY="YOUR_ANON_KEY";
    const supabaseClient=
    supabase.createclient(
        SUPABASE_URL,
        SUPABASE_KEY
    );
    const reportTable=
    document.getElementById("reportTable");
    async function loadReports() {
        const {data, error}=
        await supabaseClient
        .from("shift_handover")
        .select("*")
        .order("id",{asecending:false});
        if(error){
            console.log(error);
            return;
        }
        displayReports(data);
    }
    function displayReports(reports){
        reportTable.innerHTML="";
        reports.foreach(report=>{
            const row = document.createElement("tr");
            row.innerHTML=`
            <td>${report.report_date||""}</td>
            <td>${report.plant_loadind||""}</td>
            <td>${report.units_operation||""}</td>
            <td>${report.stopped_units||""}</td>
            <td>${report.remarks||""}</td>
            <td>${report.actions ||""}</td>
            <th>${report.Availability_of_tools_and_utilities ||""} </th>
    <th>#{report.PLC / Fixed_phone_communication ||""}</th>
    <th>${report.Conditions_of_SCADA & MIMIC||""}</th>
    <th>${report.Plant_DC_system_condition ||""}</th>
    <th>${report.Standby_DG_Condition ||""}</th>
    <th>${report.Bus-bar, overhead & outgoing_lines ||""}</th>
            <td>
            <button>Edit</button>
            <button>delete</button>
            </td>
            `;
            reportTable.appendChild(row);
        });
    }
loadReports();