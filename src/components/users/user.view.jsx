import { Button, Drawer, notification } from 'antd';
import { useState } from 'react';
import { UpdateAvatarUser, uploadImgAPI } from '../../services/api.services';

const UserView = (props) => {
    const { isViewUserOpen, setIsViewUserOpen, dataViewUser, loaderUser } = props

    const [selectImg, setSelectImg] = useState(null)
    const [imgPreview, setImgPreview] = useState(null)

    const onSelectFile = (event) => {
        const file = event.target.files[0] || null;
        setSelectImg(file);
        setImgPreview(file ? URL.createObjectURL(file) : null);
    }

    const handleChangeImage = async () => {
        if (!selectImg) return;

        try {
            const resUpload = await uploadImgAPI(selectImg, 'avatar')
            const newUpload = resUpload.data.fileUploaded;

            if (newUpload) {
                const resUpdate = await UpdateAvatarUser(
                    dataViewUser._id,
                    newUpload,
                    dataViewUser.fullName,
                    dataViewUser.phone
                );
                if (resUpdate.data) {
                    notification.success({
                        message: 'Change Success',
                        description: 'Thay đổi avatar thành công',
                    });
                    resetState();
                    await loaderUser();
                }
            }

        } catch (error) {
            notification.error({
                message: 'Upload Error',
                description: error.response?.data?.message || 'An error occurred',
            });
        }


    }

    const resetState = () => {
        setSelectImg(null);
        setImgPreview(null);
        setIsViewUserOpen(false);
    };

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
                    <br />
                    <div>
                        <div>
                            <p className='mb10' style={{ fontWeight: '600', fontSize: '18px' }}>Avatar</p>
                            <div style={{ height: 'auto', width: '100%' }}>
                                <img src={`${import.meta.env.VITE_URL_DATABASE}/images/avatar/${dataViewUser.avatar}`} alt=""
                                    style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div>
                                <label htmlFor="btnUpload">
                                    Change avatar
                                    <input type="file" hidden id='btnUpload' onChange={onSelectFile} />
                                </label>
                            </div>
                            {imgPreview ?
                                <div style={{ height: 'auto', width: '100%' }}>
                                    <img src={`${imgPreview}`} alt=""
                                        style={{ width: '100%', height: 'auto' }} />
                                    <Button type="primary" onClick={handleChangeImage}>Save</Button>
                                </div> : ''
                            }
                        </div>
                    </div>
                </Drawer> : ''
            }
        </>
    );
}
export default UserView