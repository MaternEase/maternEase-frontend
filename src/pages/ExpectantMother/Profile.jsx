import React, { useState } from 'react';
import {
    Card,
    Avatar,
    Typography,
    Button,
    Row,
    Col,
    Divider,
    Space,
    Modal,
    Upload,
    message,
} from 'antd';
import { EditOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Profile = () => {
    const initialUserInfo = {
        name: 'Sepali Kumari',
        email: 'sepali@example.com',
        phone: '+123 456 7890',
        phmarea: 'Weligama',
        regNo: 'avc1245',
        profilePhoto: null,
    };

    const [userInfo, setUserInfo] = useState(initialUserInfo);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [fileList, setFileList] = useState([]);

    // Handle Edit Profile button click
    const showModal = () => {
        setIsModalVisible(true);
        setFileList(
            userInfo.profilePhoto
                ? [
                    {
                        uid: '-1',
                        name: 'profile.png',
                        status: 'done',
                        url: userInfo.profilePhoto,
                    },
                ]
                : []
        );
    };

    // Handle modal cancel
    const handleCancel = () => {
        setIsModalVisible(false);
        setPreviewImage(null);
        setFileList([]);
    };

    // Handle form submission
    const handleOk = () => {
        setUserInfo({
            ...userInfo,
            profilePhoto: fileList.length > 0 ? fileList[0].url || fileList[0].thumbUrl : userInfo.profilePhoto,
        });
        message.success('Profile picture updated successfully');
        setIsModalVisible(false);
        setPreviewImage(null);
        setFileList([]);
    };

    // Handle image upload before upload (prevent automatic upload)
    const beforeUpload = (file) => {
        const isImage = file.type.startsWith('image/');
        if (!isImage) {
            message.error('You can only upload image files!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must be smaller than 2MB!');
        }
        return isImage && isLt2M;
    };

    // Handle image preview
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
    };

    // Convert file to base64
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    // Handle file changes
    const handleChange = ({ fileList }) => {
        setFileList(fileList.map(file => {
            if (file.response) {
                file.url = file.response.url;
            }
            return file;
        }));
    };

    return (
        <div style={{ padding: '24px', minHeight: '100vh', background: '#f5f5f5' }}>
            <Card
                style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                }}
            >
                <Row justify="center" style={{ marginBottom: '20px', position: 'relative' }}>
                    <Avatar
                        size={100}
                        src={userInfo.profilePhoto}
                        style={{ backgroundColor: '#967aa1' }}
                    >
                        {!userInfo.profilePhoto && userInfo.name.charAt(0)}
                    </Avatar>
                </Row>
                <Row justify="center" style={{ marginTop: '20px' }}>
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        style={{
                            borderRadius: '8px',
                            background: '#967aa1',
                            borderColor: '#967aa1',
                            fontWeight: 'bold',
                        }}
                        onClick={showModal}
                    >
                        Change Profile Picture
                    </Button>
                </Row>

                <Title level={3} style={{ textAlign: 'center', marginBottom: '10px' }}>
                    {userInfo.name}
                </Title>

                <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: '20px' }}>
                    {userInfo.email}
                </Text>

                <Divider />

                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    <Row justify="space-between" align="middle">
                        <Text strong>PHM Area:</Text>
                        <Text>{userInfo.phmarea}</Text>
                    </Row>

                    <Row justify="space-between" align="middle">
                        <Text strong>Phone:</Text>
                        <Text>{userInfo.phone}</Text>
                    </Row>

                    <Row justify="space-between" align="middle">
                        <Text strong>Registration No:</Text>
                        <Text>{userInfo.regNo}</Text>
                    </Row>
                </Space>

                <Divider />


            </Card>

            {/* Edit Profile Modal */}
            <Modal
                title="Upload New Profile Picture"
                visible={isModalVisible}
                onCancel={handleCancel}
                onOk={handleOk}
                destroyOnClose
            >
                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    beforeUpload={beforeUpload}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    multiple={false}
                    accept="image/*"
                >
                    {fileList.length >= 1 ? null : (
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    )}
                </Upload>
                {previewImage && (
                    <Modal
                        visible={!!previewImage}
                        footer={null}
                        onCancel={() => setPreviewImage(null)}
                    >
                        <img alt="Preview" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                )}
            </Modal>
        </div>
    );
};

export default Profile;
