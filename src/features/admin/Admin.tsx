import useLoadDataFromApi from "../../hooks/useLoadDataFromApi";

export const Admin = () => {
    const [loadData] = useLoadDataFromApi();
    return (<div>  <button onClick={() => loadData()}>fetchData</button></div>);
}

export default Admin;