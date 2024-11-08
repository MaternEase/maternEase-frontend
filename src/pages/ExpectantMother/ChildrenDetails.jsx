import React, { useState } from 'react';
import { Tabs } from 'antd';
import Child1 from './Child1';
import Child2 from './Child2';

const { TabPane } = Tabs;

const ChildrenDetails = () => {
    const [activeKey, setActiveKey] = useState('1'); // Default to Child1

    const handleTabChange = (key) => {
        setActiveKey(key);
    };

    return (
        <div style={{ padding: '24px', backgroundColor: '#ffffff' }}>
            <Tabs defaultActiveKey="1" activeKey={activeKey} onChange={handleTabChange}>
                <TabPane tab="Child 1" key="1">
                    <Child1 />
                </TabPane>
                <TabPane tab="Child 2" key="2">
                    <Child2 />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default ChildrenDetails;
