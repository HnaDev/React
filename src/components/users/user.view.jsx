import { Drawer } from 'antd';

const UserView = (props) => {
    const { isViewUserOpen, setIsViewUserOpen, dataViewUser } = props
    return (
        <>
            {dataViewUser ?
                <Drawer title="View User" placement="right"
                    onClose={() => setIsViewUserOpen(false)}
                    open={isViewUserOpen}
                    width={'30vw'}>
                    <div className='box_view'>
                        <div>
                            <p>ID: </p>
                            <p>{dataViewUser._id}</p>
                        </div>
                        <div>
                            <p>NAME: </p>
                            <p>{dataViewUser.fullName}</p>
                        </div>
                        <div>
                            <p>EMAIL: </p>
                            <p>{dataViewUser.email}</p>
                        </div>
                        <div>
                            <p>PHONE: </p>
                            <p>{dataViewUser.phone}</p>
                        </div>
                    </div>
                </Drawer> : ''
            }
        </>
    );
}
export default UserView