import React from 'react';

import {Row, Col, Typography, Spin} from 'antd';

const { Title } = Typography;

export default function EmptyPage() {
    return(
        <div>
            <Row>
                <Col span={12} offset={12}>
                    <Title level={3}>Loading ... <Spin /></Title>
                </Col>
            </Row>
        </div>
    );
}