import useAuth from "../../../Hooks/useAuth";


const AdminHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, wellcome</span>
                {
                    user?.displayName ? user.displayName : 'back'
                }
            </h2>
        </div>
    );
};

export default AdminHome;