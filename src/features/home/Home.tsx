import useLoadDataFromJson from "../../hooks/useLoadDataFromJson";

export const Home = () => {
    const [data] = useLoadDataFromJson();
    return <div>{data?.length}</div>;
}

export default Home;