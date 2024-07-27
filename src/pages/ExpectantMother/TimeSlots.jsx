import React, { useState } from 'react';
import { List, Button } from 'antd';

const TimeSlots = () => {
    const [selectedItems, setSelectedItems] = useState([1, 3]); // Example of pre-selected items

    const data = [
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
        { id: 3, title: 'Item 3' },
        { id: 4, title: 'Item 4' },
        { id: 5, title: 'Item 5' },
    ];

    const handleSelect = (item) => {
        if (!selectedItems.includes(item.id)) {
            setSelectedItems([...selectedItems, item.id]);
        }
    };

    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <List.Item
                    actions={[
                        <Button
                            type="primary"
                            onClick={() => handleSelect(item)}
                            disabled={selectedItems.includes(item.id)}
                        >
                            Select
                        </Button>,
                    ]}
                >
                    <List.Item.Meta
                        title={item.title}
                        description={`Description of ${item.title}`}
                    />
                </List.Item>
            )}
        />
    );
};

export default TimeSlots;
